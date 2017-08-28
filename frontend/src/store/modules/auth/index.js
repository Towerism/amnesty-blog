import auth from './service'

export default {
  namespaced: true,
  state: {
    isAuthenticated: auth.isAuthenticated(),
    user: auth.getUserInfo()
  },
  getters: {
    isAuthenticated(state) {
      return state.isAuthenticated
    },
    user(state) {
      return state.user
    }
  },
  mutations: {
    authenticate(state, { isAuthenticated, user }) {
      state.isAuthenticated = isAuthenticated
      state.user = user
    }
  },
  actions: {
    login(context, payload) {
      return auth.login(payload).then(response => {
        context.commit('authenticate', {
          isAuthenticated: auth.isAuthenticated(),
          user: auth.getUserInfo()
        })
      })
    },
    logout(context) {
      return auth.logout().then(response => {
        context.commit('authenticate', {
          isAuthenticated: false,
          user: auth.getUserInfo()
        })
      })
    }
  }
}
