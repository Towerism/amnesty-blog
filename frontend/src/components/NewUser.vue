<template lang="pug">
  screen(title="New User")
    b-form(@submit.prevent="onSubmit")
      b-form-group(label="Email" label-for="email")
        b-form-input#email(type="email" required placeholder="Enter email" v-model="user.email")
      b-form-group(label="First Name" label-for="firstname")
        b-form-input#firstname(type="text" required placeholder="Enter first name" v-model="user.firstname")
      b-form-group(label="Last Name" label-for="lastname")
        b-form-input#lastname(type="text" required placeholder="Enter last name" v-model="user.lastname")
      b-form-group
      b-button(type="submit") Submit
</template>

<script>
  import Screen from './Screen'
  import api from '@/api'

  export default {
    name: 'new-user',
    components: {
      Screen
    },
    data() {
      return {
        user: {
          email: '',
          firstname: '',
          lastname: ''
        }
      }
    },
    methods: {
      onSubmit() {
        api.post('/users/create', this.user).then(() => {
          this.$router.push('/')
        })
      }
    }
  }
</script>
