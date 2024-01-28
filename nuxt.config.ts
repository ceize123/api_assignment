// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: 'Mars Rover Project',
      meta: [
        {
          name: 'description',
          content:
            'This project will interact with NASA’s public API to display images from the Mars Rover mission.',
        },
      ],
    },
  },
  runtimeConfig: {
    nasaApiKey: process.env.NASA_API_KEY,
  },
});