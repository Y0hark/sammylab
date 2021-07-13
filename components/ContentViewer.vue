<template>
  <v-card>
    <div v-for="(contents, i) in article.ContentZone" :key="i">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <v-card-text v-if="contents.__typename === 'ComponentBlogParagraphe'" v-html="$md.render(String(contents.copy))" />
      <div v-if="contents.__typename === 'ComponentBlogMedias'">
        <v-row>
          <v-col
            v-for="(image, z) in contents.images"
            :key="z"
            :cols="12/contents.images.length"
          >
            <v-card-text>
              <v-img
                :src="image.url"
              />
            </v-card-text>
          </v-col>
        </v-row>
      </div>
      <div v-if="contents.__typename === 'ComponentBlogLinks'">
        <v-row>
          <v-col
            v-for="(lien, index) in contents.link"
            :key="index"
            :cols="12/contents.link.length"
          >
            <link-prevue
              :url="lien.link"
            >
              <div slot-scope="props">
                <a :href="lien.link" target="__blank" style="text-decoration:none">
                  <v-card
                    align="center"
                    class="ma-2"
                  >
                    <v-img
                      :src="props.img"
                      :alt="props.title"
                    />
                    <v-card-title primary-title>
                      {{ props.title }}
                    </v-card-title>
                  </v-card>
                </a>
              </div>
            </link-prevue>
          </v-col>
        </v-row>
      </div>
    </div>
  </v-card>
</template>
<script>
import LinkPrevue from 'link-prevue'
export default {
  components: {
    LinkPrevue
  },
  props: {
    article: { type: Object, default: null }
  },
  data () {
    return {

    }
  }
}
</script>
