# 三國殺打小抄 — RC 測試渠道

本分支只提供 **非正式測試版**，不影響正式 `main` 及 Tampermonkey 穩定更新來源。

## 一鍵安裝與更新

- 安裝 URL：https://raw.githubusercontent.com/williamm388/xiaochao-updates/rc/xiaochao-rc.user.js
- Metadata：https://raw.githubusercontent.com/williamm388/xiaochao-updates/rc/xiaochao-rc.meta.js
- 目前版本：**v1.5.3 RC3**
- 僅測試版使用獨立的 @name 和 @namespace。**正式版與 RC 不可同時啟用**。

## RC3 修正及驗收

- 修正 v1.5.1、v1.5.2 自動砍樹入口位於**未被執行的 login() 函數**的問題。
- 現在獨立等待遊戲管理器就緒，載入後最多發送一次領取流程；不在同頁無限重試。
- 移除本機「每天只嘗試一次」的交易日誌及跨 Tab 鎖，改由遊戲伺服器 `JbpUserData.Status` 判斷是否已領取。不同 Tab 的併發交易安全性**未獲驗證**。
- 新增診斷：在 DevTools Console 執行 `window.__XIAOCHAO_KANSHU_DIAG__?.snapshot()`，可查看 ready、serverStatus、hasBlessItem 和 latest。
- 自動消費與彈窗顯示尚未通過真實遊戲驗收。**測試有可能實際扣除 200 元寶**，請只使用可接受該消費的帳戶。

## 切換渠道

正式版：https://raw.githubusercontent.com/williamm388/xiaochao-updates/main/xiaochao.user.js

Tampermonkey 可同時保存兩份腳本，但遊戲頁面只能啟用其中一份。兩個渠道更新互不影響。