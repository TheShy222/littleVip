import { onMounted, ref } from "vue"
import { useRouter } from "vue-router"
import { useOrderStore } from '@/stores/order'
import { useAddressStore } from '@/stores/address'
import { RequestIssueOrder } from "@/api/order"
export const useAllOrder = () => {
  const router = useRouter()
  const search = ref<string>('')
  const orderStore = useOrderStore()
  const addressStore=useAddressStore()
  const orderList: any = ref([])
  const bindBack = () => history.back()
  const toAllOrder = () => {
    router.push({ path: '/allOrder' })
  }
  const getOrder = async () => {
    const res = await RequestIssueOrder(100, 1,Number(addressStore.Address.tel))
    const { code, list } = res
    if (code == 1) {
      orderList.value = list
    }
  }
  onMounted(() => {
    getOrder()
  })
  const sear = () => {
    console.log(search.value)
  }
  const bindDelete = (orderNumber: number) => {
    orderStore.deleteOrder(orderNumber)
  }
  const bindOrderDetail=(orderNumber: number)=>{
    router.push({path:'/toOrderDetail',query:{orderNumber}})
  }
  return { bindBack, toAllOrder, search, sear, orderList, bindDelete,bindOrderDetail }
}