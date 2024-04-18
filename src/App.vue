<script>
export default {
  onLaunch: function () { // 小程序初始化完成时触发
    // console.log('App Launch')
  },
  onShow: function () { // 小程序启动，或从后台进入前台显示时触发
    // console.log('App Show')
  },
  onHide: function () { // 小程序从前台进入后台时触发
    // console.log('App Hide')
  },
}
</script>

<style lang="scss">
/*每个页面公共css */

/* 引入uView */
@import "uview-plus/index.scss";
/* 引入公共样式 */
@import '@/common/common.scss';
</style>
