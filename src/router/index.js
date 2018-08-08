import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router.map'
import VueBreadcrumbs from 'vue2-breadcrumbs'
Vue.use(VueBreadcrumbs)

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

export default router
