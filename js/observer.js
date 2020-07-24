/*
 * @Author: wangyongqi@baidu.com
 * @Date: 2020-07-24 18:13:59
 * @Last Modified by: wangyongqi@baidu.com
 * @Last Modified time: 2020-07-24 19:16:14
 * @description 实现订阅-发布观察者模式
 */


const Subscription = {

    // 根据对应的type维护一个数组
    observer: {

    },
    subscribe(eventType, listener) {
        if (!this.observer[eventType]) {
            this.observer[eventType] = [];
        }
        this.observer[eventType].push(listener);
    },
    unSubscribe(eventType, listener) {
        if (!this.observer[eventType]) {
            return;
        }
        const listeners = this.observer[eventType];
        const idx = listeners.indexOf(listener);
        if (idx > -1) {
            listeners.splice(idx, 1);
        }
    },

    emmit(eventType, data) {
        if (!this.observer[eventType]) {
            return;
        }
        this.observer[eventType].forEach(listener => {
            listener(data);
        });
    }
};

const clickListener1 = function (data) {
    console.log('clickListener1 ', data.timestamp);
};

const clickListener2 = function (data) {
    console.log('clickListener2 ', data.timestamp);
};

const dragListener1 = function (data) {
    console.log('dragListener1 ', data.timestamp);
};

const dragListener2 = function (data) {
    console.log('dragListener2 ', data.timestamp);
};

console.log('注册2个click监听');
Subscription.subscribe('click', clickListener1);
Subscription.subscribe('click', clickListener2);

console.log('emit click 事件');
Subscription.emmit('click', {timestamp: new Date().toLocaleString()});

console.log('注册2个drag监听');
Subscription.subscribe('drag', dragListener1);
Subscription.subscribe('drag', dragListener2);

console.log('emit drag 事件');
Subscription.emmit('drag', {timestamp: '2020-07-24'});

console.log('取消click 事件1');
Subscription.unSubscribe('click', clickListener1);

console.log('emit click 事件');
Subscription.emmit('click', {timestamp: new Date().toLocaleString()});


console.log('取消2个drag监听');
Subscription.unSubscribe('drag', dragListener1);
Subscription.unSubscribe('drag', dragListener2);


console.log('emit drag 事件');
Subscription.emmit('drag', {timestamp: '2020-07-24 19:12:00'});
