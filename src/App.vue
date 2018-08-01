<template>
  <v-app>
    <LayoutAdmin />
  </v-app>
</template>

<script>
  import LayoutAdmin from './containers/layout/Admin'

  export default {
    name: 'Heróis',
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
