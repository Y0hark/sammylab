import colors from 'vuetify/es5/util/colors'

export default {

  // Modify env variable
  env: {
    strapiBaseUri: process.env.API_URL || 'https://serene-reef-47629.herokuapp.com'
  },

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: 'Sammy\'s Lab',
    title: 'Sammy\'s Lab',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/strapi',
    '@nuxtjs/apollo',
    '@nuxtjs/markdownit'
  ],

  // Configuring markdownit module for nuxtjs
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.teal.base,
          secondary: colors.blueGrey.base,
          accent: colors.indigo.base,
          error: colors.red.base,
          warning: colors.pink.base,
          info: colors.cyan.base,
          success: colors.green.base
        }
      }
    }
  },

  // Configuring strapi module for nuxtjs
  strapi: {
    entities:
    ['categories', 'articles', 'hobbies', 'projects_showcases', 'experiences', 'skills', 'studies', 'presentation_site', 'general_presentation'],
    url: 'https://serene-reef-47629.herokuapp.com'
  },

  // Configuring apollo module for nuxtjs
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.BACKEND_URL || 'https://serene-reef-47629.herokuapp.com/graphql'
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
