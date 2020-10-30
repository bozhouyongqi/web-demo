/**
 * 标题：版本号排序
描述信息
versions是一个项目的版本号列表，因多人维护，不规则
var versions=['1.45.0','1.5','6','3.3.3.3.3.3.3']
要求从小到大排序，注意'1.45'比'1.5'大
var sorted=['1.5','1.45.0','3.3.3.3.3.3','6']
 * 
 * 
 */
const versions=['1.45.0','1.5.2','6','3.3.3.3.3.3.3', '1.5']

function compareFun(a, b) {
    const arr1 = a.split('.');
    const arr2 = b.split('.');
    const len = arr1.length > arr2.length ? arr1.length : arr2.length;

    for (let i = 0; i < len; i++) {
        if (!arr1[i]) {
            return -1;
        }
        if (!arr2[i]) {
            return 1;
        }
        if (+arr1[i] < +arr2[i]) { // 注意字符串比较 '45' 小于 '5'
            return -1;
        } else if (arr1[i] === arr2[i]) {
            continue;
        } else {
            return 1;
        }
    }
    return 0;
}
versions.sort(compareFun);

console.log(versions);


const demo = {
    pre: 'Hello',
    after: 'World!',
    wait: async ms => {
        console.log(this.pre); // 注意: 此时箭头函数中this绑定的值是window
        await sleep(ms);
        console.log(this.after);
    }
}

sleep = (ms) => {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve();
        }, ms)
    })
}

demo.wait(1000);

const wait = demo.wait; // 都是undefined

wait(1000);