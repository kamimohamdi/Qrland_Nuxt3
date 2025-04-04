<template>
  <div
    class="h-[60vh] w-full flex my-14 justify-center align-center relative flex-col"
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
        گالری تصاویر
      </h2>
    </div>
    <div class="w-full flex flex-col justify-center">
      <div class="my-3 flex justify-center">
        <v-tabs v-model="tabs">
          <v-tab v-for="(item, i) in gallery" :key="i" :value="i">
            {{ item?.name }}
          </v-tab>
        </v-tabs>
      </div>

      <v-tabs-window v-model="tabs">
        <v-tabs-window-item v-for="(item, i) in gallery" :key="i" :value="i">
          <swipperComponents
            :images="item.images"
            :size="{
              height: '60vh',
              width: '80%',
              rounded: '15px',
              type: 'image',
            }"
          />
        </v-tabs-window-item>
      </v-tabs-window>
    </div>
  </div>
</template>

<script setup>
import swipperComponents from "~/utilities/swipperComponents.vue";
import { useCustomStore } from "~/store/customSettings";
import { useData } from "~/store/data";
const data = useData();
const tabs = ref(0);
const gallery = data.gallery;
// const gallery = data.
const them = useCustomStore();
const images = useCustomStore();
// const gallery = data.datas.gallery;
</script>
