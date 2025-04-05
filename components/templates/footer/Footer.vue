<script setup>
import { useCustomStore } from "~/store/customSettings";
import Modal from "~/utilities/Modal.vue";
import { useData } from "~/store/data";
import Shift from "../time/Shift.vue";

const latitude = ref(35.6895); // عرض جغرافیایی
const longitude = ref(51.389); // طول جغرافیایی
const zoom = ref(12);

const isClient = ref(false);
const { footer, abouts } = useData();
const them = useCustomStore();
const medias = ref([]);
const value = ref(false);

const getMedia = () => {
  Object.keys(footer.media).map((item, index) =>
    medias.value.push({ name: item, media: footer.media[item] })
  );
};

onMounted(async () => {
  getMedia();
});
</script>

<template>
  <v-footer
    class="text-center w-full d-flex flex-column ga-2 py-4"
    :color="them.defaultThem.componentsColor"
  >
    <div class="flex flex-col w-[80%]">
      <h2 :color="them.defaultThem.componentsColor" class="text-xl my-2">
        {{ abouts.organizationName }}
      </h2>
      <v-card elevation="0" :color="them.defaultThem.componentsColor">
        <v-card-subtitle dir="rtl"> {{ abouts.subOrgan }}</v-card-subtitle>
        <v-card-text>
          {{ abouts.userName }}
          <v-text class="mx-4" v-if="abouts.workField">
            سمت : {{ abouts.workField }}
          </v-text>
        </v-card-text>
      </v-card>
    </div>
    <v-divider class="my-2" thickness="2" width="50"></v-divider>
    <div class="flex flex-col w-[80%]">
      <h2 :color="them.defaultThem.componentsColor" class="text-xl my-2">
        ساعات کاری
      </h2>
      <Shift />
    </div>
    <v-divider class="my-2" thickness="2" width="50"></v-divider>

    <div class="flex flex-col w-[80%]">
      <h2 :color="them.defaultThem.componentsColor" class="text-xl my-2">
        مراجعه حضوری
      </h2>

      <div class="flex justify-center align-center">
        <ul class="flex flex-col w-full gap-4 justify-center align-center">
          <li class="flex gap-2 cursor-pointer" @click="value = true">
            <span
              class="text-sm"
              :style="{ color: them.defaultThem.textColor }"
            >
              {{ footer.address }}
            </span>
            <v-icon size="20" :color="them.defaultThem.iconColor"
              >mdi-map-marker</v-icon
            >
          </li>
          <li class="flex gap-2">
            <a
              href="http://www.terminalads.com"
              class="text-sm"
              :style="{ color: them.defaultThem.textColor }"
              target="_blank"
            >
              {{ footer.website }}</a
            >
            <v-icon size="20" :color="them.defaultThem.iconColor"
              >mdi-web</v-icon
            >
          </li>
        </ul>
      </div>
    </div>
    <v-divider class="my-2" thickness="2" width="50"></v-divider>

    <div class="flex flex-col w-[80%]">
      <h2 :color="them.defaultThem.componentsColor" class="text-xl my-2">
        تماس با ما
      </h2>

      <div class="flex justify-center align-center">
        <ul class="flex flex-col w-full gap-4 justify-center align-center">
          <li
            v-for="(phone, i) in footer.phoneNumber"
            v-if="!!footer.phoneNumber"
            :key="i"
            class="flex gap-2"
          >
            <v-icon size="20" :color="them.defaultThem.iconColor"
              >mdi-phone</v-icon
            >
            <a
              :href="`tel:${phone.number}`"
              class="text-sm"
              :style="{ color: them.defaultThem.textColor }"
              >{{ phone.number }}</a
            >
          </li>

          <li v-if="footer.fax" class="flex gap-2">
            <v-icon size="20" :color="them.defaultThem.iconColor"
              >mdi-fax</v-icon
            >
            <span
              class="text-sm"
              :style="{ color: them.defaultThem.textColor }"
              >{{ footer.fax }}</span
            >
          </li>
          <li v-if="footer.fax" class="flex gap-2">
            <v-icon size="20" :color="them.defaultThem.iconColor"
              >mdi-email</v-icon
            >
            <a
              :href="`mailto:${footer.email}`"
              class="text-sm"
              :style="{ color: them.defaultThem.textColor }"
              >{{ footer.email }}</a
            >
          </li>
        </ul>
      </div>
    </div>
    <v-divider class="my-2" thickness="2" width="50"></v-divider>

    <div class="d-flex ga-3 flex-col">
      <h2 :color="them.defaultThem.componentsColor" class="text-xl">
        شبکه های اجتمایی ما
      </h2>
      <div class="flex w-[100%] gap-3">
        <div v-for="(icon, i) in medias" :key="i" class="flex">
          <a
            target="_blank"
            v-for="(item, j) in icon.media"
            :key="j"
            :href="`${
              icon.name !== 'address' ? `http://${item.pattern}` : item.pattern
            }`"
          >
            <v-img
              density="comfortable"
              variant="text"
              :src="item.img"
              :color="them.defaultThem.iconColor"
              label="kssio"
              class="d-flex mx-1 w-[45px] h-[45px] rounded-full justify-center align-center pa-2"
            />
          </a>
        </div>
      </div>
    </div>

    <v-divider class="my-2" thickness="2" width="50"></v-divider>

    <div
      class="text-sm font-weight-regular opacity-80 w-[90%]"
      :style="{ color: them.defaultThem.textColor }"
      dir="rtl"
    >
      <h2 class="text-xl">درباره ما</h2>
      <p class="text-center" v-html="footer.about.replace(/\n/g, '<br>')"></p>
    </div>

    <v-divider class="my-2" thickness="2" width="100%"></v-divider>

    <div
      class="text-sm"
      dir="rtl"
      :style="{ color: them.defaultThem.textColor }"
    >
      <p v-html="footer.copyright"></p>
    </div>
    <Modal v-model:value="value" max-height="500px" @submit="co">
      <template #default>
        <div>
          <MapLibre :latitude="latitude" :longitude="longitude" :zoom="zoom" />
        </div>
      </template>
    </Modal>
  </v-footer>
</template>

<style scoped>
#map {
  height: 400px;
  width: 100%;
}
</style>
