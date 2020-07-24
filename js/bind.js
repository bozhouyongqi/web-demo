/*
 * @Author: wangyongqi@baidu.com
 * @Date: 2020-07-24 13:29:05
 * @Last Modified by: wangyongqi@baidu.com
 * @Last Modified time: 2020-07-24 13:38:28
 * file: bind.js
 */



/**
 * 实现Es5中实现的bind函数
 *
 * @param {Function} fn 原始函数
 * @param {Object} context 作用域
 * @returns {Function} 函数
 */
function bind(fn, context) {
    return function () {
        return fn.apply(context, arguments);
    };
}

const obj = {
    name: 'ts'
};

// 注意这个地方若是换成箭头函数，则不能完成绑定。因为箭头函数的this是在定义时就完成了绑定
const fn = function () {
    console.log(this.name);
};

fn(); // 打印undefined

const newFun = bind(fn, obj);
newFun();

