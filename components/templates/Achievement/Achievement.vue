<template>
  <div class="w-[80%] flex flex-col">
    <Mark title="دستاورد های مجموعه ما" />
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="3"
          v-for="(item, index) in stats"
          :key="index"
        >
          <v-card
            class="dashboard-card d-flex align-center justify-center flex-column"
            outlined
            elevation="10"
            :style="[
              'min-height: 180px',
              `background:${them.defaultThem.componentsColor}`,
              'border-radius: 20px',
              'overflow: hidden',
            ]"
          >
            <!-- آیکن -->
            <v-avatar size="80" class="pulse-animation">
              <v-icon :color="them.defaultThem.iconColor" size="64">{{
                item.icon
              }}</v-icon>
            </v-avatar>

            <!-- مقدار با انیمیشن شمارش -->
            <div
              class="v-card__title text-center animated-number"
              :style="[`color:${them.defaultThem.textColor}`]"
            >
              {{ animatedValues[index] }}{{ item.unit }}
            </div>

            <!-- توضیحات -->
            <div
              class="v-card__text text-center"
              :style="[
                'font-size: 1.1em',
                `color:${them.defaultThem.textColor}`,
              ]"
            >
              {{ item.title }}
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { useCustomStore } from "~/store/customSettings";
import Mark from "~/components/modules/index/Mark.vue";
const them = useCustomStore();

// داده‌های کارت‌ها
const stats = ref([
  { title: "رضایت مشتریان", value: 97, icon: "mdi-account-heart", unit: "%" },
  {
    title: "کمترین بازگشتی",
    value: 5,
    icon: "mdi-package-variant-closed",
    unit: "%",
  },
  { title: "مشتری وفادار", value: 1200, icon: "mdi-crown", unit: "" },
  { title: "سفارش ارسال‌شده", value: 560, icon: "mdi-truck-fast", unit: "" },
]);

// آرایه برای شمارش متحرک
const animatedValues = ref(stats.value.map(() => 0));

// متد شمارش انیمیشنی
onMounted(() => {
  stats.value.forEach((item, index) => {
    let step = Math.ceil(item.value / 50); // سرعت شمارش
    let current = 0;
    let interval = setInterval(() => {
      if (current < item.value) {
        current += step;
        if (current > item.value) current = item.value;
        animatedValues.value[index] = current;
      } else {
        clearInterval(interval);
      }
    }, 30);
  });
});
</script>

<style scoped>
/* افکت پالس برای آواتار */
.pulse-animation {
  animation: pulse 1.5s infinite alternate;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
}

/* افکت شمارش عدد */
.animated-number {
  font-size: 1.5em;
  font-weight: bold;
}
</style>
