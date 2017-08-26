<template>
  <div id="app">
    <progress-bar></progress-bar>
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-navbar-brand to="/">Amnesty</b-navbar-brand>
      <b-nav is-nav-bar>
        <b-nav-item to="/">Home</b-nav-item>
      </b-nav>
    </b-navbar>
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
  }
</style>
