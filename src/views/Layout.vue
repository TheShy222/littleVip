<template>
    <!-- 子路由输出 -->
    <div class="g-container">
        <router-view ></router-view>
    </div>
    <van-tabbar class="g-footer" route active-color="#ee0a24" inactive-color="#000">
        <van-tabbar-item replace to="/home" icon="wap-home">首页</van-tabbar-item>
        <van-tabbar-item replace to="/category" icon="gem">分类</van-tabbar-item>
        <van-tabbar-item replace to="/cart"  icon="cart" :badge="cartStore.list.length">购物车</van-tabbar-item>
        <van-tabbar-item replace to="/my" icon="manager">个人中心</van-tabbar-item>
    </van-tabbar>
</template>

<script setup lang="ts">
import { useCartStore  } from '@/stores/cart'
const cartStore=useCartStore()
</script>

<style scoped lang="scss">
#app{
    display: flex;
    flex-direction: column;
    .g-footer{
        height: 60px;
    }
    .g-container{
        margin-bottom: 60px;
        flex: 1;
    }
}
</style>
