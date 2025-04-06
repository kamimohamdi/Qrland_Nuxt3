<template>
  <div>
    <v-expansion-panels
      elevation="0"
      multiple
      :bg-color="them.defaultThem.componentsColor"
      dir="rtl"
      v-model="panel"
      v-if="sheets.length < 3"
    >
      <v-expansion-panel>
        <template #text>
          <div class="w-[100%] h-full flex flex-col items-center">
            <div class="w-full">
              <v-tabs
                v-model="tab"
                :bg-color="them.defaultThem.componentsColor"
                class="justify-center"
                v-if="sheets.length < 3"
              >
                <v-tab
                  v-for="(item, i) in sheets"
                  :key="i"
                  :value="i"
                  class="text-center"
                >
                  <h2>
                    {{ item.models.name }}
                  </h2>
                </v-tab>
              </v-tabs>
              <v-tabs
                v-model="tab"
                :bg-color="them.defaultThem.componentsColor"
                class="justify-center text-center"
                v-else
              >
                <v-btn
                  :color="them.defaultThem.componentsColor"
                  class="text-center ma-2"
                  >نمایش ساعات کاری</v-btn
                >
              </v-tabs>
              <v-tabs-window class="w-full flex justify-center" v-model="tab">
                <div v-if="sheets.length < 3">
                  <v-tabs-window-item
                    v-for="(item, i) in sheets"
                    :key="i"
                    :value="i"
                  >
                    <v-tabs
                      v-model="tab2"
                      :bg-color="them.defaultThem.componentsColor"
                      class="justify-center"
                    >
                      <v-tab
                        v-if="!!item.models.shift[0]"
                        value="1"
                        class="text-center"
                      >
                        شیفت اول
                      </v-tab>
                      <v-tab
                        v-if="!!item.models.shift[1]['start']"
                        value="2"
                        class="text-center"
                      >
                        شیفت دوم
                      </v-tab>
                    </v-tabs>

                    <v-tabs-window v-model="tab2">
                      <v-tabs-window-item value="1">
                        <div
                          class="flex justify-between flex-col w-full align-center gap-2 text-center"
                        >
                          <span
                            >ساعت شروع : {{ item.models.shift[0].start }}</span
                          >
                          <span
                            >ساعت پایان: {{ item.models.shift[0].end }}</span
                          >
                        </div>
                      </v-tabs-window-item>
                      <v-tabs-window-item
                        value="2"
                        v-if="!!item.models.shift[1]['start']"
                      >
                        <div
                          class="flex flex-col justify-start align-center gap-2 text-center"
                        >
                          <span
                            >ساعت شروع : {{ item.models.shift[1].start }}</span
                          >
                          <span
                            >ساعت پایان: {{ item.models.shift[1].end }}</span
                          >
                        </div>
                      </v-tabs-window-item>
                    </v-tabs-window>
                  </v-tabs-window-item>
                </div>
              </v-tabs-window>
            </div>
          </div>
        </template>
        <template #title> ساعت کاری </template>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-expansion-panels
      v-else
      elevation="0"
      multiple
      :bg-color="them.defaultThem.componentsColor"
      dir="rtl"
      @click="value = !value"
    >
      <v-expansion-panel>
        <template #title> ساعات حضور در شرکت </template>
      </v-expansion-panel>
    </v-expansion-panels>
    <Modal v-model:value="value" max-height="500px" :custom-object="shiftModal">
      <template #default>
        <div class="flex w-full flex-col">
          <v-select
            label="روز هفته"
            :items="sheets"
            variant="outlined"
            :item-title="
              (item) => {
                return item.models.name;
              }
            "
            item-value="name"
            dir="rtl"
            v-model="selectItem"
          />
          <table
            border="1"
            cellpadding="10"
            style="width: 100%; text-align: center; direction: rtl"
            class="border h-18"
            v-if="selectItem"
          >
            <thead>
              <tr>
                <th>شیفت اول</th>
                <th>شیفت دوم</th>
              </tr>
            </thead>
            <tbody class="border-t">
              <tr>
                <td
                  class="flex gap-2 mt-2 justify-center"
                  v-if="footer.workSheets.items[selectItem]?.shift[0].start"
                >
                  <span>{{
                    footer.workSheets.items[selectItem]?.shift[0].start
                  }}</span>
                  <p>الی</p>
                  <span>{{
                    footer.workSheets.items[selectItem]?.shift[0].end
                  }}</span>
                </td>
                <td
                  class="flex mt-2 justify-center"
                  v-if="footer.workSheets.items[selectItem]?.shift[1].start"
                >
                  <span>{{
                    footer.workSheets.items[selectItem]?.shift[1].start
                  }}</span>
                  <p>الی</p>
                  <span>{{
                    footer.workSheets.items[selectItem]?.shift[1].end
                  }}</span>
                </td>
                <td v-else>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </template>
    </Modal>
  </div>
</template>

<script setup>
import { useCustomStore } from "~/store/customSettings";
import { useData } from "~/store/data";
import Modal from "~/utilities/Modal.vue";
const { footer } = useData();
const them = useCustomStore();
const panel = ref([]);
const tab = ref(0);
const tab2 = ref(0);
const sheets = ref([]);
const selectItem = ref(null);
const sheetsFilter = ref(sheets.value.filter((item) => item.models.start));
const setSheefts = () => {
  Object.keys(footer.workSheets.items).map((item) => {
    if (footer.workSheets.items[item].start) {
      sheets.value.push({ name: item, models: footer.workSheets.items[item] });
    }
  });
};
const shiftModal = ref({
  close: true,
  check: false,
  subtitle: "روزهای هفته را انتخاب کنید و ساعات کاری را مشاهده کنید",
  button: null,
  title: "ساعت کاری",
});
watch(
  sheets,
  (value) =>
    (sheetsFilter.value = sheets.value.filter((item) => item.models.start))
);

onMounted(() => {
  setSheefts();
});

watch(selectItem, (val) => {
  console.log(val);
});

const value = ref(false);
</script>

<style scoped>
.v-expansion-panel .v-expansion-panel__shadow {
  box-shadow: none !important;
}
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

.v-expansion-panel {
  box-shadow: none !important;
}
.v-expansion-panel__header {
  box-shadow: none !important;
}
.v-expansion-panel--active .v-expansion-panel__header {
  box-shadow: none !important;
}
.v-slide-group__content {
  justify-content: space-between !important;
}
</style>
