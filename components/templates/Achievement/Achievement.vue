<template>
  <div class="w-[80%] flex flex-col">
    <Mark :title="servieces.title" />
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="3"
          v-for="(item, index) in servieces.items"
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
              {{ animatedValues[index] }}
            </div>

            <!-- توضیحات -->
            <div
              class="v-card__text text-center"
              :style="[
                'font-size: 1.1em',
                `color:${them.defaultThem.textColor}`,
              ]"
            >
              {{ item.name }}
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
// data
import { useData } from "~/store/data";
const data = useData();
const servieces = data.CounterService;

const them = useCustomStore();

// آرایه برای شمارش متحرک
const animatedValues = ref(servieces.items.map(() => 0));

// متد شمارش انیمیشنی
onMounted(() => {
  servieces.items.forEach((item, index) => {
    let step = Math.ceil(item.counter / 50); // سرعت شمارش
    let current = 0;
    let interval = setInterval(() => {
      if (current < item.counter) {
        current += step;
        if (current > item.counter) current = item.counter; // اطمینان از رسیدن به مقدار دقیق
        animatedValues.value[index] = current;
      } else {
        clearInterval(interval);
      }
    }, 30); // تاخیر به میلی‌ثانیه (می‌توانید این را تنظیم کنید)
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
