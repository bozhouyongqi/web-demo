/**
 * 快速排序
 * 时间复杂度 O(nlogn)
 * 空间复杂度 O(nlogn)
 */

function getMid(array, left, right) {
    const pivot = array[left];
    while(left < right) {
        // 不满足时需要交换left与right的位置
        while(array[right] > pivot && (left < right)) {
            right--;
        }
        array[left] = array[right];

        while(array[left] <= pivot && (left < right)) {
            left++;
        }
        array[right] = array[left];
    }
    array[left] = pivot;
    return left;
}

function quickSort(array, left, right) {
    if (left >= right) {
        return;
    }

    const mid = getMid(array, left, right);
    quickSort(array, left, mid - 1);
    quickSort(array, mid + 1, right);
}

const array = [5, 9, 10, 2, 13, 20, 1, 3];

quickSort(array, 0, array.length - 1);

console.log(array);
