// Diese Datei steuert das Formular zum Anlegen und Bearbeiten von Rezepten.
// Sie liest alle Felder aus, verarbeitet sie und speichert das Ergebnis in IndexedDB.
const recipeForm = document.getElementById("recipe-form");
const formStatus = document.getElementById("form-status");
const formTitle = document.getElementById("form-title");
const formEyebrow = document.querySelector(".eyebrow");
const formHeading = document.querySelector(".hero h1");
const formIntro = document.querySelector(".hero__text");
const submitButton = recipeForm ? recipeForm.querySelector('button[type="submit"]') : null;
const cancelLink = document.getElementById("form-cancel-link");
const editRecipeId = new URLSearchParams(window.location.search).get("edit");
let existingRecipe = null;

// Zeigt eine Rückmeldung direkt im Formular an.
function showFormStatus(message, isError = false) {
  formStatus.textContent = message;
  formStatus.hidden = false;
  formStatus.classList.toggle("form-status--error", isError);
}

// Wandelt einen Komma-Text in ein sauberes Tag-Array um.
function parseTags(tagsText) {
  return tagsText
    .split(",")
    .map((tag) => tag.trim())
    .filter((tag) => tag !== "");
}

// Zerlegt die Zutaten-Textarea in strukturierte Zutatenobjekte.
function parseIngredients(ingredientsText) {
  return ingredientsText
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line !== "")
    .map((line) => {
      const fullMatch = line.match(/^(\d+(?:[.,]\d+)?)\s+([^\s]+)\s+(.+)$/);
      const amountMatch = line.match(/^(\d+(?:[.,]\d+)?)\s+(.+)$/);

      if (fullMatch) {
        return {
          amount: fullMatch[1],
          unit: fullMatch[2],
          name: fullMatch[3]
        };
      }

      if (amountMatch) {
        return {
          amount: amountMatch[1],
          unit: "",
          name: amountMatch[2]
        };
      }

      return {
        amount: "",
        unit: "",
        name: line
      };
    });
}

// Baut die Zutaten wieder in eine lesbare Textform für die Bearbeitung zurück.
function joinIngredientsForTextarea(ingredients) {
  return ingredients
    .map((ingredient) =>
      [ingredient.amount, ingredient.unit, ingredient.name]
        .filter((part) => part && part.trim() !== "")
        .join(" ")
    )
    .join("\n");
}

// Liest ein hochgeladenes Bild als Data-URL ein, damit es lokal gespeichert werden kann.
function readImageAsDataUrl(file) {
  if (!file) {
    return Promise.resolve("");
  }

  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      resolve(reader.result);
    };

    reader.onerror = () => {
      reject(new Error("Das Bild konnte nicht gelesen werden."));
    };

    reader.readAsDataURL(file);
  });
}

// Sucht in einem Text nach der ersten URL, falls eine App den Link nur als Freitext teilt.
function extractFirstUrl(text) {
  const match = text.match(/https?:\/\/[^\s]+/i);
  return match ? match[0] : "";
}

// Übernimmt geteilte Inhalte aus der PWA in das Formular.
function applySharedContentToForm() {
  if (!recipeForm || editRecipeId) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const sharedUrl = params.get("shared-url") || "";
  const sharedTitle = params.get("shared-title") || "";
  const sharedText = params.get("shared-text") || "";
  const extractedUrl = extractFirstUrl(sharedText);
  const sourceUrl = sharedUrl || extractedUrl;
  const sourceUrlInput = document.getElementById("source-url");
  const titleInput = document.getElementById("title");

  if (sourceUrl && sourceUrlInput && !sourceUrlInput.value.trim()) {
    sourceUrlInput.value = sourceUrl;
  }

  if (sharedTitle && titleInput && !titleInput.value.trim()) {
    titleInput.value = sharedTitle;
  }

  if ((sourceUrl || sharedTitle || sharedText) && formIntro) {
    formIntro.textContent = "Ein geteilter Inhalt wurde übernommen. Ergänze jetzt die restlichen Rezeptdaten.";
  }
}

// Wenn eine Rezept-ID in der URL steht, wird das Formular in den Bearbeiten-Modus versetzt.
async function loadRecipeForEditing() {
  if (!editRecipeId) {
    return;
  }

  existingRecipe = await window.ReelRecipesDB.getRecipeById(editRecipeId);

  if (!existingRecipe) {
    showFormStatus("Das zu bearbeitende Rezept wurde nicht gefunden.", true);
    return;
  }

  document.getElementById("source-url").value = existingRecipe.sourceUrl || "";
  document.getElementById("title").value = existingRecipe.title || "";
  document.getElementById("creator").value = existingRecipe.creator || "";
  document.getElementById("category").value = (existingRecipe.categories && existingRecipe.categories[0]) || "";
  document.getElementById("difficulty").value = existingRecipe.difficulty || "";
  document.getElementById("tags").value = (existingRecipe.tags || []).join(", ");
  document.getElementById("servings").value = existingRecipe.servings || 2;
  document.getElementById("favorite").checked = existingRecipe.favorite === true;
  document.getElementById("ingredients").value = joinIngredientsForTextarea(existingRecipe.ingredients || []);
  document.getElementById("steps-text").value = existingRecipe.stepsText || "";
  document.getElementById("notes").value = existingRecipe.notes || "";

  if (formEyebrow) {
    formEyebrow.textContent = "Bearbeiten";
  }

  if (formHeading) {
    formHeading.textContent = "Rezept bearbeiten";
  }

  if (formIntro) {
    formIntro.textContent = "Auf dieser Seite kannst du ein bereits gespeichertes Rezept aktualisieren.";
  }

  if (formTitle) {
    formTitle.textContent = "Rezeptdaten bearbeiten";
  }

  if (submitButton) {
    submitButton.textContent = "Änderungen speichern";
  }

  if (cancelLink) {
    cancelLink.textContent = "Zurück";
    cancelLink.href = `rezept.html?id=${encodeURIComponent(existingRecipe.id)}`;
  }
}

// Liest beim Absenden alle Formularwerte aus und speichert sie als Rezept.
async function handleRecipeSubmit(event) {
  event.preventDefault();

  const sourceUrl = document.getElementById("source-url").value.trim();
  const title = document.getElementById("title").value.trim();
  const creator = document.getElementById("creator").value.trim();
  const category = document.getElementById("category").value;
  const difficulty = document.getElementById("difficulty").value;
  const tags = parseTags(document.getElementById("tags").value);
  const servings = Math.max(1, Number(document.getElementById("servings").value) || 2);
  const imageFile = document.getElementById("image").files[0];
  const favorite = document.getElementById("favorite").checked;
  const ingredients = parseIngredients(document.getElementById("ingredients").value);
  const stepsText = document.getElementById("steps-text").value.trim();
  const notes = document.getElementById("notes").value.trim();

  if (!recipeForm.reportValidity()) {
    return;
  }

  if (ingredients.length === 0) {
    showFormStatus("Bitte gib mindestens eine Zutat ein.", true);
    return;
  }

  try {
    const image = imageFile
      ? await readImageAsDataUrl(imageFile)
      : (existingRecipe && existingRecipe.image) || "";

    const savedRecipe = await window.ReelRecipesDB.saveRecipe({
      id: existingRecipe ? existingRecipe.id : undefined,
      createdAt: existingRecipe ? existingRecipe.createdAt : undefined,
      sourceUrl,
      title,
      creator,
      image,
      servings,
      categories: [category],
      tags,
      difficulty,
      ingredients,
      stepsText,
      notes,
      favorite
    });

    if (existingRecipe) {
      showFormStatus("Das Rezept wurde erfolgreich aktualisiert.");
      window.location.href = `rezept.html?id=${encodeURIComponent(savedRecipe.id)}`;
    } else {
      recipeForm.reset();
      showFormStatus("Das Rezept wurde lokal in IndexedDB gespeichert.");
    }
  } catch (error) {
    showFormStatus(error.message, true);
  }
}

if (recipeForm) {
  applySharedContentToForm();

  loadRecipeForEditing().catch((error) => {
    showFormStatus(error.message, true);
  });

  recipeForm.addEventListener("submit", handleRecipeSubmit);
}
