import { defineStore } from 'pinia'
import type{ IAddress} from '@/types/types'
export const useAddressStore = defineStore('address',{
    state(){
        return {
            Address:{name:'',tel:'',address:'',isDefault:false}
        }
    },
    actions:{
        saveAddress(Address:IAddress){
            this.Address = Address
            console.log(this.Address)
        }
    },
    persist: {
        enabled: true,
        strategies: [
            {
                key: 'address',
                storage: localStorage,
                paths: ['Address'],
            },
        ],
    },
})