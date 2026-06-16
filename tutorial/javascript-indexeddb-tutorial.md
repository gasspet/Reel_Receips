# JavaScript-Tutorial zu `db.js`

## Ziel dieses Tutorials

Dieses Tutorial erklärt die neue Datei `js/db.js`. Sie bildet die gemeinsame
Grundlage für die spätere Datenlogik der Website.

Die Datei kümmert sich um vier Hauptaufgaben:

- Datenbank öffnen
- Rezept-ID erzeugen
- Rezeptdaten in eine feste Form bringen
- Rezepte speichern und laden

## Der komplette Code

```js
const DB_NAME = "reelRecipesDB";
const DB_VERSION = 1;
const STORE_NAME = "recipes";

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

function createRecipeId() {
  return `recipe-${Date.now()}`;
}

function normalizeRecipe(recipeData) {
  const timestamp = new Date().toISOString();

  return {
    id: recipeData.id || createRecipeId(),
    title: recipeData.title || "",
    sourceUrl: recipeData.sourceUrl || "",
    creator: recipeData.creator || "",
    image: recipeData.image || "",
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

window.ReelRecipesDB = {
  openDatabase,
  saveRecipe,
  getAllRecipes,
  getRecipeById,
  createRecipeId,
  normalizeRecipe
};
```

## Erklärung der Hauptteile

### 1. Datenbank-Konstanten

```js
const DB_NAME = "reelRecipesDB";
const DB_VERSION = 1;
const STORE_NAME = "recipes";
```

- Hier werden feste Grundwerte für die Datenbank gespeichert.
- `DB_NAME` ist der Name der Datenbank im Browser.
- `DB_VERSION` ist die Versionsnummer.
- `STORE_NAME` ist der Name des Bereichs, in dem die Rezepte gespeichert werden.

### 2. Datenbank öffnen

```js
function openDatabase() {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open(DB_NAME, DB_VERSION);
```

- Diese Funktion öffnet die Datenbank.
- `window.indexedDB.open(...)` startet den Zugriff auf IndexedDB.
- Weil dieser Vorgang Zeit braucht, wird ein `Promise` verwendet.

### 3. Fehler behandeln

```js
request.onerror = () => {
  reject(new Error("Die IndexedDB konnte nicht geöffnet werden."));
};
```

- Falls das Öffnen fehlschlägt, wird das Promise mit einem Fehler beendet.

### 4. Object Store anlegen

```js
request.onupgradeneeded = (event) => {
  const database = event.target.result;

  if (!database.objectStoreNames.contains(STORE_NAME)) {
    database.createObjectStore(STORE_NAME, { keyPath: "id" });
  }
};
```

- Dieser Teil läuft, wenn die Datenbank neu angelegt oder erweitert wird.
- Falls der Store `recipes` noch nicht existiert, wird er hier erstellt.
- `keyPath: "id"` bedeutet, dass jedes Rezept über sein Feld `id` eindeutig erkannt wird.

### 5. Erfolgreich öffnen

```js
request.onsuccess = () => {
  resolve(request.result);
};
```

- Wenn alles klappt, liefert die Funktion die geöffnete Datenbank zurück.

### 6. Rezept-ID erzeugen

```js
function createRecipeId() {
  return `recipe-${Date.now()}`;
}
```

- Diese Funktion erzeugt eine einfache eindeutige ID aus dem aktuellen Zeitwert.

### 7. Rezeptdaten vereinheitlichen

```js
function normalizeRecipe(recipeData) {
  const timestamp = new Date().toISOString();

  return {
    id: recipeData.id || createRecipeId(),
    title: recipeData.title || "",
    sourceUrl: recipeData.sourceUrl || "",
    creator: recipeData.creator || "",
    image: recipeData.image || "",
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
```

- Diese Funktion sorgt dafür, dass jedes Rezept dieselbe Struktur bekommt.
- Fehlende Felder werden mit sinnvollen Standardwerten ergänzt.
- So wird verhindert, dass unvollständige Objekte gespeichert werden.

### 8. Rezept speichern

```js
function saveRecipe(recipeData) {
  return openDatabase().then((database) => new Promise((resolve, reject) => {
    const transaction = database.transaction(STORE_NAME, "readwrite");
    const store = transaction.objectStore(STORE_NAME);
    const recipe = normalizeRecipe(recipeData);
    const request = store.put(recipe);
```

- Diese Funktion öffnet zuerst die Datenbank.
- Danach startet sie eine `readwrite`-Transaktion.
- `store.put(recipe)` speichert das Rezept oder aktualisiert es, falls die ID schon existiert.

### 9. Alle Rezepte laden

```js
function getAllRecipes() {
  return openDatabase().then((database) => new Promise((resolve, reject) => {
    const transaction = database.transaction(STORE_NAME, "readonly");
    const store = transaction.objectStore(STORE_NAME);
    const request = store.getAll();
```

- Diese Funktion lädt alle gespeicherten Rezepte aus dem Store `recipes`.

### 10. Ein Rezept per ID laden

```js
function getRecipeById(recipeId) {
  return openDatabase().then((database) => new Promise((resolve, reject) => {
    const transaction = database.transaction(STORE_NAME, "readonly");
    const store = transaction.objectStore(STORE_NAME);
    const request = store.get(recipeId);
```

- Diese Funktion lädt genau ein Rezept über seine ID.
- Das wird später für `rezept.html?id=...` wichtig.

### 11. Funktionen global verfügbar machen

```js
window.ReelRecipesDB = {
  openDatabase,
  saveRecipe,
  getAllRecipes,
  getRecipeById,
  createRecipeId,
  normalizeRecipe
};
```

- Dieser Block macht die Funktionen für andere Skripte verfügbar.
- Dadurch können spätere Dateien wie `app.js` oder ein Formularskript einfach darauf zugreifen.

## Was du dir für die Präsentation merken kannst

- `db.js` ist die zentrale Datenbank-Datei des Projekts.
- Sie speichert noch nichts automatisch, sondern stellt die Grundfunktionen bereit.
- Alle späteren Seiten greifen auf dieselbe IndexedDB zu.
- Der Store `recipes` ist die gemeinsame Datenbasis für Startseite, Formular und Detailansicht.
