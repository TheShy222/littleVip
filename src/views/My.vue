<template>
	<div>
		<div class="user-poster">
			<img :src="accountStore.account.url" />
			<h3 @click="toLogin">{{ accountStore.account.name || '登录/注册' }}</h3>
			<div class="setting">
				<van-icon name="setting" @click="toSetting" />
			</div>
		</div>
		<div class="user-order" @click="toAllOrder">
			<span>我的订单</span>
			<span>全部<van-icon name="arrow" /></span>
		</div>
		<van-row class="user-links">
			<van-col>
				<van-icon name="pending-payment" size="35" badge="0" />
				待付款
			</van-col>
			<van-col @click="toSuccessOrder">
				<van-icon name="idcard" size="35" :badge="orderSuccessList.length" />
				待发货
			</van-col>
			<van-col @click="toShippedOrder">
				<van-icon name="logistics" size="35" :badge="orderShippedList.length" />
				待收货
			</van-col>
			<van-col>
				<van-icon name="chat-o" size="35" badge="0" />
				待评价
			</van-col>
			<van-col>
				<van-icon name="cash-back-record" size="35" badge="0" />
				退款/售后
			</van-col>
		</van-row>
		<img src="public/首页.jpg" alt="" style="width: 100%;height: inherit;">
	</div>
</template>

<script setup lang="ts">
import { useAccountStore } from '@/stores/user'
import { useOrderStore } from '@/stores/order'
import { useAllOrder } from '@/hooks/allOrder'
const orderStore = useOrderStore()
const accountStore = useAccountStore()
const { toLogin, toAllOrder, toSetting, orderSuccessList, orderShippedList, toSuccessOrder, toShippedOrder } = useAllOrder()
</script>

<style lang="scss" scoped>
.user {
	&-poster {
		width: 100%;
		height: 80px;
		display: flex;
		align-items: center;

		.setting {
			margin-left: 180px;
		}

		img {
			width: 80px;
			height: 80px;
			border-radius: 50%;
			display: block;
		}

		div {
			.van-icon {
				font-size: 25px;
				margin-left: 5px;
			}

			h4 {
				margin-top: 5px;
			}
		}
	}

	&-order {
		width: 100%;
		height: 40px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	&-group {
		margin-bottom: 15px;
	}

	&-links {
		padding: 15px 0;
		font-size: 12px;
		text-align: center;
		background-color: #fff;
		display: flex;
		justify-content: space-around;

		.van-icon {
			display: block;
			font-size: 24px;
		}
	}
}
</style>
