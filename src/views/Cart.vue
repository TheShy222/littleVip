<template>
    <van-sticky :offset-top="0">
        <van-nav-bar title="购物车" left-text="返回" left-arrow @click-left="bindBack" />
    </van-sticky>
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
        <img src="public/cart.jpg" style="width:100%;height:inherit;">
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

.none {
    background-color: #e3e3e3;
    text-align: center;

    h3 {
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
