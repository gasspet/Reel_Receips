# Visual Design

## Gestaltungsziel

Die Website soll wie eine freundliche, verspielte Food-App wirken: warm, einladend, gut lesbar und trotzdem klar strukturiert. Die Oberfläche soll mehr nach App als nach technischer Übungsseite aussehen.

## Aktuelle Designrichtung

- warmer Hintergrund mit hellen Food-Farben
- runde Karten, Buttons und Panels
- weiche Verläufe und leichte Schatten
- freundliche, lebendige Details ohne unruhig zu wirken

## Farbwelt

| Farbe | Rolle |
|---|---|
| Orange | Hauptaktionen, Buttons, wichtige Akzente |
| Rosé | kleine Hervorhebungen und Oberzeilen |
| Grün | frische Food-Akzente |
| Creme und Weiß | Flächen, Karten und Formularbereiche |
| Dunkles Braun | Fließtext und Kontrast |

## Aufbau der Seiten

### Startseite

- Hero-Bereich mit Logo, Titel und Hauptaktionen
- Bereich `Rezept des Tages`
- Schnellzugriff auf wichtige Einstiege
- kompakte Vorschau nach Kategorien

### Rezeptübersicht

- vollständige Sammlung
- Gruppierung nach Kategorien
- Filter-Buttons für schnelle Orientierung

### Suche

- eigenes Suchlayout
- kompakte Ergebnisse
- sichtbare Trefferzahl

### Detailseite

- großes Bild und Metadaten
- Zutaten-Checkliste
- Portionsrechner
- Zubereitung und Notizen

### Formularseite

- klar gegliedertes Formular
- Fokus auf gute Lesbarkeit und verständliche Eingabe

## Responsive Verhalten

- Mobile First als Grundlage
- mehrere Breakpoints für Karten, Formulare und Detailbereiche
- Header mit Suchfeld auch auf kleinen Breiten nutzbar

## Accessibility-Entscheidungen

- sichtbare Fokuszustände für Links, Buttons und Formulare
- Skip-Link `Zum Inhalt springen`
- semantische Hauptbereiche mit `header`, `nav`, `main` und `footer`
- aktive Navigation mit `aria-current="page"`
- bessere Kontraste nach WAVE-Prüfung

## PWA-Bezug

- App-Icons in `data/icons/`
- warme Theme-Farbe passend zum Design
- die Website soll auch als installierte App freundlich und kompakt wirken
