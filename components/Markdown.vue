<script setup lang="ts">

import { marked } from 'marked'

const props = defineProps<{ content: string }>()

const html = computed(() => {
  return marked.parse(props.content)
})

</script>

<template>
  <div
    class="prose"
    v-html="html"
  />
</template>
