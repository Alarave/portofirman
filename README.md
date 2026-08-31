# Firman Pambudiansyah — Portfolio Website

> Data Scientist & ai engineer portfolio showcasing predictive analytics, interactive dashboards, and SAP S/4HANA implementations.

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)]()
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue)]()
[![React](https://img.shields.io/badge/React-18.3-61dafb)]()
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)]()

**Live Demo:** [firmanpambudiansyah.netlify.app](https://firmanpambudiansyah.netlify.app) _(update with actual URL)_

---

## 🎯 Features

### 🎨 **Modern UI/UX**
- **Data Science Color Palette** — Teal/blue theme optimized for data-focused content
- **Micro-interactions** — Skeleton loading, hover effects, smooth transitions
- **Responsive Design** — Mobile-first approach with clamp() typography
- **Dark Mode Ready** — Full dark mode support

### 📊 **Data Visualization**
- **Inline SVG Charts** — Bar charts, donut charts, line charts for projects without screenshots
- **Performance Metrics** — MAPE, accuracy, efficiency gains displayed prominently
- **Interactive Dashboards** — Hover tooltips, animated skill bars

### ♿ **Accessibility (WCAG Compliant)**
- **ARIA Labels** — Screen reader friendly
- **Keyboard Navigation** — Full focus states
- **Reduced Motion** — Respects user preferences
- **High Contrast** — 4.5:1 minimum contrast ratio

### 🚀 **Performance**
- **Lazy Loading** — Images and components load on demand
- **Code Splitting** — Route-based splitting
- **Optimized Build** — 137KB gzipped JS, 13.8KB gzipped CSS

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | React 18, TypeScript 5.8, Vite 7.3 |
| **Styling** | Tailwind CSS 3.4, shadcn/ui |
| **Routing** | React Router DOM 6.30 |
| **Icons** | Lucide React |
| **Animations** | CSS Animations, Framer Motion |
| **Forms** | React Hook Form, Zod |
| **State** | TanStack Query |
| **Deployment** | Netlify |

---

## 📂 Project Structure

```
src/
├── components/
│   ├── layout/              # Header, Footer, Layout
│   └── ui/                  # shadcn/ui components + custom
│       ├── ProjectCard.tsx
│       ├── ProjectChartThumbnail.tsx  # SVG charts
│       └── ...
├── pages/
│   ├── Home.tsx             # Hero, Core Expertise, CTA
│   ├── About.tsx            # Hook-Value-Proof-CTA, Toggle view
│   ├── Projects.tsx         # Filter, Skeleton loading, STAR descriptions
│   ├── ProjectDetail.tsx    # Tabs, Code snippets, Metrics
│   ├── Experience.tsx       # Timeline, Achievements
│   └── Contact.tsx
├── assets/
│   ├── projects/            # Project images, logos
│   ├── sertif/              # Certificates
│   └── cv.pdf
├── lib/
│   └── utils.ts             # cn() helper
├── hooks/
│   └── use-toast.ts
├── index.css                # Global styles, animations
└── main.tsx
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18+ ([Download](https://nodejs.org/))
- **npm** or **bun**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Alarave/portofirman.git
   cd portofirman
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173)

4. **Build for production:**
   ```bash
   npm run build
   ```
   Output: `dist/` folder

5. **Preview production build:**
   ```bash
   npm run preview
   ```

---

## 📊 Key Improvements (April 2026)

### 1. **Color Palette**
- Changed from purple to **teal/blue** (`hsl(196 80% 40%)`) — more relevant for data science

### 2. **Home Page**
- ❌ Removed: "Welcome to My Portfolio" badge (noise)
- ✅ Added: Clear value proposition in one sentence
- ✅ CTA: "See My Data Science Work" (specific, not generic)

### 3. **Projects Page**
- ✅ Filter shows project counts: `Data Science (4)`
- ✅ Skeleton loading for perceived performance
- ✅ STAR formula descriptions (Situation-Task-Action-Result)
- ✅ Performance metrics on cards (MAPE, Accuracy, etc.)

### 4. **Project Cards**
- ✅ Inline SVG charts for projects without screenshots:
  - **InventoryBarChart** — SAP Inventory
  - **SentimentDonutChart** — Sentiment Analysis
  - **FinancialLineChart** — Financial Dashboard

### 5. **Project Detail**
- ✅ Tab system: Overview / Metrics & Results / Code Snippet
- ✅ Syntax-highlighted code blocks (Python/ABAP)
- ✅ Contextual CTA: "Tertarik dengan proyek seperti ini?"

### 6. **About Page**
- ✅ **Hook-Value-Proof-CTA** structure
- ✅ Tech stack icons with hover tooltips
- ✅ Toggle: **Business Impact** vs **Technical Stack**
  - Business: Metrics for HRD (30% efficiency, 3 days saved)
  - Technical: Skill bars for hiring managers (Python 85%, SQL 90%)

### 7. **Accessibility**
- ✅ ARIA labels, roles, states
- ✅ Alt text on all images
- ✅ Focus states on interactive elements
- ✅ Reduced motion support

**Full changelog:** [IMPROVEMENTS_SUMMARY.md](./IMPROVEMENTS_SUMMARY.md)

---

## 📈 Performance Metrics

### Build Output
```
✓ 1696 modules transformed
✓ built in 14.78s

CSS:  83.86 kB │ gzip:  13.84 kB
JS:  415.02 kB │ gzip: 137.02 kB
```

### Lighthouse Score (Estimated)
- **Performance:** 90+
- **Accessibility:** 95+
- **Best Practices:** 95+
- **SEO:** 90+

---

## 🎨 Design System

### Colors
```css
--primary: hsl(196 80% 40%)        /* Teal-blue */
--ds-teal: hsl(174 72% 40%)        /* Accent teal */
--ds-blue: hsl(213 80% 52%)        /* Accent blue */
```

### Typography
- **Font:** Inter (Google Fonts)
- **H1:** 2.5rem - 3.75rem (responsive clamp)
- **Body:** 1rem (16px)

### Spacing
- **Container:** max-width 1400px
- **Section:** py-12 md:py-20

---

## 📝 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (Vite) |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run test` | Run Vitest tests |

---

## 🌐 Deployment

### Netlify (Recommended)

1. **Connect repository** to Netlify
2. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
3. **Environment variables:** (if any)
4. **Deploy!**

### Manual Deployment

```bash
npm run build
# Upload dist/ folder to your hosting provider
```

---

## 📄 License

Personal project of **Firman Pambudiansyah**.  
All rights reserved © 2026.

---

## 🤝 Contact

- **Email:** [firmanpambudiansyah@gmail.com](mailto:firmanpambudiansyah@gmail.com)
- **LinkedIn:** [linkedin.com/in/firman-pambudiansyah](https://www.linkedin.com/in/firman-pambudiansyah/)
- **GitHub:** [github.com/Alarave](https://github.com/Alarave)
- **WhatsApp:** [+62 859-7426-7164](https://wa.me/6285974267164)

---

## 🙏 Acknowledgments

- **shadcn/ui** — Beautiful component library
- **Lucide** — Icon system
- **Tailwind CSS** — Utility-first CSS framework
- **Vite** — Lightning-fast build tool

---

**Built with ❤️ by Firman Pambudiansyah**
