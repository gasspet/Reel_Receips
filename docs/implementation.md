# Implementation

## Architecture

| Area | Decision |
|---|---|
| App type | PWA |
| Storage | `IndexedDB` |
| Backend | none in V1 |
| Offline | first-class |
| Import baseline | manual link paste |
| Enhanced import | Web Share Target where supported |

## Data Storage Notes

Recommended local stores:

| Store | Purpose |
|---|---|
| `recipes` | recipe documents |
| `meta` | settings, migration version, seed values if needed |

Recommended recipe indexes if supported by chosen wrapper:

- `updatedAt`
- `favorite`
- `difficulty`

Search across title / ingredients / notes will likely be implemented in app logic, not as advanced database search.

## PWA Notes

### V1 baseline

- installable manifest
- service worker for shell/offline caching
- app usable without network after first load

### Share target

Possible if platform/browser supports installed PWAs receiving shared URLs.

Implementation note:

- treat share target as progressive enhancement
- keep standard create flow fully functional without it

## Suggested Technical Strategy

### Data model first

Build:

1. recipe schema
2. local storage adapter
3. create/edit form
4. list + detail views
5. search/filter
6. PWA install/offline
7. optional share target

### Migration friendliness

Even though V1 is local-only, keep the schema future-friendly:

- stable `id`
- clear timestamps
- explicit `platform`
- avoid UI-only field names in storage

This will help later if backend sync is added.

## Risk Register

| Risk | Impact | Response |
|---|---|---|
| Instagram extraction is blocked or brittle | high | keep manual entry as core |
| Share target unsupported on some devices | medium | keep paste flow as fallback |
| Large uploaded images bloat local storage | medium | consider client-side resize/compression |
| Ingredient filtering becomes ambiguous | medium | start with string matching, refine later |

## Deferred Technical Work

- Instagram metadata extraction
- authentication
- sync / cloud backup
- recipe sharing
- import from more platforms

## Open Technical Decisions

- frontend framework choice
- `IndexedDB` wrapper/library choice
- image compression strategy
- exact search matching strategy
