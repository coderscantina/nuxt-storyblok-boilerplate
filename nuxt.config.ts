import svgLoader from 'vite-svg-loader'
import locales from './i18n.locales'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@storyblok/nuxt',
    '@vueuse/nuxt',
    'nuxt-schema-org',
  ],

  compatibilityDate: '2024-10-09',

  devtools: { enabled: true },

  storyblok: {
    accessToken: process.env.NUXT_STORYBLOK_ACCESS_TOKEN,
  },

  runtimeConfig: {
    public: {
      appEnv: process.env.NUXT_PUBLIC_APP_ENV,
    }
  },

  tailwindcss: {
    cssPath: '~/assets/scss/main.scss'
  },

  nitro: {
    logLevel: 1,
    inlineDynamicImports: true,
  },

  vite: {
    plugins: [
      svgLoader({
        svgoConfig: {
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: {
                  // customize default plugin options
                  inlineStyles: {
                    onlyMatchedOnce: false,
                  },
                  removeViewBox: false,
                  convertShapeToPath: false,
                  mergePaths: false,
                },
              },
            },
            {
              name: 'removeAttrs',
              params: {
                attrs: 'data-name',
              },
            },
            {
              name: 'convertStyleToAttrs',
            },
          ],
        },
      }),
    ],
  },

  i18n: {
    strategy: 'prefix',
    detectBrowserLanguage: {
      redirectOn: 'no prefix'
    },
    locales,
    defaultLocale: 'en',
    vueI18n: './i18n.config.ts',
    lazy: true,
    langDir: 'lang'
  },
})
