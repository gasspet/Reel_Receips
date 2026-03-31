# Knowledge

## Product Frame

| Field | Value |
|---|---|
| Product | Recipe Web App |
| Form | Installable PWA |
| Primary source | Instagram posts |
| V1 storage | Local only (`IndexedDB`) |
| V1 user model | Single user on one device |
| Future expansion | Backend, sync, multi-user accounts, richer import |

## Core User Need

Save social media recipes in a reusable form so they can be found later by:

- title
- free-text search
- ingredients
- category
- difficulty
- favorites

## Recipe Entity

| Field | Type | Notes |
|---|---|---|
| `id` | string | local UUID |
| `sourceUrl` | string | Instagram post URL |
| `platform` | enum | V1 default: `instagram` |
| `title` | string | editable |
| `creator` | string | editable |
| `image` | blob/url | manual upload in V1 |
| `ingredients` | list | structured rows |
| `stepsText` | string | free-text preparation |
| `notes` | string | optional |
| `categories` | list<string> | multi-select |
| `tags` | list<string> | free tags like `vegetarisch` |
| `difficulty` | enum | `Einfach`, `Mittel`, `Anspruchsvoll` |
| `favorite` | boolean | included in V1 |
| `createdAt` | datetime | local metadata |
| `updatedAt` | datetime | local metadata |

## Ingredient Row Shape

`{ amount, unit, name }`

Example:

| amount | unit | name |
|---|---|---|
| `200` | `g` | `Pasta` |
| `1` | `EL` | `Olivenol` |
| `` | `` | `Salz` |

## Controlled V1 Values

### Categories

- Fruhstuck
- Mittagessen
- Abendessen
- Dessert
- Snack
- Getranke

### Difficulty

- Einfach
- Mittel
- Anspruchsvoll

## Tag Semantics

Tags are flexible descriptors, not primary navigation categories.

Examples:

- vegetarisch
- vegan
- scharf
- meal prep
- proteinreich

## Input Paths

| Input path | V1 status | Notes |
|---|---|---|
| Paste Instagram link | must-have | reliable fallback |
| Share into installed app | stretch / progressive enhancement | depends on device/browser support |
| Bookmarklet | possible later | optional import helper |
| Browser extension | later | not V1 |
| Automatic extraction from Instagram | later | technical + legal risk |

## Important Constraint

`Single-user local` and `multiple accounts` do not coexist in V1. Real account-based multi-user support requires backend or sync infrastructure later.

## Open Questions

- Should imported images be compressed locally for storage efficiency?
- Should ingredient units be free-text or partially normalized?
- Should category selection be optional or required on create?
