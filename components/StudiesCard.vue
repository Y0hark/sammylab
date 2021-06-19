<template>
  <v-col cols="7">
    <v-card class="pa-2" outlined>
      <v-card-title primary-title>
        {{ study.title }}
      </v-card-title>
      <v-card-text>
        <v-img
          height="auto"
          :src="study.cover.url"
        />
      </v-card-text>
      <v-card-text>
        Localisation : <span class="exp-assets">{{ study.location }}</span> <br>
        Date de début : <span class="exp-assets">{{ study.date_start }}</span> <br>
        Date de fin : <span class="exp-assets">{{ study.date_end }}</span>
      </v-card-text>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <v-card-text v-html="$md.render(String(study.description))" />
    </v-card>
  </v-col>
</template>
<script>
export default {
  props: {
    study: { type: Object, default: null }
  }
}
</script>
<style>
</style>
