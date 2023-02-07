import { ref, type Ref, onMounted } from 'vue'
import type { IGoods, IBanner } from '@/types/types'
import { RequestShopList, RequestBanner } from '@/api/index'
import { useRouter } from 'vue-router'


//搜索
export const userSearch=()=>{
    const search:Ref<string>=ref('')
    return { search}
}

/**
 * 轮播banner
 */
export const useBanner = () => {
    // 轮播列表数据
    const bannerList: Ref<Array<IBanner>> = ref([])

    /**
     * 轮播
     */
    const getBanner = async () => {
        const data = await RequestBanner()
        const { code, list } = data
        if (code === 1) {
            bannerList.value = list
        }
    }

    onMounted(() => {
        getBanner()
    })

    return { bannerList, getBanner }
}

/**
 * 商品列表
 *   商品列表显示
 *   加载更多
 *   下拉刷新
 *
 *   hooks组全式函数
 */
export const useGoods = (getBanner:Function) => {
    //ref()返回ref对象的数据类型是Ref
    const goodsList: Ref<Array<IGoods>> = ref([])
    // 加载数据状态，true表示加载中,false加载完成
    const loading: Ref<boolean> = ref(false)
    // 加载更新完成数据状态, 所有数据加载完成设置为true
    const finished: Ref<boolean> = ref(false)
    // 下拉刷新状态
    const refreshLoading: Ref<boolean> = ref(false)
    // 当前页号
    let currentNo: number = 1

    /**
     * 加载更多
     * 1.第一次进入自动调用,loading设置为true
     * 2.触底自动调用
     */
    const onLoad = () => {
        getProductList(currentNo++, 10)
    }

    /**
     * 下拉刷新
     */
    const onRefresh = () => {
        // 重置
        currentNo = 1
        finished.value = false
        loading.value = false

        getProductList(currentNo, 10)
        currentNo++ //刷新后currentNo加一,加载更多从第二页开始
        getBanner()
    }

    /**
     * 商品列表
     * @param pageNo
     * @param pageSize
     */
    const getProductList = async (pageNo: number, pageSize: number) => {
        const data = await RequestShopList(pageNo, pageSize)

        // 关闭下拉刷新, 手动下拉刷新时自动设置为true
        if (refreshLoading.value) {
            goodsList.value = []
            refreshLoading.value = false
        }
        const { code, list,total } = data
        if (code === 1) {
            goodsList.value = [...goodsList.value, ...list] // 数据拼接
        }
        loading.value = false // loadding加载完成|关闭下拉刷新

        if (goodsList.value.length == total) {
            finished.value = true //所有数据加载完成
        }
    }
    // 模板使用的数据方法
    return { goodsList, loading, finished, refreshLoading, onLoad, onRefresh }
}

/**
 * 商品详情
 */
export const useGoodsDetail = ()=>{
    const router = useRouter()
    // 跳转到商品详情页
    const bindGoodsDetail = (id:number)=>{
        router.push({path:'/detail',query:{id}})
    }
    return {bindGoodsDetail}
}
