<template>
    <van-nav-bar title="商品详情" left-text="返回" left-arrow @click-left="bindBack" />
    <div>
        <img :src="goods.picture" style="width:100%;height:200px;" :alt="goods.picture">
        <h2>¥{{ goods.price }}</h2>
        <h3>{{ goods.detail }}</h3>
        <h4>商品细节</h4>
        <ul>
            <li>货号：{{ goods.goodsId }}</li>
            <li>尺码：{{ goods.size }}</li>
            <li>品牌：{{goods.brand}}</li>
        </ul>
        <van-action-bar>
            <van-action-bar-icon icon="chat-o" text="客服" color="#ee0a24" />
            <van-action-bar-icon icon="cart-o" text="购物车" />
            <van-action-bar-icon icon="star" text="已收藏" color="#ff5000" />
            <van-action-bar-button type="warning" text="加入购物车" @click="bindAddCart()"/>
            <van-action-bar-button type="danger" text="立即购买" @click="bindBuy()"/>
        </van-action-bar>
    </div>

</template>

<script setup lang="ts">
import { useDetail } from '@/hooks/detail'
const { bindBack, goods, bindAddCart, bindBuy } = useDetail()

</script>

<style scoped>
h2 {
    width: 100%;
    height: 30px;
    background-color: rgb(239, 76, 111);
    color: aliceblue;
}

</style>
