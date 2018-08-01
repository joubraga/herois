import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
// import LayoutAdmin from './containers/layout/Admin'

import ListaPersonagens from './views/admin/herois/list'
import CriarPersonagens from './views/admin/herois/create'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/personagens',
      name: 'personagens',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: '/personagens/lista',
          name: 'ListaPersonagens',
          component: ListaPersonagens
        },
        {
          path: '/personagens/criar',
          name: 'CriarPersonagens',
          component: CriarPersonagens
        },
        {
          path: '/personagens/editar',
          name: 'EditarPersonagem',
          component: CriarPersonagens
        },
      ]
    }
  ]
})
