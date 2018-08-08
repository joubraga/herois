import '@babel/polyfill'
import '@/assets/css/style.scss'
import Vue from 'vue'
import './plugins/vuetify'
import { ENDPOINT } from './api/config'
import App from './App.vue'
import router from './router/index'
import store from './store'
import VueResource from 'vue-resource'
import VueSweetalert2 from 'vue-sweetalert2'

Vue.use(VueSweetalert2);
Vue.use(VueResource)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  ENDPOINT,
  render: h => h(App)
}).$mount('#app')
