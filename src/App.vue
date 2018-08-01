<template>
  <v-app class="app">
    <LayoutAdmin />
  </v-app>
</template>

<script>
  import LayoutAdmin from './containers/layout/Admin'

  export default {
    name: 'Herois',
    data () {
      return {
        fixed: false,
        right: true
      }
    },
    components: {
      LayoutAdmin
    }
  }
</script>

<style lang="css">
  .app {
    background-color: #f5f7fa!important;
  }
</style>
