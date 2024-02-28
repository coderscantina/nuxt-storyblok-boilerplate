<script setup lang="ts">

import Logo from '~/assets/logo.svg?component'

const localePath = useLocalePath()
const { config } = useStoryblokHelpers()

</script>

<template>
  <header class="sticky top-0 z-40 overflow-x-clip">
    <div class="content-grid">
      <div class="flex items-center">
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
