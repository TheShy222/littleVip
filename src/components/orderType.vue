<template>
    <van-swipe-cell v-for="item in orderList" :key="item.orderNumber">
      <van-card :num="item.number" :price="item.price" :title="item.detail">
        <template #thumb>
          <div class="g-thumb">
            <van-image :src="item.url" width="80%" @click="bindOrderDetail(item.orderNumber)"></van-image>
          </div>
        </template>
        <template #footer>
          <span>实付款￥{{ item.price * item.number }}</span>
        </template>
      </van-card>
      <template #right>
        <van-button square text="删除" type="danger" @click="bindDelete(item.orderNumber)" class="dele" />
      </template>
    </van-swipe-cell>
</template>

<script setup lang="ts">
import { useAllOrder } from '@/hooks/allOrder'
const { orderList, bindDelete, bindOrderDetail } = useAllOrder()
</script>

<style scoped>

.all {
  margin-top: 50px;
}

.dele {
  height: 100%;
}
</style>