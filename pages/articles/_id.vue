<template>
  <v-container grid-list-xs>
    <v-row>
      <v-col />
      <v-col cols="7">
        <v-card>
          <v-card-title primary-title>
            {{ article.title }}
            <v-spacer />
            <span class="date-title">Publiée le <span class="article-data">{{ article.date_of_pub }}</span></span>
          </v-card-title>
          <v-card-text>
            Catégorie : <span class="article-data">{{ Object(article.category).name }}</span>
          </v-card-text>
          <v-card-text>
            <v-img
              height="auto"
              :src="Object(article.image).url"
            />
          </v-card-text>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <v-card-text v-html="$md.render(String(article.copy))" />
        </v-card>
      </v-col>
      <v-col />
    </v-row>
  </v-container>
</template>
<script>
import articleQuerry from '~/apollo/queries/articles/article.gql'
export default {
  data () {
    return {
      article: {}
    }
  },
  apollo: {
    article: {
      prefetch: true,
      query: articleQuerry,
      variables () {
        return { id: parseInt(this.$route.params.id) }
      }
    }
  }
}
</script>
<style>
.article-data {
  font-weight: 800;
  color: white;
}
</style>
