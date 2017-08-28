import api from '@/api'
import jwtDecode from 'jwt-decode'

const AUTH_TOKEN = 'authToken'

// URL and endpoint constants
export default {
  login(creds) {
    return api.post('/login', creds).then(response => {
      localStorage.setItem(AUTH_TOKEN, response.data)
      api.setAuthHeader(this.getAuthHeader())
      return Promise.resolve()
    }).catch(error => {
      return Promise.reject(error)
    })
  },

  logout() {
    localStorage.removeItem(AUTH_TOKEN)
    return Promise.resolve()
  },

  isAuthenticated() {
    var jwt = getToken()
    if (jwt) {
      api.setAuthHeader(this.getAuthHeader())
    }
    return !!jwt // TODO: verify exp claim
  },

  getUserInfo() {
    if (!this.isAuthenticated()) {
      return null
    }
    var decodedToken = jwtDecode(getToken())
    return {
      id: decodedToken.sub,
      email: decodedToken.email,
      fullname: decodedToken.fullname
    }
  },

  // The object to be passed as a header for authenticated requests
  getAuthHeader() {
    return `bearer ${getToken()}`
  }
}

function getToken() {
  return localStorage.getItem(AUTH_TOKEN)
}
