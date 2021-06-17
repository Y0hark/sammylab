<template>
  <v-col cols="7">
    <v-card class="pa-2" outlined>
      <v-card-title primary-title>
        {{ generalpresentation.title }}
      </v-card-title>
      <v-img
        height="auto"
        :src="generalpresentation.profile_pic"
      />
      <v-card-text>
        {{ generalpresentation.copy }}
      </v-card-text>
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
