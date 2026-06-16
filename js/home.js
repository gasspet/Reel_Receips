function renderHomeCategory(targetId, recipes, limit = 2) {
  const grid = document.getElementById(targetId);

  if (!grid) {
    return;
  }

  grid.innerHTML = "";

  recipes.slice(0, limit).forEach((recipe) => {
    grid.appendChild(createRecipeCard(recipe, true));
  });
}

async function initializeHomePage() {
  try {
    const recipes = await getAllRecipesCombined();

    renderHomeCategory(
      "home-breakfast-grid",
      recipes.filter((recipe) => ["Frühstück", "Snack"].includes(recipe.categories[0]))
    );
    renderHomeCategory(
      "home-main-grid",
      recipes.filter((recipe) => ["Mittagessen", "Abendessen"].includes(recipe.categories[0]))
    );
    renderHomeCategory(
      "home-treats-grid",
      recipes.filter((recipe) => ["Dessert", "Getränke"].includes(recipe.categories[0]))
    );
  } catch (error) {
    console.error(error);
  }
}

initializeHomePage();
