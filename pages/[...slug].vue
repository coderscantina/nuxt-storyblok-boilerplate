<script setup lang="ts">
const { $preview } = useNuxtApp()

const version = $preview ? 'draft' : 'published'
const route = useRoute()
const slug = (route.params.slug || ['home']).join('/')
const { locale } = useI18n()

const story = await useAsyncStoryblok(slug, { version, language: locale.value })

useHead({
  htmlAttrs: {
    lang: locale.value,
  },
})

</script>

<template>
  <div>
    <NuxtLayout
      v-if="story"
      :layout="story.layout || 'default'"
    >
      <StoryblokComponent
        v-if="story"
        :blok="story.content"
      />
    </NuxtLayout>
  </div>
</template>
