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
      :pagination="{ clickable: true }"
      :navigation="{ prevEl: prevEl, nextEl: nextEl }"
      :autoplay="{ delay: 15000 }"
      class="custom-swiper"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
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
        <video
          v-else
          ref="videoRefs"
          controls
          @play="playVideo(index)"
          @pause="onVideoPause"
          :style="{
            width: props.size.width,
            height: props.size.height,
            borderRadius: props.size.rounded,
          }"
        >
          <source :src="img.url" type="video/mp4" />
        </video>
        <div
          v-if="img.title && props.size.type === 'image'"
          class="titleSwiper"
        >
          <h1 class="text-xl">{{ img.title }}</h1>
          <h3>{{ img.description }}</h3>
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

const props = defineProps<{
  images: string[];
  size: {
    height: string | number;
    width: string | number;
    rounded: string | null;
    type: "image" | "video";
  };
}>();

// دکمه‌های قبلی و بعدی
const prevEl = ref(null);
const nextEl = ref(null);

// ریفرنس ویدیوها
const videoRefs = ref<HTMLVideoElement[]>([]);

// وضعیت پخش ویدیو
const isVideoPlaying = ref(false);

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
        video.pause();
        video.currentTime = 0; // برگرداندن ویدیو به اول
      }
    });
  }
}

// پخش ویدیو فقط در اسلاید فعال و توقف بقیه
function playVideo(index: number) {
  isVideoPlaying.value = true; // ویدیو در حال پخش است
  videoRefs.value.forEach((video, i) => {
    if (i !== index && video) {
      video.pause();
    }
  });
}

// زمانی که ویدیو متوقف می‌شود
function onVideoPause() {
  isVideoPlaying.value = false; // ویدیو متوقف شد
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
  z-index: 999;
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
  display: flex;
  justify-content: center;
}
.v-tabs-window-item {
  display: flex;
  justify-content: center;
}
</style>
