export function displayRecipes(recipes) {
  const recipeContainer = document.getElementById("recipe-list");
  recipeContainer.innerHTML = "";
  const template = document.getElementById("recipe-template");

  recipes.forEach((recipe) => {
    const clone = template.content.cloneNode(true);
    const card = clone.querySelector(".card");
    const img = clone.querySelector("img");
    const title = clone.querySelector(".card-title");
    const button = clone.querySelector("button");

    card.dataset.id = recipe.id;
    img.src = recipe.image;
    img.alt = recipe.title;
    title.textContent = recipe.title;
    button.dataset.id = recipe.id;

    recipeContainer.appendChild(clone);
  });
}
