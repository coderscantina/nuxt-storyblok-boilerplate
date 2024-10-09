<script setup lang="ts">
import type { NuxtError } from '#app'

const { fetchStory } = useStoryblokHelpers()
const props = defineProps<{ error: NuxtError }>()

const story = await fetchStory(`_error${props.error.statusCode}`)
const runtimeConfig = useRuntimeConfig()

</script>

<template>
  <div>
    <NuxtLayout>
      <StoryblokComponent
        v-if="story"
        :blok="story.content"
      />
      <div
        v-if="runtimeConfig.public.appEnv !== 'production'"
        class="content-grid"
      >
        <div v-if="runtimeConfig.public.appEnv !== 'production'">
          <h2 class="mb-3 text-sm font-bold uppercase text-primary-400">
            Error {{ error.statusCode }}
          </h2>
          <h1 class="max-w-prose text-7xl font-bold">
            {{ error.message }}
          </h1>
          <div
            class="mt-12 text-gray-500"
            v-html="error.stack"
          />
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<style scoped>

</style>
