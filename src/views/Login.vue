<template>
    <van-nav-bar
        left-text="返回"
        left-arrow
        @click-left="bindBack"
    />
    
    <van-form @submit="onSubmit">
        <img src="public/logo.png" alt=""/>
        <van-cell-group inset>
            <van-field
                v-model="phoneNumber"
                name="username"
                label="手机号"
                placeholder="手机号"
                :rules="[{ required: true, message: '请填写正确手机号' }]"
            />
            <van-field
                v-model="password"
                type="password"
                name="password"
                label="密码"
                placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]"
            />
        </van-cell-group>
        <div style="margin: 16px">
            <van-button round block type="primary" @click="toRegister">
                注册
            </van-button>
            <van-button round block type="success" native-type="submit">
                登录
            </van-button>
        </div>
    </van-form>
</template>

<script setup lang="ts">
import { useAccount } from '@/hooks/login'
const {phoneNumber,password ,bindBack,onSubmit,toRegister } = useAccount()
</script>

<style scoped>
img{
    margin-top: 50px;
    margin-left: 100px;
    margin-bottom: 50px;
}
.van-button{
    margin-bottom: 10px;
}
</style>
