import { defineStore } from "pinia";
import { data } from "~/data";

export const useData = defineStore("data", () => {
  const datas = data.data.data.data;
  const banner = datas.banner.gallery[0].images;
  const gallery = datas.gallery;
  const videos = datas.video_gallery;
  const feedback = datas.FeedBack;
  const CounterService = datas.CounterService;
  const services = datas.service;

  return { datas, banner, gallery, videos, feedback, CounterService, services };
});
