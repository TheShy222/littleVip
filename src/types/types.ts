export interface IResponse{
    code:number
    list:any,
    msg?:string,
    total?:number
}

/**
 * 商品
 */
export interface IGoods {
    goodsId: string | undefined
    id: number
    size: string
    picture: string
    brand: string
    price: number
    detail: string
}

/**
 * 轮播
 */
export interface IBanner{
    carouselid:number
    url:string
    content:string
}

/**
 * 商品分类
 */
export interface ICategory{
    id:number
    type:string
    text:string
}

/**
 * 购物车商品
 */
export interface ICartGoods{
    id:number
    detail:string // 商品名称
    price:number // 价格
    url:string //图片地址
    num:number //数量
    size?:string
    state?:boolean //状态
    picture?:''
    totalPrice?:number
    goodsId?:string
}

/**
 * 账户
 */
export interface IAccount{
    id:number
    name:string
    phoneNumber:string
    password:string
    url:string
    integral:number
}
//地址
export interface IAddress{
    name:string
    tel:string
    address:string
    isDefault:boolean
}
//订单信息
export interface IOrder{
    orderNumber:any
    number:number | undefined
    totalPrice:number
    name:string
    phoneNumber:string
    address:string
    price:number
    size:string | undefined
    id:number
    detail:string
    url:string //图片地址
}