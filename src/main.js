import '@/assets/css/reset.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import '@/assets/css/reset.css'
import 'element-ui/lib/theme-chalk/index.css';
import axios from '@/api/http'

let jwt = localStorage.getItem('_token')
// console.log(jwt)
if (!jwt) {
  router.push('/')
}
Vue.use(ElementUI)
Vue.prototype.$http = axios

Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
