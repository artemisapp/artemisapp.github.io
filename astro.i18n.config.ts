import { defineAstroI18nConfig } from "astro-i18n";
import en from "./i18n/en.json";
import de from "./i18n/de.json";

export default defineAstroI18nConfig({
  primaryLocale: "en",
  secondaryLocales: ["de"],
  fallbackLocale: "en",
  showPrimaryLocale: false,
  translations: {
    common: {
      en,
      de,
    },
  },
});
