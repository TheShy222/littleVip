import { ref, type Ref,onMounted } from 'vue'
import { RequestCategory, RequestGoodsByCategoryId } from '@/api/category'
import type { ICategory , IGoods} from '@/types/types'
/**
 * 商品分类
 */
export const useCategory = () => {
    // 左侧索引
    const activeIndex: Ref<number> = ref(0)
    const categoryList: Ref<Array<ICategory>> = ref([]) // 分类列表
    const goodsList:Ref<Array<IGoods>> = ref([]) // 商品类别列表
    /**
     * 商品分类
     */
    const getCategory = async () => {
        const data = await RequestCategory()
        const { code, list } = data
        if (code === 1) {
            // 左侧数据过滤
            categoryList.value = list.map((item:ICategory)=>{
                return {id:item.id,name:item.type,text:item.type}
            })

            // 加载第一件商品
            const categoryId = categoryList.value[0].id
            getGoodsByCategoryId(categoryId)
        }
    }
    /**
     * 商品类别
     */
    const getGoodsByCategoryId = async (categoryId: number) => {
        const data = await RequestGoodsByCategoryId(categoryId)
        const { code, list } = data
        if (code === 1) {
            goodsList.value = list
        }
    }

    /**
     * 切换分类
     */
    const bindClickNav = (index:number) => {
        const categoryId = categoryList.value[index].id
        getGoodsByCategoryId(categoryId)
    }

    onMounted(()=>{
        getCategory()
    })
    

    return { activeIndex, categoryList,goodsList, bindClickNav }
}
