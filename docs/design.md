# Design

## Experience Direction

Turn a fleeting social post into a stable, personal recipe card.

Primary UX qualities:

- fast capture
- low friction
- structured enough to search later
- mobile-first
- resilient without backend

## Core Screens

| Screen | Purpose |
|---|---|
| Recipe list | browse, search, filter |
| Recipe detail | read full recipe |
| Create/edit recipe | capture and structure a recipe |
| Filter panel | narrow results |

## Primary Flow

1. User opens app or shares a link into app
2. App opens create form with source URL
3. User fills title, creator, ingredients, steps, tags, etc.
4. User saves recipe locally
5. Recipe appears in list and is searchable/filterable

## Information Architecture

### List view should expose

- image thumbnail
- title
- creator
- categories
- difficulty
- favorite state

### Detail view should expose

- source link
- full ingredient list
- full preparation text
- notes
- tags

## Interaction Decisions

| Decision | Keep / Reject | Why |
|---|---|---|
| Manual editing after import | Keep | reliable and realistic for V1 |
| Direct share into app | Keep as enhancement | valuable on mobile but not universal |
| Auto extraction from Instagram | Reject for V1 | fragile, policy-sensitive, high effort |
| Multi-select categories | Keep | matches user mental model |
| Tags in addition to categories | Keep | supports dietary and style descriptors |
| Steps as one free-text block | Keep | lower input friction |
| Favorites in V1 | Keep | strong retrieval shortcut |

## Search / Filter Behavior

### Search

Free-text search should cover:

- title
- ingredient names
- notes
- creator if cheap to include

### Filters

- categories: multi-select
- difficulty: single-select or multi-select
- favorite: toggle
- tags: desirable if simple enough

## Rejected or Deferred Concepts

| Concept | Reason for deferral |
|---|---|
| Account system | conflicts with local-only V1 |
| Shared household library | needs backend/sync |
| Ratings | not critical to core capture/retrieval loop |
| Shopping list | separate workflow |
| Weekly planner | separate workflow |

## Open Design Questions

Resolved for implementation start:

- recipe creation should be a full page
- ingredient input should use stacked mobile-friendly rows
- filters should live in a drawer/sheet in V1
