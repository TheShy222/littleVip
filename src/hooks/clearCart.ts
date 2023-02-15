import { useRouter } from 'vue-router'
import type { IAddress, ICartGoods, IOrder } from '@/types/types'
import { ref, type Ref, onMounted } from 'vue'
import { useAddressStore } from '@/stores/address'
import { useOrderStore } from '@/stores/order'
import { useCartStore } from '@/stores/cart'
import { Toast } from 'vant'
import { RequestAddIssueOrder, RequestGoodsNumberChange } from '@/api/order'
import { useAccountStore } from '@/stores/user'
export const useClearCart = () => {
  const router = useRouter()
  const addressStore = useAddressStore()
  const orderStore = useOrderStore()
  const cartStore = useCartStore()
  const Account = useAccountStore()
  const address: Ref<IAddress> = ref({
    name: '',
    tel: '',
    address: '',
    isDefault: false
  })
  const cartGoods: Ref<ICartGoods> = ref({
    id: 0,
    detail: '',
    price: 0,
    url: '',
    size: '',
    num: 1,
    goodsId: ''
  })
  const order: Ref<IOrder> = ref({
    orderNumber: Date.now(),
    number: 1,
    totalPrice: 0,
    name: '',
    phoneNumber: '',
    address: '',
    goodsId: '',
    price: 0,
    size: '',
    id: 0,
    detail: '',
    url: ''
  })
  const bindBack = () => history.back() // 返回上一页
  /**
   * 获取商品详情
   */
  const getBuyDetail = async () => {
    address.value = addressStore.Address
  }
  onMounted(() => {
    getBuyDetail()
  })
  const bindOrderSubmit = async () => {
    if (!address.value.address) {
      Toast({
        message: '请选择地址',
        icon: 'clear',
      })
    } else {
      if (Account.account.id) {
        for (let i = 0; i < cartStore.list.length; i++) {
          let order: Ref<IOrder> = ref({
            orderNumber: Date.now(),
            number: cartStore.list[i].num,
            totalPrice: cartStore.list[i].num * cartStore.list[i].price,
            name: address.value.name,
            phoneNumber: address.value.tel,
            address: address.value.address,
            price: cartStore.list[i].price,
            size: cartStore.list[i].size,
            id: cartStore.list[i].id,
            detail: cartStore.list[i].detail,
            url: cartStore.list[i].url,
          })
          orderStore.saveOrder(order.value)
          const res = await RequestAddIssueOrder(order.value)
          const { code } = res
          if (code == 1) {
            Toast({
              message: '下单成功！',
              icon: 'checked',
            })
          }
          const res2 = await RequestGoodsNumberChange(order.value)
        }
        cartStore.list = cartStore.list.filter(item => item.state == false)
        cartStore.showList = []
        bindBack()
      }else{
        Toast({
          message: '请先登录',
          icon: 'clear',
        })
      }
    }
  }
  const toAddress = () => {
    router.push({ path: '/addAddress' })
  }
  return { bindBack, order, orderStore, address, cartGoods, bindOrderSubmit, toAddress }
}