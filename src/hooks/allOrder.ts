import { onMounted, ref } from "vue"
import { useRouter } from "vue-router"
import { useOrderStore } from '@/stores/order'
import { RequestIssueOrder } from "@/api/order"
export const useAllOrder = () => {
  const router = useRouter()
  const search = ref<string>('')
  const orderStore = useOrderStore()
  const orderList: any = ref([])
  const bindBack = () => router.replace({ path: '/' })
  const toAllOrder = () => {
    router.push({ path: '/allOrder' })
  }
  const getOrder = async () => {
    const res = await RequestIssueOrder(100, 1)
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
  return { bindBack, toAllOrder, search, sear, orderList, bindDelete }
}