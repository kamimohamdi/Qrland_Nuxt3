<script setup lang="ts">
const model = ref([]);
import { Shop } from "#components";
import { useCustomStore } from "~/store/customSettings";
const them = useCustomStore();
</script>
<template>
  <div class="h-[100vh] w-[80%] flex justify-center align-center flex-col">
    <div class="relative my-3 w-full flex justify-center align-center">
      <span
        class="w-[50px] h-0.5 absolute bottom-[-5px] rounded-xl"
        :style="{ background: them.defaultThem.componentsColor }"
      />
      <h2
        :style="{ color: them.defaultThem.textColor }"
        class="text-md opacity-70"
      >
        فروشگاه های آنلاین
      </h2>
    </div>
    <v-sheet
      class="rounded-xl"
      style="box-shadow: none !important"
      :color="them.defaultThem.componentsColor"
      elevation="8"
      width="100%"
    >
      <v-slide-group
        v-model="model"
        class="pa-0"
        selected-class=""
        multiple
        show-arrows
      >
        <v-slide-group-item
          v-for="n in 15"
          :key="n"
          v-slot="{ toggle }"
          dir="rtl"
        >
          <v-card @click="toggle" class="mx-2 my-3 rounded-xl">
            <Shop />
          </v-card>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>
