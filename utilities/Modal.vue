<template>
  <v-dialog v-model="dialog" :max-height="maxHeight" :min-height="minHeight">
    <v-card>
      <v-card-title
        class="d-flex align-center px-4 flex-row-reverse h-18 border justify-between"
      >
        <span
          :class="`flex ${
            props.customObject.subtitle?.length > 0 ? 'flex-col' : ''
          } justify-start align-end my-2`"
        >
          <v-card-title>{{ props.customObject.title }}</v-card-title>
          <v-card-subtitle v-if="props.customObject.subtitle">{{
            props.customObject.subtitle
          }}</v-card-subtitle>
        </span>

        <div class="flex gap-2">
          <v-btn
            aria-label="بستن"
            color="#ff00008f"
            variant="tonal"
            rounded="lg"
            size="50"
            @click="
              dialog = false;
              someData('close');
            "
            v-if="props.customObject.close"
          >
            <v-icon size="35" color="red" icon="mdi-close-circle" />
            <v-tooltip activator="parent" location="top">بستن</v-tooltip>
          </v-btn>
          <v-btn
            aria-label="بستن"
            color="#00ff8987"
            variant="tonal"
            rounded="lg"
            size="50"
            @click="
              dialog = false;
              someData('check');
            "
            v-if="props.customObject.check"
          >
            <v-icon size="35" color="green" icon="mdi-check-all" />
            <v-tooltip activator="parent" location="top">تایید</v-tooltip>
          </v-btn>
          <v-btn
            v-if="props.customObject.button"
            :color="props.customObject.button.buttonColor"
            variant="tonal"
            rounded="lg"
            size="50"
            @click="
              dialog = false;
              someData(props.customObject.button.field);
            "
          >
            <v-icon
              size="35"
              color="customObject.button.iconColor"
              :icon="customObject.button.icon"
            />
            <v-tooltip activator="parent" location="top">{{
              props.customObject.button.label
            }}</v-tooltip>
          </v-btn>
        </div>
      </v-card-title>
      <v-card-text>
        <slot />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    value: boolean;
    maxHeight?: string | number;
    minHeight?: string | number;
    customObject?: {
      close: boolean;
      check: boolean;
      title: string;
      subtitle: string | null;
      button: {
        icon: string;
        label: string;
        iconColor: string;
        buttonColor: string;
        field: string;
      } | null;
    };
  }>(),
  {
    maxHeight: 1024,
    minHeight: undefined,
    customObject: () => ({
      close: true,
      check: true,
      subtitle: null,
      button: null,
    }),
  }
);

const action = ref({ close: false, check: false });

const emit = defineEmits<{
  (e: "update:value", value: boolean): void;
  (e: "submit", data: any): void;
}>();

const dialog = computed({
  get: () => props.value,
  set: (val: boolean) => emit("update:value", val),
});

const someData = (data: string) => {
  action.value[data] = true;
  emit("submit", action.value);
};

watch(
  () => props.value,
  () => {
    action.value.check = false;
    action.value.close = false;
    action.value[props.customObject.button?.field] = false;
  }
);
</script>
