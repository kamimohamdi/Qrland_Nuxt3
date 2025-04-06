<template>
  <div class="w-[80%] mt-[20px]" style="margin-top: 5rem">
    <Mark title="سوالات متداول" />
    <v-expansion-panels :color="them.defaultThem.componentsColor">
      <v-expansion-panel
        v-for="(question, i) in questionAn"
        :key="i"
        :title="question.question"
        :text="question.answer"
        dir="rtl"
      />
    </v-expansion-panels>
  </div>
</template>

<script setup lang="ts">
import Mark from "~/components/modules/index/Mark.vue";
import { useData } from "~/store/data";
import { useCustomStore } from "~/store/customSettings";
const { questionAn } = useData();
const them = useCustomStore();
</script>

<style></style>
