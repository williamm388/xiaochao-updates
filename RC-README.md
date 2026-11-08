# 三國殺打小抄 — RC8 v1.5.8 測試渠道

[安裝 RC8](https://raw.githubusercontent.com/williamm388/xiaochao-updates/rc/xiaochao-rc.user.js)

2026-11-09 實測：RC7 在進入遊戲後需手動點開「發財樹」才有反應；重啟後顯示今日上限。這不等於 RC7 曾成功完成背景領獎。之前的真實遊戲診斷為 purchaseResolution=ambiguous（4 個候選）。

RC8 對照原版 3.5.0 的 `laya.caller.method`：僅掃描 `shop.__proto__ || shop.constructor.prototype` 原型的方法以找出來源含 `consumeYuanbao` 的原生購買函式，不再把多個非原版範圍的候選混在一起。候選不唯一、不存在或檢測失敗時禁止消費。新增 `purchaseResolution.scope` 與 `purchaseResolution.candidateNames` 唯讀診斷。也要求 accountReady 為 true 才觸發一次背景流程。

不開發財樹視窗、不模擬滑鼠、保留伺服器 Status=1 資格及領獎／庫存前置條件、單頁一次交易與交易不明不重試保護。

CI: https://github.com/williamm388/xiaochao/actions/runs/42500134131
Draft PR: https://github.com/williamm388/xiaochao/pull/11

**自動化測試和 ZIP 驗證已完成，現行遊戲後台購買及領取仍未實機驗收。可能消耗約 200 元寶。**
只啟用本 RC，在 `web.sanguosha.com` iframe 中執行：
`window.__XIAOCHAO_KANSHU_DIAG__?.snapshot()`
核對 purchaseResolution、apiMethods、serverStatus、latest、history，並以伺服器實際領獎結果驗收。正式 main 及裴秀分支保持獨立。
