import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  imports: {
    autoImport: false,
  },
  modules: [
    [
      "@nuxtjs/eslint-module",
      {
        /* module options */
      },
    ],
    [
      "@nuxtjs/i18n",
      {
        vueI18n: "./configs/i18n.config.ts",
        defaultLocale: "en",
        baseUrl: "https://nouvet.pages.dev",
        locales: [
          {
            code: "en",
            iso: "en-US",
          },
          {
            code: "en",
            iso: "en-UK",
          },
          {
            code: "es",
            iso: "es-ES",
          },
        ],
      },
    ],
    ["@nuxtjs/tailwindcss", {}],
    ["@nuxtjs/svg-sprite", { input: "~/assets/svg/" }],
  ],
});
