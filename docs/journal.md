# Journal

## 2026-03-31 00:00 - distill

Initial promptotyping distillation for a recipe PWA that stores social media recipes.

Established:

- V1 is single-user and local-only
- main source is Instagram
- storage target is `IndexedDB`
- core value is capture + organization + retrieval
- favorite is included in V1
- categories and tags coexist
- ingredients are structured as `amount | unit | name`
- preparation steps remain free-text in V1

Key tradeoffs:

- direct share into app is desirable but treated as progressive enhancement
- automatic Instagram extraction is explicitly deferred
- multi-user accounts are deferred because they conflict with backend-free local storage

Next likely step:

- choose the frontend stack
- turn docs into initial information architecture and implementation plan

## 2026-03-31 00:00 - save

**Done:** Created the initial promptotyping document set for the recipe PWA in `docs/` and captured the V1 scope, data model, design decisions, technical direction, and current state.
**Decisions:** V1 stays single-user and local-only with `IndexedDB`; Instagram link paste is the guaranteed capture path; direct share into the app is treated as progressive enhancement; automatic Instagram extraction is deferred; favorites are included in V1.
**Dead ends:** Git savepoint could not be created because this workspace is not initialized as a git repository.
