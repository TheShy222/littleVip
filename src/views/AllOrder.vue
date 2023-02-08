<template>
  <div class="top">
    <van-icon name="arrow-left" @click="bindBack" size="30" />
    <img src="public/5.jpg" alt="" style="width:320px;height: inherit;margin-left: 35px;">
  </div>
  <van-tabs v-model:active="active">
    <van-tab title="全部">
      <orderType></orderType>
    </van-tab>
    <van-tab title="待付款">
      <div class="pay">
        <h2>暂无订单</h2>
        <h3>找不到订单？试试<span>查看全部</span>或者<span>查看帮助</span>
        </h3>
      </div>
    </van-tab>
    <van-tab title="待发货">
      <orderSuccess></orderSuccess>
    </van-tab>
    <van-tab title="待收货">
      <shippedOrder></shippedOrder>
    </van-tab>
    <van-tab title="已完成">
      <orderType></orderType>
    </van-tab>
  </van-tabs>

</template>

<script setup lang="ts">
import { useAllOrder } from '@/hooks/allOrder'
import orderType from '@/components/orderType.vue'
import orderSuccess from '@/components/orderSuccess.vue'
import shippedOrder from '@/components/shippedOrder.vue'
const { active, bindBack, search} = useAllOrder()
</script>

<style lang="scss" scoped>
.top {
  width: 100%;
  height: 50px;
  display: flex;

  .van-icon {
    width: 20px;
    margin-top: 8px;
  }
  .van-search {
    flex: 1;
    border-right: 0;
  }
  .van-button {
    width: 60px;
    height: 30px;
    border-left: 0;
  }
}

.pay {
  text-align: center;
  margin-top: 50px;
}
</style>