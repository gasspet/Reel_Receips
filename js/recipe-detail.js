function renderTagChip(text) {
  const chip = document.createElement("span");
  chip.className = "tag";
  chip.textContent = text;
  return chip;
}

function renderFavoriteChip() {
  const chip = document.createElement("span");
  chip.className = "favorite-badge";
  chip.textContent = "Favorit";
  return chip;
}

function formatIngredient(ingredient) {
  return [ingredient.amount, ingredient.unit, ingredient.name]
    .filter((part) => part && part.trim() !== "")
    .join(" ");
}

function applyDetailRecipe(recipe) {
  const pageTitle = document.getElementById("detail-page-title");
  const pageText = document.getElementById("detail-page-text");
  const detailImage = document.getElementById("detail-image");
  const detailSubtitle = document.getElementById("detail-subtitle");
  const detailIntro = document.getElementById("detail-intro");
  const detailTags = document.getElementById("detail-tags");
  const detailCreator = document.getElementById("detail-creator");
  const detailSourceLink = document.getElementById("detail-source-link");
  const detailIngredients = document.getElementById("detail-ingredients");
  const detailSteps = document.getElementById("detail-steps");
  const detailNotesSection = document.getElementById("detail-notes-section");
  const detailNotes = document.getElementById("detail-notes");
  const detailEditLink = document.getElementById("detail-edit-link");

  document.title = `Reel Recipes - ${recipe.title}`;
  pageTitle.textContent = recipe.title;
  pageText.textContent = "Hier siehst du alle Informationen zu dem ausgewählten Rezept.";
  detailSubtitle.textContent = recipe.title;
  detailIntro.textContent =
    recipe.categories && recipe.categories.length > 0
      ? `${recipe.categories[0]} · ${recipe.difficulty || "Ohne Schwierigkeit"}`
      : "Dieses Rezept wurde aus deiner Sammlung geladen.";
  detailCreator.textContent = recipe.creator || "@unbekannt";
  detailSourceLink.href = recipe.sourceUrl || "#";
  detailSourceLink.textContent = recipe.sourceUrl ? "Zum Originalbeitrag" : "Keine Quelle hinterlegt";
  detailSteps.textContent = recipe.stepsText || "Keine Zubereitung hinterlegt.";

  if (recipe.notes && recipe.notes.trim() !== "") {
    detailNotes.textContent = recipe.notes;
    detailNotesSection.hidden = false;
  } else {
    detailNotesSection.hidden = true;
  }

  detailImage.className = "detail-hero__image";
  detailImage.style.backgroundImage = "";

  if (recipe.image) {
    detailImage.style.backgroundImage = `linear-gradient(rgba(13, 107, 127, 0.12), rgba(13, 107, 127, 0.12)), url("${recipe.image}")`;
    detailImage.style.backgroundSize = "cover";
    detailImage.style.backgroundPosition = "center";
  } else {
    detailImage.classList.add(recipe.imageClass || "detail-hero__image--pasta");
  }

  detailTags.innerHTML = "";
  recipe.categories.forEach((category) => {
    detailTags.appendChild(renderTagChip(category));
  });

  if (recipe.difficulty) {
    detailTags.appendChild(renderTagChip(recipe.difficulty));
  }

  (recipe.tags || []).forEach((tag) => {
    detailTags.appendChild(renderTagChip(tag));
  });

  if (recipe.favorite) {
    detailTags.appendChild(renderFavoriteChip());
  }

  detailEditLink.href = `hinzufuegen.html?edit=${encodeURIComponent(recipe.id)}`;
  detailEditLink.hidden = false;

  detailIngredients.innerHTML = "";
  recipe.ingredients.forEach((ingredient) => {
    const item = document.createElement("li");
    item.textContent = formatIngredient(ingredient);
    detailIngredients.appendChild(item);
  });
}

function normalizeStoredRecipe(recipe) {
  return {
    ...recipe,
    imageClass: recipe.imageClass || "detail-hero__image--pasta",
    isEditable: true
  };
}

async function loadRecipeDetail() {
  const params = new URLSearchParams(window.location.search);
  const recipeId = params.get("id");

  if (!recipeId) {
    return;
  }

  try {
    await window.ReelRecipesDB.ensureSeedRecipes(window.ReelRecipesSamples || []);
    const recipe = await window.ReelRecipesDB.getRecipeById(recipeId);

    if (recipe) {
      applyDetailRecipe(normalizeStoredRecipe(recipe));
    }
  } catch (error) {
    console.error(error);
  }
}

loadRecipeDetail();
