// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './vuex/store'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false
Vue.use(Vuex);
Vue.use(iView);
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router:router,
  store:store,
  template: '<App/>',
  components: { App }
})

