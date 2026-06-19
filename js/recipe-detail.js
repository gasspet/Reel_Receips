// Diese Datei lädt genau ein Rezept für die Detailseite
// und steuert zusätzlich Checkliste und Portionsrechner.

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

// Prüft, ob eine Zutatenmenge als Zahl skaliert werden kann.
function parseNumericAmount(amountText) {
  if (!amountText) {
    return null;
  }

  const normalizedAmount = String(amountText).trim().replace(",", ".");

  if (!/^\d+(?:\.\d+)?$/.test(normalizedAmount)) {
    return null;
  }

  return Number(normalizedAmount);
}

function formatScaledAmount(value) {
  if (!Number.isFinite(value)) {
    return "";
  }

  const roundedValue = Math.round(value * 100) / 100;

  if (Number.isInteger(roundedValue)) {
    return String(roundedValue);
  }

  return String(roundedValue).replace(".", ",");
}

function scaleIngredient(ingredient, factor) {
  const numericAmount = parseNumericAmount(ingredient.amount);

  if (numericAmount === null) {
    return ingredient;
  }

  return {
    ...ingredient,
    amount: formatScaledAmount(numericAmount * factor)
  };
}

// Baut einen einzelnen Listenpunkt der Zutaten-Checkliste.
function createIngredientChecklistItem(ingredient, index) {
  const item = document.createElement("li");
  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  const text = document.createElement("span");

  item.className = "ingredient-list__item";
  label.className = "ingredient-check";
  label.setAttribute("for", `ingredient-check-${index}`);

  checkbox.type = "checkbox";
  checkbox.id = `ingredient-check-${index}`;

  text.className = "ingredient-check__text";
  text.textContent = formatIngredient(ingredient);

  label.appendChild(checkbox);
  label.appendChild(text);
  item.appendChild(label);

  return item;
}

function renderIngredientChecklist(ingredients, listElement, servingsFactor) {
  listElement.innerHTML = "";

  ingredients.forEach((ingredient, index) => {
    const scaledIngredient = scaleIngredient(ingredient, servingsFactor);
    listElement.appendChild(createIngredientChecklistItem(scaledIngredient, index));
  });
}

// Überträgt alle Rezeptdaten in die sichtbaren Bereiche der Detailseite.
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
  const detailServings = document.getElementById("detail-servings");
  const detailServingsNote = document.getElementById("detail-servings-note");
  const servingsDecrease = document.getElementById("servings-decrease");
  const servingsIncrease = document.getElementById("servings-increase");
  const baseServings = Number(recipe.servings) > 0 ? Number(recipe.servings) : 2;

  function updateServingsDisplay() {
    const selectedServings = Math.max(1, Number(detailServings.value) || baseServings);
    const servingsFactor = selectedServings / baseServings;
    detailServings.value = String(selectedServings);
    renderIngredientChecklist(recipe.ingredients || [], detailIngredients, servingsFactor);
  }

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

  if (detailServings) {
    detailServings.value = String(baseServings);
  }

  if (detailServingsNote) {
    detailServingsNote.textContent = `Basisrezept für ${baseServings} Personen.`;
  }

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

  renderIngredientChecklist(recipe.ingredients || [], detailIngredients, 1);

  if (detailServings) {
    detailServings.oninput = updateServingsDisplay;
  }

  if (servingsDecrease) {
    servingsDecrease.onclick = () => {
      detailServings.value = String(Math.max(1, (Number(detailServings.value) || baseServings) - 1));
      updateServingsDisplay();
    };
  }

  if (servingsIncrease) {
    servingsIncrease.onclick = () => {
      detailServings.value = String((Number(detailServings.value) || baseServings) + 1);
      updateServingsDisplay();
    };
  }
}

function normalizeStoredRecipe(recipe) {
  return {
    ...recipe,
    servings: Number(recipe.servings) > 0 ? Number(recipe.servings) : 2,
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
