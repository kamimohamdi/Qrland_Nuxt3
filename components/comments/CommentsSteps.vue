<template>
  <div class="w-[80%] flex my-2 flex-col">
    <Mark title="بازخورد شما برای ما اهمیت دارد" />
    <v-stepper
      v-model="step"
      :style="[
        'box-shadow: none',
        `backgroundd:${them.defaultThem.componentsColor}`,
      ]"
      :items="items"
      dir="rtl"
    >
      <template #prev="{ props }">
        <v-btn color="red" v-bind="props">قبلی</v-btn>
      </template>
      <template #next="{ props }">
        <v-btn color="primary" v-bind="props" v-if="step < 5">بعدی</v-btn>
      </template>
      <template v-if="step == 5" #actions>
        <v-btn
          variant="tonal"
          :disabled="feedBack[4].comment.length < 4"
          color="primary"
          class="outlined"
          >ثبت</v-btn
        >
      </template>

      <template v-slot:item.1>
        <h2 class="text-sm">آیا از کیفیت کالاها رضایت داشتید؟</h2>
        <div class="my-3" dir="rtl">
          <v-textarea
            v-model="feedBack[0].comment"
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
        <div class="h-14 w-full flex justify-center align-center">
          <v-btn
            class="text-h4"
            :style="[
              'box-shadow: none',
              'with: 50px',
              ' height: 50px',
              `filter:${feedBack[0].feed == 5 ? 'none' : 'grayscale(100%)'}`,
            ]"
            @click="feedBack[0].feed = 5"
            >😍</v-btn
          >
          <v-btn
            class="text-h4"
            :style="[
              'box-shadow: none',
              'with: 50px',
              ' height: 50px',
              `filter:${feedBack[0].feed == 4 ? 'none' : 'grayscale(100%)'}`,
            ]"
            @click="feedBack[0].feed = 4"
            >😊</v-btn
          >
          <v-btn
            class="text-h4"
            :style="[
              'box-shadow: none',
              'with: 50px',
              'height: 50px',
              `filter:${feedBack[0].feed == 3 ? 'none' : 'grayscale(100%)'}`,
            ]"
            @click="feedBack[0].feed = 3"
            >😐</v-btn
          >
          <v-btn
            class="text-h4"
            :style="[
              'box-shadow: none',
              'with: 50px',
              ' height: 50px',
              ' filter: none',
              ,
              `filter:${feedBack[0].feed == 2 ? 'none' : 'grayscale(100%)'}`,
            ]"
            @click="feedBack[0].feed = 2"
            >😕</v-btn
          >
          <v-btn
            class="text-h4"
            :style="[
              'box-shadow: none',
              'with: 50px',
              'height: 50px',
              `filter:${feedBack[0].feed == 1 ? 'none' : 'grayscale(100%)'}`,
            ]"
            @click="feedBack[0].feed = 1"
            >😥</v-btn
          >
        </div>
      </template>

      <template v-slot:item.2>
        <h2 class="text-sm">کیفیت بسته بندی را چگونه ارزیابی می کنید؟</h2>
        <div class="h-16 w-full flex justify-center align-center">
          <v-btn
            class="text-h4"
            :style="[
              'box-shadow: none',
              'with: 50px',
              ' height: 50px',
              `filter:${feedBack[1].feed == 5 ? 'none' : 'grayscale(100%)'}`,
            ]"
            @click="feedBack[1].feed = 5"
            >😍</v-btn
          >
          <v-btn
            class="text-h4"
            :style="[
              'box-shadow: none',
              'with: 50px',
              ' height: 50px',
              `filter:${feedBack[1].feed == 4 ? 'none' : 'grayscale(100%)'}`,
            ]"
            @click="feedBack[1].feed = 4"
            >😊</v-btn
          >
          <v-btn
            class="text-h4"
            :style="[
              'box-shadow: none',
              'with: 50px',
              'height: 50px',
              `filter:${feedBack[1].feed == 3 ? 'none' : 'grayscale(100%)'}`,
            ]"
            @click="feedBack[1].feed = 3"
            >😐</v-btn
          >
          <v-btn
            class="text-h4"
            :style="[
              'box-shadow: none',
              'with: 50px',
              ' height: 50px',
              ' filter: none',
              ,
              `filter:${feedBack[1].feed == 2 ? 'none' : 'grayscale(100%)'}`,
            ]"
            @click="feedBack[1].feed = 2"
            >😕</v-btn
          >
          <v-btn
            class="text-h4"
            :style="[
              'box-shadow: none',
              'with: 50px',
              'height: 50px',
              `filter:${feedBack[1].feed == 1 ? 'none' : 'grayscale(100%)'}`,
            ]"
            @click="feedBack[1].feed = 1"
            >😥</v-btn
          >
        </div>
      </template>

      <template v-slot:item.3>
        <h2 class="text-sm">آیا از تنوع کالاها راضی بودید؟</h2>
        <div class="h-16 w-full flex justify-center align-center">
          <v-btn
            class="text-h4"
            :style="[
              'box-shadow: none',
              'with: 50px',
              ' height: 50px',
              `filter:${feedBack[2].feed == 5 ? 'none' : 'grayscale(100%)'}`,
            ]"
            @click="feedBack[2].feed = 5"
            >😍</v-btn
          >
          <v-btn
            class="text-h4"
            :style="[
              'box-shadow: none',
              'with: 50px',
              ' height: 50px',
              `filter:${feedBack[2].feed == 4 ? 'none' : 'grayscale(100%)'}`,
            ]"
            @click="feedBack[2].feed = 4"
            >😊</v-btn
          >
          <v-btn
            class="text-h4"
            :style="[
              'box-shadow: none',
              'with: 50px',
              'height: 50px',
              `filter:${feedBack[2].feed == 3 ? 'none' : 'grayscale(100%)'}`,
            ]"
            @click="feedBack[2].feed = 3"
            >😐</v-btn
          >
          <v-btn
            class="text-h4"
            :style="[
              'box-shadow: none',
              'with: 50px',
              ' height: 50px',
              ' filter: none',
              ,
              `filter:${feedBack[2].feed == 2 ? 'none' : 'grayscale(100%)'}`,
            ]"
            @click="feedBack[2].feed = 2"
            >😕</v-btn
          >
          <v-btn
            class="text-h4"
            :style="[
              'box-shadow: none',
              'with: 50px',
              'height: 50px',
              `filter:${feedBack[2].feed == 1 ? 'none' : 'grayscale(100%)'}`,
            ]"
            @click="feedBack[2].feed = 1"
            >😥</v-btn
          >
        </div>
      </template>
      <template v-slot:item.4>
        <h2 class="text-sm">آیا از تخفیفات این فروشگاه هم بهره مند شده اید؟</h2>
        <div class="h-16 w-full flex justify-center align-center">
          <v-btn
            class="text-h4"
            :style="[
              'box-shadow: none',
              'with: 50px',
              ' height: 50px',
              `filter:${feedBack[3].feed == 5 ? 'none' : 'grayscale(100%)'}`,
            ]"
            @click="feedBack[3].feed = 5"
            >😍</v-btn
          >
          <v-btn
            class="text-h4"
            :style="[
              'box-shadow: none',
              'with: 50px',
              ' height: 50px',
              `filter:${feedBack[3].feed == 4 ? 'none' : 'grayscale(100%)'}`,
            ]"
            @click="feedBack[3].feed = 4"
            >😊</v-btn
          >
          <v-btn
            class="text-h4"
            :style="[
              'box-shadow: none',
              'with: 50px',
              'height: 50px',
              `filter:${feedBack[3].feed == 3 ? 'none' : 'grayscale(100%)'}`,
            ]"
            @click="feedBack[3].feed = 3"
            >😐</v-btn
          >
          <v-btn
            class="text-h4"
            :style="[
              'box-shadow: none',
              'with: 50px',
              ' height: 50px',
              ' filter: none',
              ,
              `filter:${feedBack[3].feed == 2 ? 'none' : 'grayscale(100%)'}`,
            ]"
            @click="feedBack[3].feed = 2"
            >😕</v-btn
          >
          <v-btn
            class="text-h4"
            :style="[
              'box-shadow: none',
              'with: 50px',
              'height: 50px',
              `filter:${feedBack[3].feed == 1 ? 'none' : 'grayscale(100%)'}`,
            ]"
            @click="feedBack[3].feed = 1"
            >😥</v-btn
          >
        </div>
      </template>
      <template v-slot:item.5>
        <h2 class="text-sm">
          برای بهبود تجربه خرید از این فروشگاه چه پیشنهادی دارید؟
        </h2>
        <div class="my-3" dir="rtl">
          <v-textarea
            v-model="feedBack[4].comment"
            row-height="25"
            rows="3"
            variant="outlined"
            label="توضیحات (اجباری)"
            auto-grow
            dir="rtl"
            class="custom-textarea"
            :rules="[(v) => v.length > 3 || 'باید حداقل ۳ کارکتر را وارد کنید']"
          />
        </div>
        <div class="h-16 w-full flex justify-center align-center">
          <v-btn
            class="text-h4"
            :style="[
              'box-shadow: none',
              'with: 50px',
              ' height: 50px',
              `filter:${feedBack[4].feed == 5 ? 'none' : 'grayscale(100%)'}`,
            ]"
            @click="feedBack[4].feed = 5"
            >😍</v-btn
          >
          <v-btn
            class="text-h4"
            :style="[
              'box-shadow: none',
              'with: 50px',
              ' height: 50px',
              `filter:${feedBack[4].feed == 4 ? 'none' : 'grayscale(100%)'}`,
            ]"
            @click="feedBack[4].feed = 4"
            >😊</v-btn
          >
          <v-btn
            class="text-h4"
            :style="[
              'box-shadow: none',
              'with: 50px',
              'height: 50px',
              `filter:${feedBack[4].feed == 3 ? 'none' : 'grayscale(100%)'}`,
            ]"
            @click="feedBack[4].feed = 3"
            >😐</v-btn
          >
          <v-btn
            class="text-h4"
            :style="[
              'box-shadow: none',
              'with: 50px',
              ' height: 50px',
              ' filter: none',
              ,
              `filter:${feedBack[4].feed == 2 ? 'none' : 'grayscale(100%)'}`,
            ]"
            @click="feedBack[4].feed = 2"
            >😕</v-btn
          >
          <v-btn
            class="text-h4"
            :style="[
              'box-shadow: none',
              'with: 50px',
              'height: 50px',
              `filter:${feedBack[4].feed == 1 ? 'none' : 'grayscale(100%)'}`,
            ]"
            @click="feedBack[4].feed = 1"
            >😥</v-btn
          >
        </div>
      </template>
    </v-stepper>
  </div>
</template>
<script setup>
import { useCustomStore } from "~/store/customSettings";
import Mark from "~/components/modules/index/Mark.vue";
const them = useCustomStore();

const shipping = ref(0);
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
const feedBack = ref([
  {
    step: 1,
    feed: null,
    comment: "",
  },
  {
    step: 2,
    feed: null,
  },
  {
    step: 3,
    feed: null,
  },
  {
    step: 4,
    feed: null,
  },
  {
    step: 5,
    feed: null,
    comment: "",
  },
]);
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
</style>
