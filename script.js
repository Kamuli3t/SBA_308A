import { displayRecipeDetails } from "./displayRecipeDetails.js";
import { displayRecipes } from "./displayRecipes.js";
import { recipeData } from "./store/recipeData.js";
import { fetchRandomRecipes } from "./api/fetchRandomCuisines.js";
import fetchRecipeDetails from "./api/fetchRecipeDetails.js";
import { fetchRecipesByCuisine } from "./api/fetchRecipesCuisine.js";

const cuisineDropdown = document.getElementById("cuisineList");
const recipeContainer = document.getElementById("recipe-list");
const recipeDetailsContainer = document.getElementById("recipe-details");
const dropdown = document.getElementById("dropdownSelected");

function populateCuisines(recipeData) {
  recipeData.cuisines.forEach((cuisine) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.classList.add("dropdown-item");
    a.href = `#${cuisine.toLowerCase()}`;
    a.textContent = cuisine;
    li.appendChild(a);
    li.setAttribute("value", `${cuisine.toLowerCase()}`);
    cuisineDropdown.appendChild(li);
  });
}

cuisineDropdown.addEventListener("click", (e) => {
  e.preventDefault();
  dropdown.innerText = e.target.innerText;
  fetchRecipesByCuisine(e.target.innerText.toLowerCase()).then((res) =>
    displayRecipes(res).catch((err) => console.error(err))
  );
});

recipeContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    fetchRecipeDetails(e.target.dataset.id)
      .then((res) => displayRecipeDetails(res, recipeDetailsContainer))
      .catch((err) => console.error(err));
  }
});

populateCuisines(recipeData);
fetchRandomRecipes().then((res) => displayRecipes(res));
