import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css"; // آیکون‌ها رو اینجا اضافه کن

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: "mdi", // ست آیکون پیش‌فرض رو روی mdi تنظیم کن
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
