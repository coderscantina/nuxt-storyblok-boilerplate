import type { UseSeoMetaInput } from '@unhead/schema'
import type { ISbStoriesParams } from '@storyblok/vue'
import type { ConfigStoryblok, PageStoryblok } from '~/storyblok/types'

export default function useStoryblokHelpers() {
  const config = useState<ConfigStoryblok>('config')

  const { $preview } = useNuxtApp()
  const version = $preview ? 'draft' : 'published'
  const { locale } = useI18n()
  const defaults: Pick<ISbStoriesParams, 'version' | 'language'> = {
    version,
    language: locale.value
  }

  async function loadConfig() {
    const { data } = await useAsyncData<ConfigStoryblok>('config', () => useAsyncStoryblok('_config', defaults)
      .catch(() => ref(null))
    )
    if (data.value) {
      config.value = data.value
    }
  }

  function setMetaFromPage(content: Pick<PageStoryblok, 'metatags' | 'ogImage'>, fallbacks?: UseSeoMetaInput) {
    if (!content.metatags && !fallbacks) {
      return
    }
    const meta = content.metatags || {}
    const fb = fallbacks || {}
    const image = content.ogImage?.filename ? `${content.ogImage.filename}/m/` : undefined

    const title = meta.title || fb.title
    const description = meta.description || fb.description
    const ogTitle = meta.og_title || fb.ogTitle
    const ogDescription = meta.og_description || fb.ogDescription
    const ogImage = image
    const twitterTitle = meta.twitter_title || fb.twitterTitle
    const twitterDescription = meta.twitter_description || fb.twitterDescription
    const twitterImage = image

    const { title: omitted, ...fallbacksWithoutTitle } = fb
    useSeoMeta({
      title
    })
    useServerSeoMeta({
      ...fallbacksWithoutTitle as Record<string, string>,
      description,
      ogTitle: ogTitle || (typeof title === 'string' ? title : undefined),
      ogDescription: ogDescription || description,
      ogImage,
      twitterCard: 'summary',
      twitterTitle: twitterTitle || ogTitle || (typeof title === 'string' ? title : undefined),
      twitterDescription: twitterDescription || ogDescription || description,
      twitterImage: twitterImage || ogImage,
    })
  }

  callOnce(async() => {
    await loadConfig()
  }).then()

  return {
    config,
    defaults,
    setMetaFromPage
  }
}
