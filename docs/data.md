# Data

## Aktueller Stand

Reel Recipes arbeitet aktuell komplett lokal im Browser. Es gibt kein Backend und keine externe Datenbank. Alle Rezepte werden in `IndexedDB` gespeichert.

## Vorhandene Materialien

| Material | Format | Zweck |
|---|---|---|
| `data/Logo_Reel_Recipes.png` | PNG | Logo für das Projekt |
| `data/Logo_Reel_Recipes_transparent.png` | PNG | freigestelltes Logo |
| `data/recipe-images/` | SVG | lokale Beispielbilder für Rezepte |
| `js/sample-recipes.js` | JavaScript-Daten | Startrezepte für die App |

## Rezeptdatenmodell

Jedes Rezept wird als Objekt gespeichert.

```js
{
  id: "recipe-1718496000000",
  title: "Cremige Tomatenpasta",
  sourceUrl: "https://instagram.com/...",
  creator: "@pasta_daily",
  image: "data/recipe-images/tomatenpasta.svg",
  servings: 2,
  categories: ["Abendessen"],
  tags: ["vegetarisch", "schnell"],
  difficulty: "Einfach",
  ingredients: [
    { amount: "200", unit: "g", name: "Pasta" }
  ],
  stepsText: "Pasta kochen...",
  notes: "Optional mit Basilikum servieren.",
  favorite: true,
  createdAt: "2026-06-18T12:00:00.000Z",
  updatedAt: "2026-06-18T12:00:00.000Z"
}
```

## Wichtige Felder

| Feld | Zweck |
|---|---|
| `id` | eindeutige Zuordnung eines Rezepts |
| `title` | Rezepttitel |
| `sourceUrl` | Link zum Social-Media-Post |
| `image` | Bildpfad oder Bilddaten |
| `servings` | Basis-Portionenzahl |
| `categories` | grobe Einordnung |
| `ingredients` | strukturierte Zutaten |
| `stepsText` | Zubereitung als Text |
| `notes` | persönliche Hinweise |
| `favorite` | Favoritenstatus |

## Datenfluss in der Website

- `hinzufuegen.html` erzeugt neue Rezeptobjekte.
- `js/db.js` speichert und lädt Rezepte aus `IndexedDB`.
- `js/sample-recipes.js` liefert Startrezepte für den ersten App-Start.
- `rezept.html` zeigt genau ein Rezept über seine ID in der URL.

## Hinweise

- Alle bisherigen Beispielrezepte gelten standardmäßig als Rezepte für `2 Personen`.
- Die Beispielbilder sind lokal im Projekt gespeichert und KI-generiert.
