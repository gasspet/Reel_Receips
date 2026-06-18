# Reel Recipes

Reel Recipes ist eine lokale Rezept-Web-App für Social-Media-Rezepte. Die Website speichert Rezepte im Browser, zeigt sie in einer Übersicht an und bietet Suche, Filter, Bearbeitung und eine dynamische Detailseite.

## Funktionen

- Rezepte lokal in `IndexedDB` speichern
- neue Rezepte mit Link, Bild, Zutaten, Portionen und Notizen anlegen
- bestehende Rezepte bearbeiten
- Rezeptübersicht nach Kategorien anzeigen und filtern
- freie Suche nach Titel, Zutaten, Tags und Notizen
- Detailseite mit Zutaten-Checkliste und Portionsrechner

## Projektstruktur

```text
index.html
rezepte.html
suche.html
hinzufuegen.html
rezept.html
imprint.html
css/style.css
js/
data/
docs/
tutorial/
```

## Lokal öffnen

1. Projektordner in VS Code oder im Dateisystem öffnen.
2. `index.html` direkt im Browser öffnen oder mit Live Server starten.

## Technischer Stand

- HTML mit semantischer Seitenstruktur
- CSS mit responsive Layout und Mobile-First-Grundlage
- Vanilla JavaScript
- lokale Datenspeicherung in `IndexedDB`
- kein Backend, keine Benutzerkonten

## Bedienung

- Über `Rezept hinzufügen` kann ein neues Rezept angelegt werden.
- Über `Rezepte` gelangt man zur vollständigen Übersicht.
- Über `Suchen` kann nach Begriffen, Kategorien, Schwierigkeit und Favoriten gefiltert werden.
- Auf der Detailseite lassen sich Zutaten abhaken und Portionen anpassen.

## Quellen und Hinweise

- Das Logo liegt im Projektordner `data/`.
- Die verwendeten Rezept-Beispielbilder in `data/recipe-images/` sind KI-generiert.
- Alle Rezepte werden nur lokal im Browser gespeichert.

## Lizenzhinweis

Für die Lehrveranstaltung ist aktuell noch keine separate Open-Source-Lizenz ergänzt. Falls das Repository später öffentlich weiterverwendet wird, sollte eine passende Lizenz ergänzt werden.
