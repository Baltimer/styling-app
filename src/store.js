import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import { componentSections } from './componentSections.js'

const store = new Vuex.Store({
  state: {
    sideMenuOpen: true,
    toggling: false,
    componentSections
  },
  mutations: {
    toggleSideMenu(state) {
      if(!state.toggling){
        state.toggling = true
        setTimeout(function() {
          state.sideMenuOpen = !state.sideMenuOpen
          state.toggling = false
        }, 500) // The 300 references to the transation delay
      }
    }
  },
  getters: {
    sideMenuOpen: state => state.sideMenuOpen,
    componentSections: state => state.componentSections
  }
})

export default store 