/**
 * 冒泡排序
 * 时间复杂度 O(n^2)
 * 空间复杂度 O(1)
 */

 function bubbleSort(array) {
    if (!array || array.length === 1) {
        return;
    }
    const length = array.length;
    for (let outer = length - 1; outer > 0 ; outer--) {
        for (let inner = 0; inner < outer; inner++) {
            if (array[inner] > array[inner + 1]) {
                let temp = array[inner];
                array[inner] = array[inner + 1];
                array[inner + 1] = temp;
            }
        }
    }
 }

 const array = [5, 9, 10, 2, 13, 20, 1, 3];

bubbleSort(array);

console.log(array);