async function initializeRecipesPage() {
  const grid = document.getElementById("all-recipes-grid");

  if (!grid) {
    return;
  }

  try {
    const recipes = await getAllRecipesCombined();
    grid.innerHTML = "";

    recipes.forEach((recipe) => {
      grid.appendChild(createRecipeCard(recipe));
    });
  } catch (error) {
    console.error(error);
  }
}

initializeRecipesPage();
