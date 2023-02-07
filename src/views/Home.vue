<template>
    <van-search v-model="search" shape="round" background="#4fc08d" placeholder="请输入搜索关键词" />
    <van-pull-refresh v-model="refreshLoading" @refresh="onRefresh">
        <!-- 轮播 -->
        <van-swipe :autoplay="3000" lazy-render>
            <van-swipe-item v-for="item in bannerList" :key="item.carouselid">
                <img style="height: 150px; width: 100%" :src="item.url" />
            </van-swipe-item>
        </van-swipe>
        <!-- 商品列表 -->
        <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多数据" @load="onLoad">
            <van-card v-for="item in goodsList" :key="item.id" :price="item.price" :desc="item.detail"
                :title="item.brand" :thumb="item.picture" @click="bindGoodsDetail(item.id)">
                <template #footer>
                    <van-icon name="cart-o" color="#1989fa" size="25"/>
                </template>
            </van-card>
        </van-list>
    </van-pull-refresh>
</template>
<!-- ts编程，写代码时，变量指定数据类型，函数参数返回值类型，... 如果没有显示指定，ts类型推论 -->
<script setup lang="ts">
import { useBanner, useGoods, useGoodsDetail, userSearch } from '@/hooks/home'
const { bannerList, getBanner } = useBanner()
const { search } = userSearch()
const { goodsList, loading, finished, refreshLoading, onLoad, onRefresh } = useGoods(getBanner)
const { bindGoodsDetail } = useGoodsDetail()
</script>

<style scoped>

</style>
z