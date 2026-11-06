# 三國殺打小抄 — RC 測試渠道

這是 **非正式測試版本**，並不影響 `main` 分支的正式 Tampermonkey 更新源。

## 一鍵安裝 RC

https://raw.githubusercontent.com/williamm388/xiaochao-updates/rc/xiaochao-rc.user.js

- RC 腳本：`xiaochao-rc.user.js`
- RC 更新 metadata：`xiaochao-rc.meta.js`
- RC 分支：`rc`
- 目前版本：`1.5.2`

RC 使用獨立的 `@name`（三国杀打小抄 RC）及 `@namespace`（williamm388.xiaochao.rc），因此正式版和測試版可以同時保留在 Tampermonkey，但**絕不可同時啟用**。安裝後先停用正式版再啟用 RC；測試完可反過來切換。

## 自動更新

RC 安裝後只從 `rc` 分支檢查更新；正式版使用 `main` 分支。Tampermonkey Dashboard → Settings → Userscript Update 建議檢查間隔為 Every 6 Hours 並啟用 Automatic installation。

## v1.5.2 RC2 注意事項

- 修正 RC1「畫面顯示開啟、舊設定仍為關閉」問題，以及物品管理器的取得方式。\n- 提供唯讀診斷：`window.__XIAOCHAO_KANSHU_DIAG__?.snapshot()`，不包含帳戶 ID。\n- 「自动砍树」預設開啟，登入後仍會嘗試執行真實消費流程。
- 涉及**真實 200 元寶消費**。目前只有自動化靜態測試，未完成真實扣款、成功領獎或每日重置驗收。
- 只建議在可承受該消費的測試帳戶使用。
- 跨分頁鎖及本機單日交易日誌可減少重複請求，但不能替代伺服器交易冪等性驗證。結果不明時不自動重試。
- 如需停止，停用 RC 腳本並重新啟用正式版。未驗證完整遊戲安全前，不要合併或觸發正式發布。

正式版安裝 URL：https://raw.githubusercontent.com/williamm388/xiaochao-updates/main/xiaochao.user.js
