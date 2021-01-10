import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
Vue.use(VueRouter)
import Login from '@/views/Login'
import FindPass from '@/views/FindPass'

const routes = [
  {
    path: '/',
    component: Login
  },
  {
    path: '/fp',
    component: FindPass
  },
  {
    path: '/home',
    component: Home,
    children: []
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
