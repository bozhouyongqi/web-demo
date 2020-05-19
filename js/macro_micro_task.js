
// js执行时的宏任务处理和微任务处理
// 以下代码可以直接运行在node环境


async function async1() {
    console.log('async1 start');
    const msg = await async2(); // 这里会在执行完async后退出当前任务，待其他微任务处理完后再回来执行
    console.log(msg);
    console.log('async1 end');
}

async function async2() {
    console.log('async2 start');

    return new Promise(resolve => {
        console.log('define promise2');
        resolve('promise2');
    });
}

console.log('script start');

async1();

setTimeout(() => {
    console.log('set timeout');
}, 0);


new Promise(resolve => {
    console.log('define promise1');
    resolve();
}).then(() => {
    console.log('promise1 then');
});


console.log('script end');


// script start
// async1 start
// async2 start
// define promise2
// define promise1
// script end
// promise1 then
// promise2
// async1 end
// set timeout