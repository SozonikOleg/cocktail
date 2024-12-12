<template>
  <div v-if="cocktail" class="cocktail-details">
    <div class="cocktail-header">
      <h1 class="cocktail-title">{{ cocktail.strDrink }}</h1>
      <img
        :src="cocktail.strDrinkThumb"
        alt="Cocktail Image"
        loading="lazy"
        class="cocktail-image"
      />
    </div>

    <div class="cocktail-info">
      <p><strong>Category:</strong> {{ cocktail.strCategory }}</p>
      <p><strong>Alcoholic:</strong> {{ cocktail.strAlcoholic }}</p>
      <p><strong>Glass:</strong> {{ cocktail.strGlass }}</p>
    </div>

    <div class="cocktail-instructions">
      <h3>Instructions:</h3>
      <p>{{ cocktail.strInstructions }}</p>
    </div>

    <div class="cocktail-ingredients">
      <h3>List of Ingredients:</h3>
      <ul>
        <li v-for="ingredient in ingredients" :key="ingredient.name">
          <strong>{{ ingredient.measure }}</strong> {{ ingredient.name }}
        </li>
      </ul>
    </div>
  </div>
  <p v-else-if="loading">Loading...</p>
  <p v-else-if="error">Error: {{ error }}</p>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { useCocktailStore } from "../stores/cocktailStore";
import { computed, onMounted, watch } from "vue";

// Получаем маршрут и хранилище
const route = useRoute();
const store = useCocktailStore();

// Получаем код коктейля из параметров маршрута
const cocktailCode = computed(() => route.params.cocktailCode);

// Функция для загрузки коктейля
const fetchCocktail = async () => {
  await store.fetchCocktail(cocktailCode.value);
};

// Загружаем коктейль при монтировании и следим за изменением маршрута
onMounted(fetchCocktail);
watch(cocktailCode, fetchCocktail);

// Получаем данные из хранилища
const { cocktails, loading, error } = store;
const cocktail = computed(() => cocktails[cocktailCode.value]);

// Формируем список ингредиентов
const ingredients = computed(() => {
  if (!cocktail.value) return [];
  return Array.from({ length: 15 }, (_, i) => i + 1)
    .map((i) => ({
      name: cocktail.value[`strIngredient${i}`],
      measure: cocktail.value[`strMeasure${i}`] || "to taste",
    }))
    .filter((item) => item.name); // Оставляем только те элементы, где есть название ингредиента
});
</script>

<style scoped>
/* Стили как в предыдущем примере */
.cocktail-details {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: relative;
}

.cocktail-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.cocktail-title {
  margin: 0;
  color: #42b983;
  flex: 1;
}

.cocktail-image {
  max-width: 150px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-left: 20px;
}

.cocktail-info p {
  margin: 5px 0;
  font-size: 1.1em;
}

.cocktail-instructions h3,
.cocktail-ingredients h3 {
  margin-top: 20px;
  color: #42b983;
}

.cocktail-ingredients ul {
  padding: 0;
  list-style: none;
}

.cocktail-ingredients li {
  margin: 5px 0;
  font-size: 1.1em;
}

/* Мобильные устройства */
@media (max-width: 768px) {
  .cocktail-title {
    padding-left: 50px; /* Увеличенный отступ для мобильных устройств */
  }
}
</style>
