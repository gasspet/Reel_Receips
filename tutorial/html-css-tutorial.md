# HTML/CSS-Tutorial zu Reel Receips

## Zweck dieses Tutorials

Dieses Tutorial erklaert den aktuellen HTML- und CSS-Code des Projekts
Reel Receips anhand der vorhandenen Dateien. Ziel ist, dass der Code fuer die
Praesentation erklaerbar wird.

## Welche Dateien das Tutorial behandelt

- `index.html`
- `rezept.html`
- `hinzufuegen.html`
- `css/style.css`

## HTML-Grundidee im Projekt

Das HTML bestimmt, welche Inhalte auf den Seiten vorhanden sind.

Im Projekt gibt es drei Hauptseiten:

- Startseite
- Rezeptdetailseite
- Seite zum Hinzufuegen eines Rezepts

Jede Seite hat denselben Grundaufbau:

1. `head` fuer Metadaten und CSS-Einbindung
2. `nav` fuer die Hauptnavigation
3. `header` fuer den oberen Einfuehrungsbereich
4. `main` fuer den eigentlichen Seiteninhalt

## Was der `head` macht

Im `head` stehen:

- `meta charset="UTF-8"` fuer die richtige Zeichendarstellung
- `meta name="viewport"` fuer mobile Geraete
- `title` fuer den Browser-Tab
- `link rel="stylesheet"` fuer das Laden von `css/style.css`

## Was die Navigation macht

Die Navigation ist mit `<nav>` aufgebaut.

Sie enthaelt Links zu:

- `index.html`
- `rezept.html`
- `hinzufuegen.html`

Die Navigation zeigt also, wie mehrere HTML-Seiten ueber normale Links
verbunden werden.

## Was der Hero-Bereich macht

Der Hero-Bereich ist der grosse obere Teil jeder Seite.

Er enthaelt:

- das Logo
- eine kurze Einordnung der Seite
- die Hauptueberschrift
- Aktionsbuttons

Der Hero-Bereich hilft, sofort zu erkennen, auf welcher Seite man sich befindet.

## Was auf der Startseite gezeigt wird

Die Startseite besitzt:

- einen Suchbereich
- einen Filterbereich
- mehrere Rezeptkarten

Die Rezeptkarten bestehen aus:

- einer Bildflaeche
- dem Erstellerprofil
- Titel und Metadaten
- Tags
- einem Link zur Detailseite

## Was auf der Detailseite gezeigt wird

Die Detailseite zeigt ein einzelnes Rezept ausfuehrlicher.

Dort erscheinen:

- Titel
- Bildbereich
- Metadaten
- Zutaten
- Zubereitung
- Notizen

## Was auf der Seite zum Hinzufuegen gezeigt wird

Diese Seite enthaelt ein Formular mit typischen Feldern fuer ein Rezept:

- Link
- Titel
- Profilname
- Kategorie
- Schwierigkeit
- Zutaten
- Zubereitung
- Notizen

## CSS-Grundidee im Projekt

Die CSS-Datei gestaltet die HTML-Struktur.

Sie regelt unter anderem:

- Farben
- Abstaende
- Rundungen
- Schriftgroessen
- Layout auf mobilen und groesseren Bildschirmen

## Wichtige CSS-Bereiche

### `:root`

Hier stehen CSS-Variablen fuer Farben, Rundungen und Schatten.

Das ist praktisch, weil dieselben Werte mehrfach genutzt werden koennen.

### `.top-nav`

Dieser Bereich gestaltet die Navigation oben auf jeder Seite.

### `.hero` und `.hero__content`

Diese Klassen gestalten den grossen Einstiegsbereich mit Logo, Titel und Text.

### `.panel`

Diese Klasse wird fuer weisse Inhaltsboxen verwendet.

Dadurch sehen Suchbereich, Kartenbereiche und Formularbereiche einheitlich aus.

### `.card-grid` und `.recipe-card`

Diese Klassen gestalten die Rezeptkarten auf der Startseite.

### `.field`

Diese Klasse sorgt fuer einheitliche Darstellung von Formularfeldern.

### Media Queries

Die `@media`-Bereiche passen das Layout an breitere Bildschirme an.

Dadurch wird die Seite responsiv.

## Was spaeter mit JavaScript kommt

Die aktuelle Version ist absichtlich noch statisch.

Spaeter kommen mit JavaScript dazu:

- echtes Speichern
- echte Suche
- echte Filterung
- Favoritenverhalten

Diese Teile werden spaeter im Semester erklaert.
