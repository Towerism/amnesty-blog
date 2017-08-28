<template lang="pug">
  #app
    progress-bar
    nav-bar
    #view.container
      router-view
    nav-footer
</template>

<script>
  import ProgressBar from './components/ProgressBar'
  import NavBar from './components/NavBar'
  import NavFooter from './components/NavFooter'

  export default {
    name: 'app',
    components: {
      ProgressBar,
      NavBar,
      NavFooter
    }
  }
</script>

<style lang="stylus">
  #app
    font-family: 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    color: #2c3e50
    #view
      padding-top: 65px
</style>
