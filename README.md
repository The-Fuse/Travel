# Atlas

An interactive travel-journal design with translucent glass controls, responsive layouts, a photographic post detail page, and an illustrative route map.

Run locally with `python3 -m http.server 5173 --directory dist`.

The prototype supports photo selection and local file previews, cover selection, journey details, stop notes and highlights, adding/removing/reordering stops, a final preview, session-only posting, a collection, saved journeys, a photo gallery, and a share-preview link.

The illustrated map represents the Amalfi Coast and supports selecting stops, notes, zoom, and a terrain tint. New stops can be anchored near sample towns. It is not a live geocoding or navigation service. Posts and uploaded photographs are kept only in page memory and disappear on refresh; no personal images are transmitted by the prototype. Sharing copies a link to the original sample experience, subject to site access settings.

## Photo credits

- Positano: Thomas Bormans, Unsplash — https://unsplash.com/photos/a-view-of-a-beach-with-boats-in-the-water-NTLB-2WhkYw
- Amalfi Coast: Sander Crombach, Unsplash — https://unsplash.com/photos/houses-on-mountain-near-body-of-water-dqQPL0hMGOE
- Pasta: Krista Stucchio, Unsplash — https://unsplash.com/photos/pasta-in-white-ceramic-bowl-2CZ0Zpuj-gU

Typography: Manrope and DM Sans, with system and serif fallbacks. Images and optional Google Fonts are loaded remotely.
