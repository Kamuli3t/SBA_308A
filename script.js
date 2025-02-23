import { recipeData, populateCuisines } from "./recipeData.js";

const API_BASE = "https://www.themealdb.com/api/json/v1/1";
const recipeContainer = document.getElementById("recipe-list");

populateCuisines(recipeData);
