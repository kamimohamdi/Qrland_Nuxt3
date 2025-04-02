<template>
  <div
    class="h-[60vh] w-full flex my-10 justify-center align-center relative flex-col"
  >
    <div class="relative my-3 w-full flex justify-center align-center">
      <span
        class="w-[50px] h-0.5 absolute bottom-[-5px] rounded-xl"
        :style="{ background: them.defaultThem.componentsColor }"
      />
      <h2
        :style="{ color: them.defaultThem.textColor }"
        class="text-md opacity-70"
      >
        گالری ویدیو
      </h2>
    </div>
    <swipperComponents
      :images="images.dataCustom.picture.shopingInformations.video"
      :size="{
        height: '60vh',
        width: '80%',
        rounded: '15px',
        type: 'video',
      }"
    />
  </div>
</template>

<script setup>
import swipperComponents from "~/utilities/swipperComponents.vue";
import { useCustomStore } from "~/store/customSettings";
const them = useCustomStore();
const images = useCustomStore();
</script>
