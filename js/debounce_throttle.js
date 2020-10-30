/**
 * debounce函数和throttle实现
 * 
 */
/**
 * debounce函数实现
 * 
 * @param {Function} fn 实际debounce的回调函数
 * @param {number} delay 延迟的事件
 */
function debounce(fn, delay) {
    const timmer = null;

    return function() {
        if (timmer) {
            clearTimeout(timmer);
        }
        timmer = setTimeout(fn, delay);
    }
}
/**
 * throttle函数实现
 * 
 * @param {Function} fn 
 * @param {number} internal 
 */
function throttle(fn, internal) {
    const timmer = null;

    return function() {
        if (!timmer) {
            timmer = setTimeout(function() {
                fn();
                clearTimeout(timmer);
                timmer = null;
            }, internal);
        }
    }
}

window.addEventListener('scroll', debounce(fn, 1000));


 