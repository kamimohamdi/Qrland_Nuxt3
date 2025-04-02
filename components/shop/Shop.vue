<template>
  <v-card
    :disabled="loading"
    :loading="loading"
    class="mx-auto"
    max-width="300"
    max-height="600"
    dir="rtl"
  >
    <template v-slot:loader="{ isActive }">
      <v-progress-linear
        :active="isActive"
        color="deep-purple"
        height="2"
        indeterminate
      />
    </template>

    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
      cover
    />

    <v-card-item>
      <v-card-title>بوتیک آرمتیس</v-card-title>

      <v-card-subtitle dir="rtl">
        <v-icon color="error" icon="mdi-fire-circle" size="small" />
        <span class="me-1">بهترین انتخاب</span>
      </v-card-subtitle>
    </v-card-item>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :model-value="4.5"
          color="amber"
          density="compact"
          size="small"
          half-increments
          readonly
        />

        <div class="text-grey ms-4">4.5 (413)</div>
      </v-row>

      <div class="my-4 text-subtitle-1">$ پاساژ ایرانیان</div>

      <div>بهترین برند های شلوار - بهترین برند های پیراهن</div>
    </v-card-text>
  </v-card>
</template>

<script></script>

<style></style>
