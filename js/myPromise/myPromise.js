/**
 * 实现Promise构造函数
 * 
 */
const PENDING = Symbol('pending');
const FULFILLED = Symbol('FULFILLED');
const REJECTED = Symbol('rejected');

class MyPromise {
    constructor(executor) {
        this.status = PENDING;
        this.value = undefined;
        this.reason = undefined;

        this.onFulfilledCallbacks = [];
        this.onRejectedCallbacks = [];

        this._resolve = this._resolve.bind(this);
        this._reject = this._reject.bind(this);

        try {
            executor(this._resolve, this._reject);
        } catch (e) {
            this._reject(e);
        }

    }

    _resolve(value) {
        setTimeout(() => {
            this.status = FULFILLED;
            this.value = value;
            this.onFulfilledCallbacks.forEach(fun => fun());
        });
    }

    _reject(reason) {
        setTimeout(() => {
            this.status = REJECTED;
            this.value = reason;

            this.onRejectedCallbacks.forEach(fun => fun());
        });
    }

    /**
     * then回调
     * @param {Function | null} onFulfilled 
     * @param {Function} onRejected 
     */
    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
        onRejected = typeof onRejected === 'function' ? onRejected : err => {
            throw err
        };

        const promise2 = new MyPromise((resolve, reject) => { // 这段代码很少能够执行，因为一般定义promise对象都是异步的
            if (this.status === FULFILLED) {
                setTimeout(() => {
                    try {
                        let x = onFulfilled(this.value);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                });
            }

            if (this.status === REJECTED) {
                setTimeout(() => {
                    try {
                        let x = onRejected(this.reason);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                });
            }

            // 当前状态还没有确定，需要先保存到数组中
            if (this.status === PENDING) {
                this.onFulfilledCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            const x = onFulfilled(this.value);
                            resolvePromsie(promise2, x, resolve, reject);
                        } catch (e) {
                            reject(e);
                        }
                    });
                });

                this.onRejectedCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onRejected(this.reason);
                            resolvePromise(promise2, x, resolve, reject);
                        } catch (e) {
                            reject(e);
                        }
                    });
                });
            }
        });

        return promise2;
    } catch (fn) {
        return this.then(null, fn);
    }
}

function resolvePromise(promise2, x, resolve, reject) {
    if (x === promise2) {
        return reject(new TypeError('Chaining cycle detected for promise'));
    }
    let called;
    if (x != null && (typeof x === 'object' || typeof x === 'function')) {
        try {
            let then = x.then;
            if (typeof then === 'function') {
                then.call(x, y => {
                    if (called) 
                        return;
                    


                    called = true;
                    resolvePromise(promise2, y, resolve, reject);
                }, err => {
                    if (called) 
                        return;
                    


                    called = true;
                    reject(err);
                })
            } else {
                resolve(x);
            }
        } catch (e) {
            if (called) 
                return;
            


            called = true;
            reject(e);
        }
    } else {
        resolve(x);
    }
}
// 命令行 npx promises-aplus-tests [js文件名] 即可验证
// MyPromise.defer = MyPromise.deferred = function () {
//     let dfd = {}
//     dfd.promise = new MyPromise((resolve, reject) => {
//         dfd.resolve = resolve;
//         dfd.reject = reject;
//     });
//     return dfd;
// }

module.exports = MyPromise;
