/**
 * 实现异步串行/并行加法
 * 
 * 
 */

 function asyncAdd(a, b, callback) {
    setTimeout(() => {
        callback(null, a + b);
    }, 500);
 }

 // promisify
 const promsieAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        asyncAdd(a, b, (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        })
    })
 }

 // 主要就是在上次then回调中再次返回下一个异步处理
 async function serialSum(...args) {

    return args.reduce((accumulator, current) => {
        return accumulator.then((sum) => {
            return promsieAdd(sum, current);
        });
    }, Promise.resolve(0));
 }

 // 主要思想就是创建多个promise对象，然后使用Promise.all(),之后再做一次递归
 async function parallelSum(...args) {
    if (args.length === 1) {
        return args[0];
    }
    const tasks = [];
    for(let i = 0; i < args.length; i+=2) {
        tasks.push(promsieAdd(args[i], args[i + 1] || 0));
    }
    const result = await Promise.all(tasks);
    return parallelSum(...result);
 }

(async () => {
    console.log('running');
    const res1 = await serialSum(1,2,3,4,5);
    console.log(res1);

    const res2 = await parallelSum(1,2,3,4,5);
    console.log(res2);
    console.log('done');
})();
 