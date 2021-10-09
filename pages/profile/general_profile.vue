<template>
  <v-container grid-list-xs>
    <list-header :title="myprofile.title" :description="myprofile.description" />

    <v-row>
      <v-col />
      <general-presentation :generalpresentation="generalPresentation" />
      <v-col />
    </v-row>

    <list-header :title="experiences_header.title" :description="experiences_header.description" />

    <v-row v-for="experience in experiencesToDisplay" :key="experience.title">
      <v-col />
      <experiences-pro :experience-profesionnelle="experience" />
      <v-col />
    </v-row>

    <list-header :title="studies_header.title" :description="studies_header.description" />

    <v-row v-for="study in studiesToDisplay" :key="study.title">
      <v-col />
      <studies-card :study="study" />
      <v-col />
    </v-row>

    <list-header :title="skills_header.title" :description="skills_header.description" />

    <v-row v-for="skill in skillsToDisplay" :key="skill.title">
      <v-col />
      <skills-card :skill="skill" />
      <v-col />
    </v-row>
  </v-container>
</template>
<script>
import ListHeader from '../../components/ListHeader.vue'
import GeneralPresentation from '../../components/GeneralPresentation.vue'
import ExperiencesPro from '../../components/ExperiencesPro.vue'
import StudiesCard from '../../components/StudiesCard.vue'
import SkillsCard from '../../components/SkillsCard.vue'
import generalPresentationQuery from '~/apollo/queries/unics/generalpresentation.gql'
import skillsQuery from '~/apollo/queries/skills/skills.gql'
import experiencesQuery from '~/apollo/queries/experiences/experiences.gql'
import studiesQuery from '~/apollo/queries/studies/studies.gql'
export default {
  components: { GeneralPresentation, ExperiencesPro, ListHeader, StudiesCard, SkillsCard },
  data () {
    return {
      generalPresentation: {},
      skills: [],
      experiences: [],
      studies: [],
      myprofile: {
        title: 'Mon profil',
        description: 'Ici vous trouverez tout ce qui concerne mon profil professionnel via un parcours détaillé.😁'
      },
      experiences_header: {
        title: 'Mes expériences professionnelles',
        description: "Ci-dessous mes expériences professionnelles, dans l'ordre chronologique bien sûr!"
      },
      studies_header: {
        title: 'Mes études et formations',
        description: "Passons maintenant aux études, diplômes et formations d'on j'ai pu bénéficier.👨‍🎓"
      },
      skills_header: {
        title: 'Mes compétences',
        description: 'Et enfin, le détail de toutes mes compétences techniques. 👷‍♂️'
      }
    }
  },
  computed: {
    // Fonction de tri des articles: tri en fonction de la date de publication
    studiesToDisplay () {
      const arraySorted = this.studies
      arraySorted.sort((a, b) => new Date(b.date_start) - new Date(a.date_start))

      return arraySorted
    },
    experiencesToDisplay () {
      const arraySorted = this.experiences
      arraySorted.sort((a, b) => new Date(b.date_start) - new Date(a.date_start))

      return arraySorted
    },
    skillsToDisplay () {
      const arraySorted = this.skills
      arraySorted.sort((a, b) => (b.mastery) - (a.mastery))

      return arraySorted
    }
  },
  apollo: {
    generalPresentation: {
      prefetch: true,
      query: generalPresentationQuery
    },
    skills: {
      prefetch: true,
      query: skillsQuery
    },
    experiences: {
      prefetch: true,
      query: experiencesQuery
    },
    studies: {
      prefetch: true,
      query: studiesQuery
    }
  }
}
</script>
<style>
.small-intro {
  font-size: 16px;
  color: #BDBDBD;
}
</style>
