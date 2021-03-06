import Vue from 'vue'
import Vuex from 'vuex'
import newFoods from './newFoods.js'
import users from './users'
import login from './modules/Login'

Vue.use(Vuex)
import Table from './table'
import Coupon from './coupon'


export default new Vuex.Store({
    state: {
        _token: '',
        OrderDetail: {}
    },
    mutations: {
        getOrderDetail(state, list) {
            state.OrderDetail = list
        }
    },
    actions: {},
    getters: {

    },
    modules: {
        Table,
        Coupon,
        login,
        newFoods,
        users
    }
})