<!-- 首页 -->
<template>
    <topbar :title="'首页'" />
    <div :style="{ paddingTop: aqTop }">首页</div>
    <tabbar :value="0" />
</template>

<script setup>
import topbar from "@/components/tabbar/topbar.vue";
import tabbar from '@/components/tabbar/tabbar.vue';
// 安全区域顶部高度
const aqTop = uni.$u.sys().safeArea.top + 48 + 'px';
</script>
<style lang='scss' scoped></style>