# Reel Recipes

Reel Recipes ist eine lokale Rezept-Web-App für Social-Media-Rezepte. Die Website speichert Rezepte im Browser, zeigt sie in einer Übersicht an und bietet Suche, Filter, Bearbeitung, eine dynamische Detailseite und eine installierbare PWA-Grundlage.

## Projektidee

Die App soll dabei helfen, Rezepte aus Social Media nicht mehr in Feeds zu verlieren. Statt nur einen Link zu speichern, können die Rezepte als strukturierte Einträge mit Bild, Zutaten, Zubereitung, Kategorien, Tags und Notizen gesammelt werden.

## Funktionen

- Rezepte lokal in `IndexedDB` speichern
- neue Rezepte manuell mit Link, Bild, Zutaten, Portionen und Notizen anlegen
- bestehende Rezepte bearbeiten
- Rezeptübersicht nach Kategorien anzeigen und filtern
- freie Suche nach Titel, Zutaten, Tags und Notizen
- Detailseite mit Zutaten-Checkliste und Portionsrechner
- Startseite mit `Rezept des Tages`
- installierbare PWA mit Manifest und Service Worker
- Android-PWA kann geteilte Links direkt im Formular übernehmen

## Projektstruktur

```text
index.html
rezepte.html
suche.html
hinzufuegen.html
rezept.html
imprint.html
manifest.webmanifest
service-worker.js
css/style.css
js/
data/
docs/
tutorial/
```

## Lokal öffnen

1. Projektordner in VS Code oder im Dateisystem öffnen.
2. Für normales HTML/CSS/JavaScript kann `index.html` direkt im Browser geöffnet werden.
3. Für PWA-Funktionen wie Installation und Service Worker sollte die Seite über Live Server oder später über GitHub Pages laufen.

## Technischer Stand

- semantisches HTML mit `header`, `nav`, `main`, `section` und `footer`
- responsives CSS mit Mobile-First-Grundlage
- Vanilla JavaScript ohne Framework
- lokale Datenspeicherung in `IndexedDB`
- `manifest.webmanifest` und `service-worker.js` für die PWA
- `share_target` im Manifest für das Teilen von Links in die installierte App
- kein Backend und keine Benutzerkonten

## Bedienung

- Über `Rezept hinzufügen` kann ein neues Rezept angelegt werden.
- Über `Rezepte` gelangt man zur vollständigen Übersicht.
- Das Suchfeld im Header und die Seite `suche.html` helfen beim Filtern der Sammlung.
- Auf der Detailseite lassen sich Zutaten abhaken und Portionen anpassen.
- In unterstützten Browsern kann ein geteilter Link direkt in die installierte PWA übernommen werden.

## Quellen und Hinweise

- Das Logo liegt im Ordner `data/`.
- Die Rezept-Beispielbilder in `data/recipe-images/` sind KI-generiert.
- Alle selbst angelegten Rezepte werden nur lokal im Browser gespeichert.
- Diese lokalen Browserdaten werden nicht automatisch mit auf GitHub hochgeladen.
- Die Share-Target-Funktion ist browser- und plattformabhängig und funktioniert vor allem auf Android mit installierter PWA.

## Lizenzhinweis

Für die Lehrveranstaltung ist aktuell noch keine separate Open-Source-Lizenz ergänzt. Falls das Repository später öffentlich weiterverwendet wird, sollte eine passende Lizenz ergänzt werden.
