import foodAPI from "./apiData.js";

export async function fetchRecipesByCuisine(cuisine) {
  try {
    console.log(cuisine);
    const res = await foodAPI(`/recipes/complexSearch?cuisine=${cuisine}`);
    return res.data.results;
  } catch (error) {
    console.error("Error fetching recipes:", error);
  }
}
