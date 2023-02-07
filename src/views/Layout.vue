<template>
    <!-- 子路由输出 -->
    <div class="g-container">
        <router-view ></router-view>
    </div>
    <van-tabbar class="g-footer" route active-color="#ee0a24" inactive-color="#000">
        <van-tabbar-item replace to="/home" icon="wap-home">首页</van-tabbar-item>
        <van-tabbar-item replace to="/category" icon="gem">分类</van-tabbar-item>
        <van-tabbar-item replace to="/cart"  icon="cart" :badge="cartStore.list.length">购物车</van-tabbar-item>
        <van-tabbar-item icon="manager" @click="toLogin">个人中心</van-tabbar-item>
    </van-tabbar>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAccountStore } from '@/stores/user'
import { useCartStore  } from '@/stores/cart'
const router=useRouter()
const Account=useAccountStore()
const cartStore=useCartStore()
const toLogin=()=>{
    if(Account.account.id){
        router.push({path:'/my'})
    }else{
        router.push({path:'/login'})
    }
}
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
