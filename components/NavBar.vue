<template>
  <nav>
    <v-app-bar
      dense
      fixed
      app
    >
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-app-bar-title class="text-uppercase">
        <span class="font-weight-light">Sammy's</span>
        Lab
      </v-app-bar-title>

      <v-navigation-drawer v-model="drawer" app absolute temporary>
        <v-list>
          <v-list-item nuxt to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>

            <v-list-item-title>Accueil</v-list-item-title>
          </v-list-item>

          <v-list-group
            prepend-icon="mdi-face"
          >
            <template #activator>
              <v-list-item-title>Me découvrir</v-list-item-title>
            </template>

            <v-list-item
              v-for="(item, i) in profile"
              :key="i"
              nuxt
              :to="item.path"
            >
              <v-list-item-title v-text="item.title" />

              <v-list-item-icon>
                <v-icon v-text="item.icon" />
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>

          <v-list-group
            prepend-icon="mdi-view-dashboard-variant"
          >
            <template #activator>
              <v-list-item-content>
                <v-list-item-title>Mon portfolio</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              v-for="(item, i) in portfolio"
              :key="i"
              nuxt
              :to="item.path"
            >
              <v-list-item-title v-text="item.title" />

              <v-list-item-icon>
                <v-icon v-text="item.icon" />
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>

          <v-list-item nuxt to="/articles/articles_index">
            <v-list-item-icon>
              <v-icon>mdi-newspaper-variant-multiple-outline</v-icon>
            </v-list-item-icon>

            <v-list-item-title>Mes posts</v-list-item-title>
          </v-list-item>

          <v-list-item nuxt to="/contacts">
            <v-list-item-icon>
              <v-icon>mdi-contacts</v-icon>
            </v-list-item-icon>

            <v-list-item-title>Me contacter</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-spacer />

      <div class="text-center">
        <v-menu offset-y>
          <template #activator="{ on, attrs }">
            <v-btn
              dark
              icon
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>mdi-apps</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, i) in items" :key="i">
              <v-list-item-title><a style="text-decoration=none" :href="item.link" target="_blank" rel="noopener noreferrer">{{ item.title }}</a></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      profile: [
        { title: 'Mon profil', icon: 'mdi-face-recognition', path: '/profile/general_profile' },
        { title: 'Mes passions', icon: 'mdi-heart', path: '/profile/hobbies' }
      ],
      portfolio: [
        { title: 'Mes projets Web', icon: 'mdi-web', path: '/portfolio/portfolio_sites' },
        { title: 'Mes projets Apps/Code', icon: 'mdi-application-cog', path: '/portfolio/portfolio_apps' },
        { title: 'Mes projets Expériences', icon: 'mdi-flask', path: '/portfolio/portfolio_experiments' }
      ],
      items: {
        cv: {
          link: 'https://drive.google.com/file/d/1YV3gYHajh2vqprKM5mmVeSNeVA_mGeud/view?usp=sharing',
          title: 'Télécharger mon C.V'
        },
        mail: {
          link: 'mailto:samuelgaliere.pro@gmail.com',
          title: 'M\'envoyer un mail'
        },
        git: {
          link: 'https://github.com/Y0hark/sammylab',
          title: 'Le repo du projet'
        }
      }
    }
  }
}
</script>
