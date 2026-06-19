# Dateiübersicht zu Reel Recipes

## Zweck dieses Dokuments

Diese Übersicht erklärt dir kurz und direkt, welche Datei im Projekt wofür zuständig ist. Sie ist als schnelle Lernhilfe gedacht, wenn du dich vor der Präsentation orientieren möchtest.

## HTML-Dateien

- `index.html`
  Startseite mit Hero, Rezept des Tages, Schnellzugriffen und Kategorievorschau.

- `rezepte.html`
  vollständige Rezeptübersicht mit Gruppierung nach Kategorien.

- `suche.html`
  Such- und Filterseite mit Ergebnisliste.

- `hinzufuegen.html`
  Formularseite zum Anlegen und Bearbeiten von Rezepten.

- `rezept.html`
  Detailseite für ein einzelnes Rezept.

- `imprint.html`
  Impressum und rechtliche Hinweise.

## CSS-Datei

- `css/style.css`
  zentrales Stylesheet für Farben, Layout, Typografie, Karten, Formulare, Header, Footer und Responsiveness.

## JavaScript-Dateien

- `js/db.js`
  öffnet die `IndexedDB` und speichert oder lädt Rezepte.

- `js/sample-recipes.js`
  enthält feste Beispielrezepte, damit die App direkt mit Inhalt startet.

- `js/recipe-render.js`
  erzeugt Rezeptkarten für Startseite, Suche und Übersicht.

- `js/home.js`
  steuert die Startseite, also `Rezept des Tages` und die Vorschau-Kategorien.

- `js/app.js`
  steuert Suche und Filter auf `suche.html`.

- `js/recipes-page.js`
  gruppiert die komplette Sammlung nach Kategorien und sortiert sie alphabetisch.

- `js/add-recipe.js`
  liest das Formular aus, verarbeitet Bild, Zutaten und Tags, übernimmt geteilte Inhalte aus der PWA und speichert das Rezept.

- `js/recipe-detail.js`
  lädt ein einzelnes Rezept, zeigt es auf `rezept.html` an und steuert die Zutaten-Checkliste und den Portionsrechner.

- `js/pwa.js`
  registriert den Service Worker und steuert den Installationsbutton `GET THE APP`.

## PWA-Dateien

- `manifest.webmanifest`
  beschreibt Name, Farben, Start-URL, Icons und den Share-Target-Einstieg der PWA.

- `service-worker.js`
  speichert zentrale Dateien im Cache, damit die App offline eine Grundfunktion hat.

## Dokumentation

- `docs/requirements.md`
  beschreibt, was die Website können muss.

- `docs/data.md`
  erklärt Datenquellen, Datenstruktur und Speicherung.

- `docs/visual-design.md`
  beschreibt Designidee, Farbwelt und Layout.

- `docs/journal.md`
  Arbeitsprotokoll mit Entwicklungsschritten.

## Tutorials

- `tutorial/html-css-tutorial.md`
  erklärt die HTML- und CSS-Struktur am Projekt.

- `tutorial/datei-uebersicht.md`
  diese kompakte Übersicht über alle Dateien.
