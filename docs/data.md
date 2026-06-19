# Data

## Aktueller Stand

Reel Recipes arbeitet aktuell vollständig lokal. Es gibt kein Backend und keine externe Datenbank. Alle selbst angelegten Rezepte werden im Browser in `IndexedDB` gespeichert.

## Vorhandene Materialien

| Material | Format | Zweck |
|---|---|---|
| `data/Logo_Reel_Recipes.png` | PNG | Hauptlogo der Website |
| `data/Logo_Reel_Recipes_transparent.png` | PNG | freigestellte Logo-Version für den Hero-Bereich |
| `data/icons/` | PNG | PWA-Icons |
| `data/recipe-images/` | PNG | lokale Beispielbilder für Rezepte |
| `js/sample-recipes.js` | JavaScript-Daten | feste Beispielrezepte für den ersten Start |

## Rezeptdatenmodell

Jedes Rezept wird als Objekt gespeichert.

```js
{
  id: "recipe-1718496000000",
  title: "Cremige Tomatenpasta",
  sourceUrl: "https://instagram.com/...",
  creator: "@pasta_daily",
  image: "data/recipe-images/tomatenpasta.png",
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

## Bedeutung der wichtigsten Felder

| Feld | Zweck |
|---|---|
| `id` | eindeutige Kennung für ein Rezept |
| `title` | sichtbarer Rezepttitel |
| `sourceUrl` | Link zum ursprünglichen Social-Media-Beitrag |
| `image` | Bildpfad oder lokal gespeicherte Bilddaten |
| `servings` | Basis-Portionenzahl |
| `categories` | grobe Einordnung wie Frühstück oder Dessert |
| `tags` | zusätzliche freie Schlagwörter |
| `ingredients` | strukturierte Zutatenliste |
| `stepsText` | Zubereitung als zusammenhängender Text |
| `notes` | persönliche Hinweise |
| `favorite` | Favoritenstatus |

## Datenfluss in der Website

- `hinzufuegen.html` erzeugt neue Rezeptobjekte.
- `js/add-recipe.js` liest das Formular aus.
- `js/db.js` speichert und lädt Rezepte aus `IndexedDB`.
- `js/sample-recipes.js` liefert die Startrezepte.
- `rezepte.html`, `suche.html` und `index.html` zeigen Sammlungen an.
- `rezept.html` lädt genau ein Rezept über die ID in der URL.

## Wichtige Hinweise

- Beispielrezepte liegen fest im Projekt und werden mit auf GitHub hochgeladen.
- Selbst angelegte Rezepte liegen nur lokal im Browser.
- Beim Löschen der Browserdaten können diese lokalen Rezepte verloren gehen.
