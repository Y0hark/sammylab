<template>
  <v-col cols="7">
    <v-card class="pa-2" outlined>
      <v-card-title primary-title>
        {{ experienceProfesionnelle.title }}
      </v-card-title>
      <v-img
        height="auto"
        :src="experienceProfesionnelle.image.url"
      />
      <v-card-text>
        Localisation : <span class="exp-assets">{{ experienceProfesionnelle.location }}</span> <br>
        Date de début : <span class="exp-assets">{{ experienceProfesionnelle.date_start }}</span> <br>
        Date de fin : <span class="exp-assets">{{ experienceProfesionnelle.date_end }}</span>
      </v-card-text>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <v-card-text v-html="$md.render(String(experienceProfesionnelle.description))" />
    </v-card>
  </v-col>
</template>
<script>
export default {
  props: {
    experienceProfesionnelle: { type: Object, default: null }
  }
}
</script>
<style>
.exp-assets {
  font-weight: 800;
  color: white;
}
</style>
