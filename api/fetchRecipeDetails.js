import foodAPI from "./apiData.js";

async function fetchRecipeDetails(id) {
  try {
    const response = await foodAPI.get(
      `/recipes/${id}/information?includeNutrition=true`
    );
    return response.data;
  } catch (err) {
    console.error("Error fetching details by ID", err);
  }
}

export default fetchRecipeDetails;
