# Mission Control 3.0

Your Personal Life Coach. Static, mobile-friendly app deployed to the existing GitHub Pages site.

## Working features

- Motivational landing and Today / Execute / Goals / Coach / Progress navigation.
- Original 27 scheduled activity blocks and three independent mobility commitments.
- Complete, incomplete, skipped, and dated rescheduled statuses, including cross-week carryover.
- Alternative accomplishments support broad goal areas without completing scheduled tasks.
- Coursework-finished milestone and explicit replacement approval. Replacement tasks start incomplete.
- Editable long-term goals, up to three monthly goals, weekly actions, parent links, priority choices, and first-open monthly review.
- Three-step transition coach, Save My Place notes, and starts tracked separately from completions.
- Historical weeks, monthly goals/reviews, activity credits, and repeated-rescheduling patterns.
- Local storage migration from Version 1 and compatible prototype records. Original keys are retained.
- Home Screen manifest, icons, offline asset cache, JSON data export.

## Data and limits

All personal records stay in this browser on this device. They are not committed to the repository. Browser storage is not cloud backup or cross-device synchronization. Clearing site data removes records. Export backups privately. Cross-tab updates work on the same origin/browser; simultaneous writes use the latest saved state.

Coaching is deterministic and rule-based. There is no connected AI model, secret/API key, background reminder, or push notification service. `coachingProvider.generate` is the boundary for a future server-backed AI provider. A future provider must retain domain rules that prevent false completion credit.

Activities earn one broad-area credit each. Goals require explicit outcome confirmation. Do not log an original scheduled task again as an alternative; accidental logs can be excluded and restored in Progress. Historical Version 1 completion dates are inferred from their scheduled dates because the old version did not store timestamps.

Gym class availability should be confirmed. Actual iPhone hardware testing is separate from responsive browser testing.

## Development and deployment

No dependencies or build step. Serve this folder with a static web server. Run `node test-core.cjs` for domain checks. Publish the root of `main` through GitHub Pages. Keep index.html, app.js, core.js, schedule.js, app.css, sw.js, manifest.webmanifest, and both icons together. Bump the service-worker cache name when changing release assets.

The uploaded Version 3 prototype was merged with the deployed Version 1 improvements: per-day accents, all existing schedules, local-week rollover/history, accessibility basics, and Home Screen assets.
