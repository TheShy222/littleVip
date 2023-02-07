import { useCartStore } from '@/stores/cart'
import { useRouter } from 'vue-router'

export const useCart = () => {
    const cartStore = useCartStore()
    const router = useRouter()
    const bindBack = () => router.replace({ path: '/' })
    /**
     * 删除
     *   
     */
    const bindDelete = (id: number) => {
        cartStore.deleteGoods(id)
    }
    /**
     * 结算
     */
    const bindOrderSubmit = () => {
        router.push({ path: '/clearCart' })
        cartStore.showList = cartStore.list.filter(item => item.state == true)
    }

    return { cartStore, bindBack, bindDelete, bindOrderSubmit }
}