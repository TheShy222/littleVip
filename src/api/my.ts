import axiosInstance from '@/utils/request'
import type { IAccount, IResponse } from '@/types/types'
export const RequestAddUser = (user:IAccount):Promise<IResponse>=>{
    return axiosInstance({
        method: 'post',
        url: '/addUser',
        data:{
            user
        }
    })
}