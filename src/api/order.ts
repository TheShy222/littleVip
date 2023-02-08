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
export const RequestIssueOrder = (pageSize:number,pageNo:number,phoneNumber:number):Promise<IResponse> => {
  return axiosInstance({
      method: 'get',
      url: '/issueOrder',
      params:{
          pageSize,
          pageNo,
          phoneNumber
      }
  })
}
//查询订单通过订单号
export const RequestIssueOrderByOrderNumber = (orderNumber:number):Promise<IResponse> => {
  return axiosInstance({
      method: 'get',
      url: '/issueOrderByOrderNumber',
      params:{
          orderNumber
      }
  })
}
//查询未发货订单
export const RequestSuccessOrder = (orderNumber:number):Promise<IResponse> => {
  return axiosInstance({
      method: 'get',
      url: '/orderSuccess',
      params:{
          orderNumber
      }
  })
}
//查询已发货订单
export const RequestShippedOrder = (orderNumber:number):Promise<IResponse> => {
  return axiosInstance({
      method: 'get',
      url: '/shippedOrder',
      params:{
          orderNumber
      }
  })
}
//删除订单
export const RequestDeleteOrder = (orderNumber:number):Promise<IResponse> => {
  return axiosInstance({
      method: 'get',
      url: '/deleteOrder',
      params:{
          orderNumber
      }
  })
}