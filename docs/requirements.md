# Requirements

## Product Goal

Enable one person to store and rediscover Instagram recipes in a structured, searchable local recipe library.

## V1 Scope

### Must-have

- Create a recipe from an Instagram link
- Edit recipe details manually
- Upload a local image
- Store structured ingredients
- Store preparation as free text
- Assign one or more categories
- Assign free tags
- Set difficulty
- Mark/unmark favorite
- Search by free text
- Filter by category, difficulty, favorite, ingredients/tags where feasible
- Persist data locally in `IndexedDB`
- Install as PWA

### Nice-to-have

- Receive shared link directly from mobile share sheet
- Pre-fill some fields from shared URL context if available

### Out of scope for V1

- Backend
- User accounts
- Cross-device sync
- Sharing recipes with others
- Ratings/reviews
- Weekly planner
- Shopping list
- Instagram content extraction/parser
- Browser extension

## Epics

### Epic: Recipe Capture

**User Story 1**  
As a home cook, I want to save an Instagram recipe link, so that I do not lose it in social media feeds.

**User Story 2**  
As a home cook, I want to fill in recipe details manually after saving a link, so that I can turn a post into a usable recipe entry.

**User Story 3**  
As a mobile user, I want the installed app to optionally receive a shared link from my device, so that saving is faster than copy-paste.

### Epic: Recipe Structuring

**User Story 4**  
As a user, I want ingredients stored as amount, unit, and name, so that recipes are easier to scan and potentially reusable later.

**User Story 5**  
As a user, I want to assign categories and tags, so that I can organize recipes in more than one way.

**User Story 6**  
As a user, I want to set a difficulty level, so that I can quickly judge whether a recipe fits the moment.

### Epic: Retrieval

**User Story 7**  
As a user, I want free-text search across title, ingredients, and notes, so that I can quickly find recipes even if I do not remember the exact title.

**User Story 8**  
As a user, I want to filter by category, difficulty, and favorites, so that I can narrow down recipes for a specific context.

### Epic: Local Ownership

**User Story 9**  
As a privacy-conscious user, I want all my recipe data stored locally on the device, so that I can use the app without creating an account.

## Success Criteria

| Area | Criteria |
|---|---|
| Capture | A user can create a recipe starting from a link in under 1 minute |
| Editing | All core fields can be added and updated without page reload |
| Retrieval | Search and filters return expected recipes from local data |
| Persistence | Recipes remain available after app restart |
| Usability | Main flows work on mobile and desktop |
| Installability | App can be installed as a PWA on supported devices |

## Acceptance Notes

- The app must remain useful even when share-target behavior is unsupported.
- Link paste is mandatory as the universal fallback flow.
- Favorite is part of V1 despite earlier uncertainty.

## Open Requirement Risks

- Ingredient filtering can mean exact ingredient matching or text-based matching; exact behavior still needs definition.
- Share-target support differs by platform; UX must not depend on it.
