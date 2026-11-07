# 三國殺打小抄 — RC 測試渠道

本分支提供非正式測試版，不影響正式 `main` 及 Tampermonkey 穩定更新來源。

## 一鍵安裝與更新

- 安裝 URL：https://raw.githubusercontent.com/williamm388/xiaochao-updates/rc/xiaochao-rc.user.js
- Metadata：https://raw.githubusercontent.com/williamm388/xiaochao-updates/rc/xiaochao-rc.meta.js
- 目前版本：**v1.5.4 RC4**
- 獨立 `@name` 和 `@namespace`；正式版與 RC **不可同時啟用**。

## RC4 修正與驗收

- RC3 使用 `laya.class()` 取用部分遊戲管理器，和真正需要的管理器實例有別。RC4 統一由 `laya.get()` 取得原生管理器實例。
- Diagnostics 增加 `accountReady`、`bridgeReady`、`managers`（四個 manager 各別狀態）、`apiReady`、`managerErrors`，避免只有單一 `managersReady`，無法定位問題。
- 修正 mock：類別與實例分離；測試不再錯誤地由 `laya.class()` 回傳 manager instance。
- 未變更遊戲模式、座位映射、牌記錄、其他設定；開關持久化保留。
- 移除本機每日交易紀錄及跨 Tab 限額，依遊戲伺服器 `JbpUserData.Status` 判斷；單頁最多啟動一次交易，不對扣款結果不明狀況自動重試。
- GitHub Actions 離線回歸、語法、SHA256、ZIP 解壓驗證：PASS；**實際遊戲交易驗證未通過／尚未進行**。

## 風險與測試

自動砍樹可能實際消費 200 元寶，請只在可接受消費的帳戶測試。
打開遊戲後在 Console 執行 `window.__XIAOCHAO_KANSHU_DIAG__?.snapshot()`；若仍無動作，請提供 `managers`、`apiReady`、`serverStatus` 及 `latest`。

正式版：https://raw.githubusercontent.com/williamm388/xiaochao-updates/main/xiaochao.user.js
