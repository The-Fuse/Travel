# Atlas

A responsive travel prototype centered on a stylized journey canvas. A soft route connects raised photo cards from the first stop to the last. Small highlights sit beside each stop; selecting a stop opens its photographs, notes, and location in a glass detail sheet. The canvas is an illustrative sequence, not a geographic map or navigation service.

Run locally with `python3 -m http.server 5173 --bind 127.0.0.1 --directory dist`.

## App screens

Home, Following, Explore with destination search, Saved journeys, profile with photos and drafts, full-page followers and profile editing, stories, and a two-step journey composer. The minimal interface uses photography, generous spacing, compact metadata, and glass navigation. Community travelers are fictional demo content. Like counts, story previews, comments, follows, and audience selections are local prototype interactions, not online services. Seeded activity is labeled as demo data. Saved journeys live in the profile; mobile navigation contains Home, Explore, You, and a separate create control.

## Photo workflow

Choose local JPEG, PNG, or WebP photos (up to 15 MB each). EXIF GPS and capture dates are read locally with exifr. Photos near one another group into stops, with adjustable 50, 150, or 500 meter grouping. Missing locations can be assigned to an existing stop, picked on an OpenStreetMap map, or entered as coordinates. Notes and highlights attach to each stop. The creation flow is photo selection → compose and post. Stop grouping, notes, cover choice, dates, and trip type are available as optional edits.

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

Public photographs are prototype references; publication rights for editorial site imagery have not been verified. Typography: system sans-serif with restrained Georgia accents; warm ivory, charcoal, and terracotta form the updated palette. Vendored libraries: Leaflet 1.9.4 (BSD-2-Clause) and exifr 7.1.3 (MIT). OpenStreetMap contributors provide the map data, with attribution shown in the location picker.
