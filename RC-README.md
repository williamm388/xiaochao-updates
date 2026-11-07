# 三國殺打小抄 — RC4 熱修正測試渠道

本渠道沿用既有 RC4，沒有開設 RC5；正式 `main` 不變。

## 安裝 / 更新

- 安裝：https://raw.githubusercontent.com/williamm388/xiaochao-updates/rc/xiaochao-rc.user.js
- 更新元資料：https://raw.githubusercontent.com/williamm388/xiaochao-updates/rc/xiaochao-rc.meta.js
- 目前版本：**1.5.4.1（RC4 Hotfix 1）**；第四節遞增是為確保 Tampermonkey 可以識別更新。

## 本次問題及修復

使用者實機回報 1.5.4：`accountReady: false`、`latest: waiting-game-ready`、四個 manager 都報 `Laya is not defined`。這證明舊版未進入購買流程。

- 由 `@run-at document-start` 啟動的輪詢，在原生 `Laya` 引擎缺席時不存取 manager，等待初始化完成
- 參照原本自動簽到啟動：原生登入及簽到的執行點喚醒自動發財樹檢查
- 移除本機 150 秒的就緒等待上限，持續輕量檢查直到已就緒
- 帳戶 ID 是否純數字僅供診斷，不能替代遊戲的發財樹資格狀態
- 新增 `layaReady`、`loginObserved`、`loginSource`、`readinessChecks`、`lastReadinessReason`
- 保留伺服器 `JbpUserData.Status`、`FreeBlessItemEnough`、道具級別及購買 API 檢查，同頁至多執行一次，不重試扣款結果不明的交易
- 不更動其他模式、卡牌記錄、座位映射、UI 及開關持久化

## 驗收狀態

GitHub Actions 自動化驗證：**PASS**（語法、回歸、SHA-256、ZIP）。
真實遊戲交易仍 **未驗收**，可能消費 **200 元寶**，僅用可接受此消費的帳戶測試。

開啟遊戲，於 Console 執行：
`window.__XIAOCHAO_KANSHU_DIAG__?.snapshot()`

請核對 `layaReady`、`loginObserved`、`managers`、`serverStatus`、`latest`。
