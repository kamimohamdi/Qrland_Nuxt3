<template>
  <nav>
    <NavbarMenu />
    <body>
      <slot />
    </body>
  </nav>
</template>

<script setup lang="ts">
import NavbarMenu from "~/components/NavbarMenu.vue";
</script>

<style></style>
