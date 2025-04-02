import { defineStore } from "pinia";
import { data } from "~/db";

export const useThem = defineStore("them", () => {
  // انتخاب تم پیش‌فرض از localStorage یا `data.them.mode`
  const currentThem = ref<string>(
    process.client
      ? localStorage.getItem("them") || data.them.mode
      : data.them.mode
  );

  const themColor = computed(() => {
    if (currentThem.value == "light") {
      return data.them.light;
    } else {
      return data.them.dark;
    }
  });

  const apply = () => {
    const app = document.getElementsByClassName("app")[0];

    if (app) {
      app.style.background = themColor.value.backgroundColor;
      app.style.color = themColor.value.textColor;
    }
  };

  const setThem = (them: string) => {
    currentThem.value = them;
    localStorage.setItem("them", them);
    apply();
  };

  return { currentThem, apply, themColor, setThem };
});
