import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
Vue.use(VueRouter)
import Login from '@/views/Login'
import FindPass from '@/views/FindPass'
import DishesManagement from '@/views/DishesManagement/DishesManagement'
import Newly from '@/views/DishesManagement/Newly'
import Staff from '@/views/Staff/Index'
import Employee from '@/views/Staff/Employee'
// import OrderDetail from '@/views/OrderList/OrderDetail'
import Reserve from '@/views/Reserve/Reserve'
// const routes = [{
//         path: '/',
//         component: Login
//     },
//     {
//         path: '/fp',
//         component: FindPass
//     },
//     {
//         path: '/home',
//         component: Home,
//         children: [
//             {
//                 path: '2-1',
//                 component: DishesManagement,

//             },
//             {
//                 path: '2-1-1',
//                 component: Newly
//             },
//             {
//                 path: '9-1',
//                 component: Staff
//             },
//             {
//                 path: '9-1-1',
//                 component: Employee
//             },
//             // {
//             //     path: '/orderDetail',
//             //     component: OrderDetail
//             // },
//             {
//                 path: '8-2',
//                 component: Reserve
//             },
//         ],

//     }
import Table from '@/router/Table'
import Coupon from '@/router/Coupon'
import Queue from '@/router/Queue'


import AccountSetting from '@/views/AccountSetting/AccountSetting'
import OrderList from '@/views/OrderList/OrderList'
import OrderDetail from '@/views/OrderList/OrderDetail'

const routes = [{
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
            },
            {
                path: '2-1',
                component: DishesManagement,

            },
            {
                path: '2-1-1',
                component: Newly
            },
            {
                path: '9-1',
                component: Staff
            },
            {
                path: '9-1-1',
                component: Employee
            },
            // {
            //     path: '/orderDetail',
            //     component: OrderDetail
            // },
            {
                path: '8-2',
                component: Reserve
            },
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router