import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
Vue.use(VueRouter)
import Login from '@/views/Login'
import FindPass from '@/views/FindPass'
import Table from '@/router/Table'
import Coupon from '@/router/Coupon'
import Queue from '@/router/Queue'



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
    children: [
      ...Table,
      ...Coupon,
      ...Queue
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
