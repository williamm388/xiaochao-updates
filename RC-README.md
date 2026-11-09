# 三國殺打小抄 — RC9 v1.5.9 測試渠道

**未通過實機背景領獎驗收，不是正式版。**

一鍵安裝：https://raw.githubusercontent.com/williamm388/xiaochao-updates/rc/xiaochao-rc.user.js

GitHub CI：https://github.com/williamm388/xiaochao/actions/runs/42648738792

原始碼 Draft PR：https://github.com/williamm388/xiaochao/pull/12

## 修復內容
RC8 在真正遊戲 web.sanguosha.com 找到四個 `consumeYuanbao` 候選方法，依序為 `BuyOrUseItem`、`U`、`BuyHuanJiangCard`、`QuickPayByKey`。先前的唯一候選檢查導致不會購買。

對 3.5.0 原版混淆的 `laya.caller.method` 函式解碼，確認透過 `Object.getOwnPropertyNames(proto)` 及 `Set.delete('BuySingleItem')`，只採用符合特徵的第一個函式。RC9 在多個候選情況下只允許第一個名稱為 `BuyOrUseItem` 才建立兼容別名，否則停止。不使用 UI 操作或手動開窗。

保留 `Status=1` 伺服器資格檢查、庫存、元寶及領獎 API 前置判斷，單頁最多一次消費嘗試，不重試結果不明的交易。新增 `selectedName` 診斷。

已通過程式語法、模擬回歸、ZIP 內部 SHA-256 檢查；**真正背景購買、伺服器完成領獎未驗證，可能消費約 200 元寶**。若已達當日上限，只可驗證接口辨識，不能驗證購買／領獎。

正式 main、穩定更新來源及裴秀修復分支未改。
