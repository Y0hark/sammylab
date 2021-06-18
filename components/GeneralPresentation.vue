<template>
  <v-col cols="7">
    <v-card class="pa-2" outlined>
      <v-card-title primary-title>
        {{ generalpresentation.title }}
      </v-card-title>
      <v-img
        height="auto"
        :src="Object(generalpresentation.profile_pic).url"
      />
      <!-- eslint-disable-next-line vue/no-v-html -->
      <v-card-text v-html="$md.render(String(generalpresentation.copy))" />
    </v-card>
  </v-col>
</template>
<script>
export default {
  props: {
    generalpresentation: { type: Object, default: null }
  }
}
</script>
<style>

</style>
