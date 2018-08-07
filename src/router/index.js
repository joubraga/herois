import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router.map'
import store from '../store'

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  store.modules.routeStore.state.name = to.meta.name
  store.modules.routeStore.state.bradcrumb = to.meta.breadcrumb
  next()
})

export default router
