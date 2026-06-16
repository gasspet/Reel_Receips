# JavaScript-Tutorial zu `recipe-detail.js`

## Ziel dieses Tutorials

Dieses Tutorial erklärt die Datei `js/recipe-detail.js`. Sie sorgt dafür, dass
auf `rezept.html` wirklich das Rezept angezeigt wird, das auf der Startseite
angeklickt wurde.

## Grundidee

Die Detailseite liest eine Rezept-ID aus der URL, zum Beispiel:

`rezept.html?id=sample-tomatenpasta`

Danach passiert eines von zwei Dingen:

- bei Beispielrezepten werden feste Testdaten geladen
- bei selbst gespeicherten Rezepten werden die Daten aus `IndexedDB` gelesen

## Wichtige Funktionen

### `loadRecipeDetail()`

- Diese Funktion startet den Ladevorgang der Detailseite.
- Sie liest die ID mit `URLSearchParams` aus der URL.
- Danach entscheidet sie, ob ein Beispielrezept oder ein gespeichertes Rezept geladen werden soll.

### `applyDetailRecipe(recipe)`

- Diese Funktion schreibt die Rezeptdaten in die HTML-Elemente der Detailseite.
- Dabei werden Titel, Beschreibung, Tags, Zutaten, Notizen und Quelle ausgetauscht.

### `sampleRecipes`

- Dieses Objekt enthält die bisherigen Beispielrezepte als feste Testdaten.
- So können die alten Beispielkarten weiterhin funktionieren, obwohl es jetzt nur noch eine allgemeine Detailseite gibt.

## Was du dir für die Präsentation merken kannst

- `rezept.html` ist jetzt keine feste Tomatenpasta-Seite mehr.
- Welche Daten angezeigt werden, hängt von der Rezept-ID in der URL ab.
- Dadurch kann dieselbe HTML-Datei für viele verschiedene Rezepte verwendet werden.
