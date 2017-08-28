import http from './http'

export default {
  setHeader(header) {
    http.defaults.headers = { header }
  },

  post(path, data = {}) {
    return http.post(path, data)
  },

  get(path) {
    return http.get(path)
  }
}
