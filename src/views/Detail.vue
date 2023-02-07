<template>
    <van-nav-bar title="商品详情" left-text="返回" left-arrow @click-left="bindBack" />
    <div>
        <img :src="goods.picture" style="width:100%;height:200px;" :alt="goods.picture">
        <h2>¥{{ goods.price }}</h2>
        <h3>{{ goods.detail }}</h3>
        <van-button type="warning" @click="bindAddCart">加入购物车</van-button>
        <van-button type="danger" @click="bindBuy(goods.id)" class="buy">直接购买</van-button>
    </div>

</template>

<script setup lang="ts">
import { useDetail } from '@/hooks/detail'
const { bindBack, goods, bindAddCart,bindBuy } = useDetail()

</script>

<style scoped>
h2 {
    width: 100%;
    height: 30px;
    background-color: rgb(239, 76, 111);
    color: aliceblue;
}
.van-button{
    margin-top: 240px;
}
.buy{
    margin-left: 180px;
}
</style>
