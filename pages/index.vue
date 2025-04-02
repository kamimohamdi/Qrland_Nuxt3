<script setup lang="ts">
import GalleryPictures from "~/components/Services/GalleryPictures.vue";
import GalleryVideo from "~/components/Services/GalleryVideo.vue";
import Shops from "~/components/shop/Shops.vue";
import Achievement from "~/components/templates/Achievement/Achievement.vue";

definePageMeta({
  layout: "first",
});
</script>

<template>
  <div class="flex flex-col justify-center align-center">
    <Services />
    <GalleryPictures />
    <Shops />
    <GalleryVideo />
    <comments-steps />
    <Achievement />
  </div>
</template>
