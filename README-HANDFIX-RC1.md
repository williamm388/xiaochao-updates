# 三國殺打小抄 — 排位明牌 v1.5.2 RC1（獨立測試）

本分支獨立於 `main` 正式版本和 `rc` 發財樹測試渠道；**不會修改原有兩個分支**。

## 一鍵安裝

https://raw.githubusercontent.com/williamm388/xiaochao-updates/rc-v1.5.2-handfix-rc1/xiaochao-handfix-rc1.user.js

## 安全測試注意

- 測試版 `@namespace` 是 `williamm388.xiaochao.handfix.rc1`，不會自動取代正式版或其他 RC。
- 測試前必須在 Tampermonkey 停用同時匹配遊戲頁的其他三國殺小抄（包括正式版和發財樹 RC），避免多個腳本同時修改遊戲環境。
- 測試完成後停用或移除此獨立 RC，再啟用原有腳本。
- 本 RC 僅針對座位身份衝突、特定觀牌記錄及相關回歸安全保護；**裴秀判州問題未修復**。
- GitHub Actions 對私有來源 PR 的離線測試已通過；尚未通過真實遊戲驗收。勿當正式版使用。

## 來源及驗收

- 私有來源：`williamm388/xiaochao`，PR #5
- PR CI：`https://github.com/williamm388/xiaochao/actions/runs/42346356826`
- `@updateURL` / `@downloadURL` 指向此測試分支，保持渠道隔離。
