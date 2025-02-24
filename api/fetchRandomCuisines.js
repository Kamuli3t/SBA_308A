import { recipeData } from "../store/recipeData.js";
import foodAPI from "./apiData.js";

export async function fetchRandomRecipes() {
  try {
    const response = await foodAPI.get(`/recipes/random`);
    recipeData.store = response;
    return response.data.recipes || [];
  } catch (error) {
    console.error("Error fetching random recipes", error);
    return [];
  }
}
