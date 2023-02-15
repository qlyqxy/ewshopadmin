import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter,createWebHistory} from "vue-router";
//1.定义路由组件
//依然可以从其他文件导入
import Home from './views/Home.vue'
import Login from './views/Login.vue'
//2.定义一些路由
//我们后面讨论嵌套路由

const routes =[
    {path: '/',component: Home},
    {path: '/login',component: Login},
]
// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHistory(),
    routes, // `routes: routes` 的缩写
})


const app = createApp(App)
//确保 _use_ 路由实例使
//整个应用支持路由。
app.use(router)

app.mount('#app')
