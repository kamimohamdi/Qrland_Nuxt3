<template>
  <ClientOnly>
    <div class="h-[40vh] flex justify-center align-center flex-col w-full">
      <div class="relative my-4 w-full flex justify-center align-center">
        <span
          class="w-[50px] h-0.5 absolute bottom-[-5px] rounded-xl"
          :style="{ background: them?.defaultThem?.componentsColor }"
        />
        <h2
          :style="{ color: them?.defaultThem?.textColor }"
          class="text-md opacity-70"
          dir="rtl"
        >
          متفاوت خواهیم بود..
        </h2>
      </div>
      <Countdown
        :time="countdownTime"
        @finish="onFinish"
        :labels="{
          days: 'روز',
          hours: 'ساعت',
          minutes: 'دقیقه',
          seconds: 'ثانیه',
        }"
        :mainColor="them?.defaultThem?.componentsColor"
      />
    </div>
  </ClientOnly>
</template>

<script>
import { defineAsyncComponent, ref, watch } from "vue";
import { useCustomStore } from "~/store/customSettings";
import { useData } from "~/store/data";

export default {
  components: {
    Countdown: defineAsyncComponent(async () => {
      const { Countdown } = await import("vue3-flip-countdown");
      return Countdown;
    }),
  },
  setup() {
    const countdownTime = ref(0); // مدت زمان شمارش معکوس به ثانیه
    const them = useCustomStore();
    const data = useData(); // دریافت اطلاعات از store

    // محاسبه زمان باقی‌مانده
    const calculateCountdown = () => {
      const currentDate = new Date();
      const targetDate = new Date(data.footer.counter.until); // زمان پایان
      console.log("Current Date:", currentDate);
      console.log("Target Date:", targetDate);

      const diffTime = targetDate - currentDate; // تفاوت زمانی
      console.log("Difference Time (ms):", diffTime); // زمان تفاوت به میلی‌ثانیه

      // تبدیل به ثانیه
      const seconds = Math.floor(diffTime / 1000);

      // محاسبه روز، ساعت، دقیقه و ثانیه
      const days = Math.floor(seconds / (3600 * 24)); // تعداد روزها
      const hours = Math.floor((seconds % (3600 * 24)) / 3600); // تعداد ساعت‌ها
      const minutes = Math.floor((seconds % 3600) / 60); // تعداد دقیقه‌ها
      const finalSeconds = seconds % 60; // تعداد ثانیه‌ها

      // نمایش به صورت کلی
      countdownTime.value = {
        days,
        hours,
        minutes,
        finalSeconds,
      };
    };

    // نظارت بر تغییرات در داده‌های `counter.until`
    watch(
      () => data.footer.counter.until,
      () => {
        calculateCountdown();
      },
      { immediate: true } // محاسبه اولیه به محض بارگذاری
    );

    const onFinish = () => {
      alert("شمارش معکوس به پایان رسید!");
    };

    return {
      countdownTime,
      onFinish,
      them,
    };
  },
};
</script>
