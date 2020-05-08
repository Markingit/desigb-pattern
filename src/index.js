// 适配器模式


class Adaptee {
    specificRequest() {
        return '需要转换的标准接口'
    }
}

class Target {
    constructor() {
        this.adaptee = new Adaptee()
    }
    request() {
        let info = this.adaptee.specificRequest()
        return `${info} - 转换器 - 可适配标准接口`
    }
}

// test 

let target = new Target()
let res = target.request()


console.log(res)

//使用场景

// 接口封装， vue的computed方法