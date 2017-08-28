<template lang="pug">
  screen(title="Login")
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
  import Screen from './Screen'

  export default {
    name: 'login',
    components: {
      Screen
    },
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
          this.$router.push('/')
        }).catch(() => {
          this.loginError = true
        })
      }
    }
  }
</script>
