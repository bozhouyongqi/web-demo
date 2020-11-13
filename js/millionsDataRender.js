/**
 * 百万级数据的初次渲染
 * 
 * creteDocumentFragment();
 * DocumentFragments是Dom节点，他们不是主dom树的一部分。通常的用例是创建文档片段，将元素附件到文档片段，
 * 然后将文档片段添加到DOM树。在DOM树中，文档片段会被其所有子元素代替。
 * 文档片段存在于内存中，并不存在于DOM树中，所以在将元素插入到文档片段中，不会引起浏览器的回流，因此能够带来
 * 性能上的提升。
 * 
 * window.requestAnimationFrame告诉浏览器需要执行一个动画，并且在下一次重绘之前调用指定的回调函数更新动画。
 */

 function renderMillionsData() {

    const ulElem = document.querySelector('#list');
    let insertDataNums = 20, currentInsertNum = 0;
    const dataTotalNums = 10000;
    const dataPageNums = Math.ceil(dataTotalNums / insertDataNums);


    function animation() {
        if (currentInsertNum == dataPageNums) {
            return;
        }
        const fragment = document.createDocumentFragment();
        for (let i = 0; i < insertDataNums; i++) {
            const li = document.createElement('li');
            li.textContent = Math.random();
            fragment.appendChild(li);
        }
        ulElem.appendChild(fragment);
        currentInsertNum++;
        requestAnimationFrame(animation);
    }
    requestAnimationFrame(animation);
 }

 