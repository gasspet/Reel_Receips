# Journal

## 2026-05-14 00:00 - Umsetzung

Festgehalten:

- `js/app.js` übernimmt jetzt Suche und Filterung auf der Startseite
- die Logik liest nur vorhandene HTML-Inhalte aus und benötigt weder Speicherung noch Backend
- ein eigenes Tutorial wurde ergänzt, das den JavaScript-Code Zeile für Zeile erklärt

Nächster sinnvoller Schritt:

- das Verhalten manuell im Browser testen
- Formulierungen und Kommentare für die Präsentation weiter schärfen

## 2026-05-14 00:00 - Umsetzung

Die statische Rezept-Navigation wurde ohne zusätzliches JavaScript verbessert.

Festgehalten:

- jede Rezeptkarte verlinkt jetzt auf eine passende eigene Detailseite
- das Verhalten der Detailansicht passt nun zum jeweils angeklickten Rezept
- dadurch bleibt die Struktur einfach, während sich JavaScript auf Suche und Filter konzentriert

Nächster sinnvoller Schritt:

- die Links manuell im Browser testen
- die Materialien für die JavaScript-Präsentation weiter verfeinern

## 2026-05-15 00:00 - Umsetzung

Die erste JavaScript-Funktion wurde um eine Meldung für leere Trefferlisten erweitert.

Festgehalten:

- die Startseite enthält jetzt eine versteckte Fallback-Meldung für leere Filterergebnisse
- `app.js` zählt nun sichtbare Karten und blendet die Meldung ein, wenn nichts mehr passt
- das JavaScript-Tutorial wurde erweitert, damit auch die neuen Zeilen gut erklärbar bleiben

Nächster sinnvoller Schritt:

- verschiedene Such- und Filterkombinationen im Browser testen
- prüfen, ob die Meldung korrekt erscheint und wieder verschwindet

## 2026-05-15 00:00 - Dokumentation

Der `docs/`-Ordner wurde bereinigt und doppelte Inhalte wurden zusammengeführt.

Festgehalten:

- `data.md` enthält jetzt auch die zuvor separat notierten Informationen zur geplanten Datenstruktur
- `visual-design.md` enthält die relevanten Gestaltungsentscheidungen aus der älteren Design-Datei
- `app-concept.md` enthält zusätzlich die technische Vorbereitung und die Mini-Planung der ersten JavaScript-Funktion

Nächster sinnvoller Schritt:

- die verbliebenen Dokumente regelmäßig knapp halten
- neue Inhalte nur noch in den jeweils passenden Kerndateien ergänzen

## 2026-06-16 00:00 - Planung

Die endgültige Seitenstruktur für die dynamische Version wurde festgelegt.

Festgehalten:

- die spätere App soll mit `index.html`, `rezept.html`, `hinzufuegen.html` und `imprint.html` arbeiten
- `rezept.html` soll als allgemeine Detailseite über eine Rezept-ID in der URL funktionieren
- die bisherigen einzelnen Rezept-HTML-Dateien werden erst entfernt, wenn die dynamische Datenlogik stabil läuft

Nächster sinnvoller Schritt:

- das Rezept-Datenmodell für `IndexedDB` endgültig festlegen
- danach die Datenbankfunktionen und die Speicherlogik schrittweise umsetzen

## 2026-06-16 00:00 - Planung

Das endgültige Rezept-Datenmodell für `IndexedDB` wurde festgelegt.

Festgehalten:

- jedes Rezept bekommt eine feste Objektstruktur mit ID, Metadaten, Zutaten, Zubereitung und Favoritenstatus
- `ingredients` wird als Array strukturierter Objekte gespeichert
- `recipes` soll als zentraler Object Store in `IndexedDB` dienen

Nächster sinnvoller Schritt:

- Datenbankfunktionen zum Öffnen, Speichern und Laden aufbauen
- danach zuerst das Formular an die neue Datenstruktur anbinden

## 2026-06-16 00:00 - Umsetzung

Die grundlegende `IndexedDB`-Datei wurde angelegt.

Festgehalten:

- `js/db.js` enthält jetzt Funktionen zum Öffnen der Datenbank sowie zum Speichern und Laden von Rezepten
- die Datenbank verwendet den Store `recipes` mit `id` als Schlüssel
- `db.js` wurde in `index.html`, `hinzufuegen.html` und `rezept.html` eingebunden
- ein eigenes Tutorial für die Datenbanklogik wurde ergänzt

Nächster sinnvoller Schritt:

- das Formular mit `saveRecipe(...)` verbinden
- danach die Startseite aus gespeicherten Rezepten dynamisch aufbauen

## 2026-06-16 00:00 - Umsetzung

Das Formular zum Hinzufügen neuer Rezepte wurde an `IndexedDB` angebunden.

Festgehalten:

- `hinzufuegen.html` enthält jetzt IDs, Pflichtfelder, Tags, Bild-Upload und Favoritenauswahl
- `js/add-recipe.js` liest das Formular aus, bereitet Zutaten und Tags auf und speichert Rezepte lokal
- nach dem Speichern erscheint eine sichtbare Statusmeldung im Formular
- ein eigenes Tutorial für die Formularlogik wurde ergänzt

Nächster sinnvoller Schritt:

- gespeicherte Rezepte auf `index.html` dynamisch laden und anzeigen
- danach die Detailseite über die Rezept-ID mit echten Daten füllen

## 2026-06-16 00:00 - Umsetzung

Die Startseite lädt jetzt zusätzlich gespeicherte Rezepte aus `IndexedDB`.

Festgehalten:

- `index.html` besitzt nun einen klaren Container für die Rezeptkarten
- `js/app.js` rendert gespeicherte Rezepte als neue Karten auf der Startseite
- die Suche und Filterung bezieht jetzt sowohl feste Beispielkarten als auch gespeicherte Rezepte ein
- das Tutorial zu `app.js` wurde auf die neue dynamische Logik aktualisiert

Nächster sinnvoller Schritt:

- die Detailseite über die Rezept-ID mit echten Rezeptdaten verbinden
- danach die alten statischen Einzelrezeptseiten schrittweise ersetzen

## 2026-06-16 00:00 - Umsetzung

Die Seitenstruktur von Startseite, Suche und Rezeptübersicht wurde umgebaut.

Festgehalten:

- `index.html` ist jetzt eine ruhigere Startseite mit kleinem Suchfeld im Header und kompakter Vorschau nach Kategorien
- `rezepte.html` wurde als eigene Übersichtsseite für alle Rezepte angelegt
- `suche.html` wurde als eigene Seite für Freitextsuche und Filter angelegt
- die Navigation wurde auf `Startseite`, `Rezepte`, `Suchen`, `Rezept hinzufügen` und `Impressum` umgestellt
- die Rezeptdarstellung wurde in gemeinsame JavaScript-Dateien aufgeteilt, damit Startseite, Suche und Übersicht dieselbe Datenbasis nutzen

Nächster sinnvoller Schritt:

- das Verhalten der neuen Seiten im Browser gründlich testen
- danach die verbleibenden alten Einzelrezeptseiten endgültig aus dem Projekt entfernen

## 2026-06-16 00:00 - Umsetzung

Die Detailseite lädt jetzt das jeweils angeklickte Rezept.

Festgehalten:

- die Links auf der Startseite verweisen jetzt auf `rezept.html` mit einer Rezept-ID
- `js/recipe-detail.js` liest die ID aus der URL und lädt passende Rezeptdaten
- Beispielrezepte und selbst gespeicherte Rezepte werden beide unterstützt
- ein eigenes Tutorial für die Detailansicht wurde ergänzt

Nächster sinnvoller Schritt:

- die alten einzelnen Rezeptseiten endgültig überflüssig machen
- danach die Startseite vollständig auf dynamische Daten umstellen

## 2026-06-16 00:00 - Planung

Die Seitenstruktur für Startseite und Suche wurde neu ausgerichtet.

Festgehalten:

- die große Suchsektion soll von der Startseite auf eine eigene `suche.html` umziehen
- im Header der Startseite soll ein kleines Suchfeld als Einstieg zur Suchseite erscheinen
- die Startseite soll kompakter werden und Rezepte bereits nach Kategorien gegliedert zeigen
- die Suchseite soll später der zentrale Ort für Freitextsuche und Filter sein
- `Rezeptdetail` soll aus der Hauptnavigation verschwinden und durch `Rezepte` als Übersichtsseite ersetzt werden

Nächster sinnvoller Schritt:

- `index.html`, `rezepte.html` und `suche.html` strukturell umbauen
- danach die bestehende Suchlogik technisch auf die neue Suchseite verschieben

## 2026-06-16 00:00 - Umsetzung

Die Detailansicht und das Formular für eigene Rezepte wurden weiter verbessert.

Festgehalten:

- die Notiz wird auf der Rezeptdetailseite nicht mehr zusätzlich angezeigt
- Zeilenumbrüche in der Zubereitung bleiben jetzt sichtbar, damit Absätze aus dem Formular erhalten bleiben
- selbst gespeicherte Rezepte können auf der Detailseite nun über einen Bearbeiten-Button erneut geöffnet werden
- `hinzufuegen.html` kann dadurch sowohl neue Rezepte anlegen als auch bestehende Rezepte aktualisieren

Nächster sinnvoller Schritt:

- das Bearbeiten im Browser einmal vollständig durchklicken
- danach die Suche und Rezeptübersicht mit mehreren selbst angelegten Rezepten weiter testen

## 2026-06-16 00:00 - Umsetzung

Die bisherigen Beispielrezepte wurden als lokale Startdaten und mit Beispielbildern ausgebaut.

Festgehalten:

- die bisherigen Einzelrezepte sind jetzt inhaltlich als strukturierte Startrezepte in JavaScript hinterlegt
- beim Laden werden diese Rezepte automatisch in `IndexedDB` übernommen, damit sie wie normale gespeicherte Rezepte behandelt werden
- die Rezeptkarten und Detailseiten verwenden nun lokale Beispielbilder aus dem Projektordner
- dadurch ist die App auch ohne Internet mit mehreren vorbefüllten Rezepten nutzbar

Nächster sinnvoller Schritt:

- im Browser prüfen, ob die Bilder auf Startseite, Suche, Übersicht und Detailseite überall sichtbar sind
- danach entscheiden, ob die alten einzelnen Rezept-HTML-Dateien archiviert oder später ganz entfernt werden sollen

## 2026-06-18 00:00 - Umsetzung

Die alten Einzel-HTML-Dateien der Beispielrezepte wurden aus dem Projekt entfernt.

Festgehalten:

- die früheren statischen Detailseiten pro Rezept werden nicht mehr benötigt
- die Rezeptdaten kommen jetzt vollständig aus den strukturierten JavaScript-Startdaten und aus `IndexedDB`
- dadurch ist die Projektstruktur klarer und es gibt keine doppelte Pflege von Rezeptinhalten mehr

Nächster sinnvoller Schritt:

- im Browser prüfen, ob alle Rezeptkarten weiterhin auf `rezept.html?id=...` führen
- danach bei Bedarf die README noch um einen kurzen Hinweis zur dynamischen Detailseite ergänzen

## 2026-06-18 00:00 - Umsetzung

Das visuelle Erscheinungsbild wurde in Richtung eines verspielteren Food-Looks weiterentwickelt.

Festgehalten:

- die Farbwelt wurde wärmer, heller und stärker an Food-Illustrationen orientiert
- Karten, Buttons und Panels haben weichere Formen und lebendigere Hover-Zustände bekommen
- dekorative Hintergründe und kleine visuelle Akzente machen die Seite weniger technisch und freundlicher

Nächster sinnvoller Schritt:

- im Browser prüfen, ob der neue Look auf Desktop und mobil gleichermaßen gut funktioniert
- danach bei Bedarf einzelne Farben oder Hover-Effekte noch feiner abstimmen

## 2026-06-18 00:00 - Umsetzung

Die Detailseite wurde um einen einfachen Portionsrechner erweitert.

Festgehalten:

- alle bisherigen Rezepte werden standardmäßig als Rezepte für 2 Personen behandelt
- auf der Detailseite kann die Personenanzahl jetzt verändert werden
- die Zutatenmengen werden dabei direkt neu berechnet, sofern eine numerische Menge vorliegt

Nächster sinnvoller Schritt:

- im Browser prüfen, ob die Umrechnung bei verschiedenen Rezepten sinnvoll aussieht
- danach kann bei Bedarf später noch ein eigenes Eingabefeld für Portionen im Formular ergänzt werden

## 2026-06-18 00:00 - Umsetzung

HTML, Accessibility und Dokumentation wurden für die Abgabe überarbeitet.

Festgehalten:

- sichtbare Text- und Umlautfehler in zentralen HTML- und JavaScript-Dateien wurden bereinigt
- die Seiten besitzen jetzt einen Skip-Link, klarere Fokuszustände und `aria-current` in der Navigation
- README sowie die wichtigsten Dokumentationsdateien wurden auf den aktuellen Projektstand gekürzt und aktualisiert

Nächster sinnvoller Schritt:

- die Seiten einmal mit WAVE und dem W3C Validator prüfen
- danach die finale Browserkontrolle für die Präsentation machen
