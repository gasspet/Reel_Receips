// Elemente auswählen
const searchInput = document.getElementById("search-input");
const categoryFilter = document.getElementById("category-filter");
const difficultyFilter = document.getElementById("difficulty-filter");
const favoritesOnly = document.getElementById("favorites-only");
const recipeCards = document.querySelectorAll(".recipe-card");
const noResultsMessage = document.getElementById("no-results-message");

function filterRecipes() {
  // Werte lesen
  const searchTerm = searchInput.value.trim().toLowerCase();
  const selectedCategory = categoryFilter.value.toLowerCase();
  const selectedDifficulty = difficultyFilter.value.toLowerCase();
  const showFavoritesOnly = favoritesOnly.checked;
  let visibleCards = 0;

  recipeCards.forEach((card) => {
    // Inhalte aus den Karten lesen
    const title = card.querySelector("h3").textContent.toLowerCase();
    const meta = card.querySelector(".recipe-card__meta").textContent.toLowerCase();
    const text = card.querySelector(".recipe-card__text").textContent.toLowerCase();
    const cardContent = `${title} ${meta} ${text}`;
    const isFavorite = card.dataset.favorite === "true";

    // Bedingungen prüfen
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

    // Karten anzeigen oder ausblenden
    card.style.display = shouldShow ? "" : "none";

    if (shouldShow) {
      visibleCards += 1;
    }
  });

  // Meldung steuern, wenn keine Rezepte gefunden wurden
  noResultsMessage.hidden = visibleCards > 0;
}

// Auf Eingaben reagieren
searchInput.addEventListener("input", filterRecipes);
categoryFilter.addEventListener("change", filterRecipes);
difficultyFilter.addEventListener("change", filterRecipes);
favoritesOnly.addEventListener("change", filterRecipes);

// Funktion beim Laden ausführen
filterRecipes();
