<script setup lang="ts">

const { config } = useStoryblokHelpers()
const year = computed(() => new Date().getFullYear())

</script>

<template>
  <footer
    v-editable="config?.content"
    class="content-grid bg-black py-20"
    role="contentinfo"
    aria-label="Site footer"
  />
</template>

<style scoped>

</style>
