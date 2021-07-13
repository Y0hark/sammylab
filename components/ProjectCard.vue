<template>
  <v-col cols="9">
    <v-card class="pa-2" outlined>
      <v-card-title>
        {{ project.title }}
      </v-card-title>
      <v-card-text align="center">
        <v-carousel
          cycle
          height="400"
          hide-delimiter-background
          show-arrows-on-hover
        >
          <template #prev="{ on, attrs }">
            <v-btn
              color="secondary"
              v-bind="attrs"
              v-on="on"
            >
              Slide précédente
            </v-btn>
          </template>
          <template #next="{ on, attrs }">
            <v-btn
              color="primary"
              v-bind="attrs"
              v-on="on"
            >
              Slide suivante
            </v-btn>
          </template>
          <v-carousel-item
            v-for="img in listUrls"
            :key="img.url"
          >
            <v-img
              height="400"
              :src="img.url"
            />
          </v-carousel-item>
        </v-carousel>
      </v-card-text>
      <v-card-text>
        Projet date du : {{ project.date_project }} <br>
        Version du projet : v {{ project.version }} <br>
        Finit à : {{ project.finished }}%
        <v-progress-linear
          :value="project.finished"
          buffer-value="0"
        />
      </v-card-text>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <v-card-text v-html="$md.render(String(project.description))" />
    </v-card>
  </v-col>
</template>
<script>
export default {
  props: {
    project: { type: Object, default: null },
    listUrls: {
      type: Array,
      default: () => []
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
