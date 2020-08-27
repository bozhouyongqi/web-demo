/*
 * @Author: wangyongqi@baidu.com
 * @Date: 2020-08-07 19:06:17
 * @Last Modified by: wangyongqi@baidu.com
 * @Last Modified time: 2020-08-10 21:45:54
 */

console.log("======================简单Generator函数实现 1.====================")
function * generator() {
    yield 1;
    yield 2;
    yield 3;
}

let g = generator();

for (let num of g) {
    console.log(num);
}

console.log("=================简单Generator函数实现 2.测试调用时机================");
function temp2() {
    console.log('temp2');
    return 'temp2';
}
function * generator2() {
    console.log('执行generator内部函数');
    yield 1;

    yield temp2();

    yield 3;
}
/**
 * 虽然调用了generator2函数，这时只能获取到这个迭代器对象。函数体内的代码并
 * 没有执行，只有调用了next()之后，才开始执行内部逻辑。
 */
let gen = generator2();
console.log('1.访问next');
console.log(gen.next());

console.log('2.访问next');
console.log(gen.next());

console.log('3.访问next');
console.log(gen.next());

console.log('4.访问next');
console.log(gen.next());

console.log("=======return=======");
function* Gen (x) {
    var y = yield x + 2;
    console.log('1');
    console.log('y ', y); // y是undefined，而不是3。只能说yield返回的是一个执行上下文，在调用next时没有传递参数时，其就是undefined
    // yield x + 3;
    return y;
  }
  
g = Gen(1);
console.log(g.next()); // { value: 3, done: false }
console.log(g.next()); // { value: undefined, done: true }
