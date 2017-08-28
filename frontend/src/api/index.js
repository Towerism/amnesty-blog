import http from './http'

export default {
  setAuthHeader(authHeader) {
    http.defaults.headers.common['Authorization'] = authHeader
  },

  post(path, data = {}) {
    return http.post(path, data)
  },

  get(path) {
    return http.get(path)
  }
}
