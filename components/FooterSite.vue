<template>
  <v-card
    flat
    tile
    class="primary darken-2 text-center"
  >
    <v-card-text>
      <v-btn
        v-for="(icon, i) in icons"
        :key="i"
        :href="icon.link"
        target="_blank"
        class="mx-4 white--text"
        icon
      >
        <v-icon size="24px">
          {{ icon.icon }}
        </v-icon>
      </v-btn>
    </v-card-text>

    <v-card-text class="white--text pt-0">
      Merci beaucoup à tous les contributeurs qui font marcher la stack de technologie sur laquelle je repose pour développer ce site. Ils font un travail monstrueux donc n'oubliez pas de les remercier si vous utilisez leurs solutions!
    </v-card-text>

    <v-divider />

    <v-card-text class="white--text">
      {{ new Date().getFullYear() }} — Sammy's<strong>Lab</strong>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  data () {
    return {
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
          icon: 'mdi-android-messages'
        },
        github: {
          link: 'https://github.com/Y0hark',
          icon: 'mdi-github'
        },
        download: {
          link: 'https://drive.google.com/file/d/1YV3gYHajh2vqprKM5mmVeSNeVA_mGeud/view?usp=sharing',
          icon: 'mdi-download'
        },
        vuetify: {
          link: 'https://vuetifyjs.com/en/',
          icon: 'mdi-vuetify'
        },
        heroku: {
          link: 'https://dashboard.heroku.com/',
          icon: 'mdi-salesforce'
        },
        nuxt: {
          link: 'https://nuxtjs.org/',
          icon: 'mdi-nuxt'
        }
      }
    }
  }
}
</script>
