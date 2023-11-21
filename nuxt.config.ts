import { defineNuxtConfig } from "nuxt/config"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  imports: {
    autoImport: false
  },
  modules: [
    ['@nuxtjs/eslint-module', { /* module options */ }],
    ['@nuxtjs/i18n', {vueI18n: './configs/i18n.config.ts'}],
    ['@nuxtjs/tailwindcss', {}]
  ],
})
