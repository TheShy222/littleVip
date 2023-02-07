import type { IResponse,IOrder } from "@/types/types"
import axiosInstance from "@/utils/request"

/**
 * 添加出库订单接口
 */
export const RequestAddIssueOrder = (formData:IOrder):Promise<IResponse> => {
  return axiosInstance({
      method: 'post',
      url: '/addIssueOrder',
      data:{
          formData
      }
  })
}
/**
 * 商品库存更新接口
 */
export const RequestGoodsNumberChange = (formData:IOrder):Promise<IResponse> => {
  return axiosInstance({
      method: 'post',
      url: '/goodsNumberChange',
      data:{
        formData
      }
  })
}
//订单信息接口
export const RequestIssueOrder = (pageSize:number,pageNo:number):Promise<IResponse> => {
  return axiosInstance({
      method: 'get',
      url: '/issueOrder',
      params:{
          pageSize,
          pageNo,
      }
  })
}