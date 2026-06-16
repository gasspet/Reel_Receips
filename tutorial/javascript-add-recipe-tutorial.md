# JavaScript-Tutorial zu `add-recipe.js`

## Ziel dieses Tutorials

Dieses Tutorial erklärt die Datei `js/add-recipe.js`. Sie verbindet das
Formular auf `hinzufuegen.html` mit `IndexedDB`.

Die Datei übernimmt dabei diese Aufgaben:

- Formular auswählen
- Statusmeldungen anzeigen
- Tags und Zutaten aufbereiten
- optional ein Bild einlesen
- Rezeptobjekt speichern

## Der komplette Code

```js
const recipeForm = document.getElementById("recipe-form");
const formStatus = document.getElementById("form-status");

function showFormStatus(message, isError = false) {
  formStatus.textContent = message;
  formStatus.hidden = false;
  formStatus.classList.toggle("form-status--error", isError);
}

function parseTags(tagsText) {
  return tagsText
    .split(",")
    .map((tag) => tag.trim())
    .filter((tag) => tag !== "");
}

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

async function handleRecipeSubmit(event) {
  event.preventDefault();

  const sourceUrl = document.getElementById("source-url").value.trim();
  const title = document.getElementById("title").value.trim();
  const creator = document.getElementById("creator").value.trim();
  const category = document.getElementById("category").value;
  const difficulty = document.getElementById("difficulty").value;
  const tags = parseTags(document.getElementById("tags").value);
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
    const image = await readImageAsDataUrl(imageFile);

    await window.ReelRecipesDB.saveRecipe({
      sourceUrl,
      title,
      creator,
      image,
      categories: [category],
      tags,
      difficulty,
      ingredients,
      stepsText,
      notes,
      favorite
    });

    recipeForm.reset();
    showFormStatus("Das Rezept wurde lokal in IndexedDB gespeichert.");
  } catch (error) {
    showFormStatus(error.message, true);
  }
}

if (recipeForm) {
  recipeForm.addEventListener("submit", handleRecipeSubmit);
}
```

## Erklärung der Hauptteile

### 1. Formularelemente auswählen

```js
const recipeForm = document.getElementById("recipe-form");
const formStatus = document.getElementById("form-status");
```

- Diese beiden Zeilen holen das Formular und das Statusfeld aus dem HTML.

### 2. Statusmeldungen anzeigen

```js
function showFormStatus(message, isError = false) {
  formStatus.textContent = message;
  formStatus.hidden = false;
  formStatus.classList.toggle("form-status--error", isError);
}
```

- Diese Funktion zeigt Rückmeldungen an, zum Beispiel Erfolg oder Fehler.
- Mit `classList.toggle(...)` wird bei Bedarf eine Fehlerklasse gesetzt.

### 3. Tags aufteilen

```js
function parseTags(tagsText) {
  return tagsText
    .split(",")
    .map((tag) => tag.trim())
    .filter((tag) => tag !== "");
}
```

- Hier wird ein Text wie `vegetarisch, schnell` in ein Array von Tags umgewandelt.

### 4. Zutaten strukturieren

```js
function parseIngredients(ingredientsText) {
```

- Diese Funktion zerlegt den Zutaten-Text in einzelne Zeilen.
- Danach versucht sie, aus jeder Zeile `amount`, `unit` und `name` herauszulesen.

### 5. Bilddatei lesen

```js
function readImageAsDataUrl(file) {
```

- Diese Funktion liest eine Bilddatei aus dem Formular.
- Das Bild wird als Data URL gespeichert, damit es später lokal in IndexedDB mit abgelegt werden kann.

### 6. Formular absenden

```js
async function handleRecipeSubmit(event) {
  event.preventDefault();
```

- Die Funktion wird beim Absenden des Formulars gestartet.
- `event.preventDefault()` verhindert, dass die Seite normal neu geladen wird.

### 7. Werte aus den Feldern lesen

```js
const sourceUrl = document.getElementById("source-url").value.trim();
const title = document.getElementById("title").value.trim();
```

- So werden die aktuellen Eingaben aus dem Formular geholt.

### 8. Formular prüfen

```js
if (!recipeForm.reportValidity()) {
  return;
}
```

- Diese Zeilen nutzen die eingebaute HTML-Validierung.
- Wenn Pflichtfelder fehlen, bricht die Funktion ab.

### 9. Rezept speichern

```js
await window.ReelRecipesDB.saveRecipe({
  sourceUrl,
  title,
  creator,
  image,
  categories: [category],
  tags,
  difficulty,
  ingredients,
  stepsText,
  notes,
  favorite
});
```

- Hier wird aus den Formularwerten ein Rezeptobjekt gebaut.
- Danach wird es mit `saveRecipe(...)` in IndexedDB gespeichert.

### 10. Erfolg oder Fehler anzeigen

```js
recipeForm.reset();
showFormStatus("Das Rezept wurde lokal in IndexedDB gespeichert.");
```

- Nach erfolgreichem Speichern wird das Formular geleert.
- Danach erscheint eine Erfolgsmeldung.

## Was du dir für die Präsentation merken kannst

- `add-recipe.js` verbindet das sichtbare Formular mit echter Datenspeicherung.
- Die Datei arbeitet mit `db.js` zusammen.
- Das Rezept wird vor dem Speichern in strukturierte Daten umgewandelt.
- Tags und Zutaten werden nicht nur als Rohtext gespeichert, sondern vorbereitet.
