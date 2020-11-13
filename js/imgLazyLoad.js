/**
 * 图片懒加载
 * 
 */

 function isVisible(elem) {
    const position = elem.getBoundingClientRect();
    const clientHeight = document.documentElement.clientHeight;
    const clientWidth = document.documentElement.clientWidth;

    const {top, bottom, left, right} = position;

    const topVisible = top > 0 && top < clientHeight;
    const bottomVisible = bottom > 0 && bottom < clientHeight;
    const leftVisible = left > 0 && left < clientWidth;
    const rightVisible = right > 0 && right < clientWidth;

    return topVisible || bottomVisible || leftVisible || rightVisible;
 }

 function imageLazyLoad() {
    const images = document.querySelectorAll('img');
    for(let img of images) {
        const src = img.dataset.realSrc;
        if (!src) continue;
        if (isVisible(img)) {
            img.src = src;
            img.dataset.realSrc = '';
        }
    }
 }

 window.addEventListener('scroll', imageLazyLoad); // 可以再使用节流优化

