<template>
  <div class="relative w-full h-full">
    <!-- دکمه نمایش مسیر یاب -->
    <v-btn
      class=""
      style="z-index: 5; position: absolute; top: 5%; right: 5%"
      color="primary"
      @click="openMapApp"
    >
      مشاهده در مسیر یاب
    </v-btn>

    <!-- نقشه (در صورت نیاز به نمایش نقشه) -->
    <div ref="mapContainer" class="map-container w-full h-full" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { useCustomStore } from "~/store/customSettings";
const them = useCustomStore();

const props = defineProps<{
  location: { latitude: number; longitude: number };
}>();

// تعریف وضعیت نقشه
const latitude = ref(35.6895); // مختصات پیش‌فرض
const longitude = ref(51.389);
const zoom = ref(12);
const mapContainer = ref(null);

// تابع باز کردن مسیر یاب
const openMapApp = () => {
  // برای موبایل: استفاده از پروتکل google.navigation
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    // برای باز کردن در موبایل (اگر برنامه مسیریابی نصب باشد)
    window.location.href = `google.navigation:q=${props.location.latitude.value},${props.location.longitude.value}`;
  } else {
    // برای دسکتاپ: باز کردن گوگل مپس در مرورگر
    window.open(
      `https://www.google.com/maps?q=${latitude.value},${longitude.value}`,
      "_blank"
    );
  }
};

onMounted(() => {
  // بارگذاری نقشه
  const map = new maplibregl.Map({
    container: mapContainer.value,
    style:
      "https://api.maptiler.com/maps/streets/style.json?key=XZjkOytpiPlPe37YBEIW", // کلید API خود را وارد کن
    center: [longitude.value, latitude.value],
    zoom: zoom.value,
  });

  new maplibregl.Marker()
    .setLngLat([longitude.value, latitude.value])
    .addTo(map);
});
</script>

<style scoped>
.navigate-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 8px;
  margin-bottom: 10px;
}

.navigate-button:hover {
  background-color: #0056b3;
}

.map-container {
  width: 100%;
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
  z-index: 4;
}
</style>
