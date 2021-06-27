import { createRouter, createWebHistory } from "@ionic/vue-router";
import Tabs from "../views/Tabs.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/",
    component: Tabs,
    children: [
      {
        path: "",
        redirect: "/",
      },
      {
        path: "offline",
        component: () => import("@/views/Offline.vue"),
      },
      {
        path: "home",
        component: () => import("@/views/Home.vue"),
      },
      {
        path: "contact",
        component: () => import("@/views/Contact.vue"),
      },
      {
        name: "articles",
        path: "articles",
        component: () => import("@/views/News.vue"),
      },
      {
        name: "article",
        path: "articles/:id",
        component: () => import("@/views/Article.vue"),
      },
      {
        path: "auth",
        name: "authentication",
        component: () => import("@/views/Authentication/Authentication.vue"),
      },
      {
        path: "register/2",
        name: "RegisterStep2",
        component: () => import("@/views/Authentication/StepTwo.vue"),
      },
      {
        path: "register/3",
        name: "RegisterStep3",
        component: () => import("@/views/Authentication/StepThree.vue"),
      },
      {
        path: "register/4",
        name: "RegisterStep4",
        component: () => import("@/views/Authentication/StepFour.vue"),
      },
      {
        path: "account",
        name: "account",
        component: () => import("@/views/Account.vue"),
      },
      {
        path: "settings",
        name: "Settings",
        component: () => import("@/views/Settings.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
