<!-- 自定义顶部导航栏 -->
<template>
    <view class="dh">
        <!-- 2.0.19支持autoBack，默认为false -->
        <u-navbar :title="prop.title" :autoBack="true" :safeAreaInsetTop="true" height="48px" bgColor="transparent">
            <template #left>
                <view class="u-nav-slot">
                    <image class="icon" src="@/static/svg/chevron-left.svg" />
                </view>
            </template>
        </u-navbar>
    </view>
</template>

<script setup>
import { ref, reactive, onMounted, defineProps } from 'vue'

const prop = defineProps(['title']);
</script>
<style lang='scss' scoped>
.dh {
    .u-nav-slot {
        display: flex;
    }



    .icon {
        width: 24px;
        height: 24px;
    }
}
</style>