<template>
  <div class="w-[80%] flex my-4 p-0 flex-col">
    <Mark :title="feeds.description" />
    <v-stepper
      v-model="step"
      :style="[
        'box-shadow: none',
        `backgroundd:${them.defaultThem.componentsColor}`,
        'width:100%',
        'padding:0',
      ]"
      :items="items"
      dir="rtl"
    >
      <template #prev="{ props }">
        <v-btn color="red" v-bind="props">قبلی</v-btn>
      </template>
      <template #next="{ props }">
        <v-btn v-if="step < feeds.items.length" color="primary" v-bind="props"
          >بعدی</v-btn
        >
      </template>
      <template v-if="step == feedBack.length" #actions>
        <v-btn variant="tonal" color="primary" class="outlined mr-5 mb-5"
          >ثبت</v-btn
        >
      </template>

      <template
        v-for="(question, i) in feeds?.items"
        :key="i"
        v-slot:[`item.${i+1}`]
      >
        <h2 class="text-sm" dir="rtl">{{ question.question }}</h2>
        <div class="my-3" dir="rtl" v-if="question.value">
          <v-textarea
            v-model="feedBack[i].comment"
            row-height="25"
            rows="3"
            variant="outlined"
            label="توضیحات (اختیاری)"
            auto-grow
            dir="rtl"
            class="custom-textarea"
            :rules="[(v) => v.length > 3 || 'باید حداقل ۳ کارکتر را وارد کنید']"
          />
        </div>
        <div class="h-14 w-[100%] flex justify-center align-center">
          <v-btn
            v-for="(emoji, rate) in type[
              question.type ? question.type : 'none'
            ]"
            :key="rate"
            class="text-h4"
            v-if="question.type"
            max-width="50px"
            :style="[
              'box-shadow: none',
              'height: 50px',
              'padding:0 ',
              `filter:${
                feedBack[i].feed == rate + 1 ? 'none' : 'grayscale(100%)'
              }`,
            ]"
            @click="feedBack[i].feed = rate + 1"
          >
            {{ emoji.icon }}
          </v-btn>
          <div v-else class="w-[80%] h-6 flex justify-center gap-4">
            <span
              v-for="(title, j) in type['none']"
              :key="j"
              class="text-sm cursor-pointer"
              :style="[
                `color:${feedBack[i].feed === j + 1 ? 'green' : 'gray'}`,
              ]"
              @click="feedBack[i].feed = j + 1"
            >
              {{ title.icon }}</span
            >
          </div>
        </div>
      </template>
    </v-stepper>
  </div>
</template>
<script setup>
import { useCustomStore } from "~/store/customSettings";
import Mark from "~/components/modules/index/Mark.vue";
// import data
import { useData } from "~/store/data";
const data = useData();
const feeds = computed(() => data.feedback || { items: [] });
const them = useCustomStore();
const shipping = ref(0);
const type = reactive({
  emoji: [
    { rate: 1, icon: "😥" },
    { rate: 2, icon: "😕" },
    { rate: 3, icon: "😐" },
    { rate: 4, icon: "😊" },
    { rate: 5, icon: "😍" },
  ],
  tumbs: [
    { rate: 1, icon: "👊" },
    { rate: 2, icon: "👎" },
    { rate: 3, icon: "👐" },
    { rate: 4, icon: "👍" },
    { rate: 5, icon: "👌" },
  ],
  stars: [
    { rate: 1, icon: "⭐" },
    { rate: 2, icon: "⭐" },
    { rate: 3, icon: "⭐" },
    { rate: 4, icon: "⭐" },
    { rate: 5, icon: "⭐" },
  ],
  none: [
    { rate: 1, icon: "خیلی ضعیف" },
    { rate: 2, icon: "ضعیف" },
    { rate: 3, icon: "متوسط" },
    { rate: 4, icon: "خوب" },
    { rate: 5, icon: "عالی" },
  ],
});
const step = ref(1);
const subtotal = computed(() =>
  products.reduce((acc, product) => acc + product.quantity * product.price, 0)
);
const total = computed(() => subtotal.value + Number(shipping.value ?? 0));

const items = [
  "رضایتمندی از کالا",
  "کیفیت بسته‌بندی",
  "تنوع کالاها",
  "تخفیفات فروشگاه",
  "پیشنهادات",
];

const feedBack = ref([]);

watch(
  () => feeds.value.items,
  (newItems) => {
    feedBack.value = newItems.map(() => ({
      feed: null,
      comment: "",
    }));
  },
  { immediate: true }
);
</script>

<style scoped>
::v-deep .v-label {
  right: 0 !important;
  left: auto !important;
  text-align: right !important;
}

/* راست‌چین کردن متن داخل فیلد */
::v-deep .custom-textarea textarea {
  text-align: right !important;
  direction: rtl !important;
}

::v-deep .v-stepper-header {
  display: none !important;
}

::v-deep .v-stepper-window {
  margin: 0.1rem !important;
}
</style>
