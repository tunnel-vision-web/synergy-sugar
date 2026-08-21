# Synergy Bravo ERP — Enterprise Localization Engine Architecture & Integration Guide

## 1. Executive Summary

This document provides a comprehensive technical specification of the **Synergy Localization & Market Adaptation Engine** ([localization.js](file:///c:/BOCM/Clients/Synergy/Sugar/frontend/public/js/localization.js)).

Designed for low-latency, zero-dependency client-side execution, the engine delivers bi-directional dynamic translation (English ↔ Kiswahili), multi-currency formatting, regional feature flags, and real-time DOM translation. It is engineered to seamlessly integrate with enterprise Content Management Systems (CMS), Headless CMS architectures, and single-page or multi-page applications.

---

## 2. System Architecture Overview

```
 ┌─────────────────────────────────────────────────────────────────────────────┐
 │                         Synergy Localization Engine                         │
 └──────────────────────────────────────┬──────────────────────────────────────┘
                                        │
             ┌──────────────────────────┼──────────────────────────┐
             ▼                          ▼                          ▼
 ┌──────────────────────┐    ┌──────────────────────┐    ┌──────────────────────┐
 │    State & Locale    │    ┌   Bi-Directional     │    │  Dynamic DOM Capture │
 │      Management      │    │  Translation Table   │    │  (WeakMap Engine)    │
 │ (Market, Lang, Sync) │    │  (T & T_REVERSE)     │    │ (DOM_ENGLISH_NODES)  │
 └───────────┬──────────┘    └──────────┬───────────┘    └──────────┬───────────┘
             │                          │                           │
             └──────────────────────────┼───────────────────────────┘
                                        ▼
 ┌─────────────────────────────────────────────────────────────────────────────┐
 │                DOM Traversal & Real-Time Node Mutator                       │
 │  (Text Nodes, Placeholders, Dynamic Modals, AJAX/CMS Rendered Elements)     │
 └─────────────────────────────────────────────────────────────────────────────┘
```

### Key Architectural Characteristics
- **Zero External Dependencies**: Operates natively in vanilla JavaScript (ES6+), compatibility tested across modern browsers and headless DOM runtimes.
- **Immutable Source Preservation**: Employs an in-memory `WeakMap` (`DOM_ENGLISH_NODES`) to retain exact original English DOM node values. This prevents translation erosion or cumulative corruption during rapid toggle cycles.
- **Dynamic Node Onboarding**: Automatically registers newly injected HTML elements (e.g., CMS articles, modal bodies, dynamic search filters, AJAX responses) without requiring hard refreshes.
- **Entity & Substring Normalization**: Handles HTML entity decoding (`&amp;` ↔ `&`), exact dictionary lookup, and fallback substring replacement sorted by key length to prevent partial word corruption.
- **Pre-Rendered Bar Support**: The Country/Language selector bar is fully pre-rendered in HTML for instant, zero-JS-dependency display. The engine detects pre-rendered bars via `data-prerendered="true"` and avoids attaching duplicate event listeners.

---

## 3. Core Data Structures & State Management

### 3.1 Market Matrix (`MARKETS`)
The engine defines market contexts with currency conversion rates, regional UI feature toggles, and localized payment/support labels:

```javascript
const MARKETS = {
  KE: {
    code: 'KE',
    name: 'Kenya',
    flag: '🇰🇪',
    currency: 'KES',
    currencySymbol: 'KSh',
    rate: 1.0,               // Base currency
    defaultLang: 'sw',
    isEastAfrica: true,
    hasMpesa: true,
    payoutLabel: 'M-PESA B2C & KITS Direct Bank Payout'
  },
  TZ: {
    code: 'TZ',
    name: 'Tanzania',
    flag: '🇹🇿',
    currency: 'TZS',
    currencySymbol: 'TSh',
    rate: 18.5,             // 1 KES = ~18.5 TZS
    defaultLang: 'sw',
    isEastAfrica: true,
    hasMpesa: true,
    payoutLabel: 'Vodacom M-Pesa & TZS Bank Payout'
  },
  UG: {
    code: 'UG',
    name: 'Uganda',
    flag: '🇺🇬',
    currency: 'UGX',
    currencySymbol: 'USh',
    rate: 28.2,             // 1 KES = ~28.2 UGX
    defaultLang: 'sw',
    isEastAfrica: true,
    hasMpesa: true,
    payoutLabel: 'MTN Mobile Money & UGX Bank Payout'
  },
  US: {
    code: 'US',
    name: 'United States / Global',
    flag: '🇺🇸',
    currency: 'USD',
    currencySymbol: '$',
    rate: 0.0077,           // 1 KES = ~0.0077 USD
    defaultLang: 'en',
    isEastAfrica: false,
    hasMpesa: false,
    payoutLabel: 'ACH Direct Deposit & SWIFT Wire'
  },
  EU: {
    code: 'EU',
    name: 'European Union',
    flag: '🇪🇺',
    currency: 'EUR',
    currencySymbol: '€',
    rate: 0.0071,
    defaultLang: 'en',
    isEastAfrica: false,
    hasMpesa: false,
    payoutLabel: 'SEPA Credit Transfer & Wire'
  }
};
```

### 3.2 Key-Value Translation Map (`T` & `T_REVERSE`)
Translations are maintained in a flat Key-Value store `T`, mapping English string literals directly to their Kiswahili target:

```javascript
const T = {
  "Farmer Operations": "Uendeshaji wa Wakulima",
  "Financials & Payroll": "Fedha na Mipango ya Mishahara",
  "Inventory & Sales": "Hifadhi na Mauzo",
  "permissions": "ruhusa",
  "performance": "utendaji",
  "update": "usasisho",
  "api": "API",
  "integration": "uunganishaji",
  "authentication": "uthibitishaji"
};

// Automatically compiled reverse map for fast English recovery:
const T_REVERSE = {};
for (const en in T) {
  T_REVERSE[T[en]] = en;
}
```

> [!CAUTION]
> **Dictionary Syntax Rule — Mandatory Trailing Commas**: Every entry in the `T` dictionary **must** have a trailing comma. A missing comma anywhere in the object literal causes a `SyntaxError` that crashes the entire `localization.js` IIFE before `init()` is reached. This prevents ALL translation, bar rendering, and market-switching from functioning. Always validate after dictionary edits:
> ```
> node --check frontend/public/js/localization.js
> ```

### 3.3 State Defaults

```javascript
let currentMarket = localStorage.getItem('synergy_market') || 'KE';
let currentLang   = localStorage.getItem('synergy_lang')   || 'en'; // Defaults to English on first visit
```

> [!NOTE]
> **First-time visitors default to English** (`en`) if `synergy_lang` is not yet set in `localStorage`. Once a user explicitly chooses a language (English or Kiswahili) via the selector dropdown, `setLanguage()` persists their choice to `localStorage` (`synergy_lang`), maintaining their selection seamlessly across page navigations (e.g. from Help to Pricing).

### 3.4 Static WeakMap Engine (`DOM_ENGLISH_NODES`)
To guarantee that text nodes are never double-translated or irreversibly altered, the engine tracks text nodes via a DOM `WeakMap`:

```javascript
const DOM_ENGLISH_NODES = new WeakMap();
```

---

## 4. Execution Pipeline & Algorithms

### 4.1 Initialization Sequence

When `localization.js` is loaded (placed just before `</body>`), it runs an IIFE that fires `init()` synchronously:

```
1. captureOriginalEnglish(document.body)   — snapshot all English text nodes into DOM_ENGLISH_NODES
2. renderLocalizationHeaderBar()           — inject global CSS, populate or hook into the selector bar
3. SynergyLocalization.applyLocalization() — translate document to active lang/market from localStorage
4. SynergyLocalization.autoDetectRegion()  — async IP geolocation (skipped if market already in localStorage)
```

### 4.2 Node Translation Algorithm (`translateTextNode`)

When evaluating a text node, the engine executes the following logic flow:

```
[DOM Text Node Visited]
        │
        ▼
Skip if: parent is SCRIPT/STYLE/NOSCRIPT/TEXTAREA, or inside #synergyLocalizationBar
        │
        ▼
lang === 'sw'?
  └── Direct Swahili lookup (T[trimmedVal] || T[normalizedVal]) ──► Replace & RETURN
        │
        ▼
Is node in DOM_ENGLISH_NODES?
  ├── NO  ──► Retrieve nodeValue.
  │           Check T_REVERSE[nodeValue] || nodeValue.
  │           Register in DOM_ENGLISH_NODES.
  │
  └── YES ──► Retrieve origEn from DOM_ENGLISH_NODES.
        │
        ▼
Target Language Check:
  ├── 'en' ──► Set node.nodeValue = origEn. RETURN.
  │
  └── 'sw' ──► Normalize HTML entities (&amp; ➔ &).
               │
               ▼
Direct Match Check (T[trimmedEn] || T[normalizedEn])?
  ├── YES ──► Replace trimmed text with Swahili value. RETURN.
  │
  └── NO  ──► Execute Substring Replacement (Sorted by key length desc).
               Single-word keys use word-boundary regex (\b) to prevent
               corrupting Swahili sub-word sequences (e.g. "api" inside "uchapishe").
               Set node.nodeValue = updated text. RETURN.
```

#### Word-Boundary Regex for Single-Word Keys
Single-word English keys (alphanumeric only) use `\b` word boundaries during substring replacement to prevent partial-word corruption in Swahili:

```javascript
if (/^[A-Za-z0-9_-]+$/.test(enPhrase)) {
  const regex = new RegExp('\\b' + escapeRegExp(enPhrase) + '\\b', 'g');
  text = text.replace(regex, T[enPhrase]);
} else {
  text = text.split(enPhrase).join(T[enPhrase]);
}
```

---

## 5. Country/Language Selector Bar

### 5.1 Pre-Rendered Bar Architecture

The selector bar (`#synergyLocalizationBar`) is **fully pre-rendered in HTML** across all pages for instant display with zero JavaScript dependency. The bar focuses on **Kenya (KE)** and **United States (US)** markets.

```html
<div id="synergyLocalizationBar"
     data-prerendered="true"
     style="display:inline-flex;align-items:center;gap:6px;...">
  <!-- Market dropdown (🇰🇪 KE ▾ / 🇺🇸 US ▾) -->
  <!-- Divider (|) -->
  <!-- Language dropdown (EN ▾ / SW ▾) -->
</div>
```

**Required attributes:**
- `id="synergyLocalizationBar"` — required for engine to locate the bar
- `data-prerendered="true"` — signals to `renderLocalizationHeaderBar()` that inline `onclick` handlers already manage toggling; prevents duplicate `addEventListener` attachment

The bar's inline `onclick` handlers call `SynergyLocalization.setMarket()` / `SynergyLocalization.setLanguage()` directly (guarded with `if(window.SynergyLocalization)` to handle the pre-JS-load window).

### 5.2 Selector Bar Rendering Logic

`window.renderLocalizationHeaderBar()` runs on every page load and handles both pre-rendered and JS-injected bars:

```
renderLocalizationHeaderBar()
  │
  ├── Inject #synergyLocalizationGlobalStyle into <head> (once)
  │     — Ensures pill styling and mobile visibility on every page
  │
  ├── bar = document.getElementById('synergyLocalizationBar')
  │   └── If missing: auto-create and prepend into .auth-left-col / .auth-actions / header
  │
  ├── if (bar.dataset.initialized && bar.children.length > 0) → RETURN (already done)
  │
  ├── if (bar.children.length === 0)
  │   └── Inject full innerHTML (market + lang dropdowns)
  │       Then wire up addEventListener click toggles
  │
  └── else (pre-rendered bar, bar.dataset.prerendered === 'true')
      ├── Update #selectedMarketText and #selectedLangText from localStorage
      └── Skip addEventListener — inline onclick already handles toggling
          (avoids double-toggle bug: none→block→none on single click)
```

### 5.3 Double-Toggle Prevention

> [!WARNING]
> **Never add `addEventListener('click', ...)` to buttons that already have inline `onclick` handlers.** Both fire on the same click event. Since each toggles `display: none ↔ block`, the net result is the menu opens and immediately closes — appearing broken to the user.
>
> The engine detects pre-rendered bars via `bar.dataset.prerendered === 'true'` and skips attaching JS click listeners to those buttons.

### 5.4 Document-Level Dismiss Listener

The document-level click listener that closes open menus is **always** registered, but guards against closing when the click originated inside the bar itself:

```javascript
document.addEventListener('click', (e) => {
  if (bar.contains(e.target)) return; // click was inside bar — do not dismiss
  if (marketMenu) marketMenu.style.display = 'none';
  if (langMenu) langMenu.style.display = 'none';
});
```

### 5.5 Mobile Visibility

The bar is visible across all viewport widths. On mobile (≤ 768px), the engine's injected `#synergyLocalizationGlobalStyle` overrides any page-level `display: none` applied to `.auth-actions` or `.auth-left-col`, ensuring the country/language selector is always accessible regardless of screen size.

---

## 6. Enterprise CMS Integration Patterns

### 6.1 HTML Attribute Contract

| Attribute | Purpose | Example |
| :--- | :--- | :--- |
| `data-i18n-text="Key"` | Explicit text replacement binding for dynamic CMS components. | `<span data-i18n-text="Farmer Operations">Farmer Operations</span>` |
| `data-price-ksh="Amount"` | Dynamic multi-currency conversion target. | `<span data-price-ksh="150000">KSh 150,000</span>` |
| `data-img-ke="Path"` | Regional image switcher for East Africa. | `<img data-img-ke="img_ke.jpg" data-img-west="img_west.jpg">` |
| `data-i18n="Key"` | Legacy lookup for navigation buttons. | `<a data-i18n="nav_pricing">Pricing</a>` |
| `data-prerendered="true"` | Marks selector bars with pre-rendered HTML; prevents duplicate JS event listener attachment. | `<div id="synergyLocalizationBar" data-prerendered="true">` |

### 6.2 Dynamic CMS Content Injection Lifecycle

When the CMS injects content into the DOM asynchronously, trigger the localization pass immediately after inserting HTML:

```javascript
function renderCmsArticle(articleData) {
  const container = document.getElementById('articleContainer');
  container.innerHTML = `
    <h1>${articleData.title}</h1>
    <div class="article-body">${articleData.bodyHtml}</div>
  `;

  // MUST RE-TRIGGER LOCALIZATION FOR DYNAMICALLY INJECTED CMS HTML:
  if (window.SynergyLocalization && typeof window.SynergyLocalization.applyLocalization === 'function') {
    window.SynergyLocalization.applyLocalization();
  }
}
```

### 6.3 Event Listener Hook (`synergyLocalizationChanged`)

```javascript
window.addEventListener('synergyLocalizationChanged', function(event) {
  const { market, lang } = event.detail;
  fetch('/api/v1/user/preferences', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ preferredLanguage: lang, marketCode: market.code })
  });
});
```

### 6.4 Cache Busting

```html
<script src="/public/js/localization.js?v=44"></script>
```

> [!NOTE]
> Current deployed version is `?v=44`. Increment after every `localization.js` update.

---

## 7. Schema JSON Export Format for CMS Synchronization

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "SynergyLocalizationDictionary",
  "type": "object",
  "properties": {
    "version": { "type": "string", "example": "44.0.0" },
    "targetLanguage": { "type": "string", "example": "sw" },
    "translations": {
      "type": "object",
      "additionalProperties": { "type": "string" }
    }
  },
  "required": ["version", "targetLanguage", "translations"]
}
```

---

## 8. Public API Methods Reference

| Method | Parameters | Returns | Description |
| :--- | :--- | :--- | :--- |
| `SynergyLocalization.getLanguage()` | None | `'en' \| 'sw'` | Returns currently active language code. |
| `SynergyLocalization.setLanguage(lang)` | `lang: 'en' \| 'sw'` | `void` | Sets language, persists to `localStorage`, runs `applyLocalization()`. |
| `SynergyLocalization.getMarket()` | None | `Object` | Returns active Market config object from `MARKETS`. |
| `SynergyLocalization.setMarket(code)` | `code: 'KE'\|'TZ'\|'UG'\|'US'\|'EU'` | `void` | Sets active market, converts currency values, toggles regional features, runs `applyLocalization()`. |
| `SynergyLocalization.formatCurrency(ksh)` | `ksh: Number` | `String` | Converts base KES amount to target market currency (e.g. `$1,250`, `TSh 2,775,000`). |
| `SynergyLocalization.applyLocalization()` | None | `void` | Full document traversal: translates text nodes, updates currency badges, auth modals, data-i18n elements. |
| `SynergyLocalization.autoDetectRegion()` | None | `void` | Async IP geolocation via ipapi.co. No-op if `synergy_market` already in localStorage. |
| `window.renderLocalizationHeaderBar()` | None | `void` | Renders or hydrates the Country/Language selector bar. Idempotent — safe to call multiple times. |

---

## 9. Known Issues & Mitigations

| Issue | Root Cause | Mitigation |
| :--- | :--- | :--- |
| **Blank gray pill bar** | Bar container had CSS styling but empty `innerHTML` because JS crashed before populating it | Bar is now fully pre-rendered in HTML — visible immediately with zero JS dependency |
| **All localization broken (silent)** | Missing trailing comma in `T` dictionary caused `SyntaxError` crashing the entire IIFE | Validate with `node --check frontend/public/js/localization.js` after any dictionary edit |
| **Dropdown opens and immediately closes** | Pre-rendered bar's inline `onclick` + JS `addEventListener` both fired on same click, double-toggling `display` | Engine checks `bar.dataset.prerendered === 'true'` and skips `addEventListener` for pre-rendered bars |
| **Swahili word corruption** (e.g. `uchapishe` → `uchAPIishe`) | Single-word keys like `"api"` matched as plain substrings inside longer Swahili words | Single-word keys use `\b` word-boundary regex, leaving non-word-boundary occurrences untouched |
| **Selector hidden on mobile** | `@media (max-width: 768px)` applied `display: none` to `.auth-actions` hiding the entire bar | Engine injects `#synergyLocalizationGlobalStyle` with `!important` mobile override on every page load |
