// 观察者模式   前端使用最多  发布&订阅  一对多
// 主题 保存状态，状态变化之后触发所有观察者对象
class Subject {
    constructor() {
        this.state = 0
        this.observers = []
    }
    getState() {
        return this.state
    }
    setState(state) {
        this.state = state
        this.notifyAllObservers()
    }
    notifyAllObservers() {
        this.observers.forEach(observe => {
            observe.update()
        })
    }
    attach(observe) {
        this.observes.push(observe)
    }
}

//观察者

class Observe { 
    constructor(name, subject) {
        this.name = name
        this.subject = subject
        this.subject.attach(this)
    }
    update() {
        console.log(`${this.name} update, state:${this.subject.getState()}`)
    }
}