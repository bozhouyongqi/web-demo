/**
 * es5实现继承
 */
 
 function Parent(name) {
     this.name = name;
 }

 Parent.prototype.sayName = function() {
     console.log(this.name);
 }

function Child(name, age) {
    Parent.call(this, name); // 借用构造函数
    this.age = age;
}

Child.prototype = myExtends(Parent.prototype); // 这里注意父类的方法定义在父类的原型对象上
Child.prototype.constructor = Child;
Child.prototype.sayAge = function() {
    console.log(this.age);
}

// 测试
const child = new Child('jack', 18);
child.sayAge();
child.sayName();

function myExtends(proto) {
    function F() {}
    F.prototype = proto;
    return new F();
}

