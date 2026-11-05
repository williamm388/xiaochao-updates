# 三國殺打小抄 — Tampermonkey Distribution

This public repository contains release builds only. The source repository remains private.

## Install once

Install the userscript from:
- https://raw.githubusercontent.com/williamm388/xiaochao-updates/main/xiaochao.user.js

## Automatic updates

In Tampermonkey Dashboard → Settings → Userscript Update:
- Check Interval: **Every 6 Hours**
- Automatic installation: **Enabled**
- Update disabled scripts: leave unchecked

Tampermonkey checks the metadata endpoint and automatically installs newer stable versions. No recurring manual import or “Check for userscript updates” action is required. Reload the game tab after an update to run the new code.

## v1.5.0 namespace migration

Version 1.5.0 changes `@namespace` to `williamm388`. Tampermonkey treats it as a new script entry: install v1.5.0 once from the userscript endpoint, confirm it works, then manually disable the old `B站特供修复版` entry. Future updates use the same endpoint.

## Update endpoints

- Userscript: https://raw.githubusercontent.com/williamm388/xiaochao-updates/main/xiaochao.user.js
- Metadata: https://raw.githubusercontent.com/williamm388/xiaochao-updates/main/xiaochao.meta.js

## Integrity

See SHA256SUMS.txt and version.json. Versioned snapshots are retained under versions/.
