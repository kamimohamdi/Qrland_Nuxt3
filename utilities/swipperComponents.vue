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
        class="d-flex justify-items-center align-content-center"
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
</style>
