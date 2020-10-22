import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    sideMenuOpen: true,
    toggling: false
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
    sideMenuOpen: state => state.sideMenuOpen
  }
})

export default store 