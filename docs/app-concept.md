# App Concept

## Ausgangspunkt

Reel Recipes ist bisher ein statischer HTML/CSS-Prototyp mit drei zentralen
Seiten:

- `index.html` als Startseite mit Such- und Filterbereich
- `rezept.html` und weitere Rezeptseiten als Detailansichten
- `hinzufuegen.html` als Formularseite für neue Rezepte

Die Seiten zeigen bereits die spätere Struktur der Anwendung, enthalten aber
noch keine vollständige Interaktivität. Genau hier setzt JavaScript an.

## Was soll JavaScript generell auf der Website tun?

JavaScript soll den statischen Prototyp in eine einfache, interaktive
Rezept-Anwendung weiterentwickeln.

Die Erweiterung soll später:

- neue Rezepte über das Formular erfassen
- eingegebene Rezeptdaten im Browser speichern
- Rezepte auf der Startseite automatisch anzeigen
- eine Suchfunktion für Titel, Zutaten und Notizen bieten
- Filter für Kategorie, Schwierigkeit und Favoriten aktiv machen
- ausgewählte Rezeptdaten auf passenden Detailseiten anzeigen

Damit wird das Grundziel des Projekts umgesetzt: Social-Media-Rezepte sollen
nicht nur dargestellt, sondern gesammelt, organisiert und später
wiedergefunden werden können.

## Wie wird die Anwendung bedient?

Der geplante Ablauf ist bewusst einfach:

1. Die Person öffnet die Startseite und sieht einen kompakten Überblick.
2. Über `Rezepte` im Header gelangt sie auf eine eigene Übersichtsseite.
3. Über das Suchfeld im Header gelangt sie auf eine eigene Suchseite.
4. Dort kann die Liste über Suchbegriff und Filter eingeschränkt werden.
5. Über die Navigation gelangt man zur Seite `hinzufuegen.html`.
6. Dort kann ein neues Rezept eingegeben und gespeichert werden.
7. Nach dem Speichern erscheint das Rezept in der Übersicht und in der Suche.
8. Über einen Klick auf eine Rezeptkarte gelangt man zur Detailansicht.

## Wie fügt sich JavaScript in die bestehende Website ein?

### Startseite (`index.html`)

Hier soll JavaScript:

- eine kompakte Rezeptvorschau laden
- Kategorien auf der Startseite gruppiert darstellen
- das Suchfeld im Header mit der Suchseite verbinden

### Rezepte-Seite (`rezepte.html`)

Hier soll JavaScript:

- alle gespeicherten Rezepte als vollständige Übersicht anzeigen
- den Einstieg in einzelne Detailseiten ermöglichen

### Suchseite (`suche.html`)

Hier soll JavaScript:

- Suchbegriffe auslesen
- ausgewählte Filter anwenden
- Rezeptkarten dynamisch filtern
- eine Meldung anzeigen, wenn nichts gefunden wurde

### Formularseite (`hinzufuegen.html`)

Hier soll JavaScript später:

- Formulareingaben auslesen
- Rezeptdaten prüfen
- neue Inhalte speichern

### Detailseiten

Hier soll JavaScript später:

- passende Rezeptdaten laden
- statische Platzhalter schrittweise durch echte Inhalte ersetzen

## Geplante endgültige Seitenstruktur

Für die fertige dynamische Version soll die Website nicht mehr für jedes
Rezept eine eigene HTML-Datei benötigen. Stattdessen ist diese Struktur
vorgesehen:

- `index.html` als dynamische Startseite mit allen Rezeptkarten
- `rezepte.html` als Seite mit vollständiger Rezeptübersicht
- `suche.html` als eigene Seite für Suche und Filter
- `rezept.html` als eine allgemeine Detailseite für alle Rezepte
- `hinzufuegen.html` als Seite für neue Rezepte
- `imprint.html` als statische Impressumsseite

## Was sich dadurch ändert

### Startseite

Die Startseite soll nicht mehr den kompletten Suchbereich tragen. Stattdessen
soll sie:

- ein Suchfeld im Header zeigen
- eine kleinere Rezeptvorschau enthalten
- Rezepte nach Kategorien gruppiert zeigen

Die Karten sollen aus den in `IndexedDB` gespeicherten Rezeptdaten erzeugt
werden.

### Rezepte-Seite

`rezepte.html` soll eine vollständige Übersicht aller Rezepte zeigen. Diese
Seite ersetzt den bisherigen Gedanken, `Rezeptdetail` direkt im Header zu
verlinken.

Von dort aus gelangt man über einzelne Karten auf `rezept.html`.

### Suchseite

`suche.html` soll der zentrale Ort für Suche und Filterung werden.

Dort stehen:

- freies Suchfeld
- Kategorie-Filter
- Schwierigkeits-Filter
- Favoriten-Filter
- Ergebnisliste

### Detailseite

`rezept.html` soll nur noch eine einzige allgemeine Detailseite sein. Welche
Rezeptdaten angezeigt werden, entscheidet JavaScript über eine Rezept-ID in
der URL, zum Beispiel:

`rezept.html?id=abc123`

### Hinzufügen-Seite

`hinzufuegen.html` bleibt als eigene Seite bestehen, bekommt aber echte
Speicherlogik für neue Rezepte.

## Welche bisherigen Beispielseiten später entfallen können

Sobald die dynamische Detailansicht funktioniert, werden die einzelnen
statischen Rezeptseiten nicht mehr benötigt. Dazu gehören zum Beispiel:

- `hafer-bowl.html`
- `schoko-bananen-kuchen.html`
- `avocado-sandwich.html`
- `gemuesepfanne-mit-reis.html`
- `iced-matcha-latte.html`
- `zimtschnecken.html`

Diese Seiten sollten aber erst entfernt werden, wenn:

- `IndexedDB` stabil funktioniert
- `index.html` Rezeptkarten dynamisch rendert
- `rezept.html` Daten zuverlässig über die ID lädt

## Vorteile dieser Struktur

- neue Rezepte funktionieren automatisch ohne neue HTML-Dateien
- die Pflege der Website wird einfacher
- die App wird näher an eine echte Datenanwendung herangeführt
- Suche, Filter und Detailansicht greifen auf dieselbe Datenbasis zu
- die Startseite wird ruhiger und übersichtlicher
- die Suche bekommt eine eigene, klar verständliche Aufgabe
- die Hauptnavigation wird logischer, weil `Rezepte` als Sammlung wichtiger ist als ein einzelnes Rezeptdetail

## Was wird für die nächste Abgabe konkret als Erstes umgesetzt?

Für die nächste Abgabe wird als erste JavaScript-Funktion eine Such- und
Filterfunktion auf der Startseite umgesetzt.

## Was soll diese erste App-Version tun?

Die erste Version soll:

- einen Suchbegriff aus dem Suchfeld lesen
- die ausgewählte Kategorie lesen
- die ausgewählte Schwierigkeit lesen
- die Favoriten-Checkbox auswerten
- alle Rezeptkarten mit diesen Eingaben vergleichen
- passende Karten sichtbar lassen
- unpassende Karten ausblenden
- eine Meldung anzeigen, wenn kein Rezept mehr passt

## Technische Vorbereitung in `index.html`

Damit `app.js` einfach auf die richtigen Elemente zugreifen kann, wurden auf
der Startseite klare Bezugspunkte vorbereitet:

- `search-input` für das Suchfeld
- `category-filter` für die Kategorieauswahl
- `difficulty-filter` für die Schwierigkeitsauswahl
- `favorites-only` für die Favoriten-Checkbox
- `.recipe-card` für die einzelnen Rezeptkarten
- `data-favorite` für den Favoritenstatus einer Karte

## Technische Grundlage für den nächsten Ausbauschritt

Als gemeinsame Datenbasis für Startseite, Formular und Detailseite wird
`IndexedDB` verwendet. Alle drei Seiten sollen später mit derselben
Rezeptstruktur arbeiten.

Dabei gilt:

- `hinzufuegen.html` erzeugt neue Rezeptobjekte
- `index.html` liest gespeicherte Rezeptobjekte für Vorschau und Kategorien
- `rezepte.html` liest alle gespeicherten Rezeptobjekte für die Gesamtübersicht
- `suche.html` liest alle gespeicherten Rezeptobjekte für Suche und Filter
- `rezept.html` lädt genau ein Rezept über seine ID

## Geplanter Umbau der Startseite und Suche

Der nächste größere Strukturumbau soll in dieser Reihenfolge passieren:

1. Startseite visuell entschlacken
2. eigenes `rezepte.html` für die Gesamtübersicht anlegen
3. eigenes `suche.html` anlegen
4. Suchfeld im Header auf die Suchseite verlinken
5. bestehende Suchlogik von `index.html` auf `suche.html` verschieben
6. Startseite mit kleineren, kategorisierten Rezeptbereichen neu aufbauen

## Mini-Plan für die erste Logik

Die erste Version von `app.js` soll in kleinen, gut erklärbaren Schritten
arbeiten:

1. Eingabefelder auswählen
2. aktuelle Werte lesen
3. alle Rezeptkarten durchgehen
4. Titel, Metazeile und Beschreibung je Karte auslesen
5. Bedingungen für Suche, Kategorie, Schwierigkeit und Favoriten prüfen
6. passende Karten anzeigen und unpassende Karten ausblenden
7. bei null Treffern eine Hinweis-Meldung anzeigen

## Wann reagiert die Anwendung?

Die Filterung soll direkt auf Bedienung reagieren:

- beim Tippen ins Suchfeld
- beim Ändern der Kategorie
- beim Ändern der Schwierigkeit
- beim Aktivieren oder Deaktivieren der Favoriten-Checkbox

## Warum ist diese erste Lösung gut geeignet?

Diese Lösung ist für die Abgabe passend, weil sie:

- direkt zum Projektthema passt
- nicht zu simpel ist
- ohne Frameworks mit Vanilla JavaScript umsetzbar ist
- überschaubar bleibt
- sich in der Präsentation gut erklären lässt

## Was bewusst noch nicht Teil dieser ersten App-Version ist

- lokale Datenspeicherung
- Formularverarbeitung für neue Rezepte
- automatische Befüllung der Detailseiten
- Backend oder Benutzerkonten

Damit bleibt die erste JavaScript-Erweiterung bewusst klein und gut
beherrschbar, ist aber trotzdem inhaltlich sinnvoll und passend zur Website.
