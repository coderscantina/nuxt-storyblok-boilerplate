<script setup lang="ts">

import Logo from '~/assets/logo.svg?component'

const localePath = useLocalePath()
const { config } = useStoryblokHelpers()

</script>

<template>
  <header
    class="sticky top-0 z-40 overflow-x-clip"
    role="banner"
  >
    <div class="content-grid">
      <div
        v-editable="config?.content"
        class="flex items-center"
      >
        <NuxtLink
          :to="localePath('/')"
          class="shrink-0"
        >
          <Logo class="h-12"/>
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<style scoped>

</style>
