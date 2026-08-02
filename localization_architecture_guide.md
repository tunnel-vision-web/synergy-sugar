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

### 3.3 Static WeakMap Engine (`DOM_ENGLISH_NODES`)
To guarantee that text nodes are never double-translated or irreversibly altered, the engine tracks text nodes via a DOM `WeakMap`:

```javascript
const DOM_ENGLISH_NODES = new WeakMap();
```

---

## 4. Execution Pipeline & Algorithms

### 4.1 Node Translation Algorithm (`translateTextNode`)

When evaluating a text node, the engine executes the following logic flow:

```
[DOM Text Node Visited]
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
               Set node.nodeValue = updated text. RETURN.
```

#### Code Implementation:
```javascript
translateTextNode: function(node, lang) {
  if (!node || node.nodeType !== Node.TEXT_NODE) return;
  if (!node.nodeValue || !node.nodeValue.trim()) return;

  const parent = node.parentElement;
  if (!parent || ['SCRIPT', 'STYLE', 'NOSCRIPT', 'TEXTAREA'].includes(parent.tagName)) return;
  if (parent.closest && parent.closest('#synergyLocalizationBar')) return;

  let origEn = DOM_ENGLISH_NODES.get(node);
  if (!origEn) {
    // Dynamic Registration for Newly Rendered CMS/AJAX Nodes
    const rawText = node.nodeValue;
    const trimmedRaw = rawText.trim();
    origEn = T_REVERSE[trimmedRaw] || rawText;
    DOM_ENGLISH_NODES.set(node, origEn);
  }

  if (!origEn || !origEn.trim()) return;

  if (lang === 'en') {
    node.nodeValue = origEn;
    return;
  }

  const trimmedEn = origEn.trim();
  const normalizedEn = trimmedEn.replace(/&amp;/g, '&');

  // 1. Direct Match Optimization
  if (T[trimmedEn]) {
    node.nodeValue = origEn.replace(trimmedEn, T[trimmedEn]);
    return;
  }
  if (T[normalizedEn]) {
    node.nodeValue = origEn.replace(trimmedEn, T[normalizedEn]);
    return;
  }

  // 2. Substring Replacement Strategy
  let text = origEn;
  const keys = Object.keys(T).sort((a, b) => b.length - a.length);
  for (const enPhrase of keys) {
    if (enPhrase.length > 1 && text.includes(enPhrase)) {
      text = text.split(enPhrase).join(T[enPhrase]);
    }
  }
  node.nodeValue = text;
}
```

---

## 5. Enterprise CMS Integration Patterns

To integrate this frontend engine into an Enterprise CMS (e.g., Strapi, WordPress, AEM, Drupal, or custom micro-frontends), follow these standard integration directives:

### 5.1 HTML Attribute Contract

| Attribute | Purpose | Example |
| :--- | :--- | :--- |
| `data-i18n-text="Key"` | Explicit text replacement binding for dynamic CMS components. | `<span data-i18n-text="Farmer Operations">Farmer Operations</span>` |
| `data-price-ksh="Amount"` | Dynamic multi-currency conversion target. | `<span data-price-ksh="150000">KSh 150,000</span>` |
| `data-img-ke="Path"` | Regional image switcher for East Africa. | `<img data-img-ke="img_ke.jpg" data-img-west="img_west.jpg">` |
| `data-i18n="Key"` | Legacy lookup for navigation buttons. | `<a data-i18n="nav_pricing">Pricing</a>` |

### 5.2 Dynamic CMS Content Injection Lifecycle

When the CMS injects content into the DOM asynchronously (e.g., pagination, search results, full article reader modals, or live comment feeds), trigger the localization pass immediately after inserting the HTML:

```javascript
// Example: CMS Article Loader / Dynamic Modal Hydration
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

### 5.3 Event Listener Hook (`synergyLocalizationChanged`)

The localization engine dispatches a global `CustomEvent` whenever the market or language changes. The CMS can subscribe to this event to update server-side state or trigger analytics logging:

```javascript
window.addEventListener('synergyLocalizationChanged', function(event) {
  const { market, lang } = event.detail;
  console.log(`[CMS Hook] Locale changed to Language: ${lang}, Market: ${market.code}`);
  
  // Example: Persist preference to CMS User Profile API
  fetch('/api/v1/user/preferences', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ preferredLanguage: lang, marketCode: market.code })
  });
});
```

### 5.4 CMS Cache Busting Directives

When updating script references across CMS templates, append the cache-busting query parameter to guarantee fresh dictionary deployment:

```html
<script src="/public/js/localization.js?v=4"></script>
```

---

## 6. Schema JSON Export Format for CMS Synchronization

To allow an Enterprise CMS admin panel to manage, edit, and push translations to `localization.js`, the CMS dictionary export schema adheres to the following JSON structure:

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "SynergyLocalizationDictionary",
  "type": "object",
  "properties": {
    "version": { "type": "string", "example": "4.0.0" },
    "targetLanguage": { "type": "string", "example": "sw" },
    "translations": {
      "type": "object",
      "additionalProperties": { "type": "string" },
      "example": {
        "Farmer Operations": "Uendeshaji wa Wakulima",
        "Financials & Payroll": "Fedha na Mipango ya Mishahara",
        "permissions": "ruhusa"
      }
    }
  },
  "required": ["version", "targetLanguage", "translations"]
}
```

---

## 7. Public API Methods Reference

| Method | Parameters | Returns | Description |
| :--- | :--- | :--- | :--- |
| `SynergyLocalization.getLanguage()` | None | `'en' \| 'sw'` | Returns currently active language code. |
| `SynergyLocalization.setLanguage(lang)` | `lang: 'en' \| 'sw'` | `void` | Sets language, persists preference in `localStorage`, and runs `applyLocalization()`. |
| `SynergyLocalization.getMarket()` | None | `Object` | Returns active Market configuration object from `MARKETS`. |
| `SynergyLocalization.setMarket(code)` | `code: 'KE'\|'TZ'\|'UG'\|'US'\|'EU'` | `void` | Sets active market, converts currency values, toggles regional features, and runs `applyLocalization()`. |
| `SynergyLocalization.formatCurrency(ksh)`| `ksh: Number` | `String` | Converts base KES amount to target market currency with proper symbol and formatting (e.g. `$1,250`, `TSh 2,775,000`). |
| `SynergyLocalization.applyLocalization()` | None | `void` | Executes complete document traversal, updates dynamic text nodes, imagery, currency badges, and auth modals. |
