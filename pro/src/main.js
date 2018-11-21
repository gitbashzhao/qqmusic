// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Muse from './muse-ui.config.js'
import MuseUI from 'muse-ui';
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
Vue.use(Muse);
Vue.use(VueAxios,axios)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
