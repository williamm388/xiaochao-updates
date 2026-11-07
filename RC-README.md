# 三國殺打小抄 — RC7 v1.5.7 測試渠道

此渠道僅供測試，不更動正式 main。

## 一鍵安裝 / 更新
- https://raw.githubusercontent.com/williamm388/xiaochao-updates/rc/xiaochao-rc.user.js
- RC metadata：https://raw.githubusercontent.com/williamm388/xiaochao-updates/rc/xiaochao-rc.meta.js

## 本次修正
RC6 實機確認 GameShopManager 存在，但 BuySingleItem 未提供，故 purchase=false、purchase-api-unavailable，未能完成無 UI 背景購買。

解碼 3.5.0 原版確認其 laya.caller.method 可以從方法內容包含 consumeYuanbao 的原生函式，建立 BuySingleItem 兼容別名。RC7 僅在自動砍樹模組恢復原版的唯一匹配方式，並以 shop 為 this 執行原生函式。查不到、歧義或檢查錯誤均拒絕消費；無須開窗口或模擬點擊。新增 purchaseResolution 診斷來源及匹配數量。

仍保留 Status=1 伺服器資格及資源檢查、必要領獎／庫存 API 檢查，單頁僅一次交易，不重試不確定交易。

CI：https://github.com/williamm388/xiaochao/actions/runs/42400538687
Private Draft PR：https://github.com/williamm388/xiaochao/pull/8

## 驗收
**僅語法、模擬回歸測試及 ZIP 完整性已通過；現行遊戲客戶端的兼容映射與實際背景領獎仍未實機證實，可能消耗元寶。**

只啟用 RC 版，在 web.sanguosha.com iframe 的 Console 執行：
`window.__XIAOCHAO_KANSHU_DIAG__?.snapshot()`
查看 purchaseResolution、apiMethods、serverStatus、latest；claim-requested 不等於已確認領獎。
