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
  const questionAn = datas.faq.items;
  const footer = {
    workSheets: datas.WorkSheet,
    phoneNumber: datas.phoneNumber,
    companyNumber: datas.companyNumber,
    email: datas.email,
    location: datas.location,
    address: datas.address,
    city: datas.city,
    codePstal: datas.codePostal,
    website: datas.website,
    media: datas.socialMedia,
    blog: datas.blog,
    fax: datas.fax,
    about: datas.aboutUs,
    copyright: datas.copyright,
    counter: datas.Counter,
    locationMap: datas.center,
  };
  const abouts = {
    organizationName: datas.organizationName,
    subOrgan: datas.subOrgan,
    userName: datas.userName,
    workField: datas.workField,
  };

  return {
    datas,
    banner,
    gallery,
    videos,
    feedback,
    CounterService,
    services,
    footer,
    abouts,
    questionAn,
  };
});
