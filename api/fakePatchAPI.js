import { recipeData } from "../store/recipeData.js";

// Fake patch API to update servings ingredients dynamically
let timeoutId;
export function fakePatchapi(value, recipeDetailsContainer) {
  return new Promise((res, rej) => {
    try {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        res({
          recipe: recipeData.store,
          recipeDetailsContainer,
          servings: value,
        });
      }, 500);
    } catch (error) {
      rej(error);
    }
  });
}
