/**
 * 柯里化函数
 * 
 * 柯里化规则返回一个函数，这个函数最终调用的计算函数肯定还是一开始传入的函数，
 * 否则计算不出表达式。
 * 其实就是使用了一个必包和递归
 * @param {Funtion} func 
 */

 function sum(a, b, c) {
    return a + b + c;
 }

 function curry(fun) {
    // 首先curry肯定是先返回一个函数
    return function curried() {
        // 判断curried参数的个数与原始定义的函数fum形式参数个数
        let args = [...arguments];
        if (args.length >= fun.length) {
            return fun.apply(this, args);
        }
        // 否则继续返回一个参数用来收集后续传入的参数
        return function() {
            const args2 = [...arguments];
            return curried.apply(this, args.concat(args2));
        }
    }
 }

 // 首先看预期柯里化函数达到的目的
 const curriedSum = curry(sum);
 console.log(curriedSum(1, 2, 3));
 console.log(curriedSum(1)(2, 3));
 console.log(curriedSum(1)(2)(3));
