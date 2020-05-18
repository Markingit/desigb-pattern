// 状态模式
// 主题

 // 场景，有限状态机
// 状态分离以及状态改变所做的动作抽离出来
// 将状态对象和主题对象分离
class State {
    constructor(color) {
        this.color = color
    }
    handle(context) {
        console.log(`turn to ${this.color} light`)
        context.setState(this)
    }
}

class Context {
    constructor() {
        this.state = null
    }
    getState() {
        return this.state
    }
    setState(state) {
        this.state = state
    }
}

let context = new Context()
let green = new State('green')
let yellow = new State('yellow')
let red = new State('red')


green.handle(context)
console.log(context.getState())

yellow.handle(context)
console.log(context.getState())


red.handle(context)
console.log(context.getState())