<template>
  <v-row>
    <v-col />
    <v-col cols="9">
      <h2 align="center" class="pa-2">
        {{ title }}
      </h2>
      <p class="small-intro pa-2" align="center">
        {{ description }}
      </p>
    </v-col>
    <v-col />
  </v-row>
</template>
<script>
export default {
  props: {
    title: { type: String, default: null },
    description: { type: String, default: null }
  }
}
</script>
<style>

</style>
