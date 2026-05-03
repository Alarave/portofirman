# About Page Redesign — Implementation Plan

> **For Antigravity:** REQUIRED SUB-SKILL: Load executing-plans to implement this plan task-by-task.

**Goal:** Fully redesign `src/pages/About.tsx` into a premium story-driven scroll layout.

**Architecture:** Single-file rewrite of About.tsx. Alternating white/gray-50 section backgrounds. No new components — reuse existing shadcn/ui Card, Badge, Button. Typography upgrade via Google Fonts.

**Tech Stack:** React, TailwindCSS, shadcn/ui, existing asset imports (logos, photos)

**Design Doc:** `docs/plans/2026-05-04-about-page-redesign.md`

---

### Task 1: Typography Upgrade

**Files:**
- Modify: `src/index.css` (lines 1–5)

**Step 1: Update Google Fonts import**

Replace the existing Inter-only import with:
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
```

**Step 2: Add heading font utility in `@layer utilities`**
```css
.font-display {
  font-family: 'Plus Jakarta Sans', sans-serif;
}
```

**Step 3: Verify in browser**
Run: `http://localhost:8080/about` — headings should render in Plus Jakarta Sans.

**Step 4: Commit**
```bash
git add src/index.css
git commit -m "feat: add Plus Jakarta Sans font for headings"
```

---

### Task 2: Hero Section

**Files:**
- Modify: `src/pages/About.tsx` — replace Section 1 (hero, lines ~141–280)

**Step 1: Replace hero JSX**

The new hero section is centered layout with animated gradient background:

```tsx
{/* ── Hero Section ── */}
<section className="relative py-24 md:py-36 overflow-hidden bg-gradient-to-br from-primary/5 via-cyan-500/5 to-indigo-500/5">
  {/* Animated background blobs */}
  <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float pointer-events-none" />
  <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl animate-float pointer-events-none" style={{ animationDelay: "1.5s" }} />

  <div className="container relative">
    <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">

      {/* Role badge */}
      <div className="animate-fade-in opacity-0">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase">
          <BarChart3 className="w-3.5 h-3.5" />
          Data Scientist & BI Developer
        </span>
      </div>

      {/* Profile photo */}
      <div className="animate-scale-in opacity-0 relative" style={{ animationDelay: "0.1s" }}>
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl scale-110" />
        <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-background shadow-2xl">
          <img src={profilePhoto} alt="Firman Pambudiansyah" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Name */}
      <div className="animate-slide-up opacity-0" style={{ animationDelay: "0.15s" }}>
        <h1 className="font-display text-4xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
          Firman <span className="text-gradient">Pambudiansyah</span>
        </h1>
      </div>

      {/* Tagline */}
      <div className="animate-slide-up opacity-0" style={{ animationDelay: "0.2s" }}>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
          Turning raw data into <span className="font-semibold text-foreground">decisions that move businesses</span> — through predictive models, interactive dashboards, and SAP implementations.
        </p>
      </div>

      {/* Info chips */}
      <div className="animate-slide-up opacity-0 flex flex-wrap justify-center gap-2" style={{ animationDelay: "0.25s" }}>
        {[
          { icon: MapPin, text: "Jakarta, ID" },
          { icon: Star, text: "GPA 3.88 · Cum Laude" },
          { icon: Briefcase, text: "2+ Years in Data & IT" },
          { icon: GraduationCap, text: "Gunadarma University" },
        ].map((chip) => (
          <span key={chip.text} className="inline-flex items-center gap-1.5 px-3 py-1.5 glass text-muted-foreground text-xs font-medium rounded-full border border-border/50">
            <chip.icon className="w-3.5 h-3.5 text-primary" />
            {chip.text}
          </span>
        ))}
      </div>

      {/* CTAs */}
      <div className="animate-slide-up opacity-0 flex flex-wrap justify-center gap-3 pt-2" style={{ animationDelay: "0.3s" }}>
        <Button asChild className="rounded-full px-8 shadow-lg shadow-primary/20">
          <a href={cvFile} target="_blank" rel="noopener noreferrer">
            <Download className="mr-2 h-4 w-4" /> Download CV
          </a>
        </Button>
        <Button variant="outline" asChild className="rounded-full px-8">
          <Link to="/contact">Let's Talk <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </div>

      {/* Scroll indicator */}
      <div className="animate-bounce pt-4 text-muted-foreground/40">
        <ChevronDown className="w-6 h-6" />
      </div>
    </div>
  </div>
</section>
```

Add `ChevronDown` to lucide-react imports.

**Step 2: Verify in browser** — centered hero with animated gradient, photo, chips, CTAs visible.

**Step 3: Commit**
```bash
git add src/pages/About.tsx
git commit -m "feat: redesign About hero section centered layout"
```

---

### Task 3: Impact Numbers Section

**Files:**
- Modify: `src/pages/About.tsx` — replace toggle section (lines ~282–451) with impact numbers

**Step 1: Replace toggle section with impact numbers JSX**

```tsx
{/* ── Impact Numbers Section ── */}
<section className="py-20 md:py-28 bg-muted/20" aria-labelledby="impact-heading">
  <div className="container">
    <div className="text-center mb-14">
      <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary mb-3">What I've Delivered</span>
      <h2 id="impact-heading" className="font-display text-3xl md:text-4xl font-extrabold text-foreground">Measurable Business Impact</h2>
    </div>

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
      {[
        { value: "30%", label: "Dead Stock Reduction", ref: "SAP Inventory Management", color: "text-primary", glow: "group-hover:shadow-primary/20" },
        { value: "94%", label: "Cosine Similarity", ref: "Book Recommendation System", color: "text-cyan-500", glow: "group-hover:shadow-cyan-500/20" },
        { value: "2.53%", label: "MAPE Accuracy", ref: "LSTM BBCA Stock Prediction", color: "text-emerald-500", glow: "group-hover:shadow-emerald-500/20" },
        { value: "3 Days", label: "Reporting Time Saved", ref: "Financial Dashboard · /mo", color: "text-orange-500", glow: "group-hover:shadow-orange-500/20" },
      ].map((stat, i) => (
        <div
          key={stat.label}
          className={cn("group animate-slide-up opacity-0 p-6 md:p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/20 hover:shadow-xl transition-all duration-500 text-center", stat.glow)}
          style={{ animationDelay: `${i * 0.1}s` }}
        >
          <p className={cn("font-display font-black text-5xl md:text-6xl lg:text-7xl leading-none mb-3 group-hover:scale-105 transition-transform duration-300", stat.color)}>
            {stat.value}
          </p>
          <p className="text-sm font-bold text-foreground uppercase tracking-wide mb-1">{stat.label}</p>
          <p className="text-xs text-muted-foreground">{stat.ref}</p>
        </div>
      ))}
    </div>

    <div className="text-center mt-10">
      <Button variant="ghost" asChild className="group text-primary rounded-full">
        <Link to="/projects">View All Projects <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" /></Link>
      </Button>
    </div>
  </div>
</section>
```

**Step 2: Verify** — 4 big editorial numbers visible on muted background.

**Step 3: Commit**
```bash
git add src/pages/About.tsx
git commit -m "feat: add impact numbers section, remove toggle"
```

---

### Task 4: Technical Skills Section

**Files:**
- Modify: `src/pages/About.tsx` — add after impact numbers

**Step 1: Add skills section JSX**

```tsx
{/* ── Technical Skills Section ── */}
<section className="py-20 md:py-28 bg-background" aria-labelledby="skills-heading">
  <div className="container max-w-5xl">
    <div className="text-center mb-14">
      <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary mb-3">What I Work With</span>
      <h2 id="skills-heading" className="font-display text-3xl md:text-4xl font-extrabold text-foreground">Technical Arsenal</h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      {[
        {
          label: "Programming", icon: Code2,
          skills: [
            { name: "Python", logo: pythonLogo, level: "Expert" },
            { name: "SQL", logo: sqlLogo, level: "Expert" },
            { name: "TypeScript", logo: tsLogo, level: "Advanced" },
          ]
        },
        {
          label: "BI & Data Tools", icon: BarChart3,
          skills: [
            { name: "Power BI", logo: powerBILogo, level: "Expert" },
            { name: "Looker Studio", logo: lookerLogo, level: "Advanced" },
            { name: "BigQuery", logo: bigQueryLogo, level: "Advanced" },
          ]
        },
        {
          label: "Enterprise & Other", icon: Database,
          skills: [
            { name: "SAP S/4HANA", logo: sapLogo, level: "Advanced" },
            { name: "Excel", logo: excelLogo, level: "Expert" },
            { name: "Figma", logo: figmaLogo, level: "Intermediate" },
          ]
        },
      ].map((cat, ci) => (
        <div key={cat.label} className="animate-slide-up opacity-0 space-y-3" style={{ animationDelay: `${ci * 0.1}s` }}>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <cat.icon className="w-4 h-4 text-primary" />
            </div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">{cat.label}</h3>
          </div>
          {cat.skills.map((sk) => (
            <div key={sk.name} className="group flex items-center justify-between p-3 rounded-xl border border-border/50 bg-card hover:border-primary/30 hover:bg-primary/5 hover:shadow-sm transition-all duration-200">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center p-1.5">
                  <img src={sk.logo} alt={sk.name} className="w-full h-full object-contain" loading="lazy" />
                </div>
                <span className="text-sm font-medium text-foreground">{sk.name}</span>
              </div>
              <span className={cn(
                "text-xs font-bold px-2 py-0.5 rounded-full",
                sk.level === "Expert" ? "bg-primary/10 text-primary" :
                sk.level === "Advanced" ? "bg-cyan-500/10 text-cyan-600" :
                "bg-muted text-muted-foreground"
              )}>{sk.level}</span>
            </div>
          ))}
        </div>
      ))}
    </div>

    {/* Full tech stack icon row */}
    <div className="pt-6 border-t border-border/50">
      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4 text-center">Full Stack</p>
      <div className="flex flex-wrap justify-center gap-3">
        {techStackIcons.map((tech) => (
          <div key={tech.name} className="group flex items-center gap-2 px-3 py-2 rounded-lg bg-card border border-border/50 hover:border-primary/40 hover:bg-primary/5 transition-all duration-200">
            <img src={tech.logo} alt={tech.name} className="w-5 h-5 object-contain" loading="lazy" />
            <span className="text-xs font-medium text-foreground">{tech.name}</span>
          </div>
        ))}
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-card border border-border/50">
          <img src={githubLogo} alt="GitHub" className="w-5 h-5 object-contain" loading="lazy" />
          <span className="text-xs font-medium text-foreground">GitHub</span>
        </div>
      </div>
    </div>
  </div>
</section>
```

Note: `figmaLogo` and `githubLogo` are already imported in the existing About.tsx.

**Step 2: Verify** — 3 skill category columns + full stack row visible.

**Step 3: Commit**
```bash
git add src/pages/About.tsx
git commit -m "feat: add technical skills section with proficiency tags"
```

---

### Task 5: Education Section Redesign

**Files:**
- Modify: `src/pages/About.tsx` — replace existing education section (lines ~454–547)

**Step 1: Replace education JSX**

```tsx
{/* ── Education Section ── */}
<section className="py-20 md:py-28 bg-muted/20" id="education" aria-labelledby="edu-heading">
  <div className="container max-w-4xl">
    <div className="text-center mb-14">
      <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary mb-3">
        <GraduationCap className="inline w-3.5 h-3.5 mr-1" />Academic Background
      </span>
      <h2 id="edu-heading" className="font-display text-3xl md:text-4xl font-extrabold text-foreground">Education</h2>
    </div>

    <div className="space-y-6">
      {[
        {
          school: "Gunadarma University",
          degree: "Bachelor of Information Systems",
          year: "Sep 2023 – Present",
          desc: "Focused on Data Science, Business Intelligence, and ERP Systems with practical project implementations.",
          achievement: { label: "GPA", value: "3.88" },
          honor: "Cum Laude",
          logo: gunadarmaLogo,
          courses: ["Data Science", "Business Intelligence", "Database Mgmt", "Machine Learning", "ERP Systems", "Statistics"],
          color: "bg-blue-500/10 text-blue-600",
        },
        {
          school: "SMA Negeri 5 Jakarta",
          degree: "Natural Sciences (IPA)",
          year: "Jul 2020 – Jun 2023",
          desc: "Built strong foundations in mathematics and analytical thinking.",
          achievement: { label: "Score", value: "89.67" },
          honor: "Outstanding Student",
          logo: sman5Logo,
          courses: ["Mathematics", "Physics", "Chemistry", "Biology"],
          color: "bg-emerald-500/10 text-emerald-600",
        },
      ].map((edu, i) => (
        <Card key={edu.school}
          className={cn("animate-slide-up opacity-0 border-border/50 bg-card hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 rounded-3xl overflow-hidden")}
          style={{ animationDelay: `${i * 0.15}s` }}
        >
          <CardContent className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Logo */}
              <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white border border-border/50 flex items-center justify-center shadow-sm overflow-hidden p-2">
                <img src={edu.logo} alt={edu.school} className="w-full h-full object-contain" />
              </div>

              {/* Content */}
              <div className="flex-1 space-y-3">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-extrabold text-foreground">{edu.school}</h3>
                    <p className="text-muted-foreground font-medium">{edu.degree}</p>
                  </div>
                  <Badge variant="outline" className="border-primary/20 text-primary font-semibold whitespace-nowrap">
                    <Calendar className="w-3 h-3 mr-1" />{edu.year}
                  </Badge>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">{edu.desc}</p>

                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <Badge className={cn("font-bold", edu.color)}>
                    <Star className="w-3 h-3 mr-1 fill-current" />
                    {edu.achievement.label}: {edu.achievement.value}
                  </Badge>
                  <Badge variant="outline" className="border-border text-muted-foreground">{edu.honor}</Badge>
                </div>

                {/* Relevant courses */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {edu.courses.map(c => (
                    <span key={c} className="px-2 py-0.5 text-xs bg-muted text-muted-foreground rounded-full border border-border/50">{c}</span>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>
```

**Step 2: Verify** — horizontal cards with big logos, year badges, course chips.

**Step 3: Commit**
```bash
git add src/pages/About.tsx
git commit -m "feat: redesign education section horizontal cards"
```

---

### Task 6: Certifications + Languages + CTA Sections

**Files:**
- Modify: `src/pages/About.tsx` — replace existing certifications, languages, and end sections

**Step 1: Replace certifications section**

```tsx
{/* ── Certifications Section ── */}
<section className="py-20 md:py-28 bg-background" id="certifications" aria-labelledby="cert-heading">
  <div className="container max-w-5xl">
    <div className="flex items-center justify-between mb-12">
      <div>
        <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary mb-2">Credentials</span>
        <h2 id="cert-heading" className="font-display text-3xl md:text-4xl font-extrabold text-foreground">Certifications & Workshops</h2>
      </div>
      <Button variant="outline" size="sm" asChild className="hidden md:flex rounded-full">
        <Link to="/certifications">View All <ArrowRight className="ml-1 h-3 w-3" /></Link>
      </Button>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {certificationsData.slice(0, 6).map((cert, i) => (
        <Link to={`/certifications/${cert.id}`} key={cert.id} className="group animate-slide-up opacity-0" style={{ animationDelay: `${i * 0.07}s` }}>
          <Card className="hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 h-full rounded-2xl border-border/50">
            <CardContent className="p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors border border-border/50">
                {cert.isImage && cert.icon
                  ? <img src={cert.icon} alt={cert.title} className="w-7 h-7 object-contain" loading="lazy" />
                  : <Award className="h-6 w-6 text-primary" />
                }
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold text-primary uppercase tracking-wider mb-0.5">{cert.issuer}</p>
                <h4 className="text-sm font-bold text-foreground leading-tight line-clamp-2">{cert.title}</h4>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-200 flex-shrink-0" />
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>

    <div className="mt-6 md:hidden">
      <Button variant="outline" className="w-full rounded-xl" asChild>
        <Link to="/certifications">View All Certifications</Link>
      </Button>
    </div>
  </div>
</section>
```

**Step 2: Replace Languages section**

```tsx
{/* ── Languages ── */}
<section className="py-16 bg-muted/20" aria-labelledby="lang-heading">
  <div className="container max-w-3xl">
    <div className="text-center mb-10">
      <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary mb-2">Communication</span>
      <h2 id="lang-heading" className="font-display text-2xl md:text-3xl font-extrabold text-foreground">Languages</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[
        { name: "Indonesian", level: 100, proficiency: "Native / Fluent", flag: "🇮🇩" },
        { name: "English", level: 70, proficiency: "Professional Working", flag: "🇺🇸" },
      ].map((l) => (
        <Card key={l.name} className="border-border/50 hover:border-primary/30 hover:shadow-lg transition-all rounded-2xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{l.flag}</span>
                <div>
                  <h4 className="font-bold text-foreground">{l.name}</h4>
                  <Badge variant="secondary" className="mt-1 bg-primary/10 text-primary border-0 text-[10px] font-bold uppercase tracking-wider">{l.proficiency}</Badge>
                </div>
              </div>
              <span className="text-2xl font-black text-primary">{l.level}%</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-primary to-cyan-400 rounded-full" style={{ width: `${l.level}%` }} />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>
```

**Step 3: Replace CTA section**

```tsx
{/* ── CTA Section ── */}
<section className="py-20 md:py-28 relative overflow-hidden" aria-labelledby="cta-about-heading">
  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-cyan-500/5 to-transparent -z-10" />
  <div className="container">
    <div className="glass max-w-2xl mx-auto p-10 md:p-16 rounded-[3rem] text-center space-y-6 border-2 border-primary/10 shadow-2xl">
      <h2 id="cta-about-heading" className="font-display text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
        Let's Build Something <span className="text-gradient">Together</span>
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Open to full-time roles, freelance projects, and collaborative opportunities.
      </p>
      <div className="flex flex-wrap justify-center gap-3 pt-2">
        <Button size="lg" asChild className="rounded-full px-8 shadow-lg shadow-primary/20">
          <Link to="/contact"><Mail className="mr-2 h-4 w-4" />Start a Conversation</Link>
        </Button>
        <Button size="lg" variant="outline" asChild className="rounded-full px-8 border-2">
          <a href="https://github.com/Alarave" target="_blank" rel="noopener noreferrer">
            GitHub <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>
  </div>
</section>
```

Add `Mail` to lucide-react imports if not already present.

**Step 4: Verify** — all 3 sections visible and styled correctly.

**Step 5: Commit**
```bash
git add src/pages/About.tsx
git commit -m "feat: redesign certifications, languages, and CTA sections"
```

---

### Task 7: Cleanup + Apply font-display to All Headings

**Files:**
- Modify: `src/pages/About.tsx` — audit all `<h1>`, `<h2>`, `<h3>` and add `font-display` class

**Step 1:** Search all heading tags in the file and ensure they have `font-display` class:
- All `<h2>` section headings → add `font-display`
- `<h3>` card titles → add `font-display`

**Step 2:** Remove these now-unused imports from About.tsx:
- `ShieldCheck`, `BookOpen`, `Laptop`, `Target`, `School`, `TrendingUp` (check usage first)
- Remove `viewMode` state and `SkillBar` component (replaced by new skills section)
- Remove `programmingSkills`, `biTools`, `otherSkills` arrays
- Remove `conferences` array (not used in new design)

**Step 3: Verify** — no TypeScript/ESLint errors. Run in browser and check all sections.

**Step 4: Commit**
```bash
git add src/pages/About.tsx
git commit -m "feat: cleanup unused code, apply font-display to all headings"
```

---

### Task 8: Final Visual Check

**Step 1:** Open `http://localhost:8080/about` in browser.

**Step 2:** Check each section:
- [ ] Hero: centered, gradient bg, photo, chips, CTAs, scroll arrow
- [ ] Impact Numbers: 4 big editorial stats, muted bg
- [ ] Skills: 3 category columns + full stack row
- [ ] Education: horizontal cards, big logos, course chips
- [ ] Certifications: 2-col grid, hover effects
- [ ] Languages: progress bars
- [ ] CTA: glassmorphism card, centered

**Step 3:** Check mobile (resize to 375px width):
- [ ] All sections stack correctly
- [ ] No horizontal overflow
- [ ] Text remains readable

**Step 4: Final commit**
```bash
git add -A
git commit -m "feat: complete About page full redesign"
```
