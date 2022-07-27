import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PlayerView from "../views/PlayerView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/players/:playerCode",
    name: "players.show",
    component: PlayerView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    return { top: 0 };
  },
  routes,
});

export default router;

export const getRoute = (name) => {
  return routes.find((route) => route.name === name);
};

export const routeTo = (name, options = {}) => {
  if (!getRoute(name)) {
    console.error(`Route "${name}" wasn't  found.`);
  }

  return { name, ...options };
};
