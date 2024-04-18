import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni' // uni-app插件
import AutoImport from 'unplugin-auto-import/vite' // 自动导入uni-app的api
import PxToRpx from 'postcss-pxtorpx-pro'; // px转rpx


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    // 自动导入uni-app的api
    AutoImport({
      imports: [
        'vue',
        'uni-app',
      ],
    }),
  ],
  server: {
    port: 3000, // 开发环境启动端口
    host: 'localhost', // 服务器的主机
    // host: '0.0.0.0', // 服务器的主机
    open: true, // 自动打开浏览器
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/uni.scss";`
      }
    },
  // 添加postcss-pxtorpx-pro插件配置
    postcss: {
      plugins: [
        PxToRpx({
          unit: 'rpx',
          propList: ['*'],
          unitPrecision: 5,
          selectorBlackList: ['no-px'],
          replace: true,
          mediaQuery: false,
          minPixelValue: 0,
          transform: (x) => 2 * x,
        })
      ]
    },
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
