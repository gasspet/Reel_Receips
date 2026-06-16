const searchInput = document.getElementById("search-input");
const categoryFilter = document.getElementById("category-filter");
const difficultyFilter = document.getElementById("difficulty-filter");
const favoritesOnly = document.getElementById("favorites-only");
const recipeGrid = document.getElementById("recipe-grid");
const noResultsMessage = document.getElementById("no-results-message");
const navSearchInput = document.getElementById("nav-search-page");

function getRecipeCards() {
  return Array.from(document.querySelectorAll(".recipe-card"));
}

function applyInitialQuery() {
  const params = new URLSearchParams(window.location.search);
  const query = params.get("q") || "";

  if (searchInput) {
    searchInput.value = query;
  }

  if (navSearchInput && query) {
    navSearchInput.value = query;
  }
}

async function renderSearchRecipes() {
  const recipes = await getAllRecipesCombined();
  recipeGrid.innerHTML = "";

  recipes.forEach((recipe) => {
    recipeGrid.appendChild(createRecipeCard(recipe));
  });
}

function filterRecipes() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const selectedCategory = categoryFilter.value.toLowerCase();
  const selectedDifficulty = difficultyFilter.value.toLowerCase();
  const showFavoritesOnly = favoritesOnly.checked;
  let visibleCards = 0;

  getRecipeCards().forEach((card) => {
    const meta = card.querySelector(".recipe-card__meta")?.textContent.toLowerCase() || "";
    const cardContent = card.dataset.searchContent || "";
    const isFavorite = card.dataset.favorite === "true";

    const matchesSearch = cardContent.includes(searchTerm);
    const matchesCategory =
      selectedCategory === "alle kategorien" || meta.includes(selectedCategory);
    const matchesDifficulty =
      selectedDifficulty === "alle" || meta.includes(selectedDifficulty);
    const matchesFavorite = !showFavoritesOnly || isFavorite;

    const shouldShow =
      matchesSearch &&
      matchesCategory &&
      matchesDifficulty &&
      matchesFavorite;

    card.style.display = shouldShow ? "" : "none";

    if (shouldShow) {
      visibleCards += 1;
    }
  });

  noResultsMessage.hidden = visibleCards > 0;
}

async function initializeSearchPage() {
  if (!searchInput || !recipeGrid) {
    return;
  }

  applyInitialQuery();

  try {
    await renderSearchRecipes();
  } catch (error) {
    console.error(error);
  }

  filterRecipes();

  searchInput.addEventListener("input", filterRecipes);
  categoryFilter.addEventListener("change", filterRecipes);
  difficultyFilter.addEventListener("change", filterRecipes);
  favoritesOnly.addEventListener("change", filterRecipes);
}

initializeSearchPage();
