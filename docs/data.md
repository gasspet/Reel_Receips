# Data

## Projektmaterialien

Das Projekt arbeitet in Milestone 2 noch nicht mit einer echten Datenbank.
Trotzdem gibt es bereits Materialien und Inhaltsbausteine, die fuer den
Prototyp und spaeter fuer die Web-App wichtig sind.

## Aktuell vorhandene Materialien

| Material | Format | Zweck |
|---|---|---|
| App-Logo `Logo_Reel_Receips.png` | PNG | Markenauftritt der Website |
| Freigestelltes Logo `Logo_Reel_Receips_transparent.png` | PNG | Einbindung ohne weissen Rand im Header |
| Beispiel-Rezepttexte in HTML | HTML-Inhalt | Platzhalter fuer Titel, Zutaten, Notizen und Metadaten |
| Kategorien und Schwierigkeitsgrade | Textwerte | Inhalt fuer Filter, Formular und Karten |

## Aktuelle Datenstruktur im Prototyp

Die inhaltlichen Daten liegen momentan direkt als statische Inhalte in den
HTML-Dateien vor.

Beispiele:

- Rezepttitel
- Erstellerprofil
- Kategorie
- Schwierigkeit
- Zutatenliste
- Notizen

## Geplante Datenstruktur fuer spaeter

Spaeter sollen die Rezeptdaten in strukturierter Form gespeichert werden,
voraussichtlich lokal im Browser.

Geplante Felder:

- `id`
- `title`
- `sourceUrl`
- `creator`
- `categories`
- `difficulty`
- `ingredients`
- `stepsText`
- `notes`
- `favorite`

## Was fuer die Website schon vorhanden ist

- visuelle Beispielinhalte fuer drei Rezepte
- ein Formular fuer neue Eingaben
- eine Detailansicht fuer ein einzelnes Rezept
- zwei Logo-Dateien fuer die Gestaltung

## Was noch fehlt

- echte strukturierte Rezeptdaten als JSON oder spaetere Browser-Speicherung
- mehrere echte Rezeptdatensaetze
- JavaScript fuer Speichern, Suchen und Filtern

## Aktuelle Ablage

Die statischen Projektmaterialien liegen derzeit in:

- `data/` fuer Materialhinweise und Assets
- den HTML-Dateien fuer Textinhalte des Prototyps
