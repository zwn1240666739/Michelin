import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
Vue.use(VueRouter)
import Login from '@/views/Login'
import FindPass from '@/views/FindPass'
import Table from '@/router/Table'
import Coupon from '@/router/Coupon'
import Queue from '@/router/Queue'


import AccountSetting from '@/views/AccountSetting/AccountSetting'
import OrderList from '@/views/OrderList/OrderList'
import OrderDetail from '@/views/OrderList/OrderDetail'

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
    path: '/OrderDetail',
    component: OrderDetail
  },
  {
    path: '/home',
    component: Home,
    children: [
      ...Table,
      ...Coupon,
      ...Queue,
      {
        path: 'setAccount',
        component: AccountSetting
      },
      {
        path: '4-2',
        component: OrderList
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
