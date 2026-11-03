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

## Update endpoints

- Userscript: https://raw.githubusercontent.com/williamm388/xiaochao-updates/main/xiaochao.user.js
- Metadata: https://raw.githubusercontent.com/williamm388/xiaochao-updates/main/xiaochao.meta.js

## Integrity

See SHA256SUMS.txt and version.json. Versioned snapshots are retained under versions/. Release notes are maintained in the private source repository's GitHub Release descriptions, not in this public distribution repository.
