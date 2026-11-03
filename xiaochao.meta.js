// ==UserScript==
// @name         三国杀打小抄
// @namespace    B站特供修复版
// @version      1.4.32.4
// V1.4.32.4: remove the global beforeunload prompt that misclassified browser tab-close as automatic navigation.
// V1.4.32.3: remove startup announcement, trim diagnostic UI, and apply first-install defaults without overriding saved preferences.
// V1.4.32.2 RC1: shared evidence-gated deck-observation history for 观虚 and explicit deck-to-public-popup skills; never infer top order or hand ownership.
// V1.4.32.1 RC1: show validated 观虚 deck-view snapshots beneath 武将手牌 > 牌堆; never merge into hands or claim current top.
// V1.4.32 RC1: typed ally 观虚 hand reveal; separate authoritative 吉占 public reveals from hand ownership; retain strict identity guard.
// V1.4.31 RC1: fresh hand badges, evidence-tagged moves, duplicate physical-card display redaction.
// V1.4.30 RC1: bind target-option reveal Params to explicit target; no actor-seat fallback.
// V1.4.29 RC1: ranked verified-action self-identity override before roster/UI fail-closed.
// V1.4.28 RC1: precise 观虚 hand parsing for stale 1v1 room.myID; retain 1.4.27 mode isolation.
// V1.4.27 RC1: isolate two-seat 1v1 identity; preserve ranked resolver and strict card evidence.
// V1.4.25: reject generic GsCRoleOptTargetNtf Params-as-hand guesses; preserve verified viewing rules and ranked identity safety
// @icon64       https://ts3.tc.mm.bing.net/th/id/ODF.HcIfqnk4n-lbffGcaqDC2w?w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2
// @match        *://game.4399iw2.com/yxsgs/*
// @match        *://my.4399.com/yxsgs/*
// @match        *://*.sanguosha.com/*
// @match        *://web.kuaiwan.com/kwsgsn/*
// @match        *://wan.baidu.com/microend?gameId=19793595/*
// @match        *://www.7k7k.com/special/sgs/?*
// @match        *://playgame.iqiyi.com/login/iframe_page_web/top?game_id=146
// @grant        none
// @run-at       document-start
// @updateURL    https://raw.githubusercontent.com/williamm388/xiaochao-updates/main/xiaochao.meta.js
// @downloadURL  https://raw.githubusercontent.com/williamm388/xiaochao-updates/main/xiaochao.user.js
// ==/UserScript==
