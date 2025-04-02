import { defineStore } from "pinia";
import { data } from "~/db";
import { useThem } from "./customThem";

export const useCustomStore = defineStore("custom", () => {
  type SettingsType = typeof data;
  const them = useThem();

  const settings = ref<SettingsType>({} as SettingsType);
  const dataCustom = computed(() => data);

  const defaultThem = computed(() => them.themColor);
  const backgroundSettings = computed(() => {
    if (defaultThem.value == "light") {
      return data.them.light;
    } else {
      return data.them.dark;
    }
  });

  return { settings, dataCustom, backgroundSettings, defaultThem };
});
