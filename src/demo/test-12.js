//原型模式

let prototype = {
    getName: function () {
        return this.first + '' + this.last
    },
    say: function () {
        console.log('Hello')
    }
}

let x = Object.create(prototype)

x.first = 'A'
x.last = 'B'
console.log(x.getName())
x.say()



let y = Object.create(prototype)

y.first = 'C'
y.last = 'D'
console.log(y.getName())
y.say()


// 桥接模式， 实现化和抽象化进行分离
//组合模式 对象树形结构，部分和整体的层次关系
//享元模式，共享内存，考虑整体的内存空间

// 策略模式 业务中是否有大量的if...else或者switch...case  应用：抽象出不同的类去初始化（实例化）化应用
// 模版方法模式  职责链模式  操作中职责角色分开，然后用一个链串起来，将发起者和处理者进行隔离

// 命令模式

// 备忘录模式 随时记录一个对象的状态   随时恢复之前的某个状态
//中介者模式   各个对象通过中介者隔离

//访问者模式 解释器模式