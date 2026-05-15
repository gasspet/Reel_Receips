# Data

## Projektmaterialien

Das Projekt arbeitet in Milestone 2 noch ohne echte Datenbank. Trotzdem gibt
es bereits Materialien, feste Inhaltswerte und eine geplante Datenstruktur für
die spätere JavaScript-Erweiterung.

## Aktuell vorhandene Materialien

| Material | Format | Zweck |
|---|---|---|
| App-Logo `Logo_Reel_Recipes.png` | PNG | Markenauftritt der Website |
| Freigestelltes Logo `Logo_Reel_Recipes_transparent.png` | PNG | Logo ohne weißen Rand im Header |
| Beispiel-Rezepttexte in HTML | HTML-Inhalt | Platzhalter für Titel, Zutaten, Notizen und Metadaten |
| Kategorien und Schwierigkeitsgrade | Textwerte | Inhalte für Filter, Formular und Karten |
| Beispielkarten auf der Startseite | HTML-Inhalt | Testbasis für Suche und Filter in `app.js` |

## Aktuelle Datenstruktur im Prototyp

Die Inhalte liegen im Moment direkt in den HTML-Dateien. Jede Rezeptkarte
enthält bereits sichtbare Daten, die JavaScript später auslesen kann.

Vorhandene Inhaltsarten:

- Rezepttitel
- Erstellerprofil
- Kategorie
- Schwierigkeit
- Kurzbeschreibung
- Zutatenliste
- Notizen
- Favoritenstatus über `data-favorite`

## Geplante Datenstruktur für später

Später sollen Rezepte in strukturierter Form im Browser gespeichert werden.
Geplante Felder sind:

- `id`
- `title`
- `sourceUrl`
- `creator`
- `categories`
- `difficulty`
- `ingredients`
- `stepsText`
- `notes`
- `favorite`

## Geplante Form einzelner Daten

### Zutaten

Zutaten sollen später möglichst strukturiert abgelegt werden, zum Beispiel als:

`{ amount, unit, name }`

Beispiele:

| amount | unit | name |
|---|---|---|
| `200` | `g` | `Pasta` |
| `1` | `EL` | `Olivenöl` |
| `` | `` | `Salz` |

### Kategorien

Aktuell vorgesehene Kategorien:

- Frühstück
- Mittagessen
- Abendessen
- Dessert
- Snack
- Getränke

### Schwierigkeitsgrade

- Einfach
- Mittel
- Anspruchsvoll

### Tags

Zusätzliche Tags sind flexibel gedacht, zum Beispiel:

- vegetarisch
- vegan
- scharf
- meal prep
- proteinreich

## Was für die Website schon vorhanden ist

- mehrere statische Rezeptkarten für die Startseite
- einzelne Detailseiten für Beispielrezepte
- ein Formular für neue Eingaben
- zwei Logo-Dateien für die Gestaltung
- eine erste JavaScript-Funktion für Suche und Filter

## Was noch fehlt

- echte strukturierte Rezeptdaten als JSON oder Browser-Speicherung
- Übernahme neuer Rezepte aus dem Formular
- dynamische Befüllung der Detailansichten

## Aktuelle Ablage

Die Projektmaterialien liegen derzeit in:

- `data/` für Materialhinweise und Assets
- den HTML-Dateien für die aktuellen Beispielinhalte
- `js/app.js` für das Auslesen und Filtern der vorhandenen Startseiten-Daten
