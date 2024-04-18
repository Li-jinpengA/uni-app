<!-- 自定义tabbar -->
<template>
    <view class="tabbar">
        <u-tabbar :value="value4" @change="change" :fixed="false" :placeholder="false" inactiveColor="#414550"
            activeColor="#25AD81" :safeAreaInsetBottom="false">
            <u-tabbar-item :text="item.text" v-for="(item, index) in pages" :key="index">
                <template #inactive-icon>
                    <image class="u-page__item__slot-icon" :src="item.iconPath"></image>
                </template>
                <template #active-icon>
                    <image class="u-page__item__slot-icon" :src="item.selectedIconPath">
                    </image>
                </template>
            </u-tabbar-item>
        </u-tabbar>
    </view>
</template>

<script setup>
import { ref, reactive, onMounted, defineProps } from 'vue'

const value4 = ref(0)

const props = defineProps(['value']);

if (props.value) {
    value4.value = props.value
}

function change(index) {
    uni.switchTab({
        url: '/' + pages[index].pagePath
    })
}
const pages = [
    {
        "pagePath": "pages/tab/home/index", // 页面路径，必须在 pages 中先定义
        "text": "首页", // tab 上按钮文字
        "iconPath": "/static/image/home.png", // 图标路径
        "selectedIconPath": "/static/image/home-x.png" // 选中时的图标路径
    },
    {
        "pagePath": "pages/tab/inspection/index",
        "text": "巡检",
        "iconPath": "/static/image/inspection.png",
        "selectedIconPath": "/static/image/inspection-x.png"
    },
    {
        "pagePath": "pages/tab/device/index",
        "text": "设备",
        "iconPath": "/static/image/device.png",
        "selectedIconPath": "/static/image/device-x.png"
    },
    {
        "pagePath": "pages/tab/mine/index",
        "text": "我的",
        "iconPath": "/static/image/mine.png",
        "selectedIconPath": "/static/image/mine-x.png"
    }
]
</script>
<style lang='scss' scoped>
.tabbar {
    position: absolute;
    z-index: 1000;
    bottom: 0;
    width: 100%;
    height: 72px;
}
</style>
