# HTML/CSS-Tutorial zu Reel Recipes

## Ziel dieses Tutorials

Dieses Tutorial erklaert den aktuellen Code von `Reel Recipes` direkt an echten
Codeausschnitten aus dem Projekt.

Der Fokus liegt auf:

- `index.html`
- `rezept.html`
- `hinzufuegen.html`
- `css/style.css`

Die Erklaerungen sind absichtlich konkret auf dein Projekt bezogen und nicht
allgemein gehalten.

## 1. Grundaufbau von `index.html`

### Code

```html
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Reel Recipes - Rezeptsammlung</title>
    <link rel="stylesheet" href="css/style.css" />
  </head>
```

### Erklaerung

- `<!DOCTYPE html>` sagt dem Browser, dass die Datei als modernes HTML5 gelesen werden soll.
- `<html lang="de">` legt fest, dass die Sprache der Seite Deutsch ist.
- `<meta charset="UTF-8">` sorgt dafuer, dass Umlaute richtig dargestellt werden.
- `<meta name="viewport"...>` ist wichtig fuer Mobilgeraete.
- `<title>` bestimmt den Text im Browser-Tab.
- `<link rel="stylesheet"...>` verbindet das HTML mit deiner CSS-Datei.

## 2. Navigation im Header

### Code

```html
<nav class="top-nav" aria-label="Hauptnavigation">
  <div class="top-nav__inner">
    <a class="top-nav__brand" href="index.html">Reel Recipes</a>
    <div class="top-nav__links">
      <a class="top-nav__link top-nav__link--active" href="index.html">Startseite</a>
      <a class="top-nav__link" href="rezept.html">Rezeptdetail</a>
      <a class="top-nav__link" href="hinzufuegen.html">Rezept hinzufügen</a>
      <a class="top-nav__link" href="imprint.html">Impressum</a>
    </div>
  </div>
</nav>
```

### Erklaerung

- `<nav>` wird fuer Navigationsbereiche verwendet.
- `aria-label="Hauptnavigation"` macht den Bereich fuer Screenreader besser verstaendlich.
- Der erste Link mit `top-nav__brand` ist der Markenname der Website.
- Die weiteren Links fuehren zu den einzelnen HTML-Seiten.
- `top-nav__link--active` markiert die Seite, auf der man sich gerade befindet.

## 3. Hero-Bereich auf der Startseite

### Code

```html
<header class="hero">
  <div class="hero__content">
    <div class="brand">
      <img
        class="brand__logo"
        src="data/Logo_Reel_Recipes_transparent.png"
        alt="Logo von Reel Recipes"
      />
    </div>
    <p class="eyebrow">Rezept-Web-App</p>
    <h1>Reel Recipes sammelt deine Social-Media-Rezepte an einem Ort.</h1>
    <p class="hero__text">
      Diese statische Startseite zeigt, wie eine App aussehen kann, mit der
      Rezepte aus Instagram später gesucht, organisiert und als Favorit
      markiert werden.
    </p>
  </div>
</header>
```

### Erklaerung

- `<header>` ist der obere Einfuehrungsbereich der Seite.
- Das Logo wird ueber `<img>` eingebunden.
- `<p class="eyebrow">` ist eine kleine Oberzeile ueber der Hauptueberschrift.
- `<h1>` ist die wichtigste Ueberschrift der ganzen Seite.
- `<p class="hero__text">` erklaert kurz die Idee des Projekts.

## 4. Such- und Filterbereich

### Code

```html
<section class="panel search-panel" aria-labelledby="search-title">
  <div class="section-heading">
    <p class="section-label">Suche und Filter</p>
    <h2 id="search-title">Rezepte schneller wiederfinden</h2>
  </div>

  <form class="search-form">
    <label class="field">
      <span>Freie Suche</span>
      <input
        type="text"
        placeholder="Suche nach Titel, Zutaten oder Notizen"
      />
    </label>
  </form>
</section>
```

### Erklaerung

- `<section>` gruppiert einen thematischen Inhaltsbereich.
- `panel` ist die allgemeine Klasse fuer die weissen Inhaltsboxen.
- `<h2>` ist die Ueberschrift dieses Abschnitts.
- `<form>` wird verwendet, obwohl noch kein JavaScript aktiv ist, damit die Struktur fuer spaeter schon vorhanden ist.
- `<label>` verbindet die Beschriftung direkt mit dem Eingabefeld.
- `<input type="text">` ist das Suchfeld.

## 5. Rezeptkarten auf der Startseite

### Code

```html
<article class="recipe-card">
  <div class="recipe-card__image recipe-card__image--pasta"></div>
  <div class="recipe-card__content">
    <div class="recipe-card__topline">
      <p class="recipe-card__creator">@pasta_daily</p>
      <span class="favorite-badge">Favorit</span>
    </div>
    <h3>Cremige Tomatenpasta</h3>
    <p class="recipe-card__meta">Abendessen &middot; Einfach</p>
    <p class="recipe-card__text">
      Schnelles Pasta-Rezept mit Tomaten, Knoblauch und Frischkäse.
    </p>
    <div class="tag-row">
      <span class="tag">vegetarisch</span>
      <span class="tag">schnell</span>
    </div>
    <a class="text-link" href="rezept.html">Rezept ansehen</a>
  </div>
</article>
```

### Erklaerung

- `<article>` passt gut, weil jede Rezeptkarte ein eigenstaendiger Inhaltsblock ist.
- `recipe-card__image` ist aktuell noch keine echte Bilddatei, sondern eine farbige Flaeche aus CSS.
- `<h3>` ist der Titel des einzelnen Rezepts.
- `favorite-badge` hebt ein Lieblingsrezept visuell hervor.
- `tag-row` zeigt Eigenschaften wie `vegetarisch` oder `schnell`.
- Der Link fuehrt zur Detailseite.

## 6. Detailseite `rezept.html`

### Code

```html
<section class="panel detail-section" id="zutaten">
  <div class="section-heading">
    <p class="section-label">Inhalt</p>
    <h2>Zutaten</h2>
  </div>

  <ul class="ingredient-list">
    <li>200 g Pasta</li>
    <li>1 EL Olivenoel</li>
    <li>2 Tomaten</li>
    <li>1 Knoblauchzehe</li>
    <li>100 g Frischkaese</li>
    <li>Salz und Pfeffer</li>
  </ul>
</section>
```

### Erklaerung

- Diese `section` ist ein einzelner Block auf der Detailseite.
- `id="zutaten"` ermoeglicht Sprunglinks innerhalb der Seite.
- `<ul>` ist eine ungeordnete Liste.
- `<li>` ist jeweils ein einzelner Listenpunkt.
- Fuer Zutaten ist eine Liste sinnvoller als ein Fliesstext, weil sie besser lesbar ist.

## 7. Formularseite `hinzufuegen.html`

### Code

```html
<form class="recipe-form">
  <label class="field field--full">
    <span>Instagram-Link</span>
    <input
      type="url"
      placeholder="https://www.instagram.com/..."
    />
  </label>

  <div class="form-grid">
    <label class="field">
      <span>Rezepttitel</span>
      <input type="text" placeholder="z. B. Cremige Tomatenpasta" />
    </label>
  </div>
</form>
```

### Erklaerung

- `<form>` gruppiert alle Eingabefelder.
- `type="url"` ist passend fuer einen Link.
- `field--full` bedeutet, dass das Feld ueber die ganze Breite gehen darf.
- `form-grid` ordnet mehrere Felder in einem Raster an.
- Der Formularaufbau ist bereits fuer die spaetere JavaScript-Erweiterung vorbereitet.

## 8. Wichtige CSS-Stelle: Farben und Variablen

### Code

```css
:root {
  --bg: #f4f7f5;
  --surface: #f9fcfb;
  --surface-strong: #fff;
  --line: #cfe1dc;
  --text: #1f2e33;
  --muted: #4f6b6a;
  --accent: #f17a16;
  --accent-dark: #d76000;
  --brand-blue: #0d6b7f;
}
```

### Erklaerung

- `:root` ist der Ort fuer globale CSS-Variablen.
- Die Werte koennen spaeter im ganzen Stylesheet wiederverwendet werden.
- So bleibt das Design konsistent.
- Wenn du z. B. eine Markenfarbe aendern willst, musst du sie nur hier anpassen.

## 9. Wichtige CSS-Stelle: Navigation

### Code

```css
.top-nav__inner {
  width: min(1100px, calc(100% - 2rem));
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.85rem 1rem;
}
```

### Erklaerung

- `width: min(...)` begrenzt die Breite der Navigation.
- `margin: 0 auto` zentriert sie.
- `display: flex` ordnet die Inhalte nebeneinander an.
- `justify-content: space-between` schiebt Markenname und Links auseinander.
- `flex-wrap: wrap` sorgt dafuer, dass die Navigation auf kleinen Bildschirmen umbrechen darf.

## 10. Wichtige CSS-Stelle: Hero-Bereich

### Code

```css
.hero__content {
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(circle at top right, rgba(127, 190, 44, 0.18), transparent 26%),
    radial-gradient(circle at left center, rgba(241, 122, 22, 0.14), transparent 30%),
    linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(240, 249, 247, 0.96));
  border-radius: var(--radius-lg);
  padding: 2rem;
}
```

### Erklaerung

- `position: relative` ist wichtig, damit dekorative Elemente korrekt darin positioniert werden koennen.
- `overflow: hidden` verhindert, dass Hintergrundeffekte ueber die Box hinausragen.
- Die `background`-Eigenschaft verwendet mehrere Farbverlaeufe.
- `border-radius` sorgt fuer abgerundete Ecken.
- `padding` schafft Innenabstand.

## 11. Wichtige CSS-Stelle: Rezeptkarten

### Code

```css
.card-grid {
  display: grid;
  gap: 1rem;
}

.recipe-card {
  overflow: hidden;
  background: var(--surface-strong);
  border-radius: var(--radius-md);
  box-shadow: 0 14px 30px rgba(18, 74, 78, 0.08);
}
```

### Erklaerung

- `display: grid` wird verwendet, um mehrere Karten ordentlich anzuordnen.
- `gap` legt den Abstand zwischen den Karten fest.
- `overflow: hidden` sorgt dafuer, dass Ecken und Bildbereiche sauber abgeschnitten werden.
- `box-shadow` gibt den Karten visuelle Tiefe.

## 12. Wichtige CSS-Stelle: Formulare

### Code

```css
.field input,
.field select,
.field textarea {
  width: 100%;
  padding: 0.9rem 1rem;
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  background: var(--surface-strong);
  color: var(--text);
  font: inherit;
}
```

### Erklaerung

- Diese Regel sorgt dafuer, dass alle Formularelemente gleich aussehen.
- `width: 100%` laesst das Feld die volle Breite des Containers nutzen.
- `padding` verbessert die Lesbarkeit.
- `border-radius` macht die Eingabefelder weicher und moderner.
- `font: inherit` uebernimmt die Schrift der Seite.

## 13. Wichtige CSS-Stelle: Responsive Design

### Code

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

### Erklaerung

- `@media` bedeutet: Diese Regeln gelten nur ab einer bestimmten Bildschirmbreite.
- Ab `700px` werden die Karten zweispaltig.
- Ab `980px` werden sie dreispaltig.
- Dadurch passt sich die Website an Handy, Tablet und Desktop an.

## 14. Was du dir fuer die Praesentation merken kannst

Wenn du den Code erklaeren sollst, kannst du dich an diesen Fragen orientieren:

- Was ist die Aufgabe dieses HTML-Bereichs?
- Warum habe ich hier dieses HTML-Element verwendet?
- Welche Klasse steuert das Aussehen?
- Welche CSS-Regel macht den sichtbaren Effekt?
- Ist diese Stelle schon statisch oder spaeter interaktiv?

## 15. Was spaeter mit JavaScript dazukommt

Die aktuelle Version ist noch statisch.

Spaeter sollen mit JavaScript vor allem diese Punkte aktiviert werden:

- Rezepte speichern
- Suchfunktion aktiv machen
- Filter aktiv machen
- Rezeptdaten dynamisch anzeigen

Das HTML und CSS bilden dafuer bereits die sichtbare Grundlage.
