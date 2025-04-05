<script setup>
import { useCustomStore } from "~/store/customSettings";
const them = useCustomStore();
import Shift from "../time/Shift.vue";
const icons = ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"];
</script>
<template>
  <v-footer
    class="text-center d-flex flex-column ga-2 py-4"
    :color="them.defaultThem.componentsColor"
  >
    <div class="flex flex-col w-[80%]">
      <h2 :color="them.defaultThem.componentsColor" class="text-xl my-2">
        مراجعه حضوری
      </h2>

      <Shift />
    </div>
    <v-divider class="my-2" thickness="2" width="50"></v-divider>

    <div class="flex flex-col w-[80%]">
      <h2 :color="them.defaultThem.componentsColor" class="text-xl my-2">
        مراجعه حضوری
      </h2>

      <div class="flex justify-center align-center">
        <ul class="flex flex-col w-full gap-4 justify-center align-center">
          <li class="flex gap-2">
            <span
              class="text-sm"
              :style="{ color: them.defaultThem.textColor }"
            >
              تهران، خیابان شریعتی ، بعد از پل سید خندان، بن بست خندان ، پلاک
              6</span
            >
            <v-icon size="20" :color="them.defaultThem.iconColor"
              >mdi-map-marker</v-icon
            >
          </li>
          <li class="flex gap-2">
            <a
              href="http://www.terminalads.com"
              class="text-sm"
              :style="{ color: them.defaultThem.textColor }"
              target="_blank"
            >
              www.terminalads.com</a
            >
            <v-icon size="20" :color="them.defaultThem.iconColor"
              >mdi-web</v-icon
            >
          </li>
        </ul>
      </div>
    </div>
    <v-divider class="my-2" thickness="2" width="50"></v-divider>

    <div class="flex flex-col w-[80%]">
      <h2 :color="them.defaultThem.componentsColor" class="text-xl my-2">
        تماس با ما
      </h2>

      <div class="flex justify-center align-center">
        <ul class="flex flex-col w-full gap-4 justify-center align-center">
          <li class="flex gap-2">
            <v-icon size="20" :color="them.defaultThem.iconColor"
              >mdi-phone</v-icon
            >
            <span class="text-sm" :style="{ color: them.defaultThem.textColor }"
              >09130599382</span
            >
          </li>
          <li class="flex gap-2">
            <v-icon size="20" :color="them.defaultThem.iconColor"
              >mdi-phone</v-icon
            >
            <span class="text-sm" :style="{ color: them.defaultThem.textColor }"
              >09130599382</span
            >
          </li>
          <li class="flex gap-2">
            <v-icon size="20" :color="them.defaultThem.iconColor"
              >mdi-fax</v-icon
            >
            <span class="text-sm" :style="{ color: them.defaultThem.textColor }"
              >0921-532-8585</span
            >
          </li>
        </ul>
      </div>
    </div>
    <v-divider class="my-2" thickness="2" width="50"></v-divider>

    <div class="d-flex ga-3 flex-col">
      <h2 :color="them.defaultThem.componentsColor" class="text-xl">
        شبکه های اجتمایی ما
      </h2>
      <div>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          :icon="icon"
          density="comfortable"
          variant="text"
          :color="them.defaultThem.iconColor"
          href="instagram.com"
        ></v-btn>
      </div>
    </div>

    <v-divider class="my-2" thickness="2" width="50"></v-divider>

    <div
      class="text-caption font-weight-regular opacity-70 w-[70%]"
      :style="{ color: them.defaultThem.textColor }"
    >
      <h2 class="text-xl">درباره ما</h2>
      با افتخار فروشگاه‌سازی حرفه‌ای و کارآمد را برای کسب‌وکار‌های آنلاین ارائه
      داده ایم. بدون نیاز به دانش فنی، به‌ صورت کاملاً رایگان، می‌توانید فروشگاه
      اینترنتی خود را ایجاد کنید. ما به شما امکاناتی مانند مدیریت محصولات،
      پرداخت آنلاین، و پیگیری سفارشات را فراهم می‌کنیم. همچنین، پشتیبانی اختصاصی
      و راهکارهای جذب مشتریان را نیز ارائه می‌دهیم. اگر نیاز به تنظیمات خاصی
      دارید یا سایر جزئیات را می‌خواهید، لطفاً به نیازهای کسب‌وکار خود بپردازید
      و متن "درباره ما" را به‌صورت مناسب تغییر دهید.
    </div>

    <v-divider class="my-2" thickness="2" width="100%"></v-divider>

    <div class="text-sm" :style="{ color: them.defaultThem.textColor }">
      {{ new Date().getFullYear() }} تمامی حقوق این سایت متعلق به کیوآر لند می
      باشد
    </div>
  </v-footer>
</template>
