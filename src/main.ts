import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './stores'

import 'normalize.css' // 重置样式

// 导入vant函数组件样式
import 'vant/es/toast/style'
import 'vant/es/dialog/style'
import 'vant/es/notify/style'
import 'vant/es/image-preview/style'

const app = createApp(App)

app.use(store)
app.use(router)

app.mount('#app')
