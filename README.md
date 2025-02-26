# 🍽️ Food Recipe App

## 📌 Description

The **Food Recipe App** is a web-based application that allows users to browse, view, and update recipes dynamically. Users can select cuisines, view random recipes, and adjust ingredient quantities based on the desired number of servings.

## 🚀 Features

- 🌍 **Select Cuisine**: Choose from various cuisines via a dropdown menu.
- 📜 **View Recipes**: Displays a list of recipes from the selected cuisine.
- 🔎 **View Recipe Details**: Displays ingredients, instructions, and nutrition facts.
- 🔄 **Adjust Servings**: Dynamically update ingredient amounts based on the number of servings.
- 🎲 **Fetch Random Recipes**: Load random recipes when the page initializes.

## 🛠️ Technologies Used

- **HTML, CSS, JavaScript**
- **Bootstrap 5.3.3** (for responsive design)
- **Axios** (for API requests)
- **Module-based JavaScript**
- **Custom Fake API** for patching servings dynamically

## 📂 Project Structure

/food-recipe-app
│── index.html # Main HTML file
│── styles.css # Custom styling
│── script.js # Main script handling events
│── /api
│ │── fetchRandomCuisines.js # Fetches random cuisines
│ │── fetchRecipeDetails.js # Fetches details of a selected recipe
│ │── fetchRecipesCuisine.js # Fetches recipes by selected cuisine
│ │── fakePatchAPI.js # Fake API to update servings
│── /store
│ │── recipeData.js # Stores recipe data
│── displayRecipeDetails.js # Displays recipe details
│── displayRecipes.js # Displays list of recipes

## 📖 How to Use

1. **Open `index.html` in a browser** or use a live server (e.g., `Live Server` extension in VS Code).
2. **Select a cuisine** from the navigation dropdown.
3. **View available recipes** in the list.
4. **Click "View Recipe"** to display the recipe details.
5. **Adjust servings** using the input field; ingredient amounts will update dynamically.
