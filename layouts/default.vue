<template>
  <v-app dark>
    <nav-bar />
    <v-main>
      <v-container grid-list-xs fill-height>
        <Nuxt />
      </v-container>
    </v-main>
    <footer-site />
  </v-app>
</template>

<script>
import FooterSite from '../components/FooterSite.vue'
import NavBar from '../components/NavBar.vue'
export default {
  components: { NavBar, FooterSite },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false
    }
  }
}
</script>
