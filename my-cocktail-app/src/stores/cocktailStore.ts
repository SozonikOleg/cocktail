import { defineStore } from "pinia";
import axios from "axios";

// Типизация для коктейля
export interface Cocktail {
  strDrink: string;
  strDrinkThumb: string;
  strInstructions: string;
}

// Типизация состояния хранилища
interface State {
  cocktails: Record<string, Cocktail>;
  loading: boolean;
  error: string | null;
}

export const useCocktailStore = defineStore("cocktailStore", {
  state: (): State => ({
    cocktails: {},
    loading: false,
    error: null,
  }),
  actions: {
    async fetchCocktail(code: string) {
      if (this.cocktails[code]) return; // Исключаем повторные запросы для одного коктейля

      this.loading = true;
      this.error = null;

      try {
        const response = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${code}`
        );
        const cocktail = response.data.drinks ? response.data.drinks[0] : null;
        if (cocktail) {
          this.cocktails[code] = cocktail;
        } else {
          this.error = `Cocktail not found for code: ${code}`;
        }
      } catch (err) {
        this.error =
          (err as Error).message || "An error occurred while fetching data.";
      } finally {
        this.loading = false;
      }
    },
  },
});
