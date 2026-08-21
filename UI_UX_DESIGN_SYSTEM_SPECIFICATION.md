# Synergy Bravo ERP — Enterprise UI/UX Design System, Layout Specification & Affiliate Site Cloning Standard

> **Document Version**: 1.0.0  
> **Target Audience**: AI Agents (Antigravity, Claude, GPT), Frontend Engineers, Product Designers  
> **Scope**: Comprehensive visual architecture, layout standards, token definitions, animation curves, modal systems, and cloning protocols for the Synergy Bravo ERP platform and its affiliate/sister sites.

---

## 1. Executive Summary & Design Philosophy

The **Synergy Bravo ERP UI/UX Design System** is an enterprise-grade, high-density visual interface engineered specifically for agribusiness, sugar mill management, outgrower logistics, and financial operations across East Africa and global markets.

### Key Aesthetic Principles

1. **Dark-Surface Dominance with Gold Accent Architecture**:  
   The interface uses a rich, dark slate/emerald theme (`#101915`, `#16221c`, `#1e2b25`) paired with a vibrant gold primary accent (`#f6dd0d`). This conveys precision, authority, and modern technological sophistication.

2. **Strict Geometric Precision (3px Border Radius Standard)**:  
   Except for round utility buttons (dots, avatars, icons) and country selector pills (`4px`), **all UI containers, buttons, inputs, cards, and modals strictly enforce `border-radius: 3px !important;`**. Rounding must feel subtle, sharp, and enterprise-focused—never soft or organic like consumer apps.

3. **Layered Depth & Glassmorphism**:  
   Depth is established using subtle 1px border lines (`#283a31`, `#364e43`), backdrop blur filters (`backdrop-filter: blur(12px)`), and translucent overlays (`rgba(22, 34, 28, 0.8)`).

4. **Zero-Latency Visual Feedback**:  
   Every interactive element utilizes high-performance CSS transitions (`180ms` to `300ms` timing curves) for hover states, scale transforms, and color shifts.

---

## 2. Global Design Tokens & Color Palette

### 2.1 Dark Theme Tokens (Primary Platform Aesthetic)

| Token Name | HEX / Value | CSS Variable | Applied Use Case |
| :--- | :--- | :--- | :--- |
| **Primary Accent** | `#f6dd0d` | `--primary` | Primary CTA buttons, active nav links, hover text highlights, hero badges |
| **Primary Hover** | `#e5cd0c` | `--primary-hover` | Active press and hover state for primary buttons |
| **Canvas Background** | `#16221c` | `--bg` | Main body background for forum, dashboard, and dark subpages |
| **Surface Card** | `#101915` | `--card-bg` | Content cards, table containers, form field backgrounds |
| **Surface Elevated** | `#1e2b25` | `--surface-elevated` | Modals, dropdown menus, flyouts, sticky containers |
| **Border Dark** | `#283a31` | `--border` | Card borders, table dividers, header bottom borders |
| **Border Active** | `#364e43` | `--border-active` | Hovered card borders, active input focus outlines, localization pill borders |
| **Text Primary** | `#f8fafc` | `--text-strong` | Primary headings (`<h1>`-`<h3>`), modal titles, active values |
| **Text Secondary** | `#cbd5e1` | `--text` | Body prose, table cell text, form field labels |
| **Text Muted** | `#94a3b8` | `--header-gray` | Subtitles, timestamps, breadcrumbs, secondary meta |
| **Category Label** | `#64748b` | `--label-gray` | Uppercase section headers, badge text, helper hints |

### 2.2 Light Theme Tokens (Landing Page Base State)

| Token Name | HEX / Value | CSS Variable | Applied Use Case |
| :--- | :--- | :--- | :--- |
| **Primary Accent** | `#f6dd0d` | `--primary` | Main CTA background, highlight badges |
| **Secondary Accent**| `#686fb4` | `--secondary` | Hover states for light links, secondary buttons |
| **Body Gray** | `#5a5a5a` | `--text` | Default light mode body paragraphs |
| **Dark Heading Gray**| `#3b3b3b` | `--text-dark` | Light mode section headings and title text |
| **Footer Charcoal** | `#2f2f2f` | `--footer-bg` | Light mode bottom footer background |

### 2.3 System Layout Tokens

```css
:root {
  --container-max: 1200px;
  --headerH: 84px;
  --radius: 3px !important;
  --card-br: 3px;
  --box-border: 1px;
  --shadow-card: 0 8px 24px rgba(0, 0, 0, 0.08);
  --shadow-hover: 0 6px 20px rgba(0, 0, 0, 0.4);
  --shadow-modal: 0 25px 50px rgba(0, 0, 0, 0.6);
}
```

---

## 3. Typography System

### 3.1 Font Family Declarations

The platform uses a two-font typography stack:

1. **Display & Heading Font**: `'Sansation', sans-serif`  
   *CDN Link*: `https://fonts.cdnfonts.com/css/sansation`  
   *Usage*: Headers, brand elements, hero title text, forum section titles, modal headers.
2. **Body & Interface Font**: `'Roboto', system-ui, -apple-system, sans-serif`  
   *CDN Link*: `https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap`  
   *Usage*: Body prose, data tables, navigation items, form inputs, button labels.

### 3.2 Font Scale & Hierarchy Specification

| Hierarchy Tier | Font Family | Size | Weight | Line Height | Letter Spacing | Case / Style |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Title (Line 1-3)** | Sansation | `clamp(22px, 2.6vw, 34px)` | `700` | `1.2` | `0.3px` | Italic |
| **Page Banner H1** | Sansation | `2.2rem` (35px) | `700` | `1.3` | `-0.2px` | Normal |
| **Section H2** | Sansation | `1.6rem` (25px) | `700` | `1.35` | Normal | Normal |
| **Card H3** | Sansation | `1.25rem` (20px) | `700` | `1.4` | Normal | Normal |
| **Sub-heading H4** | Roboto | `1.05rem` (17px) | `600` | `1.45` | Normal | Normal |
| **Body Standard** | Roboto | `0.95rem` (15px) | `400` | `1.6` | Normal | Normal |
| **Nav Links / Buttons** | Roboto | `0.95rem` (15px) | `500` / `700` | `1.3` | `0.2px` | Normal |
| **Small / Meta / Badges**| Roboto | `0.74rem` - `0.85rem` | `400` / `600` | `1.3` | `0.5px` | Meta / Uppercase |

### 3.3 Text Smoothing Mandate

```css
html, body, button, input {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}
```

---

## 4. Header Architecture & Global Navigation System

The header is fixed to the top of every page and transitions smoothly from transparent (or dark solid) to a frosted glassmorphic bar on scroll.

### 4.1 Header CSS Implementation

```css
.site-header {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 10000;
  height: 84px;
  background: #16221c; /* Default dark mode header */
  border-bottom: 1px solid #283a31;
  transition: background 0.3s ease, backdrop-filter 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

/* Glassmorphic Scrolled State */
.site-header.scrolled {
  background: rgba(22, 34, 28, 0.8) !important;
  backdrop-filter: blur(12px) !important;
  -webkit-backdrop-filter: blur(12px) !important;
  border-bottom: 1px solid rgba(40, 58, 49, 0.8) !important;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4) !important;
}

.site-header .inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  padding: 0 20px;
}
```

### 4.2 Header Sub-Components

1. **Brand Logo (`#brandLogo`)**:
   - Height: `62px !important` (scales down to `53px` on scroll in light mode).
   - Hover Effect: `transform: scale(1.03); transition: transform 0.2s ease;`.
2. **Main Navigation (`.main-nav`)**:
   - Layout: Flex row, `gap: 24px`.
   - Links: Color `#cbd5e1`, font-size `0.95rem`, font-weight `500`.
   - Active / Hover State: Color `#f6dd0d`.
3. **Auth Actions Area (`.auth-actions`)**:
   - Layout: Flex row, `gap: 16px`, `align-items: center`.
   - Left Column Container (`.auth-left-col`): Flex column, `align-items: center`, `gap: 4px`. Holds `#synergyLocalizationBar` on top and `.auth-signin` link below.
   - Primary Header CTA Button: `background: #f6dd0d; color: #101915; font-weight: 700; border-radius: 3px !important; padding: 8px 16px; text-decoration: none;`.

---

## 5. Hero Carousel System & Right-to-Left Cascade Animation Engine

The hero section features a multi-slide full-width carousel (`height: 82vh`) with an animated 3-line headline block in each slide.

### 5.1 Hero Layout Structure

```html
<section class="hero">
  <div class="hero-carousel">
    <!-- Slide 1 -->
    <div class="hero-slide active" style="background-image: url('assets/images/hero-bg-1.jpg');">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div class="hero-titles">
          <h2 class="hero-title-1">Digitizing Outgrower Operations & Sugar Milling</h2>
          <h2 class="hero-title-2">Real-Time Weighbridge Sync & M-PESA Farmer Payouts</h2>
          <h2 class="hero-title-3">Enterprise Agribusiness ERP for East Africa</h2>
        </div>
      </div>
    </div>
  </div>

  <!-- Navigation Dots & Arrows -->
  <div class="hero-arrows">
    <button type="button" class="hero-arrow prev" aria-label="Previous Slide">&#10094;</button>
    <button type="button" class="hero-arrow next" aria-label="Next Slide">&#10095;</button>
  </div>
  <div class="hero-dots">
    <span class="hero-dot active" data-slide="0"></span>
    <span class="hero-dot" data-slide="1"></span>
  </div>
</section>
```

### 5.2 Cascade Motion Specifications

To prevent vertical layout shift (CLS) during text transitions, the `.hero-titles` container enforces a fixed vertical height box of `160px`.

```css
.hero-titles {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-top: 20px;
  height: 160px;
  min-height: 160px;
  max-height: 160px;
  contain: layout style;
}

.hero-title-1,
.hero-title-2,
.hero-title-3 {
  font-size: clamp(22px, 2.6vw, 34px) !important;
  font-weight: 700 !important;
  font-style: italic !important;
  color: #ffffff !important;
  text-shadow: 0 10px 22px rgba(0, 0, 0, 0.45) !important;
  line-height: 1.2 !important;
  letter-spacing: 0.3px !important;
  font-family: 'Sansation', 'Roboto', sans-serif !important;
  height: 38px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  white-space: nowrap !important;
  opacity: 0;
  will-change: opacity, transform;
}

/* Entry Animation (Slide Active) */
.hero-slide.active .hero-title-1 {
  animation: slideInRightCascade 550ms cubic-bezier(0.16, 1, 0.3, 1) 120ms both;
}
.hero-slide.active .hero-title-2 {
  animation: slideInRightCascade 550ms cubic-bezier(0.16, 1, 0.3, 1) 280ms both;
}
.hero-slide.active .hero-title-3 {
  animation: slideInRightCascade 550ms cubic-bezier(0.16, 1, 0.3, 1) 440ms both;
}

/* Exit Animation (Slide Inactive) */
.hero-slide:not(.active) .hero-title-1 {
  animation: slideOutLeftCascade 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms both;
}
.hero-slide:not(.active) .hero-title-2 {
  animation: slideOutLeftCascade 250ms cubic-bezier(0.4, 0, 0.2, 1) 50ms both;
}
.hero-slide:not(.active) .hero-title-3 {
  animation: slideOutLeftCascade 250ms cubic-bezier(0.4, 0, 0.2, 1) 100ms both;
}

@keyframes slideInRightCascade {
  0% {
    opacity: 0;
    transform: translateX(65px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideOutLeftCascade {
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-45px);
  }
}
```

---

## 6. Country & Language Selector Bar Architecture (`#synergyLocalizationBar`)

The localization pill displays country market flags and language selection controls.

### 6.1 HTML Markup Standard (Pre-Rendered Mandate)

All HTML pages **must** pre-render the selector bar in static HTML so it appears instantly before JavaScript executes. The bar carries `data-prerendered="true"`.

```html
<div id="synergyLocalizationBar" data-prerendered="true" style="display:inline-flex;align-items:center;gap:6px;background:rgba(16,25,21,0.85);border:1px solid #364e43;border-radius:4px;padding:3px 8px;font-size:0.74rem;color:#f8fafc;white-space:nowrap;line-height:1.3;cursor:pointer;position:relative;">
  <!-- Market Selector -->
  <div style="position:relative;display:inline-block;">
    <button type="button" id="marketSelectorBtn" onclick="(function(e){e.stopPropagation();var m=document.getElementById('marketMenu'),l=document.getElementById('langMenu');if(l)l.style.display='none';m.style.display=m.style.display==='none'?'block':'none';})(event)" style="background:none;border:none;color:#f8fafc;font-weight:600;cursor:pointer;display:flex;align-items:center;gap:4px;padding:2px 4px;font-size:0.74rem;font-family:inherit;line-height:1.3;">
      <span id="selectedMarketText">🇰🇪 KE</span>
      <span style="font-size:0.56rem;color:#f6dd0d;">&#9660;</span>
    </button>
    <div id="marketMenu" style="display:none;position:absolute;top:110%;left:0;background:#16221c;border:1px solid #364e43;border-radius:4px;box-shadow:0 12px 30px rgba(0,0,0,0.85);z-index:50000;min-width:190px;padding:6px 0;">
      <div style="padding:4px 10px;font-size:0.68rem;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;">Region / Market</div>
      <a href="#" onclick="if(window.SynergyLocalization)SynergyLocalization.setMarket('KE');document.getElementById('marketMenu').style.display='none';return false;" style="display:flex;align-items:center;gap:8px;padding:6px 12px;color:#f8fafc;text-decoration:none;font-size:0.8rem;">🇰🇪 Kenya (KSh)</a>
      <a href="#" onclick="if(window.SynergyLocalization)SynergyLocalization.setMarket('US');document.getElementById('marketMenu').style.display='none';return false;" style="display:flex;align-items:center;gap:8px;padding:6px 12px;color:#f8fafc;text-decoration:none;font-size:0.8rem;">🇺🇸 United States ($)</a>
    </div>
  </div>

  <span style="color:#364e43;padding:0 2px;line-height:1;">|</span>

  <!-- Language Selector -->
  <div style="position:relative;display:inline-block;">
    <button type="button" id="langSelectorBtn" onclick="(function(e){e.stopPropagation();var l=document.getElementById('langMenu'),m=document.getElementById('marketMenu');if(m)m.style.display='none';l.style.display=l.style.display==='none'?'block':'none';})(event)" style="background:none;border:none;color:#f6dd0d;font-weight:700;cursor:pointer;display:flex;align-items:center;gap:4px;padding:2px 4px;font-size:0.74rem;font-family:inherit;line-height:1.3;">
      <span id="selectedLangText">EN</span>
      <span style="font-size:0.56rem;color:#f6dd0d;">&#9660;</span>
    </button>
    <div id="langMenu" style="display:none;position:absolute;top:110%;right:0;background:#16221c;border:1px solid #364e43;border-radius:4px;box-shadow:0 12px 30px rgba(0,0,0,0.85);z-index:50000;min-width:140px;padding:6px 0;">
      <div style="padding:4px 10px;font-size:0.68rem;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;">Language</div>
      <a href="#" onclick="if(window.SynergyLocalization)SynergyLocalization.setLanguage('sw');document.getElementById('langMenu').style.display='none';return false;" style="display:flex;align-items:center;gap:8px;padding:6px 12px;color:#f8fafc;text-decoration:none;font-size:0.8rem;">🇰🇪 Kiswahili</a>
      <a href="#" onclick="if(window.SynergyLocalization)SynergyLocalization.setLanguage('en');document.getElementById('langMenu').style.display='none';return false;" style="display:flex;align-items:center;gap:8px;padding:6px 12px;color:#f8fafc;text-decoration:none;font-size:0.8rem;">🇬🇧 English</a>
    </div>
  </div>
</div>
```

### 6.2 Double-Toggle Guard Rule

Because the pre-rendered bar uses inline `onclick` handlers, `localization.js` **must not** attach `addEventListener('click', ...)` to the same buttons when `bar.dataset.prerendered === 'true'`. Attaching duplicate listeners causes a double-toggle (`none → block → none` on a single click), which makes dropdown menus appear broken.

---

## 7. Card & Surface Component System

Cards and content surfaces follow a strict dark aesthetic.

```css
/* Card Container Base */
.card, .forum-card, .feature-card {
  background: #101915;
  border: 1px solid #283a31;
  border-radius: 3px !important;
  padding: 24px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}

/* Card Hover Elevation */
.card:hover, .forum-card:hover, .feature-card:hover {
  border-color: #364e43;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
}

/* Accent Badges */
.badge-gold {
  background: #f6dd0d;
  color: #101915;
  font-weight: 700;
  font-size: 0.75rem;
  padding: 4px 8px;
  border-radius: 3px !important;
  text-transform: uppercase;
}

.badge-muted {
  background: rgba(40, 58, 49, 0.5);
  border: 1px solid #364e43;
  color: #cbd5e1;
  font-size: 0.75rem;
  padding: 4px 8px;
  border-radius: 3px !important;
}
```

---

## 8. Buttons & Form Input Control Systems

### 8.1 Primary Accent Button

```css
.btn-primary, .btn-submit {
  background: #f6dd0d !important;
  color: #101915 !important;
  font-weight: 700 !important;
  border: none !important;
  border-radius: 3px !important;
  padding: 10px 20px;
  font-size: 0.95rem;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: background 0.2s ease, transform 0.15s ease;
}

.btn-primary:hover, .btn-submit:hover {
  background: #e5cd0c !important;
  transform: translateY(-1px);
}
```

### 8.2 Input Fields & Selects

```css
input[type="text"],
input[type="email"],
input[type="password"],
textarea,
select {
  width: 100%;
  background: #101915 !important;
  border: 1px solid #283a31 !important;
  color: #f8fafc !important;
  padding: 10px 14px;
  border-radius: 3px !important;
  font-size: 0.95rem;
  font-family: 'Roboto', sans-serif;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

input:focus, textarea:focus, select:focus {
  outline: none;
  border-color: #364e43 !important;
  box-shadow: 0 0 0 2px rgba(246, 221, 13, 0.2);
}
```

---

## 9. Unified Auth & Onboarding Modal Architecture (`#signInModal`)

The modal system handles user sign-in, account creation, and password reset workflows.

```html
<div id="signInModal" class="modal" style="display: none; position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0, 0, 0, 0.75); backdrop-filter: blur(6px); z-index: 20000; justify-content: center; align-items: center; padding: 20px;">
  <div class="modal-content" style="position: relative; width: 100%; max-width: 440px; background: #1e2b25; border: 1px solid #364e43; border-radius: 3px !important; padding: 36px 30px; box-shadow: 0 25px 50px rgba(0, 0, 0, 0.6); color: #f8fafc;">
    <span class="modal-close" onclick="closeSignInModal()" style="position: absolute; right: 18px; top: 14px; font-size: 26px; color: #cbd5e1; cursor: pointer;">&times;</span>
    
    <div class="modal-header" style="text-align: center; margin-bottom: 24px;">
      <img src="assets/images/Synergy-logo-sugar-web-white.png" alt="Synergy ERP" style="height: 46px; margin-bottom: 12px;">
      <h2 id="modalTitle" style="font-size: 1.25rem; font-weight: 700; color: #f8fafc; margin: 0 0 6px 0;">Welcome Back</h2>
      <p id="modalSubtitle" style="font-size: 0.875rem; color: #94a3b8; margin: 0;">Sign in to your Synergy Bravo ERP account</p>
    </div>

    <!-- Form & Submit Buttons -->
  </div>
</div>
```

---

## 10. Responsive Breakpoints & Mobile Visibility Rules

### 10.1 Breakpoint System

| Viewport Category | Screen Width | Layout Rules |
| :--- | :--- | :--- |
| **Desktop Wide** | `> 1200px` | Container centered at `1200px` max-width. Full nav bar visible. |
| **Desktop / Laptop**| `1025px - 1200px` | Horizontal nav bar with `16px` padding. |
| **Tablet** | `769px - 1024px` | Nav compresses; action buttons shrink padding. |
| **Mobile** | `≤ 768px` | Mobile drawer active. Header height `70px`. |

### 10.2 Mandatory Mobile Localization Rule

On mobile viewports (≤ 768px), page stylesheets often hide `.auth-actions`. To ensure mobile users can always select their market and language, `localization.js` automatically injects `#synergyLocalizationGlobalStyle` into `<head>`:

```css
@media (max-width: 768px) {
  #synergyLocalizationBar {
    display: inline-flex !important;
    font-size: 0.7rem !important;
    padding: 2px 6px !important;
  }
}
```

---

## 11. Developer Checklist for Affiliate Site Cloning

When constructing a new affiliate or sister site for Synergy Bravo ERP, verify the following steps:

- [ ] Include Google Fonts (`Roboto`) and CDN Fonts (`Sansation`).
- [ ] Set `:root` color tokens matching Section 2.
- [ ] Enforce `border-radius: 3px !important;` on all cards, buttons, inputs, and modals.
- [ ] Add `#brandLogo` with height `62px` and hover scaling.
- [ ] Pre-render `#synergyLocalizationBar` in the HTML with `data-prerendered="true"`.
- [ ] Include `localization.js?v=44` before `</body>`.
- [ ] Include the `#signInModal` structure for onboarding.
- [ ] Implement `.hero-titles` with fixed `160px` height box and `slideInRightCascade` animation curves.
