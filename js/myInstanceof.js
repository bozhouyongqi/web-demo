/**
 * 手动实现instanceof
 */

 function myInstanceof(instance, kclass) {
    let proto = Reflect.getPrototypeOf(instance);
    let prototype = kclass.prototype;

    while(true) {
        if (proto === null) {
            return false;
        }
        if (proto === prototype) {
            return true;
        }
        proto = Reflect.getPrototypeOf(proto); // 或者proto = proto.__proto__;
    }
 }

 class Parent {}

 class Child extends Parent {}

 const child = new Child();

 console.log(myInstanceof(child, Child));
 console.log(myInstanceof(child, Parent));
 console.log(myInstanceof(child, Object));
 console.log(myInstanceof(child, Array));