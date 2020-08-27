
// 代理对象的get属性
let proto = new Proxy({}, {
    get(target, propertyKey, receiver) {
        console.log('GET ', propertyKey);
        return target[propertyKey];
    }
});

let obj = Object.create(proto);
obj.foo; // 'GET foo' 这是因为obj自身没有定义foo属性
obj.foo = '111';
obj.foo;    // 因为obj自身已经定义了foo属性，不会去读取原型上的属性，所以拦截器也就没有生效


console.log('==========================');
let obj2 = {
    name: 'obj2'
};
let obj2Proxy = new Proxy(obj2, {
    get: function(target, propertyKey, receiver) {
        console.log('get key');
        return target[propertyKey];
    }
});

obj2Proxy.name;