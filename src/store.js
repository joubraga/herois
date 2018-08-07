import Vue from 'vue'
import Vuex from 'vuex'
import routeStore from './store/modules/route'

Vue.use(Vuex)

export default {
  modules: {
    routeStore
  }
}
