import axiosInstance from '@/utils/request'
import type{IResponse} from '@/types/types'

/**
 * 商品分类
 */
export const RequestCategory = ():Promise<IResponse>=>{
    return axiosInstance({
        method:'get',
        url:'/goodsType'
    })
}

/**
 * 根据分类id获取商品列表
 */
export const RequestGoodsByCategoryId = (categoryId:number):Promise<IResponse>=>{
    return axiosInstance({
        method:'get',
        url:'/goodsShow',
        params:{
            categoryId
        }
    })
}