<template>
  <van-nav-bar left-text="确认地址" left-arrow @click-left="bindBack" />
  <van-address-edit :area-list="areaList" show-set-default :area-columns-placeholder="['请选择', '请选择', '请选择']"
    @save="onSave" />
</template>
<script setup lang="ts">
import { areaList } from '@vant/area-data'
import { useAddress } from '@/hooks/address'
const { bindBack, onSave } = useAddress()
</script>

<style scoped>

</style>