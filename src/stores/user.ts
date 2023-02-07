import { defineStore } from 'pinia'
import type{ IAccount} from '@/types/types'
export const useAccountStore = defineStore('account',{
    state(){
        return {
            account:{id:0,name:'',phoneNumber:'',password:'',url:'',integral:0}
        }
    },
    actions:{
        saveAccount(account:IAccount){
            this.account = account
        }
    },
    getters:{

    },
    persist: {
        enabled: true,
        strategies: [
            {
                key: 'account',
                storage: localStorage,
                paths: ['account'],
            },
        ],
    },
})