<template lang="pug">
  #progress-bar
    vue-progress-bar
</template>

<script>
  import Vue from 'vue'
  import VueProgressBar from 'vue-progressbar'
  import http from '@/api/http'

  Vue.use(VueProgressBar)

  export default {
    name: 'progress-bar',
    data () {
      return {
        requestsInProgress: 0
      }
    },
    created () {
      this.setUpProgressStart()
      this.setUpProgressFinish()
    },
    methods: {
      setUpProgressStart () {
        http.interceptors.request.use(request => {
          this.$Progress.start()
          this.requestsInProgress++
          return request
        })
      },
      setUpProgressFinish () {
        http.interceptors.response.use(response => {
          this.requestsInProgress--
          if (this.requestsInProgress === 0) {
            this.$Progress.finish()
          }
          return response
        }, error => {
          this.$Progress.fail()
          return Promise.reject(error)
        })
      }
    }
  }
</script>
