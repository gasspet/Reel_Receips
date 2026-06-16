# JavaScript-Tutorial zu `app.js`

## Ziel dieses Tutorials

Dieses Tutorial erklärt den aktuellen Code aus `js/app.js`. Die Datei macht
zwei Dinge gleichzeitig:

- gespeicherte Rezepte aus `IndexedDB` auf der Startseite anzeigen
- alle sichtbaren Rezeptkarten durchsuchen und filtern

## Hauptlogik des Skripts

Der Code ist in diese Blöcke gegliedert:

- Elemente auswählen
- Hilfsfunktionen für Darstellung und Suche
- gespeicherte Rezepte laden und als Karten anzeigen
- sichtbare Karten filtern
- auf Eingaben reagieren

## Was sich gegenüber der ersten Version geändert hat

Früher suchte `app.js` nur in den festen Beispielkarten aus dem HTML. Jetzt
lädt die Datei zusätzlich gespeicherte Rezepte aus `IndexedDB` und fügt sie in
dieselbe Kartenübersicht ein. Dadurch tauchen neue Rezepte auch in der Suche
auf.

## Wichtige neue Funktionen

### `createStoredRecipeCard(recipe)`

- Diese Funktion baut aus einem gespeicherten Rezeptobjekt eine neue
  HTML-Rezeptkarte.
- Dafür werden Elemente wie `article`, `div`, `h3`, `p` und `a` mit
  JavaScript erzeugt.
- Die Karte bekommt auch `data-favorite` und `data-search-content`, damit die
  Filterlogik später leicht darauf zugreifen kann.

### `renderStoredRecipes()`

- Diese Funktion lädt alle gespeicherten Rezepte mit
  `window.ReelRecipesDB.getAllRecipes()`.
- Danach entfernt sie zuvor erzeugte dynamische Karten und fügt die aktuellen
  wieder ein.
- So bleibt die Übersicht konsistent, wenn neue Rezepte hinzukommen.

### `getRecipeCards()`

- Diese Funktion holt die aktuellen Rezeptkarten jedes Mal neu aus dem DOM.
- Das ist wichtig, weil `querySelectorAll(...)` aus der ersten Version nur die
  Karten beim Laden der Seite kannte.
- Durch das erneute Auslesen werden auch frisch eingefügte Karten gefiltert.

### `getCardContent(card)`

- Diese Funktion sammelt den durchsuchbaren Text einer Karte.
- Bei dynamischen Karten wird zuerst `data-search-content` genutzt.
- Bei statischen Karten wird der Inhalt weiter direkt aus Titel, Metazeile,
  Beschreibung und Tags gelesen.

### `initializeRecipeOverview()`

- Diese Funktion startet den neuen Ablauf beim Laden der Seite.
- Zuerst werden gespeicherte Rezepte gerendert.
- Danach läuft die eigentliche Filterfunktion.

## Was du dir für die Präsentation merken kannst

- `app.js` ist jetzt nicht mehr nur ein Filter-Skript, sondern auch für das
  Anzeigen gespeicherter Rezepte zuständig.
- Neue Rezepte erscheinen erst in der Suche, seit die Seite auf `IndexedDB`
  zugreift.
- Die Filterlogik selbst bleibt ähnlich: Werte lesen, Bedingungen prüfen,
  Karten ein- oder ausblenden.
- Der wichtige technische Unterschied ist, dass die Kartenliste jetzt dynamisch
  wächst und deshalb bei jeder Filterung neu gelesen werden muss.

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
