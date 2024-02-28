const frameAncestors = [
  'https://app.storyblok.com/'
]

/*
 * Global response headers
 * This middleware pre-sets various response headers before the Nuxt application takes over.
 * The application can overwrite these header values if needed.
 */
export default defineEventHandler((event) => {
  setResponseHeader(event, 'Content-Security-Policy', `frame-ancestors ${frameAncestors.join(' ')}`)
  setResponseHeader(event, 'Cache-Control', 'max-age=180, s-maxage=900, public')

  if (useRuntimeConfig().public.appEnv !== 'production') {
    setResponseHeader(event, 'X-Robots-Tag', 'noindex, nofollow')
  }
})
