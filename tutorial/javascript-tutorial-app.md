# JavaScript-Tutorial zu `app.js`

## Ziel dieses Tutorials

Dieses Tutorial erklärt den echten Code aus `js/app.js` Schritt für Schritt.
Der Fokus liegt darauf, dass du später jede Zeile in der Präsentation erklären
kannst.

Im Code sind zusätzlich kurze Strukturkommentare eingebaut. Sie zeigen die
Hauptlogik in dieser Reihenfolge:

- Elemente auswählen
- Werte lesen
- Inhalte aus den Karten lesen
- Bedingungen prüfen
- Karten anzeigen oder ausblenden
- Meldung steuern

## Der komplette Code

```js
const searchInput = document.getElementById("search-input");
const categoryFilter = document.getElementById("category-filter");
const difficultyFilter = document.getElementById("difficulty-filter");
const favoritesOnly = document.getElementById("favorites-only");
const recipeCards = document.querySelectorAll(".recipe-card");
const noResultsMessage = document.getElementById("no-results-message");

function filterRecipes() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const selectedCategory = categoryFilter.value.toLowerCase();
  const selectedDifficulty = difficultyFilter.value.toLowerCase();
  const showFavoritesOnly = favoritesOnly.checked;
  let visibleCards = 0;

  recipeCards.forEach((card) => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    const meta = card.querySelector(".recipe-card__meta").textContent.toLowerCase();
    const text = card.querySelector(".recipe-card__text").textContent.toLowerCase();
    const cardContent = `${title} ${meta} ${text}`;
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

searchInput.addEventListener("input", filterRecipes);
categoryFilter.addEventListener("change", filterRecipes);
difficultyFilter.addEventListener("change", filterRecipes);
favoritesOnly.addEventListener("change", filterRecipes);

filterRecipes();
```

## Erklärung Zeile für Zeile

### 1. Elemente aus dem HTML auswählen

```js
const searchInput = document.getElementById("search-input");
const categoryFilter = document.getElementById("category-filter");
const difficultyFilter = document.getElementById("difficulty-filter");
const favoritesOnly = document.getElementById("favorites-only");
const recipeCards = document.querySelectorAll(".recipe-card");
const noResultsMessage = document.getElementById("no-results-message");
```

- `const` legt eine Konstante an.
- `document.getElementById(...)` holt genau ein HTML-Element über seine ID.
- `document.querySelectorAll(...)` holt alle Elemente, die auf den Selektor passen.
- `recipeCards` enthält deshalb alle Rezeptkarten der Startseite.
- `noResultsMessage` verweist auf die Meldung, die bei null Treffern eingeblendet werden soll.

### 2. Die Hauptfunktion definieren

```js
function filterRecipes() {
```

- Hier wird eine Funktion angelegt.
- Diese Funktion übernimmt die komplette Filterlogik.
- Sie wird später immer dann aufgerufen, wenn sich eine Eingabe ändert.

### 3. Aktuelle Eingaben lesen

```js
const searchTerm = searchInput.value.trim().toLowerCase();
const selectedCategory = categoryFilter.value.toLowerCase();
const selectedDifficulty = difficultyFilter.value.toLowerCase();
const showFavoritesOnly = favoritesOnly.checked;
let visibleCards = 0;
```

- `.value` liest den aktuellen Wert eines Eingabefelds oder `select`-Felds.
- `.trim()` entfernt unnötige Leerzeichen am Anfang und Ende.
- `.toLowerCase()` wandelt Text in Kleinbuchstaben um, damit Vergleiche einfacher werden.
- `.checked` liefert `true` oder `false` bei einer Checkbox.
- `visibleCards` zählt mit, wie viele Karten nach dem Filtern sichtbar bleiben.

### 4. Alle Karten nacheinander prüfen

```js
recipeCards.forEach((card) => {
```

- `forEach` geht jede Rezeptkarte einzeln durch.
- `card` steht dabei immer für genau eine Karte.

### 5. Inhalte aus jeder Karte auslesen

```js
const title = card.querySelector("h3").textContent.toLowerCase();
const meta = card.querySelector(".recipe-card__meta").textContent.toLowerCase();
const text = card.querySelector(".recipe-card__text").textContent.toLowerCase();
const cardContent = `${title} ${meta} ${text}`;
const isFavorite = card.dataset.favorite === "true";
```

- `card.querySelector(...)` sucht innerhalb der aktuellen Karte.
- `.textContent` liest den sichtbaren Text aus einem Element.
- `cardContent` verbindet Titel, Metazeile und Beschreibung zu einem einzigen Textblock.
- `card.dataset.favorite` liest das `data-favorite`-Attribut aus dem HTML.
- Der Vergleich `=== "true"` erzeugt daraus einen echten Wahrheitswert.

### 6. Einzelne Bedingungen prüfen

```js
const matchesSearch = cardContent.includes(searchTerm);
const matchesCategory =
  selectedCategory === "alle kategorien" || meta.includes(selectedCategory);
const matchesDifficulty =
  selectedDifficulty === "alle" || meta.includes(selectedDifficulty);
const matchesFavorite = !showFavoritesOnly || isFavorite;
```

- `.includes(...)` prüft, ob ein Text in einem anderen Text vorkommt.
- Bei Kategorie und Schwierigkeit gilt:
  - Wenn `Alle` gewählt ist, soll nichts herausgefiltert werden.
  - Sonst muss der Wert in der Metazeile vorkommen.
- `!showFavoritesOnly` bedeutet:
  - Wenn die Checkbox nicht aktiv ist, ist die Bedingung automatisch erfüllt.
  - Wenn sie aktiv ist, muss die Karte ein Favorit sein.

### 7. Endergebnis der Prüfung bilden

```js
const shouldShow =
  matchesSearch &&
  matchesCategory &&
  matchesDifficulty &&
  matchesFavorite;
```

- `&&` bedeutet logisches UND.
- Die Karte bleibt nur sichtbar, wenn alle Bedingungen erfüllt sind.

### 8. Karte anzeigen oder ausblenden

```js
card.style.display = shouldShow ? "" : "none";

if (shouldShow) {
  visibleCards += 1;
}
```

- Das ist ein ternärer Operator.
- Wenn `shouldShow` wahr ist, bleibt die Karte sichtbar.
- Wenn `shouldShow` falsch ist, wird `display: none` gesetzt und die Karte verschwindet.
- Wenn eine Karte sichtbar bleibt, wird der Zähler `visibleCards` erhöht.

### 9. Meldung für null Treffer steuern

```js
noResultsMessage.hidden = visibleCards > 0;
```

- `.hidden` blendet ein HTML-Element ein oder aus.
- Wenn noch mindestens eine Karte sichtbar ist, bleibt die Meldung versteckt.
- Wenn keine Karte sichtbar ist, wird die Meldung angezeigt.

### 10. Funktion und Schleife schließen

```js
  });
}
```

- Damit enden die `forEach`-Schleife und die Funktion.

### 11. Auf Eingaben reagieren

```js
searchInput.addEventListener("input", filterRecipes);
categoryFilter.addEventListener("change", filterRecipes);
difficultyFilter.addEventListener("change", filterRecipes);
favoritesOnly.addEventListener("change", filterRecipes);
```

- `addEventListener(...)` sorgt dafür, dass JavaScript auf Benutzeraktionen hört.
- `input` reagiert beim Tippen ins Suchfeld.
- `change` reagiert bei Auswahlfeldern und Checkboxen.
- Immer wenn etwas geändert wird, läuft `filterRecipes()`.

### 12. Funktion einmal direkt starten

```js
filterRecipes();
```

- Diese Zeile startet die Funktion einmal sofort.
- Dadurch ist die Anzeige auch direkt beim Laden der Seite schon im richtigen Zustand.

## Was du dir für die Präsentation merken kannst

- JavaScript liest hier keine Datenbank, sondern nur bestehende HTML-Inhalte.
- Die Logik ist vollständig auf die Startseite begrenzt.
- Der Code arbeitet in vier Schritten:
  - Elemente auswählen
  - Werte lesen
  - Bedingungen prüfen
  - Karten anzeigen oder ausblenden
- Zusätzlich gibt es jetzt eine Rückmeldung, wenn kein Rezept mehr gefunden wird.

## Glossar

- **DOM**: Das DOM ist die Struktur der HTML-Seite, auf die JavaScript zugreifen und die es verändern kann.
- **Event**: Ein Event ist ein Ereignis auf der Webseite, zum Beispiel Tippen, Klicken oder das Ändern eines Feldes.
- **Event-Listener**: Ein Event-Listener wartet auf ein bestimmtes Ereignis und startet dann den passenden JavaScript-Code.
- **Funktion**: Eine Funktion ist ein benannter Codeblock, der eine bestimmte Aufgabe ausführt.
- **Bedingung**: Eine Bedingung prüft, ob etwas wahr oder falsch ist.
- **Schleife**: Eine Schleife wiederholt denselben Ablauf für mehrere Elemente nacheinander.
- **CSS-Selektor**: Ein CSS-Selektor ist eine Schreibweise, mit der JavaScript oder CSS bestimmte HTML-Elemente findet.
- **ID**: Eine ID ist eine eindeutige Kennzeichnung für genau ein HTML-Element.
- **Klasse**: Eine Klasse ist eine Bezeichnung, die mehrere HTML-Elemente gemeinsam haben können.
- **data-Attribut**: Ein data-Attribut speichert zusätzliche Informationen direkt im HTML.
- **Boolean**: Ein Boolean ist ein Wahrheitswert und kann nur `true` oder `false` sein.
- **String**: Ein String ist ein Textwert wie ein Titel, ein Suchbegriff oder eine Beschreibung.
- **`.includes()`**: `.includes()` prüft, ob ein Text in einem anderen Text vorkommt.
- **`.textContent`**: `.textContent` liest den sichtbaren Textinhalt eines HTML-Elements aus.
- **`.checked`**: `.checked` prüft, ob eine Checkbox aktiviert ist.
- **`.hidden`**: `.hidden` blendet ein HTML-Element aus oder zeigt es wieder an.
