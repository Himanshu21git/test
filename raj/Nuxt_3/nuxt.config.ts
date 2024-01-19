// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/i18n',
  ],
  i18n: {

    lazy: true,
    langDir: "locales",
    strategy: "prefix",
    locales: [
      {
        code: "en",
        iso: "en",
        name: "English",
        file: "en.json",
      },
      {
        code: "hi",
        iso: "hi",
        name: "Hindi",
        file: "hi.json",
      },
      {
        code: "fr",
        iso: "fr",
        name: "Franch",
        file: "fr.json",
      },
      {
        code: "bho",
        iso: "bho",
        name: "Bhojpuri",
        file: "bho.json",
      },
    ],
    defaultLocale: "en",
  },

})
