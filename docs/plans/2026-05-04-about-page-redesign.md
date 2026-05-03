# About Page — Full Redesign Design Document

**Date:** 2026-05-04  
**Author:** Brainstorming session (Firman + Antigravity)  
**File target:** `src/pages/About.tsx`  
**Approach:** Story-Driven Scroll (Option B)

---

## Goal

Redesign the About page from scratch — structure, layout, and content — to create a
premium, story-driven experience for a general-purpose audience (recruiters, technical
interviewers, and business clients).

## Design Decisions

### Overall Tone & Rhythm
- **Light mode** throughout (no full dark sections)
- Alternating section backgrounds: **Pure white ↔ Gray-50/muted** for visual rhythm
- Typography: **Plus Jakarta Sans** (headings) + **Inter** (body)
- Scroll-triggered slide-up animations per section (non-intrusive)
- Remove the Business Impact / Tech Stack toggle — replaced by single cohesive scroll

### Typography Upgrade
- Add **Plus Jakarta Sans** from Google Fonts (Bold/ExtraBold for headings)
- Keep **Inter** for body text and UI elements
- Update `index.css` font import and heading utility class

---

## Section-by-Section Specification

### Section 1 — Hero / Identity
**Background:** Animated soft gradient mesh (teal → indigo, low opacity, light)  
**Layout:** Centered single column  
**Elements:**
- Role pill badge: `📊 Data Scientist & BI Developer`
- Profile photo: rounded, floating, subtle glow ring behind it
- H1: "Firman Pambudiansyah" — Plus Jakarta Sans ExtraBold 5xl–7xl, gradient text (teal→cyan)
- Tagline: "Turning raw data into decisions that move businesses" — Inter, xl, muted
- Info chips: Jakarta, ID · GPA 3.88 · 2+ Years Exp
- CTAs: `[Download CV]` (primary) + `[Let's Talk →]` (outline)
- Scroll indicator: bouncing arrow at bottom

### Section 2 — Impact Numbers
**Background:** bg-slate-50 / muted (slightly off-white)  
**Layout:** 4-column grid on desktop, 2-column on mobile  
**Elements:**
- Section label: `WHAT I'VE DELIVERED` — uppercase, small, tracking-widest
- 4 editorial-style numbers:
  - `30%` Dead Stock Reduction — SAP Inventory (teal)
  - `94%` Cosine Similarity — Book Recommendation (cyan)
  - `2.53%` MAPE — LSTM BBCA Prediction (emerald)
  - `3 Days/mo` Reporting Time Saved — Financial Dashboard (orange)
- Each number: font-black text-7xl–text-8xl, colored
- Label below: small bold uppercase
- Project ref below label: tiny muted text
- Hover: scale-up + subtle glow

### Section 3 — Technical Skills / Arsenal
**Background:** Pure white  
**Layout:** 2-column grid for categories, icon grid for full stack  
**Elements:**
- Section label: `TECHNICAL ARSENAL`
- Category 1 — Programming: Python, SQL, TypeScript
- Category 2 — BI & Data: Power BI, Looker Studio, BigQuery, SAP Cloud Analytics
- Each skill: real logo icon + name + proficiency tag (Expert / Advanced / Intermediate)
  OR dot-matrix indicator (● ● ● ● ○)
- Full stack row below: all tech icons (logo + label chip)
- Hover: card lift + brand-color glow per tool

### Section 4 — Education
**Background:** Gray-50 / bg-muted/20  
**Layout:** Vertical stack of horizontal cards (no timeline line)  
**Elements:**
- Section label: `ACADEMIC BACKGROUND` with GraduationCap icon
- Card per institution:
  - Institution logo: 80×80px prominent, left side
  - Year badge: top-right corner of card
  - School name: Plus Jakarta Sans Bold, xl
  - Degree: muted, lg
  - GPA/Score: ★ icon + bold colored text
  - Honor badge (Cum Laude / Outstanding)
  - Relevant course chips: pill tags (Data Science, BI, ERP Systems, etc.)
- Card hover: border-primary/30 + shadow-xl

### Section 5 — Certifications
**Background:** Pure white  
**Layout:** 3-column grid (desktop) / 2-column (mobile)  
**Elements:**
- Section label: `CERTIFICATIONS & WORKSHOPS` with Award icon
- Per cert card:
  - Issuer logo prominent top
  - Certification title (font-bold)
  - Issuer label (small, primary color)
  - Hover: lift + primary border glow
- "View All Certifications →" link at bottom right

### Section 6 — CTA
**Background:** Soft gradient (matching hero, teal/indigo at low opacity)  
**Layout:** Centered  
**Elements:**
- Headline: "Let's Build Something Together"
- Subtext: "Open to full-time roles, freelance projects, and collaborations."
- CTAs: `[✉ Start a Conversation]` + `[GitHub →]`

---

## Component Changes

| File | Change |
|------|--------|
| `src/index.css` | Add Plus Jakarta Sans font import; add heading font utility |
| `src/pages/About.tsx` | Full rewrite of component structure |
| No new components needed | Reuse existing shadcn/ui Card, Badge, Button |

## What's Removed
- Business Impact / Tech Stack toggle mechanism
- `viewMode` state variable
- Vertical timeline with the `before:` pseudo-element line

## What's Preserved
- All existing data (techStackIcons, skills data, education data, certifications data)
- All existing asset imports (logos, photos)
- Scroll-triggered animations (existing Tailwind `animate-slide-up` pattern)
- Dark mode CSS variable compatibility (sections use semantic colors)
