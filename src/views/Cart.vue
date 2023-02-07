<template>
    <van-nav-bar title="购物车" left-text="返回" left-arrow @click-left="bindBack" />
    <van-swipe-cell v-if=cartStore.list.length v-for="item in cartStore.list" :key="item.id">
        <van-card :num="item.num" :price="item.price" :title="item.detail">
            <template #thumb>
                <div class="g-thumb">
                    <van-checkbox :checked="item.state" @click="cartStore.singleCheck(item.id)"></van-checkbox>
                    <van-image :src="item.url" width="80%"></van-image>
                </div>
            </template>
            <template #footer>
                <van-stepper v-model="item.num" theme="round" button-size="22" disable-input />
            </template>
        </van-card>
        <template #right>
            <van-button square text="删除" type="danger" @click="bindDelete(item.id)" class='delete' />
        </template>
    </van-swipe-cell>
    <div class="none" v-else>
        <img src="https://img1.baidu.com/it/u=1514470112,2720712187&fm=253&fmt=auto&app=138&f=GIF?w=400&h=456" style="width:100px;height:100px;">
        <h2>购物车竟然是空的</h2>
        <h3>再忙，也要记得买点什么犒赏自己</h3>
    </div>
    <van-submit-bar :price="cartStore.totalPrice" button-text="结算" @submit="bindOrderSubmit">
        <van-checkbox :checked="cartStore.stateAll" @click="cartStore.checkAll">全选</van-checkbox>
    </van-submit-bar>
</template>

<script setup lang="ts">
import { useCart } from '@/hooks/cart'
const { cartStore, bindBack, bindDelete, bindOrderSubmit } = useCart()
</script>

<style lang="scss" scoped>
.g-thumb {
    display: flex;
}
.none{
    text-align: center;
    h3{
        color: gray;
    }
}
.delete {
    height: 100%;
}

.van-submit-bar {
    height: 50px;
    bottom: 55px;
}
</style>
