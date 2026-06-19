// Diese Datei enthält feste Beispielrezepte, damit die App direkt mit Inhalt startet.
window.ReelRecipesSamples = [
  {
    id: "sample-tomatenpasta",
    title: "Cremige Tomatenpasta",
    sourceUrl: "#",
    creator: "@pasta_daily",
    image: "data/recipe-images/tomatenpasta.png",
    categories: ["Abendessen"],
    tags: ["vegetarisch", "schnell"],
    difficulty: "Einfach",
    ingredients: [
      { amount: "200", unit: "g", name: "Pasta" },
      { amount: "1", unit: "EL", name: "Olivenöl" },
      { amount: "2", unit: "", name: "Tomaten" },
      { amount: "1", unit: "Zehe", name: "Knoblauch" },
      { amount: "80", unit: "g", name: "Frischkäse" }
    ],
    stepsText:
      "Koche die Pasta in Salzwasser al dente.\nErhitze Olivenöl, röste Knoblauch kurz an und gib die Tomaten dazu.\nRühre den Frischkäse ein und vermenge alles mit der Pasta.",
    notes: "Schnelles Pasta-Rezept mit Tomaten, Knoblauch und Frischkäse.",
    favorite: true,
    imageClass: "recipe-card__image--pasta"
  },
  {
    id: "sample-hafer-bowl",
    title: "Hafer-Bowl mit Beeren",
    sourceUrl: "#",
    creator: "@green.kitchen",
    image: "data/recipe-images/hafer-bowl.png",
    categories: ["Frühstück"],
    tags: ["gesund", "Essensvorbereitung"],
    difficulty: "Einfach",
    ingredients: [
      { amount: "50", unit: "g", name: "Haferflocken" },
      { amount: "150", unit: "g", name: "Joghurt" },
      { amount: "1", unit: "", name: "Banane" },
      { amount: "1", unit: "Handvoll", name: "Beeren" },
      { amount: "1", unit: "TL", name: "Honig" }
    ],
    stepsText:
      "Gib Haferflocken und Joghurt in eine Schüssel.\nSchneide die Banane in Scheiben und verteile sie mit den Beeren darüber.\nZum Schluss etwas Honig hinzufügen.",
    notes: "Frische Bowl mit Haferflocken, Joghurt, Banane und Beeren.",
    favorite: false,
    imageClass: "recipe-card__image--bowl"
  },
  {
    id: "sample-schoko-bananen-kuchen",
    title: "Schoko-Bananen-Kuchen",
    sourceUrl: "#",
    creator: "@sweet.weekend",
    image: "data/recipe-images/schoko-bananen-kuchen.png",
    categories: ["Dessert"],
    tags: ["backen", "wochenende"],
    difficulty: "Mittel",
    ingredients: [
      { amount: "2", unit: "", name: "reife Bananen" },
      { amount: "200", unit: "g", name: "Mehl" },
      { amount: "2", unit: "", name: "Eier" },
      { amount: "3", unit: "EL", name: "Kakao" },
      { amount: "120", unit: "g", name: "Zucker" }
    ],
    stepsText:
      "Zerdrücke die Bananen.\nVerrühre sie mit den restlichen Zutaten zu einem Teig.\nBacke den Kuchen goldbraun und gib nach dem Abkühlen bei Wunsch eine Glasur darüber.",
    notes: "Saftiger Kuchen mit Banane, Kakao und einer einfachen Glasur.",
    favorite: false,
    imageClass: "recipe-card__image--cake"
  },
  {
    id: "sample-avocado-sandwich",
    title: "Avocado-Sandwich",
    sourceUrl: "#",
    creator: "@fresh.table",
    image: "data/recipe-images/avocado-sandwich.png",
    categories: ["Snack"],
    tags: ["vegetarisch", "schnell"],
    difficulty: "Einfach",
    ingredients: [
      { amount: "2", unit: "Scheiben", name: "Brot" },
      { amount: "1", unit: "", name: "Avocado" },
      { amount: "1", unit: "", name: "Tomate" },
      { amount: "1", unit: "TL", name: "Zitronensaft" },
      { amount: "", unit: "", name: "Salz und Pfeffer" }
    ],
    stepsText:
      "Toaste das Brot.\nZerdrücke die Avocado mit Zitronensaft und streiche sie auf die Brotscheiben.\nBelege das Sandwich mit Tomaten und würze nach Geschmack.",
    notes: "Knuspriges Brot mit Avocado, Tomaten und Zitronensaft.",
    favorite: true,
    imageClass: "recipe-card__image--bowl"
  },
  {
    id: "sample-gemuesepfanne-mit-reis",
    title: "Gemüsepfanne mit Reis",
    sourceUrl: "#",
    creator: "@home.cooking",
    image: "data/recipe-images/gemuesepfanne.png",
    categories: ["Mittagessen"],
    tags: ["alltag", "gemüse"],
    difficulty: "Mittel",
    ingredients: [
      { amount: "150", unit: "g", name: "Reis" },
      { amount: "1", unit: "", name: "Paprika" },
      { amount: "1", unit: "", name: "Zucchini" },
      { amount: "1", unit: "", name: "Karotte" },
      { amount: "2", unit: "EL", name: "Sojasauce" }
    ],
    stepsText:
      "Koche den Reis vor.\nBrate das Gemüse in einer Pfanne an.\nGib den Reis dazu und würze alles mit Sojasauce und Gewürzen.",
    notes: "Bunte Gemüsepfanne mit Paprika, Zucchini und lockerem Reis.",
    favorite: false,
    imageClass: "recipe-card__image--pasta"
  },
  {
    id: "sample-iced-matcha-latte",
    title: "Iced Matcha Latte",
    sourceUrl: "#",
    creator: "@coffee.corner",
    image: "data/recipe-images/matcha-latte.png",
    categories: ["Getränke"],
    tags: ["sommer", "drink"],
    difficulty: "Einfach",
    ingredients: [
      { amount: "1", unit: "TL", name: "Matcha-Pulver" },
      { amount: "100", unit: "ml", name: "heißes Wasser" },
      { amount: "200", unit: "ml", name: "Milch" },
      { amount: "", unit: "", name: "Eiswürfel" },
      { amount: "1", unit: "TL", name: "Sirup" }
    ],
    stepsText:
      "Rühre den Matcha mit heißem Wasser glatt.\nFülle ein Glas mit Eiswürfeln und Milch.\nGieße den Matcha darüber und süße nach Wunsch leicht.",
    notes: "Kaltes Matcha-Getränk mit Milch und leichter Süße.",
    favorite: false,
    imageClass: "recipe-card__image--cake"
  },
  {
    id: "sample-zimtschnecken",
    title: "Zimtschnecken",
    sourceUrl: "#",
    creator: "@bake.and.share",
    image: "data/recipe-images/Zimtschnecken.png",
    categories: ["Dessert"],
    tags: ["backen", "wochenende"],
    difficulty: "Anspruchsvoll",
    ingredients: [
      { amount: "500", unit: "g", name: "Mehl" },
      { amount: "250", unit: "ml", name: "Milch" },
      { amount: "80", unit: "g", name: "Butter" },
      { amount: "80", unit: "g", name: "Zucker" },
      { amount: "2", unit: "TL", name: "Zimt" }
    ],
    stepsText:
      "Bereite einen Hefeteig zu und rolle ihn aus.\nBestreiche ihn mit Butter, Zucker und Zimt.\nRolle den Teig auf, schneide Schnecken und backe sie goldbraun.",
    notes: "Weiche Hefeschnecken mit Zimtfüllung und süßer Glasur.",
    favorite: true,
    imageClass: "recipe-card__image--pasta"
  }
];
