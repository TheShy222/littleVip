<template>
    <van-sticky :offset-top="0">
        <van-nav-bar title="分类" />
    </van-sticky>
    <van-tree-select v-model:main-active-index="activeIndex" height="90%" :items="categoryList"
        @click-nav="bindClickNav">
        <template #content>
            <van-grid :border="false" :column-num="2">
                <van-grid-item v-for="item in goodsList" :key="item.id" @click="bindGoodsDetail(item.id)">
                    <div class="g-goods">
                        <img :src="item.picture" :alt="item.brand" />
                        <h3>{{ item.detail }}</h3>
                        <h4>尺码:{{ item.size }}</h4>
                        <p>¥{{ item.price }}</p>
                    </div>
                </van-grid-item>
            </van-grid>
        </template>
    </van-tree-select>
</template>

<script setup lang="ts">
import { useCategory } from '@/hooks/category'
import { useGoodsDetail } from '@/hooks/home'
const { activeIndex, categoryList, goodsList, bindClickNav } = useCategory()
const { bindGoodsDetail } = useGoodsDetail()
</script>

<style lang="scss" scoped>
.g-goods {
    img {
        width: 100px;
        height: 100px;
    }

    h3 {
        max-width: 100px;
        white-space: nowrap;
        overflow: hidden; //文本超出隐藏
        text-overflow: ellipsis; //文本超出省略号替代
    }
}
</style>
