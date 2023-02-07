<template>
  <van-nav-bar left-text="确认订单" left-arrow @click-left="bindBack" />
  <h3 @click="toAddress"><van-icon name="location-o" />{{address.address || '请选择地址'}}</h3>
  <h4>{{ address.name }}<span>{{address.tel}}</span></h4>
  <van-swipe-cell v-for="item in cartStore.showList" :key="item.id">
      <van-card :num="item.num" :price="item.price" :title="item.detail">
          <template #thumb>
              <div class="g-thumb">
                  <van-image :src="item.url" width="80%"></van-image>
              </div>
          </template>
          <template #footer>
              <van-stepper v-model="item.num" theme="round" button-size="22"/>
          </template>
      </van-card>
  </van-swipe-cell>
  <van-submit-bar :price="cartStore.totalPrice" button-text="提交订单" @submit="bindOrderSubmit" />
</template>

<script setup lang="ts">
import { useClearCart } from '@/hooks/clearCart'
import { useCart } from '@/hooks/cart'
const { cartStore} = useCart()
const { bindBack,address, bindOrderSubmit,toAddress } = useClearCart()
</script>

<style lang="scss" scoped>
h3 {
  color: red;
}
h4{
  margin-left: 5px;
  span{
      margin-left: 10px;
  }
}
</style>