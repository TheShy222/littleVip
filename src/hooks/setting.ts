import router from '@/router'
import { useAccountStore } from '@/stores/user'
const accountStore=useAccountStore()
export const userSetting=()=>{
  const bindBack=()=>history.back()
  const confirmRun=()=>{
    accountStore.account={id:0,name:'',phoneNumber:'',password:'',url:'https://pic.ntimg.cn/file/20200718/31394912_120518711441_2.jpg',integral:0}
    router.replace({path:'/login'})
  }
  return {bindBack,confirmRun}
}