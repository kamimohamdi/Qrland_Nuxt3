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
import { defineAsyncComponent, ref } from "vue";
import { useCustomStore } from "~/store/customSettings";

export default {
  components: {
    Countdown: defineAsyncComponent(async () => {
      const { Countdown } = await import("vue3-flip-countdown");
      return Countdown;
    }),
  },
  setup() {
    const countdownTime = ref(3600); // مدت زمان شمارش معکوس به ثانیه (مثال: 1 ساعت)
    const them = useCustomStore();

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
