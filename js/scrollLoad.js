/**
 * 页面滚动到底部加载
 * 
 * scrollTop + clientHeight >= scrollHeight
 */

 window.addEventListener('scroll', function() {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight) {
        console.log('到达底部');
    }
 }, false);

 