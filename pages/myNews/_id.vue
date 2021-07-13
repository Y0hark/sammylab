<template>
  <v-container grid-list-xs>
    <v-row>
      <v-col />
      <v-col cols="9">
        <v-card>
          <v-card-title primary-title>
            {{ myNew.title }}
          </v-card-title>
          <v-card-text>
            Publiée le {{ myNew.date_of_pub }}
          </v-card-text>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <v-card-text v-html="$md.render(String(myNew.description))" />
          <content-viewer :article="myNew" />
        </v-card>
      </v-col>
      <v-col />
    </v-row>
  </v-container>
</template>
<script>
import ContentViewer from '../../components/ContentViewer.vue'
import myNewQuerry from '~/apollo/queries/mynews/mynew.gql'
export default {
  components: { ContentViewer },
  data () {
    return {
      myNew: {}
    }
  },
  apollo: {
    myNew: {
      prefetch: true,
      query: myNewQuerry,
      variables () {
        return { id: parseInt(this.$route.params.id) }
      }
    }
  }
}
</script>
