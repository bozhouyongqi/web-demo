
/**
 * 实现Array.prototype.flat功能
 * 这个问题的关键是把flat函数的功能搞清楚
 * 
 * Example:
 * let arr = [1, 2, [3, 4], [5, [6,7]]
 * arr.flat() // 1, 2, 3, 4, 5, [6,7]
 * arr.flat(Infinity) // 1, 2, 3, 4, 5, 6, 7
 * 
 * [1, [[2, 3],1]] -> 1,[2,3],1
 * [1, [[2, 3]]]   -> 1,[2,3]
 * 
 * 无限扁平化，还可以通过正则表达式实现
 * JSON.stringfy(array).replace(/\[|\]/g, '').split(',')
 *
 */
console.log('=================递归实现===================')
function flat(array, deep = 1) {
    const result = [];
    function flatted(array, deep, recursion) {
        // 上来肯定是循环遍历
        if (recursion <= deep) {
            // 这个地方要注意，不能是recursion++，++会给当前的变量赋值的，但实际想做的操作只是增加1传递进去
            array.forEach(item => Array.isArray(item) ? (flatted(item, deep, recursion+1)) : result.push(item));
        }
        else {
            result.push(array);
        }
    }
    flatted(array, deep, 0);
    return result;
}

const arr = [1,2,[3,4],[[5,6]], [[7,8],9], [[[10]]], [11, [12]]];
console.log(flat(arr));
console.log(flat(arr,2));
console.log(flat(arr,Infinity));

console.log('==================ES6 Generator函数实现==================');


function flatGenerator(array, deep = 1) {
    function* generator(array, deep, recursion) {

        if (recursion <= deep && Array.isArray(array)) {
            for (const item of array) {
                yield* generator(item, deep, recursion + 1);
            }
        }
        else {
            yield array;
        }
    }
    return generator(array, deep, 0);
}

function printGenerator(iterableObj) {
    for (const item of iterableObj) {
        console.log(item);
    }
}

console.log(printGenerator(flatGenerator(arr)));
console.log(printGenerator(flatGenerator(arr, Infinity)));
