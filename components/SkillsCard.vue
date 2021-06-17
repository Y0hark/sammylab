<template>
  <v-col cols="7">
    <v-card class="pa-2">
      <v-card-title primary-title>
        {{ skill.title }}
      </v-card-title>
      <v-card-text>
        {{ skill.description }}
      </v-card-text>
      <v-card-text>
        <v-progress-linear
          color="primary"
          stream
          buffer-value="0"
          :value="skill.mastery"
        />
      </v-card-text>
    </v-card>
  </v-col>
</template>
<script>
export default {
  props: {
    skill: { type: Object, default: null }
  }
}
</script>
<style>
.exp-assets {
  font-weight: 800;
  color: white;
}
</style>
