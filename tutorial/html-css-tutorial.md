# HTML/CSS-Tutorial zu Reel Recipes

## Ziel dieses Tutorials

Dieses Tutorial erklärt den aktuellen HTML- und CSS-Code von Reel Recipes am echten Projekt. Es ist bewusst auf deine Website bezogen, damit du den Aufbau bei der Präsentation nachvollziehbar erklären kannst.

## 1. Grundidee der HTML-Struktur

Alle Seiten folgen demselben Grundmuster:

```html
<body>
  <a class="skip-link" href="#main-content">Zum Inhalt springen</a>
  <nav class="top-nav" aria-label="Hauptnavigation">...</nav>
  <header class="hero">...</header>
  <main class="page-content" id="main-content">...</main>
  <footer class="site-footer">...</footer>
</body>
```

### Erklärung

- Der `skip-link` verbessert die Bedienung mit Tastatur und Screenreader.
- `<nav>` enthält die Hauptnavigation.
- `<header>` ist der sichtbare Einstiegsbereich der Seite.
- `<main>` enthält den eigentlichen Seiteninhalt.
- `<footer>` bündelt die Abschlussinformationen.

## 2. Wichtige HTML-Elemente auf der Startseite

### Logo und Hero

```html
<header class="hero">
  <div class="hero__content">
    <div class="brand">
      <img
        class="brand__logo"
        src="data/Logo_Reel_Recipes_transparent.png"
        alt="Logo von Reel Recipes"
      >
    </div>
    <p class="eyebrow">Rezept-Web-App</p>
    <h1>Deine Rezeptsammlung startet hier.</h1>
  </div>
</header>
```

### Erklärung

- `<img>` bindet das Logo ein.
- `alt` ist wichtig für Barrierefreiheit.
- `<p class="eyebrow">` ist eine kleine Oberzeile.
- `<h1>` ist die wichtigste Überschrift der Seite und darf pro Seite nur einmal vorkommen.

## 3. Kartenbereiche

```html
<section class="panel" aria-labelledby="recipe-of-day-title">
  <div class="section-heading section-heading--inline">
    <div>
      <p class="section-label">Empfehlung</p>
      <h2 id="recipe-of-day-title">Rezept des Tages</h2>
    </div>
  </div>
  <div class="card-grid" id="recipe-of-day-grid"></div>
</section>
```

### Erklärung

- `<section>` gruppiert einen thematischen Bereich.
- `aria-labelledby` verbindet den Bereich mit seiner Überschrift.
- `card-grid` ist der Platzhalter für Rezeptkarten.
- Die Karten selbst werden später von JavaScript eingefügt.

## 4. Formular auf `hinzufuegen.html`

```html
<form class="recipe-form" id="recipe-form">
  <label class="field" for="title">
    <span>Rezepttitel</span>
    <input id="title" type="text" required>
  </label>
</form>
```

### Erklärung

- `<form>` gruppiert alle Eingabefelder.
- `<label>` ist die sichtbare Beschriftung eines Feldes.
- Das `for`-Attribut verbindet das Label mit dem Input.
- `required` markiert ein Pflichtfeld.

## 5. Detailseite

```html
<section class="panel detail-section" id="zutaten" aria-labelledby="ingredients-title">
  <div class="section-heading">
    <p class="section-label">Inhalt</p>
    <h2 id="ingredients-title">Zutaten</h2>
  </div>
  <ul class="ingredient-list" id="detail-ingredients"></ul>
</section>
```

### Erklärung

- Die Zutaten stehen in einer `<ul>`, also in einer ungeordneten Liste.
- `id="zutaten"` ermöglicht Sprunglinks innerhalb der Seite.
- `id="detail-ingredients"` ist der Platzhalter für die später eingefügten Zutaten.

## 6. Wichtige CSS-Idee: Variablen

```css
:root {
  --text: #43281d;
  --accent: #f27b35;
  --brand-blue-dark: #7a3326;
  --radius-lg: 34px;
}
```

### Erklärung

- `:root` speichert globale CSS-Variablen.
- Farben und Rundungen müssen dadurch nicht überall neu geschrieben werden.
- Wenn du eine Farbe ändern willst, ist das zentral möglich.

## 7. Wichtige CSS-Idee: Navigation

```css
.top-nav__inner {
  width: min(1100px, calc(100% - 2rem));
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
```

### Erklärung

- `display: flex` ordnet die Navigationsinhalte nebeneinander an.
- `flex-wrap: wrap` erlaubt Umbrüche auf kleinen Bildschirmen.
- `margin: 0 auto` zentriert den Container.

## 8. Wichtige CSS-Idee: Panels und Karten

```css
.panel {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(255, 248, 241, 0.94));
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  box-shadow: var(--shadow);
}
```

### Erklärung

- `panel` ist die Grundklasse für die großen Inhaltsboxen.
- Verläufe und Schatten erzeugen den weichen App-Look.
- `padding` schafft Innenabstand.

## 9. Wichtige CSS-Idee: Responsives Layout

```css
@media (min-width: 700px) {
  .card-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 980px) {
  .card-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
```

### Erklärung

- `@media` bedeutet: Diese Regeln gelten erst ab einer bestimmten Bildschirmbreite.
- Auf kleinen Geräten stehen die Karten untereinander.
- Auf größeren Geräten werden sie zwei- oder dreispaltig.

## 10. Was du dir merken kannst

Wenn du HTML und CSS erklären sollst, helfen dir diese Leitfragen:

- Welche Aufgabe hat dieser Bereich?
- Warum wurde hier genau dieses HTML-Element verwendet?
- Welche Klasse steuert das Aussehen?
- Welche CSS-Regel macht den sichtbaren Effekt?
- Ist die Stelle statisch oder wird sie später von JavaScript ergänzt?
