<template>
    <div class="main">
      <Header :logo="imagem" />

      <main>
        <v-content>
          <router-view />
        </v-content>
      </main>

      <footer>
        <v-footer :fixed="fixed" app>
          <span>&copy; 2018</span>
        </v-footer>
      </footer>
    </div>
</template>

<script>
  import Header from '../../components/theme/header/Header'

  export default {
    name: 'LayoutAdmin',
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
