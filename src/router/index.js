import { createRouter, createWebHistory } from 'vue-router'
import MyHome from '@/components/MyHome.vue'
import MyKintai from '@/components/MyKintai.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: MyHome
  },
  {
    path: '/attendance',
    name: 'attendance',
    component: MyKintai
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router