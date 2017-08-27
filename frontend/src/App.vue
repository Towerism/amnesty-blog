<template lang="pug">
  #app
    progress-bar
    nav-bar
    .container
      router-view
</template>

<script>
  import ProgressBar from './components/ProgressBar'
  import NavBar from './components/NavBar'
  export default {
    name: 'app',
    components: {
      ProgressBar,
      NavBar
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
