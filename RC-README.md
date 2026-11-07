# 三國殺打小抄 — RC6 測試渠道

目前版本：**v1.5.6 RC6**。此版本僅作實機驗收，正式 main 不變。

## 安裝及更新
- [一鍵安裝 RC6](https://raw.githubusercontent.com/williamm388/xiaochao-updates/rc/xiaochao-rc.user.js)
- [RC 更新資訊](https://raw.githubusercontent.com/williamm388/xiaochao-updates/rc/xiaochao-rc.meta.js)

## 已驗證的修正
RC5 四個 manager 均存在而 `apiReady=false`，且 `serverStatus=0`。與原版 v3.5.0 實作對照後確認：原版會在 Status=0 時查詢 `ReqJbpTreeUsing`，而 RC5 只有 Status=null 才重查。RC6 恢復 Status=0 時重新查詢，讓狀態查詢不再受後續交易 API 的全域 preflight 阻擋，並新增 `apiMethods` 唯讀診斷。

只有 Status=1、資源足夠，且所需領獎／庫存／購買 API 齊備，才可進入交易。失去必要 API 不扣款、不重複不確定交易。

CI：https://github.com/williamm388/xiaochao/actions/runs/42397109045
Source：https://github.com/williamm388/xiaochao/pull/7

## 注意
**真實遊戲砍樹及領獎尚未驗證。若符合資格，可能消耗約 200 元寶。** 僅啟用 RC 版，停用正式版，在遊戲 iframe（web.sanguosha.com）執行 `window.__XIAOCHAO_KANSHU_DIAG__?.snapshot()`，查看 apiMethods、serverStatus 和 latest。不要修改正式發布來源或合併裴秀分支。
