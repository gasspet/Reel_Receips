# Implementation

## Current Goal

The project starts with a static prototype using only HTML and CSS.

This means:

- no JavaScript yet
- no real data storage yet
- no PWA features yet

The current purpose is to build and explain:

- page structure
- layout
- visual hierarchy
- user flow

## Architecture

| Area | Decision |
|---|---|
| Current stage | static prototype |
| Markup | HTML |
| Styling | CSS |
| JavaScript | later |
| Storage | later |
| Backend | none |
| Goal | understand and present the app visually first |

## What We Build First

The first version should visually show:

- a page header
- a search area
- a filter area
- recipe cards
- a button for adding recipes
- a static recipe form or recipe detail area

These elements do not work yet, but they show how the app will be used later.

## Initial File Structure

```text
/
  index.html
  style.css
  assets/
  docs/
```

## Initial Page Plan

| File | Purpose |
|---|---|
| `index.html` | main page with recipe overview |
| `style.css` | full visual styling |

Optional later:

- `recipe.html` for a detail view
- `create.html` for a create form

## Current Delivery Plan

### Step 1: HTML structure

Create the main sections in `index.html`:

- header
- introduction text
- search field
- filter section
- recipe card section

### Step 2: CSS styling

Style the page with `style.css`:

- colors
- spacing
- typography
- card layout
- mobile-friendly design

### Step 3: Additional static screens

After the homepage works visually:

- static recipe detail layout
- static create recipe form layout

## Later Technical Stages

After the static prototype is clear and documented:

1. add JavaScript interactions
2. add local storage with `IndexedDB`
3. add favorites behavior
4. add real search and filter logic
5. convert the app into a PWA

## Recommended Screen Decisions

| Question | Recommendation | Why |
|---|---|---|
| Create flow | full page or clear section | easy to explain in HTML |
| Ingredient input | stacked rows | better for mobile layouts |
| Filters | visible section in V1 prototype | easier to understand in a static version |

## Risk Register

| Risk | Impact | Response |
|---|---|---|
| Project feels too complex too early | high | start with HTML/CSS only |
| Too many features at once | high | focus on one page first |
| Layout breaks on mobile | medium | design mobile-first |
| Static UI is mistaken for finished logic | medium | document clearly what is only visual |

## Deferred Technical Work

- JavaScript logic
- `IndexedDB`
- PWA setup
- Instagram import logic
- multi-user accounts
- backend

## Open Decisions

- whether detail and create should be separate HTML files or sections on one page
- whether the first prototype should already contain placeholder images
