<template>
  <v-container grid-list-xs fluid>
    <list-header :title="header.title" :description="header.description" />

    <v-row v-for="article in articlesToDisplay" :key="article.id">
      <v-col />

      <card-article :article="article" />

      <v-col />
    </v-row>
  </v-container>
</template>
<script>
import ListHeader from '../../components/ListHeader.vue'
import CardArticle from '../../components/CardArticle.vue'
import articlesQuery from '~/apollo/queries/articles/articles.gql'
export default {
  components: { CardArticle, ListHeader },
  data () {
    return {
      articles: {},
      header: {
        title: 'Mes posts et articles',
        description: 'Voici la liste des articles que j\'ai publiés, des tutos et cours que j\'ai mis en ligne. 😄'
      }
    }
  },
  computed: {
    // Fonction de tri des articles: tri en fonction de la date de publication
    articlesToDisplay () {
      const arraySorted = this.articles
      arraySorted.sort((a, b) => new Date(b.date_of_pub) - new Date(a.date_of_pub))

      return arraySorted
    }
  },
  apollo: {
    articles: {
      prefetch: true,
      query: articlesQuery,
      variables () {
        return { id: parseInt(this.$route.params.id) }
      }
    }
  }
}
</script>
<style>

</style>
