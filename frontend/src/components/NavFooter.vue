<template lang="pug">
  #nav-footer
    b-navbar(type="light" variant="light").fixed-bottom
      .container
        b-nav(is-nav-bar)
          b-nav-item &copy; {{year}} Amnesty International All Rights Reserved
</template>

<script>
  export default {
    name: 'nav-footer',
    data() {
      return {
        year: new Date().getFullYear()
      }
    }
  }
</script>
