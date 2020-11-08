/**
 * 手动实现call函数
 * 
 * 主要思路是将函数本身作为被绑定对象的一个方法执行，即达到隐士绑定的目的
 * 非严格模式下，绑定为null或者undefined时，默认为全局对象
 */

Function.prototype.myCall = function(context) {
    if (!context) {
        context = window; // 浏览器环境，node环境应该为global
    }
    const key = Symbol('key');
    context[key] = this;

    const args = [...arguments].slice(1);
    const res = context[key](...args);

    delete context[key];
    return res;
}

// 测试代码
const tom = {
    name: 'tom'
}

function sayName(age) {
    console.log('my name is ', this.name);
    console.log('old is ', age);
}

sayName.myCall(tom, 20);
