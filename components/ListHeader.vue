<template>
  <v-row>
    <v-col />
    <v-col cols="7">
      <h3 align="center" class="pa-2">
        {{ title }}
      </h3>
      <p class="small-intro pa-2">
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
