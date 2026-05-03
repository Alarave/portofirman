import { Layout } from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  GraduationCap,
  Award,
  BookOpen,
  ShieldCheck,
  ArrowRight,
  Globe,
  Code2,
  BarChart3,
  Database,
  Calendar,
  MapPin,
  Star,
  Laptop,
  Download,
  Briefcase,
  TrendingUp,
  Target,
  School,
} from "lucide-react";
import { Link } from "react-router-dom";
import { certificationsData } from "./CertificationDetail";
import profilePhoto from "@/assets/profile-photo.jpg";
import cvFile from "@/assets/cv.pdf";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

// ── Tech Stack Icons ──────────────────────────────────────────────────────────
import pythonLogo from "@/assets/projects/python.png";
import sqlLogo from "@/assets/projects/sql.jpg";
import tsLogo from "@/assets/projects/TypeScript.png";
import powerBILogo from "@/assets/projects/Power_BI.png";
import lookerLogo from "@/assets/projects/Looker.png";
import bigQueryLogo from "@/assets/projects/bigquery.png";
import sapLogo from "@/assets/projects/sap.png";
import excelLogo from "@/assets/projects/excel.png";
import figmaLogo from "@/assets/projects/figma.png";
import githubLogo from "@/assets/projects/github.png";
import gunadarmaLogo from "@/assets/logo/gunadarma_logo.jpg";
import sman5Logo from "@/assets/logo/sman5_logo.png";

const techStackIcons = [
  { name: "Python", logo: pythonLogo },
  { name: "SQL", logo: sqlLogo },
  { name: "TypeScript", logo: tsLogo },
  { name: "Power BI", logo: powerBILogo },
  { name: "Looker Studio", logo: lookerLogo },
  { name: "BigQuery", logo: bigQueryLogo },
  { name: "SAP S/4HANA", logo: sapLogo },
  { name: "Excel", logo: excelLogo },
];

// ── Skills Data ───────────────────────────────────────────────────────────────
const programmingSkills = [
  { name: "Python", level: 85 },
  { name: "SQL", level: 90 },
  { name: "TypeScript", level: 75 },
];
const biTools = [
  { name: "Power BI", level: 85 },
  { name: "Looker Studio", level: 80 },
  { name: "Google BigQuery", level: 75 },
  { name: "SAP Cloud Analytics", level: 80 },
];
const otherSkills = [
  { name: "Microsoft Excel", level: 90 },
  { name: "SAP S/4HANA", level: 85 },
  { name: "Figma", level: 70 },
  { name: "GitHub", level: 75 },
];

const languages = [
  { name: "Indonesian", level: 100, proficiency: "Native / Fluent", flag: "🇮🇩" },
  { name: "English", level: 70, proficiency: "Professional Working", flag: "🇺🇸" },
];

const relevantCourses = [
  "Data Science",
  "Business Intelligence",
  "Database Management",
  "Statistics",
  "Machine Learning",
  "Information Systems",
  "ERP Systems",
];

const conferences = [
  {
    title: "EECSI 2025",
    description: "International Conference on Electrical Engineering, Computer Science and Informatics",
    year: "September 2025",
    type: "Conference",
  },
  {
    title: "ASEAN Data Analytics - SAP Workshop",
    description: "SAP Analytics Cloud and Data Integration Workshop",
    year: "November 2024",
    type: "Workshop",
  },
  {
    title: "PWC Workshop",
    description: "Professional Development and Business Analytics",
    year: "May 2024",
    type: "Workshop",
  },
];

// ── Skill Bar Component ───────────────────────────────────────────────────────
const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: string }) => {
  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="space-y-2 animate-slide-up opacity-0" style={{ animationDelay: delay }}>
      <div className="flex justify-between text-sm">
        <span className="font-medium text-foreground/80">{name}</span>
        <span className="font-bold text-primary">{level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-primary transition-all duration-1000 ease-out"
          style={{ width: animated ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
};

// ── Main About Component ──────────────────────────────────────────────────────
const About = () => {
  const [viewMode, setViewMode] = useState<"business" | "technical">("business");

  return (
    <Layout>
      {/* ── Hero Section with Hook-Value-Proof-CTA ── */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-muted/40 to-background" id="hero">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Profile Photo */}
            <div className="lg:col-span-4 animate-scale-in opacity-0">
              <div className="relative max-w-sm mx-auto lg:mx-0">
                <div className="aspect-square rounded-3xl overflow-hidden border-4 border-background shadow-2xl">
                  <img
                    src={profilePhoto}
                    alt="Firman Pambudiansyah — Data Scientist & BI Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-5 rounded-2xl shadow-xl animate-float">
                  <p className="text-lg font-extrabold">3.88 GPA</p>
                  <p className="text-xs uppercase tracking-wider opacity-90">Cum Laude</p>
                </div>
              </div>
            </div>

            {/* Hook-Value-Proof-CTA Content */}
            <div className="lg:col-span-8 space-y-6">
              {/* Badge */}
              <div className="animate-fade-in opacity-0">
                <Badge
                  variant="outline"
                  className="mb-3 px-3 py-1 border-primary/20 bg-primary/5 text-primary font-semibold"
                >
                  About My Journey
                </Badge>

                {/* HOOK: Kalimat pembuka kuat */}
                <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3 leading-tight tracking-tight">
                  Data Scientist specializing in{" "}
                  <span className="text-gradient">Predictive Analytics</span> and{" "}
                  <span className="text-gradient">Business Intelligence</span>
                </h1>

                <p className="text-lg text-muted-foreground font-medium flex items-center gap-2 mb-4">
                  <Laptop className="h-5 w-5 text-primary" aria-hidden="true" />
                  Helping businesses make accurate and measurable data-driven decisions
                </p>
              </div>

              {/* VALUE: Masalah yang diselesaikan */}
              <div className="animate-slide-up opacity-0" style={{ animationDelay: "0.1s" }}>
                <p className="text-base text-muted-foreground leading-relaxed mb-3">
                  I transform <span className="font-bold text-foreground">complex raw data</span>{" "}
                  into <span className="font-bold text-foreground">actionable insights</span> to reduce
                  operational costs, optimize stock efficiency, and predict business trends with high accuracy.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Experienced in working under <span className="font-bold text-foreground">tight deadlines</span> and quickly
                  adapting to new technology stacks — from Python and SQL to SAP S/4HANA and Looker Studio.
                </p>
              </div>

              {/* PROOF: Tech Stack Visual + Pencapaian */}
              <div className="animate-slide-up opacity-0" style={{ animationDelay: "0.2s" }}>
                <div className="flex flex-wrap gap-3 items-center mb-4">
                  {techStackIcons.slice(0, 6).map((tech) => (
                    <div
                      key={tech.name}
                      className="group relative w-10 h-10 rounded-lg bg-muted/60 border border-border/50 flex items-center justify-center hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 p-1.5"
                      title={tech.name}
                    >
                      <img
                        src={tech.logo}
                        alt={tech.name}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                      {/* Tooltip */}
                      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-zinc-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                  <span className="text-xs text-muted-foreground font-medium">+4 more</span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    { icon: Target, label: "MAPE 2.3%", sublabel: "Stock Prediction" },
                    { icon: TrendingUp, label: "94% Accuracy", sublabel: "Recommendation" },
                    { icon: Briefcase, label: "30% Efficiency", sublabel: "SAP Inventory" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="p-3 rounded-xl border border-border bg-card/50 hover:border-primary/30 hover:bg-primary/5 transition-all"
                    >
                      <item.icon className="w-5 h-5 text-primary mb-1" aria-hidden="true" />
                      <p className="text-sm font-bold text-foreground">{item.label}</p>
                      <p className="text-xs text-muted-foreground">{item.sublabel}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA: Download CV + Contact */}
              <div
                className="animate-slide-up opacity-0 flex flex-wrap gap-3 pt-2"
                style={{ animationDelay: "0.3s" }}
              >
                <Button asChild className="rounded-full px-6 shadow-lg shadow-primary/20">
                  <a href={cvFile} target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" aria-hidden="true" />
                    Download CV
                  </a>
                </Button>
                <Button variant="outline" asChild className="rounded-full px-6">
                  <Link to="/contact">Interested in Collaborating?</Link>
                </Button>
              </div>

              {/* Quick Info Tags */}
              <div
                className="animate-slide-up opacity-0 flex flex-wrap gap-3 pt-2"
                style={{ animationDelay: "0.4s" }}
              >
                {[
                  { icon: MapPin, text: "Jakarta, ID" },
                  { icon: GraduationCap, text: "Gunadarma University" },
                  { icon: Star, text: "3.88 GPA" },
                  { icon: Laptop, text: "Information Systems" },
                ].map((tag) => (
                  <span
                    key={tag.text}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 glass text-muted-foreground text-xs font-medium rounded-full border border-border/50"
                  >
                    <tag.icon className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
                    {tag.text}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Toggle: Business Impact vs Technical Stack ── */}
      <section className="py-12 md:py-16 border-y border-border/50 bg-muted/20" id="toggle-view">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Toggle Buttons */}
            <div
              className="flex justify-center gap-2 mb-8"
              role="tablist"
              aria-label="View mode toggle"
            >
              <button
                role="tab"
                aria-selected={viewMode === "business"}
                aria-controls="business-panel"
                onClick={() => setViewMode("business")}
                className={cn(
                  "flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                  viewMode === "business"
                    ? "bg-primary text-primary-foreground border-primary shadow-md"
                    : "bg-background text-muted-foreground border-border hover:border-primary/30 hover:text-foreground"
                )}
              >
                <Briefcase className="w-4 h-4" aria-hidden="true" />
                Business Impact
              </button>
              <button
                role="tab"
                aria-selected={viewMode === "technical"}
                aria-controls="technical-panel"
                onClick={() => setViewMode("technical")}
                className={cn(
                  "flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                  viewMode === "technical"
                    ? "bg-primary text-primary-foreground border-primary shadow-md"
                    : "bg-background text-muted-foreground border-border hover:border-primary/30 hover:text-foreground"
                )}
              >
                <Code2 className="w-4 h-4" aria-hidden="true" />
                Tech Stack
              </button>
            </div>

            {/* Business Impact Panel */}
            {viewMode === "business" && (
              <div
                id="business-panel"
                role="tabpanel"
                aria-labelledby="business-tab"
                className="animate-fade-in space-y-6"
              >
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-foreground mb-2">Business Impact</h2>
                  <p className="text-muted-foreground text-sm">
                    Measurable results from projects I have completed
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      metric: "30%",
                      label: "Dead Stock Reduction",
                      desc: "SAP Inventory Management — automated reorder notifications",
                      color: "text-primary",
                    },
                    {
                      metric: "3 Days",
                      label: "Reporting Time Saved",
                      desc: "Financial Dashboard — from manual to real-time",
                      color: "text-cyan-600",
                    },
                    {
                      metric: "MAPE 2.3%",
                      label: "Stock Prediction Accuracy",
                      desc: "LSTM Model — BBCA price prediction with R² 0.94",
                      color: "text-emerald-600",
                    },
                  ].map((item) => (
                    <Card
                      key={item.label}
                      className="border-border/50 hover:border-primary/30 hover:shadow-lg transition-all"
                    >
                      <CardContent className="p-5 text-center space-y-2">
                        <p className={cn("text-3xl font-extrabold", item.color)}>{item.metric}</p>
                        <p className="text-sm font-bold text-foreground">{item.label}</p>
                        <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="text-center pt-4">
                  <Button variant="ghost" asChild className="group text-primary">
                    <Link to="/projects">
                      View All Projects
                      <ArrowRight
                        className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  </Button>
                </div>
              </div>
            )}

            {/* Technical Stack Panel */}
            {viewMode === "technical" && (
              <div
                id="technical-panel"
                role="tabpanel"
                aria-labelledby="technical-tab"
                className="animate-fade-in space-y-6"
              >
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-foreground mb-2">Technical Stack</h2>
                  <p className="text-muted-foreground text-sm">
                    Tools and technologies I have mastered to build data solutions
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Programming */}
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-primary" aria-hidden="true" />
                      Programming
                    </h4>
                    {programmingSkills.map((s, i) => (
                      <SkillBar key={s.name} name={s.name} level={s.level} delay={`${i * 0.1}s`} />
                    ))}
                  </div>

                  {/* BI Tools */}
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-primary" aria-hidden="true" />
                      BI Tools
                    </h4>
                    {biTools.map((s, i) => (
                      <SkillBar key={s.name} name={s.name} level={s.level} delay={`${i * 0.1}s`} />
                    ))}
                  </div>
                </div>

                {/* Tech Stack Icons Grid */}
                <div className="pt-4">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
                    Full Stack
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {techStackIcons.map((tech) => (
                      <div
                        key={tech.name}
                        className="group relative flex items-center gap-2 px-3 py-2 rounded-lg bg-card border border-border/50 hover:border-primary/40 hover:bg-primary/5 transition-all"
                      >
                        <img
                          src={tech.logo}
                          alt={tech.name}
                          className="w-5 h-5 object-contain"
                          loading="lazy"
                        />
                        <span className="text-xs font-medium text-foreground">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Education ── */}
      <section className="py-20 md:py-28" id="education">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                  <GraduationCap className="w-4 h-4" />
                  Academic Background
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">Education</h2>
              </div>
            </div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:left-8 md:before:left-[31px] before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary/50 before:via-primary/20 before:to-transparent">
              {[
                {
                  school: "Gunadarma University",
                  sub: "Bachelor of Information Systems",
                  year: "September 2023 - Present",
                  desc: "Focused on Data Science, Business Intelligence, and ERP Systems. Maintaining a high academic standard with practical implementations.",
                  gpa: "3.88",
                  honor: "Cum Laude",
                  logo: gunadarmaLogo,
                  color: "bg-blue-500",
                },
                {
                  school: "SMA Negeri 5 Jakarta",
                  sub: "Natural Sciences (IPA)",
                  year: "July 2020 - June 2023",
                  desc: "Developed a strong foundation in mathematics and analytical thinking during my high school years.",
                  score: "89.67",
                  honor: "Outstanding Student",
                  logo: sman5Logo,
                  color: "bg-emerald-500",
                },
              ].map((edu, index) => (
                <div key={edu.school} className="relative pl-16 md:pl-20 group">
                  {/* Timeline Dot/Icon */}
                  <div className="absolute left-0 top-0 w-16 h-16 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-background border-4 border-primary z-10 group-hover:scale-150 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-primary/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 blur-xl" />
                  </div>

                  <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 rounded-3xl overflow-hidden">
                    <CardContent className="p-6 md:p-8">
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                        <div className="space-y-4 flex-1">
                          <div className="space-y-1">
                            <span className="text-sm font-bold text-primary tracking-wide uppercase">
                              {edu.year}
                            </span>
                            <h3 className="text-2xl font-extrabold text-foreground leading-tight">
                              {edu.school}
                            </h3>
                            <p className="text-lg font-semibold text-muted-foreground">
                              {edu.sub}
                            </p>
                          </div>
                          
                          <p className="text-muted-foreground leading-relaxed">
                            {edu.desc}
                          </p>

                          <div className="flex flex-wrap gap-3 pt-2">
                            {edu.gpa && (
                              <Badge variant="secondary" className="bg-primary/10 text-primary border-0 px-3 py-1 font-bold">
                                GPA: {edu.gpa}
                              </Badge>
                            )}
                            {edu.score && (
                              <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-600 border-0 px-3 py-1 font-bold">
                                Score: {edu.score}
                              </Badge>
                            )}
                            <Badge variant="outline" className="border-primary/20 text-muted-foreground px-3 py-1">
                              {edu.honor}
                            </Badge>
                          </div>
                        </div>

                        {/* Visual element / School Logo */}
                        <div className="hidden md:flex w-24 h-24 rounded-2xl bg-white items-center justify-center border border-border/50 group-hover:border-primary/20 shadow-sm transition-all duration-500 overflow-hidden p-2">
                          <img src={edu.logo} alt={edu.school} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Languages ── */}
      <section className="py-20 md:py-28 bg-muted/20" id="languages">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Globe className="h-5 w-5 text-primary" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-bold">Languages</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {languages.map((l) => (
                <Card key={l.name} className="group border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 rounded-2xl overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-background border border-border/50 flex items-center justify-center text-3xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                          {l.flag}
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-foreground">{l.name}</h4>
                          <Badge variant="secondary" className="mt-1 bg-primary/10 text-primary border-0 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                            {l.proficiency}
                          </Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-bold text-muted-foreground/60 block">Proficiency</span>
                        <span className="text-xl font-black text-primary">{l.level}%</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary to-cyan-400 transition-all duration-1000 ease-out" 
                          style={{ width: `${l.level}%` }} 
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Certifications & Workshops ── */}
      <section className="py-20 md:py-28" id="certifications">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Award className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <h2 className="text-2xl font-bold">Certifications & Workshops</h2>
              </div>
              <Button variant="outline" size="sm" asChild className="hidden md:flex rounded-full">
                <Link to="/certifications">View All</Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certificationsData.slice(0, 6).map((cert) => (
                <Link to={`/certifications/${cert.id}`} key={cert.id} className="group">
                  <Card className="hover:border-primary/50 hover:bg-primary/[0.02] hover:shadow-lg transition-all duration-300 h-full rounded-2xl overflow-hidden border-border/50">
                    <CardContent className="p-5 flex items-center gap-5">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                        {cert.isImage && cert.icon ? (
                          <img
                            src={cert.icon}
                            alt={cert.title}
                            className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300"
                            loading="lazy"
                          />
                        ) : (
                          <Award className="h-7 w-7 text-primary" aria-hidden="true" />
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-bold text-primary mb-1 uppercase tracking-wider">{cert.issuer}</p>
                        <h4 className="text-base font-bold text-foreground leading-tight line-clamp-1">{cert.title}</h4>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 flex-shrink-0">
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="mt-10 md:hidden">
              <Button variant="outline" className="w-full rounded-xl" asChild>
                <Link to="/certifications">View All Documentation</Link>
              </Button>
            </div>
            
            <div className="hidden md:block mt-12 text-center">
              <p className="text-muted-foreground text-sm mb-6 italic">
                Actively pursuing new certifications to stay at the forefront of AI and Data Science.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
