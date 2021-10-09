<template>
  <v-container grid-list-xs>
    <list-header :title="header.title" :description="header.description" />

    <v-row v-for="project in projectsShowcasesToDisplay" :key="project.title">
      <v-col />
      <project-card v-if="project.project_category == 'web'" :project="project" :list-urls="project.showcase" />
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
        title: 'Mes projets Web',
        description: 'C\'est dans cette page que vous trouverez une partie de tous les sites web sur lesquels j\'ai pu travailler! 👍'
      }
    }
  },
  computed: {
    // Fonction de tri des articles: tri en fonction de la date de publication
    projectsShowcasesToDisplay () {
      const arraySorted = this.projectsShowcases
      arraySorted.sort((a, b) => new Date(b.date_project) - new Date(a.date_project))

      return arraySorted
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
