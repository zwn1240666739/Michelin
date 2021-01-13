import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/Login'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    _token: '',
    OrderDetail: {}
  },
  mutations: {
    getOrderDetail (state,list) {
      state.OrderDetail = list
    }
  },
  actions: {
  },
  modules: {
    login,
  }
})
