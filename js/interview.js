

// 题目1
const arr = ['10', '1', '-9', '21', '3'];

// error
console.log(arr.sort())

// work 1
console.log(arr.sort((a, b) => {
  return a - b
}))

// work 2: for循环实现


// 题目2, 看第一题写的咋样，比较版本号,均是合法的版本号.如果 compareFunction(a, b) 大于 0 ， b 会被排列到 a 之前。

const versions = ['2.0.0', '1.10.1', '1.100.0', '1.3.20', '0.0.1'];

function compareFun (versionA, versionB) {
  const versionAArr = versionA.split('.');
  const versionBArr = versionB.split('.');

  let length = versionAArr.length > versionBArr.length

  for (let i = 0; i < length;i++) {
    if (versionAArr[i] > versionBArr[i]) {
      return 1;
    } else if (versionAArr[i] < versionBArr[i]) {
      return -1;
    }
    continue;
  }
  return 0;
}

console.log(versions.sort(compareFun))


// 题目3: 使用async/await实现一个同步等待sleep

async function sleep(seconds) {
    
  await wait(seconds * 1000);
}

function wait(time) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve();
      }, time);
  });
}

// 题目4 css 三栏布局 两端宽度固定100px，中间区域自适应


// 题目5 关键帧动画实现秒针转动效果

