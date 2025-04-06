<template>
  <div id="map" class="map-container"></div>
</template>

<script setup>
import { onBeforeMount } from "vue";

onBeforeMount(() => {
  // بررسی اینکه کد فقط در سمت کلاینت اجرا بشه
  if (process.client && window.Map) {
    const map = new window.Map({
      key: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImVkOGZkODY0OWJjMmUxM2FhNDlhMzBiMDE0Y2U5M2ZmZDc0ODViODRjNWJkNGExMDdmOGZiNGEyMTdhZTQ5ODI1Y2I4ZjIwMDNlMGMxMWI1In0.eyJhdWQiOiIzMTc5NCIsImp0aSI6ImVkOGZkODY0OWJjMmUxM2FhNDlhMzBiMDE0Y2U5M2ZmZDc0ODViODRjNWJkNGExMDdmOGZiNGEyMTdhZTQ5ODI1Y2I4ZjIwMDNlMGMxMWI1IiwiaWF0IjoxNzQzOTIwNjU3LCJuYmYiOjE3NDM5MjA2NTcsImV4cCI6MTc0NjUxMjY1Nywic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.VRWKhELAvyKrFdwMSZIrOzbnEObVX4-hpY5h8rcUI11Q5gYJOH6CUTI7uz9mRXyd2IA-6kAnN9PyTNWpnh4phXmEDdsSutJqCf_AqZ6TS7w6H1mSLhQtr2bEd_M7BpLtPgtxFDvI5MpCAfHcWtlmM-I77wxx_X0Jx-QkWB4Ye4wDov07mWJSqS2Ac3P9RoMOEKXrYWC5ZIVB-3MxRZiKlA-6psSXkXYGn0fIPJQAOBR_zHpCLLdYQjQ8x93EmsGrfFDqu9hyvVhr4jFU7NcAW-uYpXpP2MP5PnASIhfcaNOPtxcrujpVOWF4n49fKeleG5vcHUV4Quo2Ki0Z4kzMcQ",
      container: "map", // container برای نمایش نقشه
      center: [51.389, 35.6895], // مختصات تهران (می‌تونی تغییر بدی)
      zoom: 12, // مقدار بزرگنمایی
    });
  }
});
</script>

<style scoped>
#map {
  height: 400px;
  width: 100%;
}
</style>
