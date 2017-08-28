<template lang="pug">
  div
    .row.justify-content-center
      #header.col-md-4.col-12.text-center
        h5
          b Login
    .row.justify-content-center
      #login.col-md-4.col-12
        #body
          b-form(@submit.prevent="onSubmit")
            b-form-group(label="Email" label-for="email")
              b-form-input#email(type="email" required placeholder="Enter email" v-model="credentials.email")
            b-form-group(label="Password" label-for="password")
              b-form-input#password(type="password" required placeholder="Enter Password" v-model="credentials.password")
            b-form-group
              b-form-checkbox(v-model="rememberMe") Remember me
            b-button(type="submit") Submit
</template>

<script>
  import router from '@/router'

  export default {
    name: 'login',
    data() {
      return {
        loginError: false,
        rememberMe: false,
        credentials: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      onSubmit() {
        this.$store.dispatch('auth/login', this.credentials).then(() => {
          router.push('/home')
        }).catch(() => {
          this.loginError = true
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>
  border-bottom-radius(n)
    border-bottom-left-radius: n
    border-bottom-right-radius: n

  #header
    padding: 9px 0 5px 0
    background: #ddd
  #login
    background: #f0f0f0
    border-bottom-radius: 5px
    color: #444
    padding-bottom: 15px
</style>
