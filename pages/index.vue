<template>
  <v-container grid-list-xs fluid>
    <v-row>
      <v-col />
      <v-col cols="9">
        <v-card outlined class="pa-2">
          <h1 v-if="presentationSite.title != undefined" align="center" justify="center">
            {{ presentationSite.title }}
          </h1>
          <h1 v-else>
            Loading Title ...
          </h1>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div v-if="presentationSite.copy != undefined" v-html="$md.render(String(presentationSite.copy))" />
          <div v-else>
            Loading...
          </div>
        </v-card>
      </v-col>
      <v-col />
    </v-row>

    <list-header :title="header.title" :description="header.description" />

    <v-row v-for="myNew in myNews" :key="myNew.id">
      <v-col />

      <card-news :my-new="myNew" />

      <v-col />
    </v-row>
  </v-container>
</template>
<script>
import ListHeader from '../components/ListHeader.vue'
import CardNews from '../components/CardNews.vue'
import presentationSite from '~/apollo/queries/unics/presentation_site.gql'
import myNewsQuerry from '~/apollo/queries/mynews/mynews.gql'
export default {
  components: { CardNews, ListHeader },
  data () {
    return {
      presentationSite: {},
      myNews: {},
      header: {
        title: 'Mes actualités',
        description: 'Ci-dessous sont listées les actualités de mon site!'
      }
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
