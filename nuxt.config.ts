// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/main.css", "vuetify/styles"],

  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/test-utils",
    "@nuxt/ui",
    "@pinia/nuxt",
    "nuxt-maplibre",
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    transpile: ["vuetify"],
  },
  maplibre: {
    style: "https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json", // URL برای استایل نقشه
  },
});
