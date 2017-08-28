<template lang="pug">
  #screen
    .row.justify-content-center
      #header.col-md-4.col-12.text-center
        h5
          b {{title}}
    .row.justify-content-center
      #body.col-md-4.col-12
        slot
</template>

<script>
  export default {
    name: 'screen',
    props: {
      title: String
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
  #body
    background: #f0f0f0
    border-bottom-radius: 5px
    color: #444
    padding-bottom: 15px
</style>
