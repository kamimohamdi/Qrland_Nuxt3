<template>
  <v-expansion-panels
    :color="them.defaultThem.componentsColor"
    style="box-shadow: 0 !important"
  >
    <v-expansion-panel
      v-for="(item, i) in days"
      :key="i"
      dir="rtl"
      title="ساعات کاری"
      :color="them.defaultThem.componentsColor"
      style="box-shadow: 0 !important"
    >
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script setup>
import { useCustomStore } from "~/store/customSettings";
const them = useCustomStore();
import { ref } from "vue";

const panel = ref([0]); // برای کنترل باز شدن پانل‌ها

const days = [
  {
    name: "شنبه",
    shifts: [
      { name: "شیفت اول", start: "08:00", end: "14:00" },
      { name: "شیفت دوم", start: "17:00", end: "21:00" },
    ],
  },
  {
    name: "یکشنبه",
    shifts: [
      { name: "شیفت اول", start: "08:00", end: "14:00" },
      { name: "شیفت دوم", start: "17:00", end: "21:00" },
    ],
  },
  {
    name: "دوشنبه",
    shifts: [
      { name: "شیفت اول", start: "08:00", end: "14:00" },
      { name: "شیفت دوم", start: "17:00", end: "21:00" },
    ],
  },
  {
    name: "سه‌شنبه",
    shifts: [
      { name: "شیفت اول", start: "08:00", end: "14:00" },
      { name: "شیفت دوم", start: "17:00", end: "21:00" },
    ],
  },
  {
    name: "چهارشنبه",
    shifts: [
      { name: "شیفت اول", start: "08:00", end: "14:00" },
      { name: "شیفت دوم", start: "17:00", end: "21:00" },
    ],
  },
  {
    name: "پنجشنبه",
    shifts: [{ name: "شیفت اول", start: "08:00", end: "12:00" }],
  },
];
</script>

<style scoped>
.v-expansion-panel-header {
  background-color: #6200ea;
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.v-expansion-panel-header:hover {
  background-color: #3700b3;
}

.v-expansion-panel-content {
  background-color: #fafafa;
  padding: 10px;
}

.v-card-title {
  background-color: #6200ea;
  color: white;
  padding: 15px;
}

.v-icon {
  font-size: 20px;
  transition: transform 0.3s ease;
}

.v-expansion-panel--active .v-icon {
  transform: rotate(180deg);
}
</style>
