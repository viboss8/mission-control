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

No dependencies or build step. Serve this folder with a static web server. Run `node test-core.cjs` for domain checks. Publish the root of `main` through GitHub Pages. Keep index.html, app.js, core.js, task-coach.js, schedule.js, app.css, sw.js, manifest.webmanifest, and both icons together. Bump the service-worker cache name when changing release assets.

The uploaded Version 3 prototype was merged with the deployed Version 1 improvements: per-day accents, all existing schedules, local-week rollover/history, accessibility basics, and Home Screen assets.

## Refinement: achievements, Skool, focused execution

Default monthly suggestions now cover a published business website, a delivered photography session, four documented risk-managed practice setups, an applied Skool module, or a defined business-launch milestone. Routine gym, mobility, college and household duties remain in the schedule. New achievement progress counts only explicitly documented milestone records; old saved goals and their original metrics are unchanged. New weekly actions link to a selected monthly outcome and its long-term ambition. Suggested steps advance as linked actions are completed.

Wednesday 8–9 PM defaults to Skool Skill Development, with a per-week photography option. Old completed and rescheduled creative records retain their titles. Manual learning entries record community/course, lesson, percent progress, learning notes and a practical action. They can be edited, and practical steps can become weekly actions with explicit approval. No Skool or Pindrop account connection exists.

Execute is an unfinished-action queue with Start, Complete, Skip and dated Reschedule controls, grouped into goal actions, small habits and outstanding commitments. The full timetable stays in Today. Coach begins with a situation choice, explains why each option is suggested, and provides an optional Save My Place followed by one physical switch and a small start. Neglected-priority suggestions use recorded linked progress in the previous seven days. Starts and weekly-action completion never automatically finish monthly outcomes.

The storage key and schema version remain compatible with the deployed version. The additive upgrade retains old weeks, monthly goals, review notes, activity logs, completion states and saved transitions. Personal records are never part of the source deployment.

## Revised weekly routine
Post-Work Reset replaces launch blocks. Monday is upper-body strength, Wednesday is on-post boxing with a distinct optional 20–30-minute lifting task and no invented class time, and Friday is full-body strength. Mobility remains independently tracked on all three days. Friday social time is open-ended. Execute holds detailed cues. During a reset's last ten minutes, Today offers an optional Coach transition; no push notification is created. Progress separates fitness activity credits from distinct fitness days.

The schedule upgrade snapshots recorded task identities and times and retains removed old workout records in history rather than crediting new workouts automatically. Unrecorded current/future blocks use the revised plan; older weeks retain the legacy schedule. Existing goals, activity logs, storage keys, school replacement controls, and warning CSS remain intact.

## Task-specific Coach and passive windows
Today cards include Coach Me (with identity, title, time and context) and a collapsible More Details guide. The existing Manage Task status form is retained. The handoff prototype had no real remove-task behavior; the lower-right − Task control collapses the open controls and does not delete records.

Task-scoped Switch, Start, Focus and Overwhelmed modes provide progressive actions. Switch adapts to seven starting situations and offers a return note only for another project. Focus offers actual timestamp-based 10/15/25-minute countdowns that survive reload, with no promised background alert. Starts do not write task completion. TaskCoach is an offline, rule-based module, not an AI integration.

Explicit Post-Work Reset and recovery windows derive Window Ended once their end passes in the configured IANA time zone (default America/Los_Angeles). Derived status never overwrites stored user activity states or grants achievement credit. These windows are excluded from action queues, overdue warnings and planned-accomplishment denominators. Variable-time windows cannot infer an end hour; they expire after their scheduled day. Mixed Reset + Gym Readiness remains actionable, as do workouts, mobility, coursework, business, finance and creative commitments. Time-zone settings are under Progress. Existing historical weeks, goals, activity logs, keys and police-light CSS are preserved.

## Academic Assignment Tracker
The Academics section adds minimal manually reported MRKT 411 schedule metadata for the October 14–December 8, 2026 term. Four written assignments use their reported dates and the syllabus Tuesday 23:59 America/New_York rule, displayed in the configured local timezone (20:59 Pacific, including DST). Discussion/quiz week-ending dates are explicitly provisional; their exact times are absent until manually verified. Week 1 grade and participation are unknown. Week 4 uses the reported active-folder title and flags the syllabus conflict. Only generic preparation guidance is shipped, not course documents, student IDs or private records.

Academic statuses, personal notes, preparation checkboxes, source-verification notes, deadline corrections and verified LMS links live additively in the existing browser state. They survive upgrades and exports. Checking all steps, starting Coach, finishing a timer, or completing a study block never records submission. Only an explicit Submitted selection does. No grade is inferred and no action submits work to UMGC. Course home is the verified fallback until the user supplies an exact LMS folder link. No authorized UMGC integration is installed.

Today retains Thursday and Saturday study times while showing the relevant academic focus. Execute prioritizes outstanding current/prior-week academic work; Progress separates manual submissions from study activity credit. Task-specific Coach receives the selected assignment and supplies academic first steps. Study suggestions flag known deadlines before the next available block, remind discussion users to return for classmates, and offer an explicitly approved monthly-priority replacement when current work is reported submitted. Existing history, goals, school-finished controls, warning CSS and unrelated schedules are retained. Run `node test-core.cjs` for deadline/DST, migration, submission-isolation and study-recommendation checks.

## Progressive Goals redesign
Goals opens with Weekly and Monthly cards. Monthly creation walks through four broad areas, subcategories, specific results, a finish line, and calendar or rolling 30-day dates. New active monthly missions are capped at two overlapping periods; all existing goals, including older over-limit sets, remain intact. Weekly planning offers Move Forward (requires a current linked mission), Handle Business, and optional Live Your Life, with four contextual discovery blocks, custom actions, explicit finish lines and a three-active-goal limit. Existing generic goal creation also respects the limits.

November and December AI exploration/validation missions and four incomplete checkpoints are seeded once when no equivalent AI mission exists and capacity is available. A seed ledger preserves later edits, archives and achievements. Suggested checkpoints do not create weekly commitments or claim completion. Mission replacement retains prior definitions and flags linked weekly actions for keep/revise/relink decisions. Rollover creates a new incomplete action and archives its original while preserving IDs, source links and completion history. Archived actions leave active queues.

Today and Execute expose weekly actions; task-specific Coach receives the weekly finish line and monthly mission. Progress distinguishes completed weekly outcomes, confirmed checkpoints and explicitly confirmed monthly achievements. The annual/quarterly view and manual evidence scorecard are secondary. No business winner, research score or speculative profit is generated. Forex remains separate from business profit.

Personal annual vision and availability assumptions are intentionally not embedded in the public repository. The private-vision JSON import reads locally into the existing browser state without uploading it or changing goals, academics or activity history. Each device requires its own import because no cloud sync is installed. The user's supplied private annual plan is delivered separately. Quarterly notes and scorecard evidence are also browser-only. Deterministic suggestions respect configured availability by reminding users to plan for remote access and interruptions; military orders are not verified by the app.

## Actual-goal summaries and Sunday weekly setup
Goals home reads actual saved weekly lane commitments and active monthly missions. The two summary cards stack on mobile. Weekly overview shows three distinct commitment cards, with completion/archive/edit/history controls behind management details. A four-stage process covers Move Forward, Handle Business, optional Live Your Life, then Review & Confirm. One stage is visible at a time; custom actions retain monthly links. Draft selections and stage are stored per target planning week, so Back, Next and refresh preserve progress. Confirmation updates existing records rather than appending duplicates, preserves explicit completion states, and keeps revised completed goals in history. Conflicting saved-goal changes require review rather than overwrite.

Planning dates are Sunday–Saturday in America/Los_Angeles. Original schedule keys remain Monday-based. A planningWeek field and nonmutating legacy grouping bridge the two calendars; goal IDs, completed history, academic records and task schedule states are not migrated destructively. New goal records use the existing storage system and Monday anchor for their planning interval. Sunday's existing Weekly Planning task includes a shortcut for the following Sunday–Saturday interval plus a current-week option, both displaying exact dates. No duplicate schedule task is created.

Monthly mission cards emphasize the finish line, explicit status, documented progress and linked weekly actions. Optional creation appears only below two active missions. Mission details, edits, archives and historical reviews remain expandable. Monthly status changes require an in-app confirmation before applying. The annual vision and deployment assumptions remain private and unchanged. No new navigation area, account sync or background reminder was added.

### Guided weekly focus

After confirming weekly goals, optionally assign future flexible development blocks to the selected Move Forward goal. Goals > Weekly Goals > Edit Weekly Focus also opens the planner directly. Select blocks, customize the activity or per-session outcome, review, and apply. No selection is automatic. Skipping keeps the current schedule. Individual blocks or all future blocks can be restored to defaults after review.

Overrides use stable task IDs under `weeklyFocus[Sunday].overrides`, with an audit history. Planning dates are Sunday through Saturday. The recurring schedule stays intact; next week uses its defaults. Past, started, skipped, completed, or rescheduled blocks are locked, so midweek changes apply only to future incomplete sessions. Completion snapshots and linked goal context are retained. A focus session can earn activity credit but never automatically confirms a weekly or monthly achievement. Optional focus opportunities do not gain an overdue warning. Data and drafts remain browser-local.

Thursday's default development period is 7:45–9:00 PM from October 29, 2026. Its former separate recovery window is removed from the active schedule. Dated earlier templates and saved recovery/finished-session records remain available for history.
