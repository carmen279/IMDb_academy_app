import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/insights",
    name: "insights",
    component: () =>
      import(/* webpackChunkName: "insights" */ "../views/InsightsView.vue"),
  },
  {
    path: "/details",
    name: "details",
    component: () =>
      import(/* webpackChunkName: "details" */ "../views/DetailsView.vue"),
    props: (route) => ({ query: route.query.id }),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
