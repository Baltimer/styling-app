import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import './assets/css/style.css';

Vue.use(Vuex)

import router from './router'

Vue.config.productionTip = false

import store from './store.js'

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
