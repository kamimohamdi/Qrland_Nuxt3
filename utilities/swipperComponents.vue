<template>
  <div class="w-full h-full justify-center align-center">
    <button v-if="images?.length > 1" ref="prevEl" class="prev_btn">
      <v-icon size="40" color="white">mdi-chevron-left</v-icon>
    </button>

    <swiper
      :modules="[Navigation, Pagination, Autoplay]"
      :slides-per-view="1"
      :space-between="10"
      :loop="true"
      :pagination="false"
      :navigation="{ prevEl: prevEl, nextEl: nextEl }"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: props.size.type === 'video' ? true : false,
      }"
      class="custom-swiper"
      @swiper="onSwiper"
    >
      <swiper-slide
        v-for="(img, index) in props.images"
        :key="index"
        class="d-flex justify-items-center align-content-center relative"
        style="display: flex; justify-content: center"
      >
        <img
          v-if="props.size.type === 'image'"
          :src="img.url"
          alt="Slide Image"
          :style="{
            width: props.size.width,
            height: props.size.height,
            borderRadius: props.size.rounded,
          }"
        />
        <iframe
          v-else
          :src="img.url"
          ref="video"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          :style="{
            width: props.size.width,
            minHeight: props.size.height,
            borderRadius: props.size.rounded,
          }"
        />
        <div
          v-if="img.title && props.size.type === 'image'"
          class="titleSwiper"
        >
          <h1 class="text-xl">{{ img.title }}</h1>
          <h3>{{ img.description }}</h3>
        </div>
        <div
          v-if="img.title && props.size.type === 'video'"
          class="absolute top-[5%] right-[5%] w-auto rounded-xl text-white px-2 py-2 h-6 bg-slate-500"
          :style="{ background: data.defaultThem.componentsColor }"
        >
          {{ img.title }}
        </div>
      </swiper-slide>
    </swiper>

    <button v-if="images?.length > 1" ref="nextEl" class="next_btn">
      <v-icon size="40" color="white">mdi-chevron-right</v-icon>
    </button>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useCustomStore } from "~/store/customSettings";
const data = useCustomStore();
const video = ref(null);

const props = defineProps<{
  images: string[];
  size: {
    height: string | number;
    width: string | number;
    rounded: string | null;
    type: "image" | "video";
  };
}>();

const changevideo = (e) => {
  console.log(e);
};

// دکمه‌های قبلی و بعدی
const prevEl = ref(null);
const nextEl = ref(null);

// ریفرنس ویدیوها
const videoRefs = ref<HTMLIFrameElement[]>([]);

// وضعیت پخش ویدیو
const isVideoPlaying = ref(false);

// تنظیمات autoplay برای جلوگیری از تغییر اسلاید در هنگام پخش ویدیو
const autoplayConfig = ref({
  delay: 15000,
  disableOnInteraction: false, // جلوگیری از توقف autoplay هنگام تعامل
});

// وقتی اسلایدر آماده شد، دکمه‌های ناوبری رو مقداردهی کن
const onSwiper = (swiper) => {
  setTimeout(() => {
    swiper.params.navigation.prevEl = prevEl.value;
    swiper.params.navigation.nextEl = nextEl.value;
    swiper.navigation.init();
    swiper.navigation.update();
  });
};

// توقف تمام ویدیوها
function stopVideos() {
  if (!isVideoPlaying.value) {
    // فقط در صورتی که ویدیو در حال پخش نباشد
    videoRefs.value.forEach((video) => {
      if (video) {
        video.src = ""; // متوقف کردن ویدیو
      }
    });
  }
}

// پخش ویدیو فقط در اسلاید فعال و توقف بقیه
function playVideo(index: number) {
  isVideoPlaying.value = true; // ویدیو در حال پخش است
  autoplayConfig.value = {
    ...autoplayConfig.value,
    disableOnInteraction: true,
  }; // غیرفعال کردن autoplay
  videoRefs.value.forEach((video, i) => {
    if (i !== index && video) {
      video.src = ""; // ویدیوهای دیگر متوقف می‌شود
    }
  });
}

// زمانی که ویدیو متوقف می‌شود
function onVideoPause() {
  isVideoPlaying.value = false; // ویدیو متوقف شد
  autoplayConfig.value = {
    ...autoplayConfig.value,
    disableOnInteraction: false,
  }; // فعال کردن autoplay دوباره
}

// جلوگیری از تغییر اسلاید در حین پخش ویدیو
function onSlideChange(swiper) {
  if (isVideoPlaying.value) {
    swiper.slideTo(swiper.activeIndex); // اسلاید فعلی ثابت می‌ماند
  }
}

onMounted(() => {
  stopVideos();
});
</script>

<style scoped>
.custom-swiper div {
  display: flex;
  justify-content: center;
  align-items: center;
}
.custom-swiper img {
  object-fit: cover;
  border-radius: 0;
}
.prev_btn,
.next_btn {
  position: absolute;
  z-index: 998;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.347);
}
.next_btn {
  right: 5%;
  top: 50%;
}
.prev_btn {
  top: 50%;
  left: 5%;
}
.titleSwiper {
  position: absolute;
  color: white;
  background: rgba(0, 0, 0, 0.5);
  direction: rtl;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column; /* برای قرار گرفتن h1 و h3 یکی زیر دیگری */
  justify-content: flex-end; /* برای قرار دادن در پایین */
  align-items: flex-end; /* برای قرار دادن در سمت راست */
  padding: 20px;
  transition: background 2s ease, transform 1s ease;
  /* transform: translateX(-100%); */
  opacity: 0;
}

.titleSwiper h1 {
  position: absolute;
  opacity: 0;
  top: 70%;
  right: 30%;
  transform: translateY(50px);
  transition: opacity 2s ease, transform 1s ease;
}

.titleSwiper h3 {
  position: absolute;
  opacity: 0;
  top: 75%;
  right: 30%;
  transform: translateY(50px);
  transition: opacity 1s ease, transform 1s ease;
}

.swiper-slide-active .titleSwiper {
  background: rgba(0, 0, 0, 0.767);
  /* transform: translateX(0); */
  opacity: 1;
}

.swiper-slide-active .titleSwiper h1 {
  opacity: 1;
  transform: translateY(0);
}

.swiper-slide-active .titleSwiper h3 {
  opacity: 1;
  transform: translateY(0);
}
.v-window-item {
  display: flex !important;
  justify-content: center !important;
}

.v-tabs-window-item {
  display: flex !important;
  justify-content: center !important;
}
</style>
