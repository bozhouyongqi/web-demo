/*
 * @Author: wangyongqi@baidu.com 
 * @Date: 2020-10-11 08:42:23 
 * @Last Modified by: wangyongqi@baidu.com
 * @Last Modified time: 2020-10-11 09:31:00
 * description: 深度拷贝对象，数组，不考虑function,date，regExp属性
 */

function isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
}

function isObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
}

function isFuncton(obj) {
    return Object.prototype.toString.call(obj) === '[object Function]';
}

function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
}

function deepClone(obj) {
    
    if (isObject(obj)) {
        let newObj = {};
        Object.keys(obj).forEach(key => {
            newObj[key] = deepClone(obj[key]);
        })
        return newObj;
    }
    else if (isArray(obj)) {
        let newObj = [];
        for(let value of obj) {
            newObj.push(deepClone(value));
        }
        return newObj;
    }
    else { // 暂时把函数，正则表达式等都直接复制
        return obj;
    }
}

let test1 = [1, 2, {a: 3, b: 4}, [5, 6]];
let test2 = {
    a: 1,
    b: 2,
    c: {
        d: 3,
        e: 4
    },
    f: [5, 6, 7]
}
let clonedArr = deepClone(test1);
clonedArr.push(7);
console.log(test1);
console.log(clonedArr);

let clonedObj = deepClone(test2);
clonedObj.c.dd = 'ddd';
console.log(clonedObj);
console.log(test2);


