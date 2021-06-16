<template>
  <v-col cols="7">
    <v-card class="pa-2" outlined>
      <v-card-title>
        {{ myNew.title }}
        <v-spacer />
        <span class="date-title">{{ myNew.date_of_pub }}</span>
      </v-card-title>

      <!-- eslint-disable-next-line vue/no-v-html -->
      <v-card-text v-html="$md.render(String(preview(myNew.description)+'...'))" />
      <v-card-actions>
        <v-spacer />
        <v-btn text color="primary" :to="{ name: 'myNews-id', params: {id: myNew.id} }">
          Lire la suite
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>
<script>
export default {
  props: {
    myNew: { type: Object, default: null }
  },
  methods: {
    preview (copy) {
      return copy.substring(0, 80)
    }
  }
}
</script>
<style>
.date-title {
  color: #757575;
  font-weight: normal;
  font-size: 15px;
}
</style>
