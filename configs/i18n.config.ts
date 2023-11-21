import { defineI18nConfig } from "#i18n";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: {
    en: {
      welcome: "Welcome",
    },
    es: {
      welcome: "Bienvenue",
    },
  },
}));
