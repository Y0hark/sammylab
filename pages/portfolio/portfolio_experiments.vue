<template>
  <v-container grid-list-xs>
    <list-header :title="header.title" :description="header.description" />

    <v-row v-for="project in projectsShowcases" :key="project.title">
      <v-col />
      <project-card v-if="project.project_category == 'exp'" :project="project" :list-urls="project.showcase" />
      <v-col />
    </v-row>
  </v-container>
</template>
<script>
import ListHeader from '../../components/ListHeader.vue'
import ProjectCard from '../../components/ProjectCard.vue'
import projectsShowcasesQuery from '~/apollo/queries/portfolio/projects_showcases.gql'
export default {
  components: { ListHeader, ProjectCard },
  data () {
    return {
      projectsShowcases: [],
      header: {
        title: 'Mes projets Expériences',
        description: `Cette section est plus réservée à tout ce qui va s'éloigner un peu de mon corps de métier logiciel.
                      J'ai à coeur de m'essayer un peu à tout, alors quand je ferai de la robotique ou de l'embarqué par exemple, les projets s'afficheront ici! 😉🔬`
      }
    }
  },
  apollo: {
    projectsShowcases: {
      prefetch: true,
      query: projectsShowcasesQuery
    }
  }
}
</script>
