import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import { ENDPOINT } from './api/config'
import App from './App.vue'
import router from './router/index'
import store from './store'
import '@/assets/css/style.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  ENDPOINT,
  render: h => h(App)
}).$mount('#app')
