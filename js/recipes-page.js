const CATEGORY_ORDER = [
  "Frühstück",
  "Mittagessen",
  "Abendessen",
  "Dessert",
  "Snack",
  "Getränke"
];

function sortRecipesAlphabetically(recipes) {
  return [...recipes].sort((firstRecipe, secondRecipe) =>
    firstRecipe.title.localeCompare(secondRecipe.title, "de", { sensitivity: "base" })
  );
}

function groupRecipesByCategory(recipes) {
  const groupedRecipes = new Map();

  CATEGORY_ORDER.forEach((category) => {
    groupedRecipes.set(category, []);
  });

  recipes.forEach((recipe) => {
    const category = (recipe.categories && recipe.categories[0]) || "Ohne Kategorie";

    if (!groupedRecipes.has(category)) {
      groupedRecipes.set(category, []);
    }

    groupedRecipes.get(category).push(recipe);
  });

  return groupedRecipes;
}

function createCategoryId(category) {
  return `category-${category.toLowerCase().replace(/\s+/g, "-")}`;
}

function createCategorySection(category, recipes) {
  const section = document.createElement("section");
  const headingWrapper = document.createElement("div");
  const heading = document.createElement("h3");
  const info = document.createElement("p");
  const grid = document.createElement("div");

  section.className = "recipes-category-group";
  section.setAttribute("aria-labelledby", createCategoryId(category));

  headingWrapper.className = "section-heading";

  heading.id = createCategoryId(category);
  heading.textContent = category;

  info.className = "recipes-category-info";
  info.textContent = `${recipes.length} Rezept${recipes.length === 1 ? "" : "e"} in dieser Gruppe`;

  grid.className = "card-grid";

  sortRecipesAlphabetically(recipes).forEach((recipe) => {
    grid.appendChild(createRecipeCard(recipe));
  });

  headingWrapper.appendChild(heading);
  section.appendChild(headingWrapper);
  section.appendChild(info);
  section.appendChild(grid);

  return section;
}

function updateCategoryButtons(activeCategory) {
  document.querySelectorAll(".category-filter-button").forEach((button) => {
    const isActive = button.dataset.category === activeCategory;
    button.classList.toggle("category-filter-button--active", isActive);
  });
}

function filterCategorySections(activeCategory) {
  document.querySelectorAll(".recipes-category-group").forEach((section) => {
    const sectionCategory = section.dataset.category || "";
    const shouldShow = activeCategory === "Alle" || sectionCategory === activeCategory;
    section.hidden = !shouldShow;
  });
}

function initializeCategoryButtons() {
  const filterBar = document.getElementById("category-filter-bar");

  if (!filterBar) {
    return;
  }

  filterBar.addEventListener("click", (event) => {
    const button = event.target.closest(".category-filter-button");

    if (!button) {
      return;
    }

    const activeCategory = button.dataset.category || "Alle";
    updateCategoryButtons(activeCategory);
    filterCategorySections(activeCategory);
  });
}

async function initializeRecipesPage() {
  const groupsContainer = document.getElementById("all-recipes-groups");

  if (!groupsContainer) {
    return;
  }

  try {
    const recipes = await getAllRecipesCombined();
    const groupedRecipes = groupRecipesByCategory(recipes);
    groupsContainer.innerHTML = "";

    groupedRecipes.forEach((categoryRecipes, category) => {
      if (categoryRecipes.length === 0) {
        return;
      }

      const section = createCategorySection(category, categoryRecipes);
      section.dataset.category = category;
      groupsContainer.appendChild(section);
    });

    initializeCategoryButtons();
    updateCategoryButtons("Alle");
    filterCategorySections("Alle");
  } catch (error) {
    console.error(error);
  }
}

initializeRecipesPage();
