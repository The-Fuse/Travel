# Atlas

## Web experience — September 30

The `dist/` prototype is now a social travel journal. Feed presents multi-stop photo spreads with an inline journey route, stories, For you / Following, local likes, comments, saves, and a sharing preview. Tapping a stop reveals its note in the feed; tapping a like count opens the Likes bottom sheet. Explore uses searchable destinations with a live journey preview; Saved is a personal collection; profiles show journeys, a photo contact sheet, connections, and drafts. The new liquid-glass navigation keeps Feed, Explore, Saved, and You available on mobile without repeating the profile toolbar on every screen. Create, connections, and profile editing use contextual headers.

Post creation moves through three clear screens: select photos and a cover, review grouped places and optional notes, then write one caption and optional trip details. A progress indicator shows the current step and what remains. A creator reviews the final post before saving and can delete an unfinished draft. The feed and detail page have no separate post title; an internal journey name is retained for data compatibility. All content remains on this device; the audience selector and share action are local previews. The illustrated journey route and stop canvas remain intact. Typography uses upright DM Sans throughout, with restrained motion and reduced-motion support. There is no audio playback in the web prototype.

The new interface lives in `dist/atlas.css`; `dist/typography.css` enforces upright type. The older stylesheets load only for the preserved journey detail. See [the current web design system](docs/design/atlas-open-world.md). Native screens remain a separate implementation.

Run locally with `python3 -m http.server 5173 --bind 127.0.0.1 --directory dist`.

## Native product plan

**Design source of truth:** the current `dist/` prototype, including the current `atlas.css` design system. The earlier white/blue redesign audit is historical and is not the implementation target. See [native design matching status](docs/architecture/design-matching.md).

The production direction is Compose Multiplatform for Android and iOS, Kotlin Multiplatform for shared application logic, and a Kotlin/Spring Boot backend. Start with the [architecture and decisions](docs/architecture/README.md), [capacity model](docs/architecture/capacity-plan.md), and [delivery plan](docs/architecture/delivery-plan.md).

The separate [`apps/`](apps/README.md) and [`backend/`](backend/README.md) folders now contain the native/backend foundation; see the [development guide](docs/architecture/development.md) for build commands and current limits. [`contracts/`](contracts/README.md) contains implemented health/private-metadata contracts and the remaining proposed API behavior. The existing `dist/` web prototype remains a design and interaction reference.

A responsive travel journal with a searchable journey map and photograph-led journey reader. Explore can trace each journey's stops on the map, then open its destination summary or full story. Selecting a stop opens a focused detail sheet; photos without locations remain available in the album.

Run locally with `python3 -m http.server 5173 --bind 127.0.0.1 --directory dist`.

## App screens

Feed, Explore, Saved, You, stories, journey detail, connections, profile editing, and the post studio are responsive. Community travelers and their posts are fictional sample content. Likes, comments, follows, bookmarks, audience selections, and share previews are local prototype interactions, not an online social service. Use `?demo-check=NAME` for an isolated test database without changing personal records.

## Photo workflow

Choose local JPEG, PNG, or WebP photos (up to 15 MB each). EXIF GPS and capture dates are read locally with exifr. Photos near one another group into stops, with adjustable 50, 150, or 500 meter grouping. Missing locations can be assigned to an existing stop, picked on an OpenStreetMap map, or entered as coordinates. Notes and highlights attach to each stop. The creation flow is photos → grouped places → story → review → save. Stop grouping, notes, cover choice, dates, and trip type are available as optional edits.

The sample uses illustrative coordinates assigned to seven public photographs. It does not claim their embedded GPS matches those locations. Posts, drafts, profile edits, saved journeys, and uploaded images persist in IndexedDB on this device. Browser storage can be cleared or evicted; this is not a cloud backup. Images are not uploaded to a backend. The share action copies a local preview link; personal posts are not available on another device. Map tiles, sample images, and optional Google Fonts require network access; map requests reveal the viewed map area to the tile provider.

## Verification

Run `node --check dist/app.js` and `node --test tests/geo.test.mjs`. The grouping tests cover distance boundaries, unlocated photos, chronology, note retention, and manually placed coordinates. Manual browser checks cover stop sheets, assigning a missing-location sample photo, sample-photo creation through local posting, draft resume after reload, search, saved-journey persistence, and mobile layouts. Use `?demo-check=1` for an isolated browser test database. Browser upload permission was declined, so the full file-chooser flow has not been verified; the EXIF parser was checked separately with a synthetic GPS JPEG.

## Photo sources

- Positano: Thomas Bormans, [Unsplash](https://unsplash.com/photos/a-view-of-a-beach-with-boats-in-the-water-NTLB-2WhkYw)
- Amalfi Coast: Sander Crombach, [Unsplash](https://unsplash.com/photos/houses-on-mountain-near-body-of-water-dqQPL0hMGOE)
- Pasta: Krista Stucchio, [Unsplash](https://unsplash.com/photos/pasta-in-white-ceramic-bowl-2CZ0Zpuj-gU)
- Amalfi cathedral: Nick Kane, [Unsplash](https://unsplash.com/photos/group-of-people-gathering-near-altar-gfc_VoQ1oZ8)
- Sorrento: [Secret Escapes](https://www.secretescapes.com/contemporary-guesthouse-near-sorrentos-marina-fully-refundable-bougainvillea-relais-italy/sale-hotel)
- Furore: [Megan & Aram](https://www.meganstarr.com/amalfi-coast-things-to-do/)
- Ravello: [Ravello.com](https://www.ravello.com/celebrities-and-ravello/)

Public photographs are prototype references; publication rights for editorial site imagery have not been verified. Typography: bundled DM Sans. Instrument Serif remains available as a historical asset. Pale blue-gray, soft ink, and translucent glass form the current palette. Vendored libraries: Leaflet 1.9.4 (BSD-2-Clause) and exifr 7.1.3 (MIT). OpenStreetMap contributors provide the map data, with attribution shown in the location picker.

## September 23 design review

The journal home now prioritizes personal journeys, first creation, and continuing a draft. A labeled example demonstrates the result, Saved is a primary destination, and the two-step composer uses explicit save and local-storage language. The visual system uses near-white paper, dark ink, blue actions, and a stop-to-stop route strip. Example content no longer inflates the user's personal journey count.

See [the design and retention audit](docs/design-retention-audit.md) for observed issues, linked research, delivered changes, activation definitions, experiments, and the production roadmap. Retention improvements remain hypotheses; no analytics or notification system was introduced. Use a unique `?demo-check=NAME` to verify new-user states without changing personal data (`?demo-check=1` retains the original test database).
