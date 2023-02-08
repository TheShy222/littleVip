import { useRoute, useRouter } from 'vue-router'
import { RequestGoodsDetail } from '@/api/detail'
import { ref, type Ref, onMounted } from 'vue'
import type { ICartGoods, IGoods } from '@/types/types'
import { Toast } from 'vant'
import { useCartStore } from '@/stores/cart'
/**
 * 商品详情
 */
export const useDetail = () => {
    const cartStore = useCartStore()
    const route = useRoute()
    const router = useRouter()
    const id: any = route.query.id
    const goods: Ref<IGoods> = ref({
        id: 0,
        size: '',
        picture: '',
        brand: '',
        price: 0,
        goodsId: '',
        detail: '',
    })
    const bindBack = () => history.back() // 返回上一页
    /**
     * 获取商品详情
     */
    const getGoodsDetail = async () => {
        const data = await RequestGoodsDetail(id)
        const { code, list } = data
        if (code === 1) {
            goods.value = list[0]
        }
    }
    /**
     * 加入购物车
     */
    const bindAddCart = () => {
        const cartGoods: ICartGoods = {
            id: goods.value.id,
            detail: goods.value.detail,
            price: goods.value.price,
            url: goods.value.picture,
            num: 1,
            goodsId: goods.value.goodsId,
            size: goods.value.size,
            state: false,
        }
        cartStore.saveGoods(cartGoods)
        Toast.success('加入购物车成功!')
    }
    /**
     * 直接购买
     */
    const bindBuy = () => {
        // 跳转到购买详情页
        const cartGoods: ICartGoods = {
            id: goods.value.id,
            detail: goods.value.detail,
            price: goods.value.price,
            url: goods.value.picture,
            num: 1,
            goodsId: goods.value.goodsId,
            size: goods.value.size,
            state: true,
        }
        cartStore.saveGoods(cartGoods)
        cartStore.showList = cartStore.list.filter(item => item.state == true)
        router.push({ path: '/clearCart' })
    }
    onMounted(() => {
        getGoodsDetail()
    })

    return { bindBack, goods, bindAddCart, bindBuy }
}
