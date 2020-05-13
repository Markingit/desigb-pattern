// 迭代器模式 有序的访问数据集合  迭代器对象和目标对象分离

// 场景 jQuery each   ES6 Iterator（统一的遍历接口遍历所有数据类型） 有.next()方法



function each(data) {
    // let iterator = data[Symbol.iterator]()
    // let item = {done: false}
    // while (!item.done) {
    //     item = iterator.next()
    //     if (!item.done) {
    //         console.log(item.value)
    //     }
    // }
    // for...of...
    for (let item of data) {
        console.log(item)
    }
}


let arr = [1, 2, 3, 4]
let m = new Map()
m.set('a', 100)
m.set('b', 200)


each(arr)

each(m)