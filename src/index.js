class Car{
    constructor(num) {
        this.num = num
    }
}

class Camera {
    shot(car) {
        return {
            num: car.num,
            inTime: Date.now()
        }
    }
}

class Screen{
    show(car, inTime) {
        console.log('车牌号', car.num)
        console.log('停车时间', Date.now()-inTime)
    }
}

class Park{
    constructor(floors) {
        this.floors = floors || []
        this.camera = new Camera()
        this.screen = new Screen()
        this.carList = {} // 存储摄像头返回的车辆信息
    }
    in(car) {
        const info = this.camera.shot(car)
        //停到某个车位
        const i = parseInt(Math.random() *100 / 100)
        const place = this.floors[0].places[i]
        place.in()
        info.place = place
        //记录信息
        this.carList[car.num] = info
    }
    out(car) {
        //获取信息
        const info = this.carList[car.num]
        // 清空车位
        const place = info.place
        place.out()
        //显示时间
        this.screen.show(car, inf0.inTime)
        //清空记录
        delete this.carList[car.num]
    }
    emptyNum() {
        return this.floors.map(floor => {
            return `${floor.index}层还有${floor.emptyPlaceNum()}个空车位`
        }).join('\n')
    }
}
//层
class Floor {
    constructor(index, places) {
        this.index = index
        this.places = places || []
    }
    emptyPlaceNum () {
        let num = 0
        this.places.forEach(p => {
            if (p.empty) {
                num = num + 1
            }
        });
        return num
    }
}
// 车位
class Place {
    constructor() {
        this.empty = true
    }
    in() {
        this.empty = false
    }
    out() {
        this.empty = true
    }
}



// 测试---------------------------


const floors = []
for (let i = 0; i < 3; i++) {
    const places = []
    for(let j = 0; j < 100; j ++) {
        places[j] = new Place()
    }
    floors[i] = new Floor(i+1, places)
}

const park = new Park(floors)
const car1 = new Car(100)
const car2 = new Car(200)
console.log('第一辆车进入')
console.log(park.emptyNum())
park.in(car1)

console.log('第二辆车进入')
console.log(park.emptyNum())
park.in(car2)