/**
 * 深度拷贝对象
 * 
 * 考虑日期，函数，正则表达式属性，以及循环引用
 */

 function deepClone(obj, cache = new WeakMap()) {
    if (!obj instanceof Object)
        return obj;
    // 处理循环引用
    if (cache.get(obj))
        return cache.get(obj);

    if (obj instanceof Function) {
        return function() {
            obj.apply(this, arguments)
        }
    }

    if (obj instanceof Date) {
        return new Date(obj);
    }

    if (obj instanceof RegExp) {
        return new RegExp(obj.source, obj.flags);
    }
    const res = Array.isArray(obj) ? [] : {};
    // 缓存当前obj指向新对象
    cache.set(obj, res);

    Object.keys(obj).forEach(key => {
        if (typeof obj[key] === 'Object') {
            res[key] = deepClone(obj[key], cache);
        } else {
            res[key] = obj[key];
        }
    });
    return res;
 }

 const source = {
     name: 'Jack',
     meta: {
        age: 12,
        birth: new Date('2000-10-10'),
        array: [1, 2, {a: 1}],
        say() {
            console.log('hello')
        }
     }
 };
 source.source = source;
 const newObj = deepClone(source);
console.log(newObj.meta === newObj.source.meta); // true
newObj.meta.say();
