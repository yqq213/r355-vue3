import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/trend-analyse',
    component: () => import('@/components/Layout/index.vue'),
    children: [
      {
        path: 'index/:type',
        name: 'trendAnalys',
        component: () => import('@/views/trendAnalys/index.vue'),
      },
      {
        path: 'detail/:id',
        component: () => import('@/views/trendAnalys/detail.vue'),
      }
    ]
  },
  {
    path: '/market-style',
    component: () => import('@/components/Layout/index.vue'),
    children: [
      {
        path: 'index',
        name: 'marketStyle',
        component: () => import('@/views/marketStyle/index.vue'),
      },
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

export default router