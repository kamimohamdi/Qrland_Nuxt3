<script setup lang="ts">
import GalleryPictures from "~/components/Services/GalleryPictures.vue";
import GalleryVideo from "~/components/Services/GalleryVideo.vue";
import Shops from "~/components/shop/Shops.vue";
import Achievement from "~/components/templates/Achievement/Achievement.vue";
import Time from "~/components/templates/time/Time.vue";
import Footer from "~/components/templates/footer/Footer.vue";

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
    <Time />
    <Footer />
  </div>
</template>
