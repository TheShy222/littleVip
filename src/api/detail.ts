import axiosInstance from '@/utils/request'
import type{IResponse} from '@/types/types'

/**
 * 商品详情
 */
export const RequestGoodsDetail = (id:number):Promise<IResponse>=>{
    return axiosInstance({
        method:'get',
        url:'/getGoodsById',
        params:{
            id
        }
    })
}
