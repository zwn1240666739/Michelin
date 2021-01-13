import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import Table from './table'
import Coupon from './coupon'


export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  getters: {

  },
  modules: {
    Table,
    Coupon
  }
})
