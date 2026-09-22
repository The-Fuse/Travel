# Atlas product decisions

Research checked September 22, 2026. This is a product-design prototype, not a deployed social network. The community profiles, trip descriptions, and reactions are illustrative demo content. Adoption and retention claims require user research and experiments; these references support design choices, not guaranteed outcomes.

| Evidence | Design decision in Atlas | Hypothesis to test |
| --- | --- | --- |
| [Polarsteps](https://www.polarsteps.com/) connects trip capture, step updates, travel memories, and revisiting past trips. | Keep photos, stop notes, and the journey route together; give the profile a personal travel shelf. | People will create a second trip when the first becomes a useful keepsake. |
| [Polarsteps privacy controls](https://www.polarsteps.com/user-questions) distinguish personal, follower, and public trip visibility. | Preview audience before posting, default to Only me, and explain local prototype behavior. | A clear audience choice improves confidence without adding much creation friction. |
| [Strava community routes](https://support.strava.com/en-us/articles/15401756-how-do-community-routes-on-strava-work) let people discover, save, and follow routes. | Save routes directly from the feed and collect them in a dedicated Saved destination. | Saved trips lead to repeat visits and useful exploration rather than passive likes alone. |
| [Apple Materials guidance](https://developer.apple.com/design/human-interface-guidelines/materials) uses Liquid Glass to distinguish controls and navigation above content. | Glass navigation, filters, floating actions, and sheets; readable photography and text; reduced motion support. | People can identify actions without losing focus on the journey. |

## Core loops

1. Discover a trip → inspect its stops and tips → save it → return to Saved.
2. Choose photos → review grouped places → add the memories → preview audience and cover → post locally.
3. Leave a draft → resume with choices intact → finish the journey → revisit it on the profile.
4. Follow a demo traveler → see their trips in Following. Likes, comments, follows, and bookmarks persist only on the device.

## Validate next

Run usability sessions around first-trip completion, missing GPS placement, draft recovery, and finding a saved trip. Measure time to first completed journey, stage drop-off, location-correction rate, draft-resume success, and saved-trip revisits. Do not optimize for time spent or pressure people into sharing.

## Production work still required

Authentication, media processing/storage, server-enforced privacy, real sharing and social delivery, moderation/reporting, account deletion/export, backups/sync, and publication rights for all sample imagery. No notifications, live location tracking, external uploads, or analytics are implemented in this local prototype.
