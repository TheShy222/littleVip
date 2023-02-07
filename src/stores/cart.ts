import { defineStore } from 'pinia'
import type { ICartGoods } from '@/types/types'

export const useCartStore = defineStore('cart', {
    state() {
        return {
            list: [] as Array<ICartGoods>,
            stateAll: false, // 全选状态
            showList: [] as Array<ICartGoods>
        }
    },
    actions: {
        /**
         * 全选
         */
        checkAll() {
            this.stateAll = !this.stateAll
            this.list.forEach(item => (item.state = this.stateAll))
        },
        /**
         * 单选
         */
        singleCheck(id: number) {
            const goods: ICartGoods | undefined = this.list.find(
                item => item.id === id
            )
            if (goods) {
                goods.state = !goods.state
            }
            this.stateAll = this.list.every(item => item.state)
        },
        /**
         * 保存
         */
        saveGoods(goods: ICartGoods) {
            // 相同商品数量加一
            // 判断购物车是否有此要添加商品，如果有数量加,如果没有，作为新商品添加
            const oldGoods: ICartGoods | undefined = this.list.find(
                item => item.id === goods.id
            )
            if (oldGoods) {
                oldGoods.num++
            } else {
                // 新加商品，全选状态设置false
                this.stateAll = false
                this.list.push(goods)
            }
        },
        /**
         * 删除
         */
        deleteGoods(id: number) {
            const index = this.list.findIndex(item => item.id === id)
            this.list.splice(index, 1)
        },
    },
    getters: {
        totalPrice(): number {
            let array = []
            if (this.showList.length == 0) {
                array = this.list
            } else {
                array = this.showList
            }
            const sum = array.reduce(
                (preventvalue, currentvalue) =>
                    preventvalue +
                    (currentvalue.state
                        ? currentvalue.price * currentvalue.num
                        : 0),
                0
            )

            return sum * 100
        },
    },
    persist: {
        enabled: true,
        strategies: [
            {
                key: 'cart',
                storage: localStorage,
                paths: ['list', 'stateAll', 'showList'],
            },
        ],
    },
})
