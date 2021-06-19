<template>
  <v-container grid-list-xs>
    <list-header :title="headers.main.title" :description="headers.main.description" />
    <v-row v-for="hobby in hobbies" :key="hobby.id">
      <v-col />
      <hobby-card :hobby="hobby" />
      <v-col />
    </v-row>
  </v-container>
</template>
<script>
import hobbiesQuery from '../../apollo/queries/hobbies/hobbies.gql'
import HobbyCard from '../../components/HobbyCard.vue'
import ListHeader from '../../components/ListHeader.vue'
export default {
  components: { ListHeader, HobbyCard },
  data () {
    return {
      headers: {
        main: { title: 'Mes passions', description: 'Ci-dessous, vous trouverez tout ce qui anime mon temps libre ! 😉' }
      },
      hobbies: {}
    }
  },
  apollo: {
    hobbies: {
      prefetch: true,
      query: hobbiesQuery
    }
  }
}
</script>
<style>

</style>
