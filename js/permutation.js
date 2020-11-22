/**
 * 字符串全排列
 * 
 * 输入: [1,2,3]
    输出:
    [
    [1,2,3],
    [1,3,2],
    [2,1,3],
    [2,3,1],
    [3,1,2],
    [3,2,1]
    ]
 *
 22:13 start 

 */

 function permutation(array, stack = [], result) {

    for (let i = 0; i < array.length; i++) {
        const firstNum = array[i];
        
        const leftNums = [...array];
        leftNums.splice(i, 1); // !!!splice方法的使用，返回的是删除掉的值。非删除后的数组
        stack.push(firstNum);
        permutation(leftNums, stack, result);
    }

    if (array.length === 0) {
        // 此时就不需要再递归了
        result.push([...stack]);
    }
    stack.pop();
 }
 let result = [];
 let stack = [];
 permutation([1, 2, 3], stack, result);
console.log(result);

