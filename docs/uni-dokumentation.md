# Uni-Dokumentation

## Ziel dieser Datei

Diese Datei erklaert Schritt fur Schritt, was wir im Projekt machen, warum wir es machen und was die einzelnen Code-Teile bedeuten.

Sie dient als einfache Begleitdokumentation fuer die Uni.

## Projektidee

Das Projekt ist eine Rezept-Web-App.

Die Idee ist:

- Social-Media-Rezepte entdecken
- wichtige Informationen in einer eigenen App sammeln
- Rezepte spaeter leichter wiederfinden

Beispiele fuer spaetere Suchkriterien:

- Zutaten
- Kategorie
- Schwierigkeit
- Favoriten

## Warum wir zuerst nur HTML und CSS verwenden

HTML und CSS sind die Grundlage einer Webseite.

Wir starten damit, weil wir zuerst die sichtbare Struktur verstehen und aufbauen wollen.

Das ist fuer die Uni sinnvoll, weil man dadurch sauber erklaeren kann:

- welche Bereiche die App hat
- wie die Seite aufgebaut ist
- wie Nutzer durch die App gefuehrt werden

JavaScript kommt spaeter dazu, wenn die Struktur bereits steht.

## Aufgabe von HTML

HTML bildet das Grundgeruest der Seite.

Mit HTML bauen wir Inhalte wie:

- Ueberschriften
- Texte
- Buttons
- Suchfelder
- Filterbereiche
- Rezeptkarten
- Formulare

HTML beantwortet also die Frage:

**Was ist auf der Seite vorhanden?**

## Aufgabe von CSS

CSS gestaltet das Aussehen dieser Inhalte.

Mit CSS legen wir fest:

- Farben
- Schriftgroessen
- Abstaende
- Breiten
- Kartenlayout
- responsive Darstellung

CSS beantwortet also die Frage:

**Wie sieht die Seite aus?**

## Warum noch kein JavaScript

JavaScript ist fuer Verhalten und Interaktivitaet zustaendig.

Zum Beispiel:

- speichern
- suchen
- filtern
- favorisieren

Wenn wir sofort damit anfangen, wird das Projekt schnell unuebersichtlich.

Darum bauen wir zuerst die sichtbare Huelle der App.

## Unser aktueller Projektstand

Wir befinden uns in einer fruehen Entwurfsphase.

Das bedeutet:

- die Idee der App ist dokumentiert
- die wichtigsten Funktionen sind festgelegt
- jetzt wird zuerst ein statischer Prototyp gebaut

## Was ein statischer Prototyp ist

Ein statischer Prototyp sieht schon wie eine richtige App aus, funktioniert aber noch nicht vollstaendig.

Er zeigt:

- Aufbau
- Design
- Navigation
- Anordnung der Inhalte

Er speichert aber noch nichts.

## Welche Dateien wir zuerst brauchen

### `index.html`

Das ist die Hauptseite.

Dort sollen zunaechst diese Bereiche vorkommen:

- Kopfbereich mit Titel
- kurze Einfuehrung
- Suchleiste
- Filterbereich
- Bereich mit Rezeptkarten
- Button zum Hinzufuegen eines neuen Rezepts

### `style.css`

Diese Datei gestaltet die Hauptseite.

Dort werden zum Beispiel festgelegt:

- Hintergrundfarben
- Kartenstil
- Schriftarten
- Abstaende
- Darstellung auf Handy und Desktop

## Der naechste Schritt

Der naechste Schritt ist:

1. `index.html` anlegen
2. die wichtigsten App-Bereiche in HTML aufbauen
3. `style.css` anlegen
4. die Seite optisch gestalten

## Warum genau dieser Schritt logisch ist

Bevor eine App Daten speichern oder filtern kann, muss erst sichtbar sein:

- wo Inhalte stehen
- welche Elemente es gibt
- wie Nutzer die Seite bedienen sollen

Deshalb ist die Reihenfolge:

1. Struktur
2. Gestaltung
3. Verhalten

## Was spaeter dazukommt

Wenn der HTML/CSS-Prototyp fertig ist, folgt spaeter:

- JavaScript fuer Interaktivitaet
- lokale Speicherung
- echte Such- und Filterfunktion
- PWA-Funktionen

## Mehrere HTML-Seiten statt nur einer Startseite

Im Projekt gibt es jetzt nicht mehr nur eine einzelne Startseite.

Stattdessen wird die Struktur in mehrere HTML-Seiten aufgeteilt:

- `index.html` fÃ¼r die Startseite
- `rezept.html` fuer die Detailansicht
- `hinzufuegen.html` fÃ¼r das Formular

Das ist fÃ¼r den aktuellen Projektstand sehr sinnvoll, weil man damit die Navigation einer Web-App schon frÃ¼h zeigen kann, ohne JavaScript zu brauchen.

## Warum mehrere Seiten hilfreich sind

Mehrere Seiten helfen dabei, den Aufbau einer App klarer zu erklÃ¤ren.

Jede Seite hat dann eine eindeutige Aufgabe:

- Startseite zeigen
- Details anzeigen
- neue Inhalte erfassen

So ist die Struktur leichter verstÃ¤ndlich als eine einzige sehr lange Startseite.

## Wie die Seiten verbunden sind

Die Verbindung zwischen den Seiten geschieht im Moment Ã¼ber normale HTML-Links.

Das bedeutet:

- Ein Klick auf ein Rezept kann zur Detailseite fuehren
- Ein Klick auf "Rezept hinzufÃ¼gen" kann zur Formularseite fÃ¼hren
- Ein Klick auf "ZurÃ¼ck" fÃ¼hrt wieder zur Startseite

## Was die neue Detailseite zeigt

Die Datei `rezept.html` zeigt eine typische Detailansicht einer Web-App.

Dort werden alle Informationen zu genau einem Rezept gesammelt angezeigt:

- Titel
- Bildbereich
- Erstellerprofil
- Kategorie und Schwierigkeit
- Zutaten
- Zubereitung
- Notizen
- Link zur Quelle

## Was die Formularseite zeigt

Die Datei `hinzufuegen.html` zeigt die Eingabeseite fÃ¼r neue Rezepte.

Auch diese Seite ist im Moment noch statisch.

Sie dient dazu, den Formularaufbau und die geplanten Eingabefelder sichtbar zu machen.

## Einheitliche Navigation auf allen Seiten

Damit die Website wie eine zusammenhaengende Anwendung wirkt, wurde auf allen Seiten eine gemeinsame Navigation eingebaut.

Diese Navigation enthaelt Links zu:

- der Startseite
- der Rezeptdetailseite
- der Seite zum HinzufÃ¼gen eines Rezepts

## Warum die Navigation wichtig ist

Eine Navigation hilft Nutzerinnen und Nutzern dabei:

- sich auf der Website zu orientieren
- zwischen Bereichen zu wechseln
- die Struktur der Anwendung zu verstehen

Auch fÃ¼r die Uni ist das wichtig, weil man daran gut erklÃ¤ren kann, wie mehrere HTML-Seiten logisch verbunden werden.

## Technisch einfach erklaert

Die Navigation besteht aus normalen HTML-Links.

Jeder Link verweist auf eine andere HTML-Datei.

Dadurch ist die Website schon jetzt navigierbar, obwohl noch kein JavaScript verwendet wird.

## Merksatz

Zuerst bauen wir die sichtbare Form der App.

Danach geben wir ihr Schritt fuer Schritt echtes Verhalten.

## Was wir jetzt konkret erstellt haben

Im Projekt wurden jetzt zwei erste Dateien angelegt:

- `index.html`
- `css/style.css`

Diese beiden Dateien bilden zusammen die erste sichtbare Version der App.

Zusaetzlich wurde ein vorhandenes Logo in die Startseite eingebunden:

- `Logo_Reel_Recipes.png`

## Erklaerung von `index.html`

### Kopfbereich (`head`)

Im oberen Bereich der HTML-Datei stehen allgemeine Informationen ueber die Seite.

Dazu gehoeren:

- die Sprache der Seite
- die Zeichenkodierung
- der Titel im Browser-Tab
- die Verknuepfung mit der CSS-Datei

Die Zeile mit dem Stylesheet sorgt dafuer, dass das Aussehen aus `css/style.css` geladen wird.

### Hero-Bereich (`header`)

Der Header ist der erste sichtbare Bereich der Startseite.

Er hat in unserem Projekt diese Aufgaben:

- den Titel der App zeigen
- das Logo der App zeigen
- kurz erklaeren, worum es geht
- die wichtigsten Aktionen sichtbar machen

Dieser Bereich ist wichtig, weil Nutzer dort sofort verstehen sollen, was die App macht.

### Such- und Filterbereich

Danach folgt ein Bereich mit:

- einem Suchfeld
- einer Auswahl fuer Kategorien
- einer Auswahl fuer Schwierigkeit
- einer Checkbox fuer Favoriten

Wichtig:

Diese Elemente sehen schon wie echte Funktionen aus, arbeiten aber noch nicht. Sie sind im Moment nur Teil des statischen Prototyps.

### Rezeptkarten

Im Bereich der Rezeptkarten werden Beispielrezepte angezeigt.

Jede Karte enthaelt:

- einen visuellen Bildbereich
- den Namen des Creators
- den Rezepttitel
- Kategorie und Schwierigkeit
- kurze Beschreibung
- Tags

So laesst sich spaeter gut erklaeren, wie Rezepte in der App dargestellt werden sollen.

### Formularbereich

Am Ende der Seite gibt es ein Beispiel-Formular.

Dieses Formular zeigt bereits, welche Eingaben spaeter moeglich sein sollen:

- Instagram-Link
- Titel
- Creator
- Kategorie
- Schwierigkeit
- Zutaten
- Zubereitung
- Notizen

Auch dieses Formular ist im Moment nur optisch vorhanden und speichert noch nichts.

## Erklaerung von `css/style.css`

### Farben und Variablen

Am Anfang der CSS-Datei stehen Farbwerte und weitere Grundeinstellungen in sogenannten Variablen.

Der Vorteil ist:

- Farben muessen nicht immer neu geschrieben werden
- das Design bleibt einheitlich
- spaetere Aenderungen sind einfacher

### Allgemeine Gestaltung

Danach werden grundlegende Dinge festgelegt, zum Beispiel:

- Schriftart
- Hintergrund
- Groessenverhalten
- Abstaende

Diese Regeln gelten fuer viele Teile der Seite gleichzeitig.

### Gestaltung einzelner Bereiche

Danach folgen genauere Regeln fuer:

- den Header
- Buttons
- Karten
- Formulare
- Tags

So bekommt jeder Bereich sein eigenes Aussehen.

### Responsive Design

Am Ende der CSS-Datei stehen Media Queries.

Sie sorgen dafuer, dass das Layout sich an verschiedene Bildschirmgroessen anpasst.

Das ist wichtig, weil die Seite sowohl auf dem Handy als auch auf groesseren Bildschirmen lesbar bleiben soll.

## Warum diese Umsetzung fuer die Uni gut ist

Mit dieser ersten Version kann man bereits gut zeigen:

- wie eine Web-App strukturiert wird
- welche Aufgabe HTML hat
- welche Aufgabe CSS hat
- wie aus einer Idee Schritt fuer Schritt eine Anwendung entsteht

Die technische Komplexitaet bleibt dabei zuerst bewusst niedrig.

## Was beim Branding angepasst wurde

Die Seite wurde anschliessend staerker an das Logo von Reel Recipes angepasst.

Dabei wurden vor allem drei Dinge abgestimmt:

- der Name der Website
- die Farben
- die Wirkung des Kopfbereichs

### Farbkonzept

Die Farben orientieren sich jetzt staerker am Logo:

- Orange fuer wichtige Aktionen
- Blau-Petrol fuer Ueberschriften und Markenwirkung
- Gruen als frischer Akzent

Das ist sinnvoll, weil so Logo und Website wie ein gemeinsames Produkt wirken.

### Logo im Header

Das Logo wurde im oberen Bereich der Seite eingebunden.

Dadurch erkennen Nutzer sofort:

- wie die App heisst
- welche Marke zur Seite gehoert

Spaeter wurde das Logo nochmals ueberarbeitet, damit es sich besser an den Hintergrund anpasst.

Dabei wurde:

- eine Version mit transparentem Hintergrund verwendet
- die sichtbare weisse Flaeche um das Logo entfernt
- der vorherige weisse Kasten im Header wieder entfernt

Das ist wichtig, weil ein Logo mit transparentem Hintergrund auf einer Website meist natuerlicher wirkt als ein Bild mit sichtbarem weissem Rand.

### Warum das wichtig ist

Ein einheitliches Erscheinungsbild nennt man visuelle Identitaet.

Das ist fuer Webprojekte wichtig, weil dadurch:

- die Seite professioneller wirkt
- der Wiedererkennungswert steigt
- Designentscheidungen besser begruendet werden koennen

