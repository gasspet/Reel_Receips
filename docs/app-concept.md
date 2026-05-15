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

1. Die Person öffnet die Startseite und sieht vorhandene Rezeptkarten.
2. Über Suchfeld und Filter kann die Liste eingeschränkt werden.
3. Über die Navigation gelangt man zur Seite `hinzufuegen.html`.
4. Dort kann später ein neues Rezept eingegeben werden.
5. Nach dem Speichern erscheint das Rezept in der Übersicht.
6. Über einen Klick auf eine Rezeptkarte gelangt man zur Detailansicht.

## Wie fügt sich JavaScript in die bestehende Website ein?

### Startseite (`index.html`)

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
