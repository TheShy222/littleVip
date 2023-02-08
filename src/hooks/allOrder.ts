import { onMounted, ref} from "vue"
import { useRouter } from "vue-router"
import { useOrderStore } from '@/stores/order'
import { useAddressStore } from '@/stores/address'
import { RequestDeleteOrder, RequestIssueOrder,RequestSuccessOrder,RequestShippedOrder} from "@/api/order"
import { useAccountStore } from '@/stores/user'
import { Toast } from "vant"
export const useAllOrder = () => {
  const router = useRouter()
  const search = ref<string>('')
  const orderStore = useOrderStore()
  const addressStore=useAddressStore()
  const accountStore=useAccountStore()
  const orderList: any = ref([])//所有订单
  const orderSuccessList:any=ref([])//未发货订单
  const orderShippedList:any=ref([])//已发货订单
  const active = ref(2)
  const bindBack = () => history.back()
  const toAllOrder = () => {
    router.push({ path: '/allOrder' })
  }
  const toSuccessOrder = () => {
    router.push({ path: '/allOrder' })
  }
  const toShippedOrder = () => {
    router.push({ path: '/allOrder' })
  }
  //获取全部订单
  const getOrder = async () => {
    const res = await RequestIssueOrder(100, 1,Number(addressStore.Address.tel))
    const { code, list } = res
    if (code == 1) {
      orderList.value = list
    }
  }
  //获取未发货订单
  const getSuccessOrder= async ()=>{
    const res = await RequestSuccessOrder(Number(addressStore.Address.tel))
    const { code, list } = res
    if (code == 1) {
      orderSuccessList.value = list
    }
  }
  //获取已发货订单
  const getShippedOrder= async ()=>{
    const res = await RequestShippedOrder(Number(addressStore.Address.tel))
    const { code, list } = res
    if (code == 1) {
      orderShippedList.value = list
    }
  }
  onMounted(() => {
    getOrder()
    getSuccessOrder()
    getShippedOrder()
  })
  const sear = () => {
    console.log(search.value)
  }
  const bindDelete = async (orderNumber: number) => {
    orderStore.deleteOrder(orderNumber)
    const res=await RequestDeleteOrder(orderNumber)
    if(res.code==1){
      Toast.success('删除订单成功!')
    }
    getOrder()
  }
  const bindOrderDetail=(orderNumber: number)=>{
    router.push({path:'/toOrderDetail',query:{orderNumber}})
  }
  const toLogin=()=>{
    if(!accountStore.account.id){
      router.push({path:'/login'})
    }else{
      return 
    }
  }
  const toSetting=()=>{
    router.push({path:'/setting'})
  }
  return { toSetting,toLogin,active,bindBack, toAllOrder, search, sear, orderList, bindDelete,bindOrderDetail,orderSuccessList,orderShippedList,toSuccessOrder,toShippedOrder }
}