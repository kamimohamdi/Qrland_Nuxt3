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
  app: {
    head: {
      script: [
        {
          src: "https://api.map.ir/sdk/v2.0/?key=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImVkOGZkODY0OWJjMmUxM2FhNDlhMzBiMDE0Y2U5M2ZmZDc0ODViODRjNWJkNGExMDdmOGZiNGEyMTdhZTQ5ODI1Y2I4ZjIwMDNlMGMxMWI1In0.eyJhdWQiOiIzMTc5NCIsImp0aSI6ImVkOGZkODY0OWJjMmUxM2FhNDlhMzBiMDE0Y2U5M2ZmZDc0ODViODRjNWJkNGExMDdmOGZiNGEyMTdhZTQ5ODI1Y2I4ZjIwMDNlMGMxMWI1IiwiaWF0IjoxNzQzOTIwNjU3LCJuYmYiOjE3NDM5MjA2NTcsImV4cCI6MTc0NjUxMjY1Nywic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.VRWKhELAvyKrFdwMSZIrOzbnEObVX4-hpY5h8rcUI11Q5gYJOH6CUTI7uz9mRXyd2IA-6kAnN9PyTNWpnh4phXmEDdsSutJqCf_AqZ6TS7w6H1mSLhQtr2bEd_M7BpLtPgtxFDvI5MpCAfHcWtlmM-I77wxx_X0Jx-QkWB4Ye4wDov07mWJSqS2Ac3P9RoMOEKXrYWC5ZIVB-3MxRZiKlA-6psSXkXYGn0fIPJQAOBR_zHpCLLdYQjQ8x93EmsGrfFDqu9hyvVhr4jFU7NcAW-uYpXpP2MP5PnASIhfcaNOPtxcrujpVOWF4n49fKeleG5vcHUV4Quo2Ki0Z4kzMcQ",
          type: "text/javascript",
          charset: "utf-8",
        },
      ],
    },
  },
});
