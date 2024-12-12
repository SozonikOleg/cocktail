import { createRouter, createWebHistory } from "vue-router";
import CocktailPage from "./views/CocktailPage.vue";
import NotFound from "./views/NotFound.vue";

const routes = [
  { path: "/", redirect: "/margarita" }, // Переход на первый коктейль по умолчанию
  { path: "/:cocktailCode", component: CocktailPage },
  { path: "/:pathMatch(.*)*", component: NotFound }, // Страница 404
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
