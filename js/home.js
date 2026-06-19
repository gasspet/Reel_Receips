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

function getRecipeOfDay(recipes) {
  if (!recipes.length) {
    return null;
  }

  const today = new Date();
  const dayKey = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  let hash = 0;

  for (const character of dayKey) {
    hash += character.charCodeAt(0);
  }

  return recipes[hash % recipes.length];
}

function renderRecipeOfDay(recipes) {
  const grid = document.getElementById("recipe-of-day-grid");

  if (!grid) {
    return;
  }

  grid.innerHTML = "";

  const recipeOfDay = getRecipeOfDay(recipes);

  if (!recipeOfDay) {
    return;
  }

  grid.appendChild(createRecipeCard(recipeOfDay));
}

async function initializeHomePage() {
  try {
    const recipes = await getAllRecipesCombined();

    renderRecipeOfDay(recipes);

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
