import { fakePatchapi } from "./api/fakePatchAPI.js";
import { recipeData } from "./store/recipeData.js";

// Display selected recipe details
export function displayRecipeDetails(recipe, recipeDetailsContainer, servings) {
  let k = servings / recipe.servings || 1;
  recipeData.store = recipe;
  console.log(recipeData.store);

  recipeDetailsContainer.innerHTML = `
            <h2>${recipe.title}</h2>
            <img src="${recipe.image}" class="img-fluid" alt="${recipe.title}">
            <p>${recipe.summary}</p>
            <hr />
            <h5>Ingredients:</h5>
            How many servings are you looking for?<br/> this is <input id="servingsInput" type="number" placeholder="${
              recipe.servings
            }" /> servings. 👈 update input as desired! 
            <hr />
            <p>${
              (recipe.nutrition.ingredients &&
                recipe.nutrition.ingredients.map(
                  (ing) =>
                    `<span style="color:${k === 1 ? "black" : "blue"}"> ${(
                      ing.amount * k
                    ).toFixed(2)} ${ing.unit} of ${ing.name}</span>`
                )) ||
              "No ingredients available."
            }</p>
            <h5>Steps:</h5>
            <p><ol>${
              recipe.analyzedInstructions[0]?.steps.map(
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

  const servingsInput = document.getElementById("servingsInput");
  servingsInput.addEventListener("change", (e) => {
    console.log(e.target.value);
    fakePatchapi(parseInt(e.target.value, 10), recipeDetailsContainer)
      .then(({ recipe, recipeDetailsContainer, servings }) =>
        displayRecipeDetails(recipe, recipeDetailsContainer, servings)
      )
      .catch((err) => console.error(err));
  });
}
