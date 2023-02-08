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
  <van-steps :active="active">
    <van-step>用户下单</van-step>
    <van-step>商家接单</van-step>
    <van-step>等待收货</van-step>
    <van-step>交易完成</van-step>
  </van-steps>
  <div class="detail">
    <ul class="left">
      <li>订单编号</li>
      <li>下单时间</li>
      <li>收获信息</li>
      <li>交易快照</li>
      <li>电子发票</li>
      <li>物流信息</li>
    </ul>
    <ul class="right">
      <li>{{ orderDetail.orderNumber }}</li>
      <li>{{ formatTime('', orderDetail.orderNumber) }}</li>
      <li>{{ orderDetail.name }},{{ orderDetail.phoneNumber }},{{ orderDetail.address }}</li>
      <li>发生交易争议时，可作为判断依据</li>
      <li><van-icon name="warning-o" />已失效|{{ orderDetail.name }}</li>
      <li>{{ orderDetail.express }}</li>
    </ul>
  </div>

  <van-button type="primary" @click="deleteOrder">删除订单</van-button>
</template>

<script setup lang="ts">
import { formatTime } from '@/utils/time'
import { useOrderDetail } from '@/hooks/orderDetail'
const { bindBack, orderDetail, deleteOrder,active } = useOrderDetail()
</script>

<style lang="scss" scoped>
.van-button {
  position: fixed;
  right: 0;
  bottom: 0;
}

.detail {
  display: flex;
  justify-content: space-around;

  .left {
    margin-left: 10px;

    li {
      margin-top: 20px;

      &:nth-child(4) {
        margin-top: 40px;
      }

      &:nth-child(5) {
        margin-top: 40px;
      }
    }
  }

  .right {
    width: 200px;

    li {
      margin-top: 20px;

      &:nth-child(5) {
        margin-top: 25px;
      }
    }
  }
}
</style>