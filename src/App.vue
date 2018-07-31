<template>
  <v-app>

    <Header :logo="imagem" />
    
    <v-content>
      <router-view />
    </v-content>
    
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>

  </v-app>
</template>

<script>
  import Header from './components/theme/header/Header'

  export default {
    name: 'App',
    data () {
      return {
        fixed: false,
        right: true,
        imagem: 'caminho da imagem'
      }
    },
    components: {
      Header
    }
  }
</script>
