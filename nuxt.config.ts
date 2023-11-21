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
        lintOnStart: false,
      },
    ],
    [
      "@nuxtjs/i18n",
      {
        vueI18n: "./configs/i18n.config.ts",
        types: "composition",
        defaultLocale: "en",
        lazy: true,
        langDir: "locales",
        baseUrl: "https://nouvet.pages.dev",
        locales: [
          {
            code: "en",
            iso: "en-UK",
            files: ["en-UK.json"],
            label: "English",
          },
          {
            code: "es",
            iso: "es-ES",
            files: ["es-ES.json"],
            label: "Español (ES)",
          },
        ],
      },
    ],
    ["@nuxtjs/tailwindcss", {}],
    ["@nuxtjs/svg-sprite", { input: "~/assets/svg/" }],
  ],
});
