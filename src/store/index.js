import Vue from 'vue'
import Vuex from 'vuex'
import newFoods from './newFoods.js'
import users from './users'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        newFoods,
        users
    }
})