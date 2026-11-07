# 三國殺打小抄 — RC5 測試渠道

目前版本：**1.5.5 RC5**（尚未完成實機驗收）。

安裝（Tampermonkey）：https://raw.githubusercontent.com/williamm388/xiaochao-updates/rc/xiaochao-rc.user.js

RC 更新元資料：https://raw.githubusercontent.com/williamm388/xiaochao-updates/rc/xiaochao-rc.meta.js

RC4 實機證據：在 web.sanguosha.com 遊戲 frame 中 Laya、腳本及開關均正常，但 `laya.get("WelfareManger")` 出現 `is not a constructor`，所有管理器不可用。

RC5 僅把四個發財樹管理器取得方法恢復為 3.5.0 原版的 `laya.class()`，新增不能建構管理器的回歸測試，保留伺服器資格判斷和交易結果不明不重試策略；不更動排位座位映射、裴秀及主遊戲 UI。

GitHub Actions Run #42393376035：測試、語法、SHA-256 與 ZIP 建置通過。**實機砍樹及領取尚未驗證，可能消費約 200 元寶。** 建議在可接受消費的帳戶測試，只啟用 RC 版並停用正式版，遊戲重新載入後從 web.sanguosha.com frame 執行 `window.__XIAOCHAO_KANSHU_DIAG__?.snapshot()`。

本 RC 不會更新正式 main 或正式 Tampermonkey 更新端點。
