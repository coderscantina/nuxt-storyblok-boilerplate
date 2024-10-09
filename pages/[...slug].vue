<script setup lang="ts">

const route = useRoute()
const slug = (route.params.slug || ['home']).join('/')
const { locale } = useI18n()
const { config, fetchStory } = useStoryblokHelpers()
const story = await fetchStory(slug)

if (!story.value) {
  throw createError({
    statusCode: 404,
    statusMessage: `Story ${slug} not found.`
  })
}

useHead({
  titleTemplate: (title) => title ? `${title}` : config.value?.content.siteName,
  htmlAttrs: {
    lang: locale.value,
  },
})

</script>

<template>
  <div>
    <NuxtLayout>
      <StoryblokComponent
        v-if="story"
        :blok="story.content"
      />
    </NuxtLayout>
  </div>
</template>
