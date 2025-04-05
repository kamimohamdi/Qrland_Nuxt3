<template>
  <v-container>
    <v-row dense>
      <v-col cols="12" md="4" v-for="(item, index) in services" :key="index">
        <v-card
          v-if="item.image?.length"
          class="rounded-lg overflow-hidden card-container"
          elevation="0"
        >
          <v-responsive aspect-ratio="16/9">
            <div class="b-service-background">
              <img :src="item.image" alt="service" class="service-image" />
              <div class="overlay">
                <pre class="text-center b-service-content">{{
                  item.content
                }}</pre>
              </div>
            </div>
          </v-responsive>
          <div class="text-container">
            <pre class="text-center b-service-text">{{ item.subtitle }}</pre>
          </div>
        </v-card>
        <v-card
          v-else
          class="feature-card d-flex flex-column align-center justify-center text-center"
          :color="them.defaultThem.componentsColor"
          elevation="10"
          style="box-shadow: none"
        >
          <v-avatar class="ma-3 animated-avatar" rounded="lg" size="70">
            <v-icon
              :color="them.defaultThem.iconColor"
              size="50"
              class="animated-icon"
            >
              {{ item.icon }}
            </v-icon>
          </v-avatar>
          <v-card-title
            :color="them.defaultThem.textColor"
            class="text-h6 font-bold"
          >
            {{ item.title }}
          </v-card-title>
          <v-card-subtitle
            :color="them.defaultThem.textColor"
            class="text-subtitle-1"
            v-if="item.subtitle"
          >
            {{ item.subtitle }}
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  >>>>>>> f136c40c67674b38efa2afad26bbbaacb83e28b0
</template>

<script setup>
import { useCustomStore } from "~/store/customSettings";
import { useData } from "~/store/data";
const { services } = useData();
const them = useCustomStore();
</script>

<style scoped>
.card-container {
  height: 100%;
  transition: 0.3s ease-out;
}
.b-service-background {
  position: relative;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
}
.service-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.3s ease-out;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: 0.3s ease-out;
}
.b-service-content {
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
  transform: translateX(-100%);
  transition: transform 0.3s ease-out;
}
.text-container {
  text-align: center;
  padding: 10px;
}
.b-service-text {
  font-size: 1rem;
  font-weight: bold;
  color: #333;
}
.b-service-background:hover .service-image {
  filter: brightness(0.7);
}
.b-service-background:hover .overlay {
  opacity: 1;
}
.b-service-background:hover .b-service-content {
  transform: translateX(0);
}

/* کارت‌های بدون تصویر */
.feature-card {
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}
.animated-avatar {
  transition: transform 0.3s ease-in-out;
}
.animated-avatar:hover {
  transform: scale(1.1);
}
.animated-icon {
  animation: bounce 1.5s infinite alternate;
}
@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-5px);
  }
}
</style>
