// 装饰器 函数或者传参数返回的函数 ,还可以装饰方法  第三方库 core-decorators


// class Circle{
//     draw() {
//         console.log('draw first')
//     }
// }


// class Decorator {
//     constructor(Circle) {
//         this.Circle = Circle
//     }
//     draw() {
//         this.Circle.draw()
//         this.setRedBorder(Circle)
//     }
//     setRedBorder(Circle) {
//         console.log('红色边框')
//     }
// }


// // test
// let circle = new Circle()
// circle.draw()

// let decorator = new Decorator(circle)

// decorator.draw()

// @testDec
// class Demo {

// }
// function testDec(target) {
//     target.isDec = true
// }

// console.log(Demo.isDec)



// function testDec(isDec) {
//     return function (target) {
//         target.isDec = isDec
//     }
// }

// @testDec(false)
// class Demo {

// }


// console.log(Demo.isDec)



// function mixins(...list) {
//     return function(target) {
//         Object.assign(target.prototype, ...list)
//     } 
// }


// const Foo = {
//     foo () {
//         console.log('foo')
//     }
// }

// @mixins(Foo)

// class MyClass {

// }

// let obj = new MyClass()
// obj.foo()


import { readonly } from 'core-decorators'
class Person {
    @readonly
    name() {
        return 'Mark'
    }
}

let p = new Person()

console.log(p.name)

// p.name = function() {
//     console.log('readonly')
// }
