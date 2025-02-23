const recipeData = {
  recipeShow: [],
  cuisines: [
    "African",
    "American",
    "British",
    "Cajun",
    "Caribbean",
    "Chinese",
    "Eastern European",
    "European",
    "French",
    "German",
    "Greek",
    "Indian",
    "Irish",
    "Italian",
    "Japanese",
    "Jewish",
    "Korean",
    "Latin American",
    "Mediterranean",
    "Mexican",
    "Middle Eastern",
    "Nordic",
    "Southern",
    "Spanish",
    "Thai",
    "Vietnamese",
  ],
};

function populateCuisines(recipeData) {
  const cuisineDropdown = document.getElementById("cuisineList");
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

  cuisineDropdown.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("dropdownSelected").innerText = e.target.innerText;
  });
}

export { populateCuisines, recipeData };
