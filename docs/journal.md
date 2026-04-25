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

## 2026-04-06 00:00 - distill

Refined implementation preparation from the earlier docs into a concrete build direction.

Established:

- recommended stack is React + TypeScript + Vite + Dexie + React Router + `vite-plugin-pwa`
- create/edit should use full pages instead of modals
- ingredient input should use stacked rows for mobile usability
- filters should start as a drawer/sheet
- implementation should proceed foundation -> CRUD -> retrieval -> PWA polish -> share target

Next likely step:

- scaffold the project with the chosen stack
- implement the recipe schema and local database layer first

## 2026-04-06 00:00 - distill

Adjusted the project to a beginner-friendly first implementation stage.

Established:

- start with HTML and CSS only
- defer JavaScript until later
- add a separate university-facing explanation document
- focus first on a static visual prototype

Next likely step:

- create `index.html`
- create `style.css`
- build the homepage layout with search, filters, and recipe cards

## 2026-04-09 00:00 - save

**Done:** Repository structure aligned more closely with the assignment requirements. Required docs were prepared, a README and imprint page were added, and a separate tutorial file was created.
**Decisions:** Keep the project static with HTML and CSS for Milestone 2; add required file names (`data.md`, `visual-design.md`) alongside the existing project docs; separate tutorial material into its own folder.
**Dead ends:** None in this work unit.

## 2026-04-25 00:00 - distill

Prepared the concept for the next implementation step with JavaScript.

Established:

- JavaScript should activate the existing prototype, not replace it
- the first JS scope should cover recipe input, local storage, search, filters, and detail rendering
- the extension fits directly into the existing three-page structure

Next likely step:

- add a `js/` folder
- define the recipe data model
- implement the first interactive features step by step
