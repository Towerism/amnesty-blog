<template>
  <div id="app">
    <img src="./assets/logo.png">
    <progress-bar></progress-bar>
    <router-view></router-view>
  </div>
</template>

<script>
  import ProgressBar from './components/ProgressBar'
  export default {
    name: 'app',
    components: {
      ProgressBar
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
