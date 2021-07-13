<template>
  <v-container grid-list-xs>
    <list-header
      :title="headers.main.title"
      :description="headers.main.description"
    />
    <v-row>
      <v-col />
      <v-col cols="9">
        <v-card class="pa-2" outlined>
          <v-card-title primary-title>
            Vous avez différents moyens de me joindre ou de me retrouver !📱
          </v-card-title>
          <v-card-text align="center">
            <v-btn
              v-for="(icon, i) in icons"
              :key="i"
              :href="icon.link"
              target="_blank"
              icon
              class="mx-4"
            >
              <v-icon>{{ icon.icon }}</v-icon>
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col />
    </v-row>
  </v-container>
</template>
<script>
import ListHeader from '../components/ListHeader.vue'
export default {
  components: { ListHeader },
  data () {
    return {
      headers: {
        main: {
          title: 'Me contacter',
          description: 'N\'hésitez pas à me contacter quelque soit le motif de votre message, je prendrai le temps de le lire! 😌'
        }
      },
      icons: {
        linkedin: {
          link: 'https://www.linkedin.com/in/samuel-galiere/',
          icon: 'mdi-linkedin'
        },
        twitter: {
          link: 'https://twitter.com/Sammysterieux',
          icon: 'mdi-twitter'
        },
        mail: {
          link: 'mailto:samuelgaliere.pro@gmail.com',
          icon: 'mdi-gmail'
        },
        telegram: {
          link: 'https://t.me/Sammysterieux',
          icon: 'mdi-telegram'
        },
        github: {
          link: 'https://github.com/Y0hark',
          icon: 'mdi-github'
        }
      }
    }
  }
}
</script>
<style>

</style>
