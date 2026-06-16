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

## Endgültiges Rezept-Datenmodell für IndexedDB

Für die eigentliche JavaScript-Umsetzung wird jedes Rezept als Objekt mit
einer festen Struktur gespeichert.

### Geplante Objektform

```js
{
  id: "recipe-1718496000000",
  title: "Cremige Tomatenpasta",
  sourceUrl: "https://instagram.com/...",
  creator: "foodbylina",
  image: "",
  categories: ["Abendessen"],
  tags: ["vegetarisch", "schnell"],
  difficulty: "Einfach",
  ingredients: [
    { amount: "200", unit: "g", name: "Pasta" },
    { amount: "150", unit: "g", name: "Frischkäse" },
    { amount: "", unit: "", name: "Knoblauch" }
  ],
  stepsText: "Pasta kochen. Sauce anrühren. Alles vermengen.",
  notes: "Optional mit Basilikum servieren.",
  favorite: true,
  createdAt: "2026-06-16T12:00:00.000Z",
  updatedAt: "2026-06-16T12:00:00.000Z"
}
```

## Bedeutung der einzelnen Felder

| Feld | Typ | Zweck |
|---|---|---|
| `id` | String | eindeutige ID für Laden, Bearbeiten und Verlinken |
| `title` | String | Rezepttitel |
| `sourceUrl` | String | Link zum ursprünglichen Social-Media-Post |
| `creator` | String | Name des Accounts oder Erstellerprofils |
| `image` | String | Bilddaten oder Bild-URL |
| `categories` | Array von Strings | grobe Einordnung wie Frühstück oder Dessert |
| `tags` | Array von Strings | flexible Zusatzmerkmale wie vegetarisch |
| `difficulty` | String | Einfach, Mittel oder Anspruchsvoll |
| `ingredients` | Array von Objekten | strukturierte Zutaten |
| `stepsText` | String | Zubereitung als Freitext |
| `notes` | String | zusätzliche Hinweise |
| `favorite` | Boolean | merkt, ob das Rezept als Favorit markiert ist |
| `createdAt` | String | Zeitpunkt der Erstellung |
| `updatedAt` | String | Zeitpunkt der letzten Änderung |

## Welche Felder Pflichtfelder sein sollen

Für das erste funktionsfähige Speichern sind diese Felder Pflicht:

- `id`
- `title`
- `sourceUrl`
- `categories`
- `difficulty`
- `ingredients`
- `stepsText`
- `favorite`
- `createdAt`
- `updatedAt`

Diese Felder dürfen zunächst optional bleiben:

- `creator`
- `image`
- `tags`
- `notes`

## Was daraus für IndexedDB folgt

Die Datenbank soll einen Store `recipes` enthalten. Darin wird jedes Rezept
unter seiner `id` gespeichert.

Für die erste Umsetzung reicht deshalb:

- eine Datenbank, zum Beispiel `reelRecipesDB`
- ein Object Store `recipes`
- `id` als eindeutiger Schlüssel

## Was daraus für die Seiten folgt

### `hinzufuegen.html`

Das Formular muss später genau diese Objektform erzeugen.

### `index.html`

Die Startseite muss aus einer Liste solcher Rezeptobjekte dynamisch
Rezeptkarten erzeugen.

### `rezept.html`

Die Detailseite muss über die Rezept-ID in der URL genau ein solches Objekt
laden und anzeigen.

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
- dynamisch ergänzte Rezeptkarten aus `IndexedDB`
- einzelne Detailseiten für Beispielrezepte
- ein Formular für neue Eingaben mit echter Speicherlogik
- zwei Logo-Dateien für die Gestaltung
- eine JavaScript-Funktion für Suche und Filter
- eine IndexedDB-Grundlage für Rezepte

## Was noch fehlt

- dynamische Befüllung der Detailansichten

## Aktuelle Ablage

Die Projektmaterialien liegen derzeit in:

- `data/` für Materialhinweise und Assets
- den HTML-Dateien für die aktuellen Beispielinhalte
- `js/app.js` für das Rendern, Auslesen und Filtern der Startseiten-Daten
