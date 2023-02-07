import axiosInstance from '@/utils/request'
import type{IResponse} from '@/types/types'

/**
 * 产品列表
 */
export const RequestShopList = (pageNo:number,pageSize:number):Promise<IResponse>=>{
    return axiosInstance({
        method:'get',
        url:'/goodsInfo',
        params:{
            pageSize,
            pageNo,
        }
    })
}

/**
 * 轮播
 */
export const RequestBanner = ():Promise<IResponse>=>{
    return axiosInstance({
        method:'get',
        url:'/getCarousel'
    })
}


/**
 * 登录
 */
export const RequestLogin = (phoneNumber:string,password:string):Promise<IResponse>=>{
    return axiosInstance({
        method:'post',
        url:'/userLogin',
        data:{
            phoneNumber,
            password
        }
    })
}
