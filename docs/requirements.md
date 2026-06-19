# Requirements

## Projektziel

Reel Recipes soll Social-Media-Rezepte in eine übersichtliche, lokale Rezeptsammlung verwandeln. Nutzerinnen und Nutzer sollen Rezepte schnell speichern, wiederfinden, organisieren und auf dem eigenen Gerät weiterverwenden können.

## Muss-Kriterien

- Die Website besitzt eine Startseite, eine Rezeptübersicht, eine Suchseite, eine Formularseite und eine Detailseite.
- Neue Rezepte können manuell angelegt werden.
- Ein Rezept enthält mindestens Titel, Quelle, Erstellerprofil, Bild, Portionen, Kategorie, Schwierigkeit, Zutaten, Zubereitung, Tags, Notizen und Favoritenstatus.
- Rezepte werden lokal im Browser in `IndexedDB` gespeichert.
- Gespeicherte Rezepte können bearbeitet werden.
- Rezepte können über freie Textsuche gefunden werden.
- Rezepte können nach Kategorie, Schwierigkeit und Favoritenstatus gefiltert werden.
- Die Detailseite zeigt Zutaten, Zubereitung, Notizen und Metadaten eines einzelnen Rezepts.
- Auf der Detailseite gibt es eine Zutaten-Checkliste.
- Auf der Detailseite gibt es einen Portionsrechner.
- Die Website ist responsiv und auf Mobilgeräten nutzbar.
- Die Website ist als PWA installierbar.
- In unterstützten Umgebungen kann ein geteilter Link direkt in die installierte PWA übernommen werden.

## Nice-to-have

- Ein `Rezept des Tages` auf der Startseite
- Bilder für alle Beispielrezepte
- Offline-Grundlage über Service Worker
- direkter Einstieg über das Suchfeld im Header
- Teilen eines Links aus Social Media direkt in die App

## Bewusst nicht Teil von V1

- Backend
- Benutzerkonten
- geräteübergreifende Synchronisierung
- Teilen von Rezepten
- Bewertungssystem
- Wochenplaner
- Einkaufsliste
- automatisches Auslesen von Instagram-Inhalten
- Browser-Extension

## Zielgruppenbezug

- Jede Person speichert aktuell ihre eigenen Rezepte lokal im eigenen Browser.
- Die App ist damit als Prototyp bewusst einfach gehalten, aber technisch später erweiterbar.

## Erfolgsmerkmale

- Ein Rezept kann in kurzer Zeit neu angelegt werden.
- Die Such- und Filterfunktion liefert passende Treffer.
- Die wichtigsten Seiten funktionieren auf Desktop und Mobilgeräten.
- Die App bleibt auch ohne Backend sinnvoll nutzbar.
- Die PWA lässt sich in unterstützten Browsern installieren.
