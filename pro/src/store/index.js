import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation.js'
import actions from './actions.js'
Vue.use(Vuex)
const store  = new Vuex.Store({
  state: {
    all: []
  },
  mutations,
  actions
 })
export default store