# v1.4.32.4 — Browser Tab Close Prompt Fix

## Fixed
- Removed the userscript's global `beforeunload` confirmation handler.
- The old inactivity heuristic treated closing the browser tab as automatic navigation when no page-level pointer, key, or touch event had occurred in the previous 1.5 seconds.
- Closing the game tab now follows Brave/Chromium's normal tab-close behavior without the userscript injecting a native “Leave site?” prompt.

## Preserved
- Existing in-page navigation guards for blocked external or automatic navigation.
- Gameplay evidence collection, hand observation, seat mapping, mode-specific logic, and Peixiu helper UI.

## Validation
- JavaScript syntax and release packaging are checked by the repository's GitHub Actions release workflow.
- Manual acceptance remains required: close the game tab, reopen the game, and verify that normal gameplay interactions continue to work.
