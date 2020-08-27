
const a = 'global';

const obj = {
    a: '11',
    fn: () => {
        console.log(this.a);
    }
};

const proto = Reflect.getPrototypeOf(obj);

console.log(proto === Object.getPrototypeOf(obj));

// Reflect.getPrototypeOf(1) 对非对象类型调用getPrototypeOf会报错
// Reflect.apply(func, thisArg, args)

const fun = function(name) {
    console.log(this.a + ' ' + name);
};

Reflect.apply(fun, obj, ['reflect']);

console.log('========() => {}==========');
const fn = obj.fn;
obj.fn();   // undefined,这个为什是undefined。箭头函数中的this会绑定为定义该函数时的作用域
fn();       // undefined

console.log(Reflect.getOwnPropertyDescriptor(obj, 'a'));
/** 
 * {
 *      value: '1',
 *      write: true,
 *      enumerable: true,
 *      configurable: true
 * }
 * 
*/

console.log('========Reflect.get========');
const obj41 = {a: '111'};

console.log(Reflect.get(obj41, 'a'));


