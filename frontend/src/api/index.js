import http from './http'

export default {
  get (path, data = {}) {
    return http.get(path)
  }
}
