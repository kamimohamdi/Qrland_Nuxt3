<template>
  <div>
    <v-expansion-panels
      elevation="0"
      dir="rtl"
      v-model="panel"
      multiple
      :bg-color="them.defaultThem.componentsColor"
    >
      <v-expansion-panel
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        title="Foo"
        value="foo"
      >
        <template #text>
          <div class="w-[100%] h-full flex flex-col items-center">
            <div class="w-full">
              <v-tabs
                v-model="tab"
                :bg-color="them.defaultThem.componentsColor"
                class="justify-center"
              >
                <v-tab
                  v-for="(item, i) in sheets"
                  :key="i"
                  :value="i"
                  class="text-center"
                >
                  <h2 v-if="item.models.shift && item.models.shift[0]?.start">
                    {{ item.models.name }}
                  </h2>
                </v-tab>
              </v-tabs>

              <v-tabs-window class="w-full flex justify-center" v-model="tab">
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
                        <span>ساعت پایان: {{ item.models.shift[0].end }}</span>
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
                        <span>ساعت پایان: {{ item.models.shift[1].end }}</span>
                      </div>
                    </v-tabs-window-item>
                  </v-tabs-window>
                </v-tabs-window-item>
              </v-tabs-window>
            </div>
          </div>
        </template>
        <template #title> ساعت کاری </template>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script setup>
import { useCustomStore } from "~/store/customSettings";
import { useData } from "~/store/data";
const { footer } = useData();
const them = useCustomStore();
const panel = ref([]);
const tab = ref(0);
const tab2 = ref(0);
const sheets = ref([]);
const setSheefts = () => {
  Object.keys(footer.workSheets.items).map((item) => {
    sheets.value.push({ name: item, models: footer.workSheets.items[item] });
  });
};

onMounted(() => {
  setSheefts();
});
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
