<template>
  <van-nav-bar title="已完成" left-text="返回" left-arrow @click-left="bindBack" />
  <van-card :num="orderDetail.number" :price="orderDetail.price" :title="orderDetail.detail">
    <template #thumb>
      <div class="g-thumb">
        <van-image :src="orderDetail.url" width="80%"></van-image>
      </div>
    </template>
    <template #footer>
      <span>实付款￥{{ orderDetail.price * Number(orderDetail.number) }}</span>
    </template>
  </van-card>
  <van-button type="primary" @click="deleteOrder">删除订单</van-button>
</template>

<script setup lang="ts">
import { useOrderDetail } from '@/hooks/orderDetail'
const { bindBack, orderDetail,deleteOrder} = useOrderDetail()
</script>

<style scoped>
.van-button{
  position: fixed;
  right:0;
  bottom: 0;
}
</style>