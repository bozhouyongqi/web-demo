/**
 * 手动实现new操作符
 * 需要考虑其原型对象的处理
 */

function myNew(fn, ...args) {
    const instance = {};

    if (fn.prototype) {
        // 或者const instance = Object.create(fn.prototype);
        Reflect.setPrototypeOf(instance, fn.prototype);
    }

    const res = fn.apply(instance, args);

    if (typeof res === 'function' || (typeof res === 'object' && res !== null)) {
        return res;
    }

    return instance;
}

// 测试代码
function Person(name) {
    this.name = name;
}

Person.prototype.sayName = function() {
    console.log('my name is ', this.name);
}

const tom = myNew(Person, 'Tom');
tom.sayName();
console.log(tom);
