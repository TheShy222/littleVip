<template>
  <van-sticky :offset-top="0">
    <van-nav-bar title="设置" left-text="返回" left-arrow @click-left="bindBack"/>
  </van-sticky>
  <van-cell title="收货地址" is-link />
  <van-cell title="账号与安全" is-link />
  <van-cell title="支付服务设置" is-link />
  <van-cell title="接收通知" is-link value="已开启" />
  <van-cell title="深浅外观切换" is-link value="浅色" />
  <van-cell title="标准版/长辈版切换" is-link value="标准版" />
  <van-cell title="列表视频自动播放" is-link value="WiFi" />
  <van-cell title="清除图片缓存" is-link value="10.2M" />
  <van-cell title="隐私设置" is-link/>
  <van-cell title="个人信息收集和使用清单" is-link/>
  <van-cell title="个人信息第三方共享清单" is-link/>
  <van-cell title="隐私政策摘要" is-link/>
  <van-cell title="APP版本" is-link value="7.87.4" />
  <van-cell title="关于唯品会" is-link/>
  <van-button @click="confirmRun">退出登录</van-button>
</template>

<script setup lang="ts">
import { userSetting } from "@/hooks/setting";
const { bindBack,confirmRun } = userSetting()
</script>

<style scoped>
.van-button{
  width: 100%;
  color: red;
}
</style>