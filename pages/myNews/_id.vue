<template>
  <v-container grid-list-xs>
    <v-row>
      <v-col />
      <v-col cols="7">
        <v-card>
          <v-card-title primary-title>
            {{ myNew.title }}
          </v-card-title>
          <v-card-text>
            Publiée le {{ myNew.date_of_pub }}
          </v-card-text>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <v-card-text v-html="$md.render(String(myNew.description))" />
        </v-card>
      </v-col>
      <v-col />
    </v-row>
  </v-container>
</template>
<script>
import myNewQuerry from '~/apollo/queries/mynews/mynew.gql'
export default {
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
