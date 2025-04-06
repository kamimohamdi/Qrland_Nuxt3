<template>
  <div>
    <v-card style="z-index: 999">
      <v-layout style="display: flex; justify-content: center" class="z-[999]">
        <v-app-bar
          :color="them.themColor.componentsColor"
          class="my-5"
          :style="[
            search ? 'max-width:0%' : 'max-width: 80%',
            'display: flex',
            'justify-content: space-between',
            'border-radius: 20px',
            'top: none',
            'left: none',
            'opacity:.8',
            'width:100%',
            'z-index:9999',
          ]"
        >
          <div class="w-full flex justify-between align-center px-3">
            <div class="flex">
              <div class="flex align-center">
                <v-switch
                  class="theme-switch"
                  hide-details
                  inset
                  v-model="switchThem"
                  @click="switchThem = !switchThem"
                >
                  <template #thumb>
                    <v-icon v-if="switchThem" color="#000" size="32"
                      >mdi-weather-night</v-icon
                    >
                    <v-icon v-else size="32">mdi-weather-sunny</v-icon>
                  </template>
                </v-switch>
                <div
                  class="w-12 md:w-52 h-10 text-bold cursor-pointer flex justify-center align-center shadow-xl rounded-2xl ml-4 border"
                  @click="search = !search"
                >
                  <span class="hidden md:flex mr-2">جستجو در محصولات</span>
                  <v-icon class="d-md-hidden">mdi-magnify</v-icon>
                </div>
              </div>
            </div>
            <div class="flex align-center justify-end">
              <span
                class="m-none text-sm mr-3"
                :style="[`color:${them.themColor.textColor}`]"
                >{{ data.abouts.organizationName }}</span
              >
              <v-img :src="custom.dataCustom.picture.logo" width="50px" />
            </div>
          </div>
        </v-app-bar>
        <v-app-bar
          :color="them.themColor.componentsColor"
          class="flex"
          :style="[
            search ? 'max-width: 90%' : 'max-width:0%',
            'display: flex',
            'border-radius: 20px',
            'top: 35%',
            'left: none',
            'opacity:.95',
            'align-items:center',
            'width:100%',
            'z-index:99999',
          ]"
          :height="150"
        >
          <div class="w-full flex flex-col justify-between">
            <div class="w-full flex px-2 align-center justify-between">
              <input
                type="text"
                class="w-[90%] h-14 rounded-xl outline-0 px-3 border"
                dir="rtl"
                placeholder="دنبال چی میگردی ؟"
              />
              <span
                class="w-[9%] cursor-pointer text-gray-500 h-14 flex justify-center align-center border rounded-xl"
                @click="search = !search"
                >بستن
              </span>
            </div>
            <div class="flex justify-center w-full px-2 mt-1" dir="rtl">
              <span class="text-gray-700 w-[20%] mr-16">پیشنهاد ها </span>
              <div class="flex w-full gap-2">
                <span
                  class="flex px-2 rounded-[12px] text-sm py-0 border align-center justify-center"
                  >شلوار</span
                >
                <span
                  class="flex px-2 rounded-[12px] text-sm py-0 border align-center justify-center"
                  >شلوار</span
                >
                <span
                  class="flex px-2 rounded-[12px] text-sm py-0 border align-center justify-center"
                  >شلوار</span
                >
                <span
                  class="flex px-2 rounded-[12px] text-sm py-0 border align-center justify-center"
                  >شلوار</span
                >
                <span
                  class="flex px-2 rounded-[12px] text-sm py-0 border align-center justify-center"
                  >شلوار</span
                >
              </div>
            </div>
          </div>
        </v-app-bar>

        <v-main
          :style="[
            'height: 100vh',
            `background:${them.themColor.backgroundColor}`,
            'box-shadow:none',
            'padding-top:0',
          ]"
        >
          <swipperComponents
            :images="gallery"
            :size="{ height: '100vh', width: '100%', type: 'image' }"
          />
        </v-main>
      </v-layout>
    </v-card>
  </div>
</template>
<script setup lang="ts">
import { useThem } from "~/store/customThem";
import { useCustomStore } from "~/store/customSettings";
import swipperComponents from "~/utilities/swipperComponents.vue";
import { useData } from "~/store/data";
const data = useData();

const gallery = data.banner;
const them = useThem();
const custom = useCustomStore();
const switchThem = ref<boolean>(false);
const search = ref<boolean>(false);

watch(switchThem, (value: boolean) => {
  if (value) {
    them.setThem("dark");
  } else {
    them.setThem("light");
  }
});
</script>

<style scoped></style>
