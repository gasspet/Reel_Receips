// Diese Datei kapselt alle Zugriffe auf die lokale IndexedDB.
// Dadurch müssen andere Dateien nicht selbst mit Datenbank-Details arbeiten.
const DB_NAME = "reelRecipesDB";
const DB_VERSION = 1;
const STORE_NAME = "recipes";
let seedPromise = null;

// Öffnet die Datenbank und legt den Object Store beim ersten Start an.
function openDatabase() {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => {
      reject(new Error("Die IndexedDB konnte nicht geöffnet werden."));
    };

    request.onupgradeneeded = (event) => {
      const database = event.target.result;

      if (!database.objectStoreNames.contains(STORE_NAME)) {
        database.createObjectStore(STORE_NAME, { keyPath: "id" });
      }
    };

    request.onsuccess = () => {
      resolve(request.result);
    };
  });
}

// Erzeugt eine einfache eindeutige ID auf Basis des aktuellen Zeitpunkts.
function createRecipeId() {
  return `recipe-${Date.now()}`;
}

// Bringt eingehende Rezeptdaten in eine feste, vollständige Struktur.
function normalizeRecipe(recipeData) {
  const timestamp = new Date().toISOString();

  return {
    id: recipeData.id || createRecipeId(),
    title: recipeData.title || "",
    sourceUrl: recipeData.sourceUrl || "",
    creator: recipeData.creator || "",
    image: recipeData.image || "",
    servings: Number(recipeData.servings) > 0 ? Number(recipeData.servings) : 2,
    categories: Array.isArray(recipeData.categories) ? recipeData.categories : [],
    tags: Array.isArray(recipeData.tags) ? recipeData.tags : [],
    difficulty: recipeData.difficulty || "",
    ingredients: Array.isArray(recipeData.ingredients) ? recipeData.ingredients : [],
    stepsText: recipeData.stepsText || "",
    notes: recipeData.notes || "",
    favorite: recipeData.favorite === true,
    createdAt: recipeData.createdAt || timestamp,
    updatedAt: timestamp
  };
}

// Speichert ein neues oder bearbeitetes Rezept in der Datenbank.
function saveRecipe(recipeData) {
  return openDatabase().then((database) => new Promise((resolve, reject) => {
    const transaction = database.transaction(STORE_NAME, "readwrite");
    const store = transaction.objectStore(STORE_NAME);
    const recipe = normalizeRecipe(recipeData);
    const request = store.put(recipe);

    request.onsuccess = () => {
      resolve(recipe);
    };

    request.onerror = () => {
      reject(new Error("Das Rezept konnte nicht gespeichert werden."));
    };
  }));
}

// Lädt alle gespeicherten Rezepte aus der Datenbank.
function getAllRecipes() {
  return openDatabase().then((database) => new Promise((resolve, reject) => {
    const transaction = database.transaction(STORE_NAME, "readonly");
    const store = transaction.objectStore(STORE_NAME);
    const request = store.getAll();

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onerror = () => {
      reject(new Error("Die Rezepte konnten nicht geladen werden."));
    };
  }));
}

// Lädt genau ein Rezept über seine ID.
function getRecipeById(recipeId) {
  return openDatabase().then((database) => new Promise((resolve, reject) => {
    const transaction = database.transaction(STORE_NAME, "readonly");
    const store = transaction.objectStore(STORE_NAME);
    const request = store.get(recipeId);

    request.onsuccess = () => {
      resolve(request.result || null);
    };

    request.onerror = () => {
      reject(new Error("Das Rezept konnte nicht geladen werden."));
    };
  }));
}

// Fügt die festen Beispielrezepte nur dann ein, wenn sie noch nicht vorhanden sind.
function ensureSeedRecipes(seedRecipes = []) {
  if (seedPromise) {
    return seedPromise;
  }

  seedPromise = openDatabase().then((database) => new Promise((resolve, reject) => {
    const transaction = database.transaction(STORE_NAME, "readwrite");
    const store = transaction.objectStore(STORE_NAME);
    const request = store.getAll();

    request.onsuccess = () => {
      const existingIds = new Set(request.result.map((recipe) => recipe.id));

      seedRecipes.forEach((recipe) => {
        if (!existingIds.has(recipe.id)) {
          store.put(normalizeRecipe(recipe));
        }
      });
    };

    request.onerror = () => {
      reject(new Error("Die Startrezepte konnten nicht vorbereitet werden."));
    };

    transaction.oncomplete = () => {
      resolve();
    };

    transaction.onerror = () => {
      reject(new Error("Die Startrezepte konnten nicht gespeichert werden."));
    };
  })).finally(() => {
    seedPromise = null;
  });

  return seedPromise;
}

// Stellt die Funktionen global bereit, damit andere Skripte darauf zugreifen können.
window.ReelRecipesDB = {
  openDatabase,
  saveRecipe,
  getAllRecipes,
  getRecipeById,
  ensureSeedRecipes,
  createRecipeId,
  normalizeRecipe
};
