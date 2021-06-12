<template>
  <v-container grid-list-xs fluid>
    <v-row>
      <v-col cols="4" />

      <v-col cols="8">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div align="center" justify="center" v-html="$md.render(String(presentationSite.copy))" />
      </v-col>

      <v-col cols="4" />
    </v-row>
  </v-container>
</template>
<script>
import presentationSite from '~/apollo/queries/unics/presentation_site.gql'
export default {
  data () {
    return {
      presentationSite: {}
    }
  },
  apollo: {
    presentationSite: {
      prefetch: true,
      query: presentationSite
    }
  }
}
</script>
<style>

</style>
