// Display selected recipe details
export function displayRecipeDetails(recipe, recipeDetailsContainer) {
  recipeDetailsContainer.innerHTML = `
            <h2>${recipe.title}</h2>
            <img src="${recipe.image}" class="img-fluid" alt="${recipe.title}">
            <hr />
            <h5>Ingredients:</h5>
            <p>${
              (recipe.nutrition.ingredients &&
                recipe.nutrition.ingredients.map(
                  (ing) => `<span> ${ing.name}</span>`
                )) ||
              "No ingredients available."
            }</p>
            <h5>Steps:</h5>
            <p><ol>${
              recipe.analyzedInstructions[0].steps.map(
                (el) => `<li>${el.step}</li>`
              ) || "No instructions available."
            }</ol></p>
           
            <h5>Nutrition Facts (Per Serving):</h5>
            <p>Calories: ${
              recipe.nutrition.nutrients.find((n) => n.name === "Calories")
                ?.amount || "N/A"
            } kcal</p>
            <p>Carbs: ${
              recipe.nutrition.nutrients.find((n) => n.name === "Carbohydrates")
                ?.amount || "N/A"
            } g</p>
            <p>Protein: ${
              recipe.nutrition.nutrients.find((n) => n.name === "Protein")
                ?.amount || "N/A"
            } g</p>
            <p>Fat: ${
              recipe.nutrition.nutrients.find((n) => n.name === "Fat")
                ?.amount || "N/A"
            } g</p>
        `;
}
