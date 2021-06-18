<template>
  <v-col cols="7">
    <v-card class="pa-2" outlined>
      <v-card-title primary-title>
        {{ skill.title }}
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              Description
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <!-- eslint-disable-next-line vue/no-v-html -->
              <v-card-text v-html="$md.render(String(skill.description))" />
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card-title>
      <v-card-text>
        Maîtrise - {{ skill.mastery }}%<v-progress-linear
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
