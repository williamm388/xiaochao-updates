# 三國殺打小抄 — 排位隊友明牌 v1.5.2.1 RC2

獨立測試渠道，**不覆蓋** `main` 正式版、`rc` 發財樹渠道或先前 `rc-v1.5.2-handfix-rc1`。

## Tampermonkey 一鍵安裝
https://raw.githubusercontent.com/williamm388/xiaochao-updates/rc-v1.5.2.1-ranked-ally-rc2/xiaochao-ally-deck-rc2.user.js

## 驗證重點（GitHub Issue #9）
- 排位 2V2：本機 protocol Seat2（視覺4），隊友 Seat3（視覺1），對手 Seat0/1（視覺2/3）。
- 對隊友手牌，只在四人座位、雙 Self UI 訊號、`mySeats=[2,3]` 與 `ClientHappyGetFriendHandcardRep` 均核實時，才在 `xiaochaoAllyHandSeat_<id>` 顯示與現有 Zone 正實牌交集。
- `PubGsCMoveCard` 手上牌離開（尤其 CardIDs 省略）時使隊友快照更新或失效，房間重置時清空。
- 監控 `易城` 3440 CardID 42/137 從手牌→臨時→判定→牌堆→判定區的明確封包流向；未知摸牌 **不能** 推斷對手手牌。
- 既有裴秀判州的辨識問題並未由此 RC 解決，不能把本版當作裴秀修復版。

## 安全操作
- 請在 Tampermonkey **停用其他三國殺小抄**，包括正式版、RC1 和發財樹 RC，避免雙腳本同時執行。
- 本分支保留所指定 RC1 基底原有的發財樹邏輯；若不想自動執行可能消費元寶的操作，請先確定 `自動砍樹` 功能已停用，或不要在可能扣款的帳號上啟用測試腳本。
- RC2 使用專用 `@namespace=williamm388.xiaochao.allydeck.rc2`，不會覆蓋既有腳本。
- 本機及 GitHub Actions 語法、測試、封裝和 SHA-256 校驗已通過，**真實遊戲仍待驗收**。

## Source / Trace
- Issue：https://github.com/williamm388/xiaochao/issues/9
- Draft PR：https://github.com/williamm388/xiaochao/pull/10
- GitHub CI：https://github.com/williamm388/xiaochao/actions/runs/42450412764
- Source base：`fix/v1.5.2-rc1-ranked-2v2-view`，`f588b08c54e752898950afbbfc303082afe630cd`
- RC2 private HEAD：`16807a9d9283699c2dac3ed0559ab53bbf608a9d`

## 校驗
- RC2 test userscript SHA-256：`989bab6ee25bc715ecfa64616265fa681d426912bc6dd735a0b023824a9c5cc7`
- RC2 metadata SHA-256：`cd157aa28745e131542225cc3f0b8f344149dfa5f21002735e478a45afc882f6`
- 經 GitHub Actions 驗證的完整 ZIP SHA-256：`888e69defb4b998a391de2068fc42f9157da06933e8f9ebb54ad595c0c1a37d3`
