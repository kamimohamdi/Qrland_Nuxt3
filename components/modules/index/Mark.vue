<template>
  <div class="relative my-3 w-full flex justify-center align-center">
    <span
      class="w-[50px] h-0.5 absolute bottom-[-5px] rounded-xl"
      :style="{ background: them.defaultThem.componentsColor }"
    />
    <h2
      :style="{ color: them.defaultThem.textColor }"
      class="text-md opacity-70"
    >
      {{ props.title }}
    </h2>
  </div>
</template>

<script setup lang="ts">
import { useCustomStore } from "~/store/customSettings";
const props = defineProps<{ title: string }>();
const them = useCustomStore();
</script>
