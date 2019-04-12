import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: !!localStorage.getItem('token'),
    isLog: !!localStorage.getItem('situation'),
    username: !!localStorage.getItem('username'),
    is_admin: !!localStorage.getItem('is_admin'),
    id: !!localStorage.getItem('id')
  },
  mutations: {
    loginUser (state) {
      state.isLoggedIn = true
      state.isLog = true
      state.username = true
    },
    logoutUser (state) {
      state.isLoggedIn = false
      state.isLog = false
      state.username = false
      state.is_admin = false
    }
  }
})
