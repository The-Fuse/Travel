# Atlas — social travel journal

The September 30 web direction makes Atlas a calm, photograph-led social journal. `dist/atlas.css` styles the redesigned feed, map-based destination discovery, collection, profiles, post studio, and supporting dialogs. The earlier stylesheets remain active only for the illustrated journey detail; its route is preserved while typography and supporting content follow the current app.

## Visual language

- Pale blue-gray atmosphere, soft ink, translucent white surfaces, and subtle glass highlights.
- Upright DM Sans across the site. `dist/typography.css` removes unintended italics, including in the preserved detail view.
- Travel photography carries the expression; primary actions remain easy to find.
- Rounded cards, floating mobile navigation, tactile hover and tap responses, page entrances, and image transitions. Reduced-motion preferences disable the animations.
- No web audio playback or sound effects.

## Experience

Feed is the social home: story circles, For you / Following, multi-stop photo spreads with an inline route and expandable stop note, local likes, comments, saves, share previews, and suggestions. The like count opens a Likes bottom sheet; comments and the photo album use matching curved bottom sheets. Explore combines search, category and audience filters, a destination list, and a live featured preview. Saved is a personal shelf. Profiles combine a traveler identity panel, journeys, contact sheet, connections, and drafts.

Post creation uses three screens with visible progress: photos and cover, grouped locations and optional notes, then a single caption with optional place, dates, category, and audience. Each step keeps its actions visible at the bottom. Review displays the final images and caption before the post is saved locally. A journey name remains only in stored data for compatibility; visible post surfaces use places and captions. A draft can be deleted from creation. The detail page shows the caption beneath its illustrated route, and stop notes, photographs, and interactions remain available.

A four-destination glass dock supports Feed, Explore, Saved, and You on mobile. A uniform sticky top bar serves those main tabs, while creation and secondary screens use contextual back navigation. The feed uses flat, edge-to-edge posts with thin separators; the dock remains translucent.

## Data and compatibility

The existing state schema, IndexedDB storage, EXIF processing, and geographic grouping algorithms remain compatible. The community content is sample data. No account, cloud sync, remote publication, or sound feature is introduced.

## Verification

Run `node --check dist/app.js`, `node --test tests/geo.test.mjs`, and `git diff --check`. Browser checks should cover navigation, empty Saved, Feed actions, studio review and save, returning from a new post, journey detail, and 1440 / 390 / 320 px layouts. Use a unique `?demo-check=NAME` query for test data. Real file chooser and EXIF extraction require a separate device-level check.
