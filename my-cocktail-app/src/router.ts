import { createRouter, createWebHistory } from "vue-router";
import CocktailPage from "./views/CocktailPage.vue";
import NotFound from "./views/NotFound.vue";

const cocktailCodes = ["margarita", "mojito", "a1", "kir"];

const routes = [
  { path: "/", redirect: `/${cocktailCodes[0]}` }, // Переход на первый коктейль по умолчанию
  { path: "/:cocktailCode", component: CocktailPage },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound }, // 404
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Навигационный гвард
router.beforeEach((to, from, next) => {
  // Проверяем параметр `cocktailCode`, если он есть
  const cocktailCode = to.params.cocktailCode;

  // Если маршрут с `cocktailCode` существует в списке — продолжаем
  if (!cocktailCode || cocktailCodes.includes(cocktailCode as string)) {
    next();
  } else {
    // Если не найдено, выбрасываем ошибку или перенаправляем на 404
    next({ name: "NotFound" });
  }
});

export default router;
