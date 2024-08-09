// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  preset: 'node-server',
  srcDir: './src',
  modules: [
    '@nuxtjs/tailwindcss',
    '@formkit/auto-animate',
    '@vueuse/nuxt',
    '@nuxtjs/google-fonts',
    'dayjs-nuxt',
    '@nuxt/eslint',
    '@nuxtjs/device',
    'nuxt-booster',
    '@morev/vue-transitions',
    'nuxt-icons',
    '@nuxtjs/seo',
    'nuxt-marquee',
    '@unlazy/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate', 'useDayjs'],
        storesDirs: ['./src/store/**'],
      },
    ],
  ],

  booster: {
    detection: {
      performance: true,
      browserSupport: true,
      battery: true
    },
    performanceMetrics: {
      device: {
        hardwareConcurrency: { min: 2, max: 48 },
        deviceMemory: { min: 2 }
      },
      timing: {
        fcp: 800,
        dcl: 1200
      }
    },
    targetFormats: ['webp', 'avif', 'jpg|jpeg|png|gif'],
    componentAutoImport: false,
    componentPrefix: undefined,
    lazyOffset: {
      component: '0%',
      asset: '0%'
    },
    optimizeSSR: true,
    disableNuxtFontaine: true,
    disableNuxtImage: true,
  },
  googleFonts: {
    families: {
      Inter: '300..800',
    },
    display: 'swap',
    preload: true,
    useStylesheet: true,
    base64: true,
    download: true,
  },
  tailwindcss: {
    cssPath: ['~/assets/styles/index.scss', { injectPosition: 'first' }],
    configPath: 'tailwind.config',
    exposeConfig: {
      level: 2,
    },
    config: {},
    // viewer: true,
  },
  css: [
    '~/assets/styles/index.scss',
  ],
  app: {
    port: '3000',
    exec_mode: 'cluster',
    instances: 'max',
    script: './.output/server/index.mjs',
  },
  server: {
    port: 3000,
    host: '0.0.0.0'
  },
  ssr: true,
  generate: { fallback: '404.html' },
  build: {
    extend (config, ctx) {
      config.resolve.symlinks = false;
    },
  },
})