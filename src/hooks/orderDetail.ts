import { RequestDeleteOrder, RequestIssueOrderByOrderNumber } from "@/api/order"
import type { IOrder } from "@/types/types"
import { Toast } from "vant"
import { onMounted, ref, type Ref } from "vue"
import { useRoute, useRouter } from "vue-router"

export const useOrderDetail = () => {
  const route = useRoute()
  const router = useRouter()
  const orderNumber: any = route.query.orderNumber
  const bindBack = () => history.back()
  const active=ref(1)
  //获取订单详情
  const orderDetail: Ref<IOrder> = ref({
    orderNumber: 0,
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
    url: '',
    express:''
  })
  const getOrderDetail = async () => {
    const data = await RequestIssueOrderByOrderNumber(orderNumber)
    const { code, list } = data
    if (code === 1) {
      orderDetail.value = list[0]
    }
  }
  const deleteOrder = async () => {
    const res = await RequestDeleteOrder(orderNumber)
    const { code } = res
    if (code == 1) {
      Toast.success('删除成功!')
    }
    router.push({ path: '/allOrder' })
  }
  onMounted(() => {
    getOrderDetail()
  })
  return { bindBack, orderDetail, deleteOrder,active}
}