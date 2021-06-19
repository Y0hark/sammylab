<template>
  <v-col cols="7">
    <v-card class="pa-2" outlined>
      <v-card-title>
        {{ hobby.title }}
      </v-card-title>
      <v-card-text align="center">
        <v-img
          height="auto"
          :src="hobby.image.url"
        />
      </v-card-text>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <v-card-text v-html="$md.render(String(hobby.description))" />
    </v-card>
  </v-col>
</template>
<script>
export default {
  props: {
    hobby: { type: Object, default: null }
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
