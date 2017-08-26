<template>
  <div class="home">
    <div class="container">
      <b-jumbotron header="Amnesty International" lead="Justice, freedom, truth, and dignity">
        <p>
          Amnesty International is a global movement of millions of people demanding human rights for all people – no
          matter who they are or where they are. We are the world’s largest grassroots human rights organization.
        </p>
      </b-jumbotron>
    </div>
  </div>
</template>

<script>
  import api from '@/api'
  export default {
    name: 'home',
    data () {
      return {
        version: 0
      }
    },
    created () {
      api.get('/version').then(response => {
        this.version = response.data
      })
    }
  }
</script>
