import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Category from '@/views/Category.vue'
import Layout from '@/views/Layout.vue'
import Cart from '@/views/Cart.vue'
import My from '@/views/My.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: Layout,
            redirect: '/home',
            children: [
                {
                    path: '/home',
                    name: 'home',
                    component: Home,
                },
                {
                    path: '/category',
                    name: 'category',
                    component: Category,
                },
                {
                    path: '/cart',
                    name: 'cart',
                    component: Cart,
                },
                {
                    path: '/my',
                    name: 'my',
                    component: My,
                },
            ],
        },
        {
            path: '/detail',
            name: 'detail',
            component: () => import('@/views/Detail.vue'),
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/Login.vue'),
        },
        {
            path: '/addAddress',
            name: 'addAddress',
            component: () => import('@/views/AddAddress.vue'),
        },
        {
            path: '/clearCart',
            name: 'clearCart',
            component: () => import('@/views/ClearCart.vue'),
        },
        {
            path: '/allOrder',
            name: 'allOrder',
            component: () => import('@/views/AllOrder.vue'),
        },
        {
            path: '/toOrderDetail',
            name: 'orderDetail',
            component: () => import('@/views/OrderDetail.vue'),
        },
        {
            path: '/setting',
            name: 'setting',
            component: () => import('@/views/Setting.vue'),
        },
        {
            path: '/toRegister',
            name: 'register',
            component: () => import('@/views/Register.vue'),
        }
    ],
})

export default router
