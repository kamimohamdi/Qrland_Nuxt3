<template>
  <v-container>
    <v-row dense>
      <v-col cols="12" md="4" v-for="(item, index) in features" :key="index">
        <v-card
          class="feature-card"
          :color="them.defaultThem.componentsColor"
          elevation="10"
          style="box-shadow: none"
        >
          <div
            class="d-flex flex-column align-center justify-center text-center"
          >
            <!-- آواتار با انیمیشن -->
            <v-avatar class="ma-3 animated-avatar" rounded="lg" size="70">
              <v-icon
                :color="them.defaultThem.iconColor"
                size="50"
                class="animated-icon"
                >{{ item.icon }}</v-icon
              >
            </v-avatar>

            <!-- عنوان و توضیحات -->
            <v-card-title
              :color="them.defaultThem.textColor"
              class="text-h6 font-bold"
              >{{ item.title }}</v-card-title
            >
            <v-card-subtitle
              :color="them.defaultThem.textColor"
              class="text-subtitle-1"
              >{{ item.subtitle }}</v-card-subtitle
            >
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useCustomStore } from "~/store/customSettings";

// تنظیمات تم رنگی
const them = useCustomStore();

// ویژگی‌ها
const features = [
  {
    title: "ضمانت اصالت کالا",
    subtitle: "بهترین‌ها را انتخاب کنید!",
    icon: "mdi-shield-check",
  },
  {
    title: "امکان پرداخت درب محل",
    subtitle: "پرداختی امن و راحت",
    icon: "mdi-account-credit-card",
  },
  {
    title: "ارسال سریع سفارش",
    subtitle: "در کمترین زمان ممکن",
    icon: "mdi-truck-fast",
  },
];
</script>

<style scoped>
/* انیمیشن آواتار */
.animated-avatar {
  transition: transform 0.3s ease-in-out;
}

.animated-avatar:hover {
  transform: scale(1.1);
}

/* افکت روی آیکون */
.animated-icon {
  color: white;
  animation: bounce 1.5s infinite alternate;
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-5px);
  }
}

/* استایل کارت */
.feature-card {
  border-radius: 15px;
  padding: 20px;
  text-align: center;
}

/* تنظیمات موبایل */
@media (max-width: 768px) {
  .feature-card {
    padding: 15px;
  }
}
</style>
