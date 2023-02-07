<template>
  <div class="top">
    <van-icon name="arrow-left" @click="bindBack" size="30" />
    <van-search v-model="search" shape="round" placeholder="搜索订单" />
    <van-button block type="primary" @click="sear">搜索</van-button>
  </div>
  <van-swipe-cell v-for="item in orderList" :key="item.orderNumber" @click="bindOrderDetail(item.orderNumber)">
    <van-card :num="item.number" :price="item.price" :title="item.detail">
      <template #thumb>
        <div class="g-thumb">
          <van-image :src="item.url" width="80%"></van-image>
        </div>
      </template>
      <template #footer>
        <span>实付款￥{{ item.price * item.number }}</span>
      </template>
    </van-card>
    <template #right>
      <van-button square text="删除" type="danger" @click="bindDelete(item.orderNumber)" class="dele"/>
    </template>
  </van-swipe-cell>
</template>

<script setup lang="ts">
import { useAllOrder } from '@/hooks/allOrder'
const { bindBack, search, sear, orderList,bindDelete,bindOrderDetail} = useAllOrder()
</script>

<style lang="scss" scoped>
.top {
  width: 100%;
  height: 30px;
  display: flex;
  background-color: slateblue;

  .van-icon {
    width: 20px;
  }

  .van-search {
    flex: 1;
    border-right: 0;
    background-color: slateblue;
  }

  .van-button {
    width: 60px;
    height: 30px;
    border-left: 0;
  }
}
.dele{
  height: 100%;
}
</style>