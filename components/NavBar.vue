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

          <v-list-item nuxt to="/posts/posts_index">
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

      <v-btn color="icon">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn color="icon">
        <v-icon>mdi-apps</v-icon>
      </v-btn>
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
        { title: 'Mes sites web', icon: 'mdi-web', path: '/portfolio/portfolio_sites' },
        { title: 'Mes logiciels', icon: 'mdi-application-cog', path: '/portfolio/portfolio_apps' },
        { title: 'Mes expérimentations', icon: 'mdi-flask', path: '/portfolio/portfolio_experiments' }
      ]
    }
  }
}
</script>
