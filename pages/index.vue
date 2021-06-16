<template>
  <v-container grid-list-xs fluid>
    <v-row>
      <v-col />
      <v-col cols="7">
        <v-card outlined class="pa-2">
          <h1 align="center" justify="center">
            {{ presentationSite.title }}
          </h1>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div v-html="$md.render(String(presentationSite.copy))" />
        </v-card>
      </v-col>
      <v-col />
    </v-row>
    <v-row>
      <v-col />
      <v-col cols="7">
        <v-card align="center" outlined class="pa-2">
          <h2>Mes actualités</h2>
          <br>
          <p>Ci-dessous sont listées les actualités de mon site!</p>
        </v-card>
      </v-col>
      <v-col />
    </v-row>
    <v-row v-for="myNew in myNews" :key="myNew.id">
      <v-col />

      <card-news :my-new="myNew" />

      <v-col />
    </v-row>
  </v-container>
</template>
<script>
import CardNews from '../components/CardNews.vue'
import presentationSite from '~/apollo/queries/unics/presentation_site.gql'
import myNewsQuerry from '~/apollo/queries/mynews/mynews.gql'
export default {
  components: { CardNews },
  data () {
    return {
      presentationSite: {},
      myNews: {}
    }
  },
  apollo: {
    presentationSite: {
      prefetch: true,
      query: presentationSite
    },
    myNews: {
      prefetch: true,
      query: myNewsQuerry,
      variables () {
        return { id: parseInt(this.$route.params.id) }
      }
    }
  }
}
</script>
<style>

</style>
