# App Concept

## Ausgangspunkt

Reel Recipes ist bisher ein statischer HTML/CSS-Prototyp mit drei zentralen
Seiten:

- `index.html` als Startseite mit Such- und Filterbereich
- `rezept.html` als Detailansicht eines einzelnen Rezepts
- `hinzufuegen.html` als Formularseite für neue Rezepte

Die Seiten zeigen bereits die spätere Struktur der Anwendung, enthalten aber
noch keine echte Interaktivität. Genau hier soll JavaScript den nächsten
Ausbauschritt ermöglichen.

## Was soll JavaScript generell auf der Website tun?

JavaScript soll den bestehenden statischen Prototyp in eine einfache,
interaktive Rezept-Anwendung weiterentwickeln.

Die JavaScript-Erweiterung soll später:

- neue Rezepte über das Formular erfassen
- eingegebene Rezeptdaten im Browser speichern
- Rezepte auf der Startseite automatisch anzeigen
- eine Suchfunktion für Titel, Zutaten und Notizen bieten
- Filter für Kategorie, Schwierigkeit und Favoriten aktiv machen
- ausgewählte Rezeptdaten auf der Detailseite anzeigen

Damit wird das Grundziel des Projekts umgesetzt: Social-Media-Rezepte sollen
nicht nur dargestellt, sondern auch gesammelt, organisiert und später
wiedergefunden werden können.

## Wie wird die Anwendung bedient?

Die Bedienung soll bewusst einfach und nachvollziehbar bleiben.

Geplanter Ablauf:

1. Die Person öffnet die Startseite und sieht vorhandene Rezeptkarten.
2. Über Suchfeld und Filter kann die Liste eingeschränkt werden.
3. Über die Navigation gelangt man zur Seite `hinzufuegen.html`.
4. Dort kann später ein neues Rezept eingegeben werden.
5. Nach dem Speichern erscheint das Rezept in der Übersicht.
6. Über einen Klick auf eine Rezeptkarte gelangt man zur Detailseite.
7. Auf der Detailseite werden die Inhalte eines einzelnen Rezepts angezeigt.

## Wie fügt sich JavaScript in die bestehende Website ein?

Die Erweiterung passt direkt zur vorhandenen Seitenstruktur und baut auf den
bereits gestalteten Bereichen auf.

### Startseite (`index.html`)

Hier soll JavaScript später:

- Rezeptkarten dynamisch filtern
- Suchbegriffe auslesen
- ausgewählte Filter anwenden
- Favoritenstatus berücksichtigen

### Formularseite (`hinzufuegen.html`)

Hier soll JavaScript später:

- Formulareingaben auslesen
- Rezeptdaten verarbeiten
- neue Inhalte speichern

### Detailseite (`rezept.html`)

Hier soll JavaScript später:

- ein gewähltes Rezept erkennen
- passende Daten einblenden
- statische Platzhalter durch echte Inhalte ersetzen

## Was wird für die nächste Abgabe konkret als Erstes umgesetzt?

Für die nächste Abgabe mit einer einzelnen Datei `app.js` bietet sich am besten
eine Such- und Filterfunktion auf der Startseite an.

## Was soll diese erste App-Version tun?

Die erste JavaScript-Version soll:

- einen Suchbegriff aus dem Suchfeld lesen
- die ausgewählte Kategorie lesen
- die ausgewählte Schwierigkeit lesen
- die Favoriten-Checkbox auswerten
- alle Rezeptkarten mit diesen Eingaben vergleichen
- passende Karten sichtbar lassen
- unpassende Karten ausblenden

## Wie wird diese erste App-Version bedient?

Die Bedienung erfolgt direkt auf der Startseite:

1. Die Person gibt einen Suchbegriff ein oder wählt Filter aus.
2. JavaScript reagiert auf diese Eingaben.
3. Die Rezeptkarten werden automatisch geprüft.
4. Nur die passenden Karten bleiben sichtbar.

## Warum ist diese erste Lösung gut geeignet?

Diese Lösung ist für die Abgabe besonders passend, weil sie:

- direkt zum Projektthema passt
- nicht zu simpel ist
- ohne Frameworks mit Vanilla JavaScript umsetzbar ist
- sich wahrscheinlich in einer Datei `app.js` mit überschaubarem Umfang lösen lässt
- sich in der Präsentation gut erklären lässt

## Geplanter technischer Rahmen für die erste Umsetzung

- eine Datei `app.js`
- Einbindung in `index.html`
- keine Frameworks
- Nutzung von DOM-Auswahl, Event-Listenern und Bedingungen

## Was bewusst noch nicht Teil dieser ersten App-Version ist

- lokale Datenspeicherung
- Formularverarbeitung für neue Rezepte
- automatische Detailseiten-Befüllung
- Backend oder Benutzerkonten

Damit bleibt die erste JavaScript-Erweiterung bewusst klein und gut
beherrschbar, ist aber trotzdem inhaltlich sinnvoll und passend zur Website.
