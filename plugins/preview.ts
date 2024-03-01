export default defineNuxtPlugin((nuxtApp) => {
  const route = useRoute()
  const runtimeConfig = useRuntimeConfig()
  const preview = route.query?._storyblok || runtimeConfig.public.appEnv !== 'production'

  if (preview) {
    nuxtApp.hook('page:finish', () => {
      refreshNuxtData()
    })
  }

  return { provide: { preview } }
})
