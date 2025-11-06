import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import astroIcon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://artemisapp.github.io",
  integrations: [
    tailwind(),
    mdx(),
    astroIcon(),
    sitemap(),
  ],
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
});
