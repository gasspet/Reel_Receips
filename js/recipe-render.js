// Diese Datei erzeugt wiederverwendbare Rezeptkarten für Startseite, Suche und Übersicht.

// Lädt Beispielrezepte und lokal gespeicherte Rezepte gemeinsam.
async function getAllRecipesCombined() {
  await window.ReelRecipesDB.ensureSeedRecipes(window.ReelRecipesSamples || []);
  return window.ReelRecipesDB.getAllRecipes();
}

// Wählt eine Bildklasse, wenn kein echtes Bild hinterlegt ist.
function chooseImageClass(recipe) {
  if (recipe.imageClass) {
    return recipe.imageClass;
  }

  const category = (recipe.categories[0] || "").toLowerCase();

  if (category.includes("früh") || category.includes("snack")) {
    return "recipe-card__image--bowl";
  }

  if (category.includes("dessert") || category.includes("getränke")) {
    return "recipe-card__image--cake";
  }

  return "recipe-card__image--pasta";
}

// Erstellt einen kurzen Vorschautext für die Kartenansicht.
function createPreviewText(recipe) {
  if (recipe.notes) {
    return recipe.notes;
  }

  if (recipe.ingredients && recipe.ingredients.length > 0) {
    return recipe.ingredients.map((ingredient) => ingredient.name).slice(0, 3).join(", ");
  }

  return "Neues Rezept aus deiner lokalen Sammlung.";
}

// Baut einen unsichtbaren Suchtext, damit Suche und Filter mehr als nur den Titel prüfen können.
function createSearchContent(recipe, previewText) {
  const ingredientNames = (recipe.ingredients || [])
    .map((ingredient) => ingredient.name)
    .join(" ");

  return [
    recipe.title,
    recipe.creator,
    (recipe.categories || []).join(" "),
    recipe.difficulty,
    (recipe.tags || []).join(" "),
    ingredientNames,
    recipe.stepsText,
    recipe.notes,
    previewText
  ]
    .join(" ")
    .toLowerCase();
}

function createTagElements(tags) {
  const tagRow = document.createElement("div");
  tagRow.className = "tag-row";

  tags.forEach((tagText) => {
    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = tagText;
    tagRow.appendChild(tag);
  });

  return tagRow;
}

// Baut eine vollständige Rezeptkarte als DOM-Element.
function createRecipeCard(recipe, compact = false) {
  const article = document.createElement("article");
  const cardLink = document.createElement("a");
  const image = document.createElement("div");
  const content = document.createElement("div");
  const topline = document.createElement("div");
  const creator = document.createElement("p");
  const title = document.createElement("h3");
  const meta = document.createElement("p");
  const text = document.createElement("p");
  const linkText = document.createElement("span");
  const previewText = createPreviewText(recipe);

  article.className = compact ? "recipe-card recipe-card--compact" : "recipe-card";
  article.dataset.favorite = String(recipe.favorite === true);
  article.dataset.searchContent = createSearchContent(recipe, previewText);

  cardLink.href = `rezept.html?id=${encodeURIComponent(recipe.id)}`;
  cardLink.setAttribute("aria-label", `${recipe.title} öffnen`);
  image.className = `recipe-card__image ${chooseImageClass(recipe)}`;

  if (recipe.image) {
    image.style.backgroundImage = `linear-gradient(rgba(13, 107, 127, 0.12), rgba(13, 107, 127, 0.12)), url("${recipe.image}")`;
    image.style.backgroundSize = "cover";
    image.style.backgroundPosition = "center";
  }

  content.className = "recipe-card__content";
  topline.className = "recipe-card__topline";
  creator.className = "recipe-card__creator";
  meta.className = "recipe-card__meta";
  text.className = "recipe-card__text";
  linkText.className = "text-link";

  creator.textContent = recipe.creator || "@unbekannt";
  title.textContent = recipe.title;
  meta.textContent = `${(recipe.categories && recipe.categories[0]) || "Ohne Kategorie"} · ${recipe.difficulty || "Ohne Schwierigkeit"}`;
  text.textContent = previewText;
  linkText.textContent = "Rezept ansehen";

  cardLink.appendChild(image);
  topline.appendChild(creator);

  if (recipe.favorite) {
    const favoriteBadge = document.createElement("span");
    favoriteBadge.className = "favorite-badge";
    favoriteBadge.textContent = "Favorit";
    topline.appendChild(favoriteBadge);
  }

  content.appendChild(topline);
  content.appendChild(title);
  content.appendChild(meta);
  content.appendChild(text);

  if (recipe.tags && recipe.tags.length > 0) {
    content.appendChild(createTagElements(recipe.tags));
  }

  content.appendChild(linkText);
  cardLink.appendChild(content);
  article.appendChild(cardLink);

  return article;
}
