import auth from './service'

export default {
  namespaced: true,
  state: {
    isAuthenticated: auth.checkAuth()
  },
  getters: {
    isAuthenticated(state) {
      return state.isAuthenticated
    }
  },
  mutations: {
    isAuthenticated(state, { isAuthenticated }) {
      state.isAuthenticated = isAuthenticated
    }
  },
  actions: {
    login(context, payload) {
      return auth.login(payload).then(response => {
        context.commit('isAuthenticated', {
          isAuthenticated: auth.isAuthenticated()
        })
      })
    },
    logout(context) {
      return auth.logout().then(response => {
        context.commit('isAuthenticated', {
          isAuthenticated: false
        })
      })
    }
  }
}
