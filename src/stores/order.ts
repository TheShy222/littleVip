import { defineStore } from 'pinia'
import type { IOrder } from '@/types/types'
export const useOrderStore = defineStore('order', {
  state() {
    return {
      Order: {
        list: [] as Array<IOrder>,
      }
    }
  },
  actions: {
     saveOrder(order: IOrder) {
      this.Order.list.push(order)
    },
    deleteOrder(orderNumber:number){
      const index = this.Order.list.findIndex(item => item.orderNumber === orderNumber)
      this.Order.list.splice(index, 1)
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'order',
        storage: localStorage,
        paths: ['Order'],
      },
    ],
  }
})