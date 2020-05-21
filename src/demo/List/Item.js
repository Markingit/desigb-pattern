import $ from 'jquery'
import getCart from '../ShoppingCart/GetCart'
import StateMachine from 'javascript-state-machine'
import { log } from '../util/log'


export default class Item {
    constructor(list, data) {
        this.list = list
        this.data = data
        this.$el = $('<div>')
        this.cart = getCart()
    }

    initContent() {
        let $el = this.$el
        let data = this.data
        $el.append($(`<p>名称：${data.name}</p>`))
        $el.append($(`<p>价格：${data.price}</p>`))
    }

    initBtn() {
        let $el = this.$el
        let $btn = $('<button>')

        let _this = this
        // 状态模式
        let fsm = new StateMachine({
            init: '加入购物车',
            transitions: [
                {
                    name: 'addToCart',
                    from: '加入购物车',
                    to: '从购物车删除'
                },{
                    name: 'deleteFromCart',
                    from: '从购物车删除',
                    to: '加入购物车'
                }
            ],
            methods: {
                // 添加
                // onAddToCart: function () {
                //     _this.addToCartHandle()
                //     updateText()
                // },
                onAddToCart: () => {
                    this.addToCartHandle()
                    updateText()
                },
                //删除
                onDeleteFromCart: function () {
                    _this.deleteFormCartHandle()
                    updateText()
                }
            }
        })
        function updateText() {
            $btn.text(fsm.state)
        }
        $btn.click(() => {
            // 添加到购物车
            // 从购物车移除

            if (fsm.is('加入购物车')) {
                fsm.addToCart()
            } else {
                fsm.deleteFromCart()
            }

        })
        updateText()
        $el.append($btn)
    }
    // add cart
    @log('add')
    addToCartHandle() {
        this.cart.add(this.data)
    }
    // del from cart
    @log('del')
    deleteFormCartHandle() {
        this.cart.del(this.data.id)
    }

    // 渲染render
    render() {
        this.list.$el.append(this.$el)
    }

    init() {
        this.initContent()
        this.initBtn()
        this.render()
    }
}