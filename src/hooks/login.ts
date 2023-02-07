import { ref,type Ref } from 'vue'
import { RequestLogin } from '@/api/index'
import { useAccountStore } from '@/stores/user'
import type{ IAccount} from '@/types/types' 
import { Toast } from 'vant'
import { useRouter} from 'vue-router'

export const useAccount = ()=>{
    const phoneNumber= ref<string>('')
    const password= ref<string>('')
    const accountStore = useAccountStore()
    const router = useRouter()
    const bindBack = ()=>history.back()
    /**
     * 登录
     */
    const onSubmit = async()=>{
        const data = await RequestLogin(phoneNumber.value,password.value)
        const {code,list} = data
        if(code === 1){
            // 保存用户信息,主界面登录按钮换成用户头像
            const account:IAccount = {
                id:Date.now(),
                name:list[0].name,
                phoneNumber:list[0].phoneNumber,
                password:list[0].password,
                url:list[0].userImg,
                integral:list[0].integral
            }
            accountStore.saveAccount(account)
            // 登录成功提示，跳转到主界面
            Toast.success('登录成功!')
            router.replace('/')
        }else{
            Toast.fail('手机号或密码错误!')
        }
    }

    return {phoneNumber,password, bindBack,onSubmit}
}