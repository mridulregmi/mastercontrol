import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Login",
    component: () => import("@/views/Login.vue")
  },
  {
    path: "/modelselection",
    name: "ModelSelection",
    component: () => import("@/views/ModelSelection.vue")
  },
  {
    path: '/audiencesegmentconfig',
    name: 'AudienceSegmentationConfig',
    component: () => import('@/views/AudienceSegmentationConfig.vue'),
  },
  {
    path: '/clickconversionconfig',
    name: 'ClickConversionConfig',
    component: () => import('@/views/ClickConversionConfig.vue'),
  },
  {
    path: '/webconversionconfig',
    name: 'WebConversionConfig',
    component: () => import('@/views/WebConversionConfig.vue'),
  },
  {
    path: '/contentrecconfig',
    name: 'ContentRecommendationConfig',
    component: () => import('@/views/ContentRecommendationConfig.vue'),
  }
];

const router = new VueRouter({
  routes
});

export default router;
