# Reel Recipes

Reel Recipes ist ein Webprojekt für eine Rezept-App, in der Social-Media-Rezepte
gesammelt und später leichter wiedergefunden werden sollen.

Der aktuelle Stand besteht aus:

- einem HTML/CSS-Prototyp mit mehreren Seiten
- einer ersten JavaScript-Erweiterung für Suche und Filter auf der Startseite
- begleitender Dokumentation und Tutorials für die Lehrveranstaltung

## Projektziel

Das Projekt soll Rezepte aus Social Media an einem Ort sammeln, strukturieren
und wieder auffindbar machen. Im aktuellen Stand liegt der Fokus auf:

- Startseite mit Rezeptübersicht
- statischen Detailseiten für einzelne Rezepte
- Formularseite zum Hinzufügen neuer Rezepte
- JavaScript-Suche und Filterfunktion

## Enthaltene Seiten

- `index.html` - Startseite mit Suche, Filtern und Rezeptkarten
- `rezept.html` - Detailseite für Tomatenpasta
- `hafer-bowl.html` - Detailseite für Hafer-Bowl mit Beeren
- `schoko-bananen-kuchen.html` - Detailseite für Schoko-Bananen-Kuchen
- `avocado-sandwich.html` - Detailseite für Avocado-Sandwich
- `gemuesepfanne-mit-reis.html` - Detailseite für Gemüsepfanne mit Reis
- `iced-matcha-latte.html` - Detailseite für Iced Matcha Latte
- `zimtschnecken.html` - Detailseite für Zimtschnecken
- `hinzufuegen.html` - Formularseite für neue Rezepte
- `imprint.html` - Impressum

## JavaScript-Funktion

Die erste JavaScript-Erweiterung befindet sich in:

- `js/app.js`

Sie ist in `index.html` eingebunden und aktiviert:

- freie Suche
- Filter nach Kategorie
- Filter nach Schwierigkeit
- Filter für Favoriten
- Meldung `Keine Rezepte gefunden`, wenn keine Karte mehr passt

## Projektstruktur

```text
.
├── index.html
├── rezept.html
├── hafer-bowl.html
├── schoko-bananen-kuchen.html
├── avocado-sandwich.html
├── gemuesepfanne-mit-reis.html
├── iced-matcha-latte.html
├── zimtschnecken.html
├── hinzufuegen.html
├── imprint.html
├── css/
│   └── style.css
├── js/
│   └── app.js
├── data/
│   ├── assets.md
│   ├── Logo_Reel_Recipes.png
│   └── Logo_Reel_Recipes_transparent.png
├── docs/
│   ├── app-concept.md
│   ├── app-concept-kurz.md
│   ├── app-mini-plan.md
│   ├── data.md
│   ├── javascript-vorbereitung.md
│   ├── requirements.md
│   ├── visual-design.md
│   └── journal.md
└── tutorial/
    ├── html-css-tutorial.md
    ├── javascript-tutorial-vorbereitung.md
    └── javascript-tutorial-app.md
```

## Lokal öffnen

1. Repository herunterladen oder klonen
2. Die Datei `index.html` im Browser öffnen

Optional für die Präsentation:

- das Projekt in VS Code öffnen
- mit Live Server starten

## Aktueller Stand

Das Projekt nutzt aktuell:

- HTML für Struktur
- CSS für Gestaltung
- Vanilla JavaScript für die erste Interaktivität

Noch nicht umgesetzt sind:

- lokale Datenspeicherung
- Formularverarbeitung für neue Rezepte
- dynamische Detailseiten
- Backend oder Benutzerkonten

## Hinweis für die Lehrveranstaltung

Das Repository enthält zusätzlich mehrere Erklärdateien und Tutorials, damit
der Code bei Präsentationen nachvollziehbar erklärt werden kann.
