<template lang="pug">
  #nav-bar
    b-navbar(toggleable="md" type="dark" variant="dark")
      b-navbar-brand(to="/") Amnesty
      b-nav(is-nav-bar)
        b-nav-item(to="/home") Home
        b-nav-item(to="/login") Login
</template>

<script>
  export default {
    name: 'nav-bar'
  }
</script>
