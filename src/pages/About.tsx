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
    year: "2025",
    type: "Conference",
  },
  {
    title: "ASEAN Data Analytics - SAP Workshop",
    description: "SAP Analytics Cloud and Data Integration Workshop",
    year: "2024",
    type: "Workshop",
  },
  {
    title: "PWC Workshop",
    description: "Professional Development and Business Analytics",
    year: "2024",
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
                  Data Scientist dengan spesialisasi{" "}
                  <span className="text-gradient">Predictive Analytics</span> dan{" "}
                  <span className="text-gradient">Business Intelligence</span>
                </h1>

                <p className="text-lg text-muted-foreground font-medium flex items-center gap-2 mb-4">
                  <Laptop className="h-5 w-5 text-primary" aria-hidden="true" />
                  Membantu bisnis mengambil keputusan berbasis data yang akurat dan terukur
                </p>
              </div>

              {/* VALUE: Masalah yang diselesaikan */}
              <div className="animate-slide-up opacity-0" style={{ animationDelay: "0.1s" }}>
                <p className="text-base text-muted-foreground leading-relaxed mb-3">
                  Saya mengubah <span className="font-bold text-foreground">data mentah yang kompleks</span>{" "}
                  menjadi <span className="font-bold text-foreground">actionable insights</span> untuk mengurangi
                  biaya operasional, meningkatkan efisiensi stok, dan memprediksi tren bisnis dengan akurasi tinggi.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Terbiasa bekerja dalam <span className="font-bold text-foreground">deadline ketat</span> dan cepat
                  beradaptasi dengan stack teknologi baru — dari Python dan SQL hingga SAP S/4HANA dan Looker Studio.
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
                    { icon: TrendingUp, label: "Akurasi 94%", sublabel: "Recommendation" },
                    { icon: Briefcase, label: "30% Efisiensi", sublabel: "SAP Inventory" },
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
                  <Link to="/contact">Tertarik Berkolaborasi?</Link>
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
                    Hasil terukur dari proyek yang telah saya kerjakan
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      metric: "30%",
                      label: "Pengurangan Dead Stock",
                      desc: "SAP Inventory Management — otomasi reorder notification",
                      color: "text-primary",
                    },
                    {
                      metric: "3 Hari",
                      label: "Waktu Laporan Dihemat",
                      desc: "Financial Dashboard — dari manual ke real-time",
                      color: "text-cyan-600",
                    },
                    {
                      metric: "MAPE 2.3%",
                      label: "Akurasi Prediksi Saham",
                      desc: "LSTM Model — prediksi harga BBCA dengan R² 0.94",
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
                      Lihat Semua Proyek
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
                    Tools dan teknologi yang saya kuasai untuk membangun solusi data
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
      <section className="py-12 md:py-16" id="education">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="h-6 w-6 text-primary" aria-hidden="true" />
              <h2 className="text-2xl font-bold">Education</h2>
            </div>
            <div className="space-y-6">
              {[
                {
                  school: "Gunadarma University",
                  sub: "Bachelor of Information Systems",
                  year: "2023 - Present",
                  desc: "Fokus pada Data Science, Business Intelligence, dan ERP Systems dengan GPA 3.88 (Cum Laude).",
                },
                {
                  school: "SMA Negeri 5 Jakarta",
                  sub: "Natural Sciences (IPA)",
                  year: "2020 - 2023",
                  desc: "Lulus dengan nilai rata-rata 89.67.",
                },
              ].map((edu) => (
                <div
                  key={edu.school}
                  className="relative pl-6 border-l-2 border-primary/20 py-2 hover:border-primary/40 transition-colors"
                >
                  <div className="absolute -left-[9px] top-4 w-4 h-4 rounded-full bg-primary" />
                  <span className="text-xs font-bold text-primary mb-1 block">{edu.year}</span>
                  <h3 className="text-lg font-bold text-foreground">{edu.school}</h3>
                  <p className="text-sm font-semibold text-muted-foreground mb-2">{edu.sub}</p>
                  <p className="text-sm text-muted-foreground">{edu.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Languages & Certifications ── */}
      <section className="py-12 md:py-16 bg-muted/20" id="languages-credentials">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Languages */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center gap-3">
                <Globe className="h-6 w-6 text-primary" aria-hidden="true" />
                <h2 className="text-2xl font-bold">Languages</h2>
              </div>
              <div className="space-y-4">
                {languages.map((l) => (
                  <div key={l.name} className="p-4 rounded-xl border border-border bg-card">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xl" aria-hidden="true">{l.flag}</span>
                        <span className="font-bold">{l.name}</span>
                      </div>
                      <span className="text-xs font-bold text-primary">{l.proficiency}</span>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: `${l.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-3">
                <Award className="h-6 w-6 text-primary" aria-hidden="true" />
                <h2 className="text-2xl font-bold">Certifications & Workshops</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certificationsData.slice(0, 6).map((cert) => (
                  <Link to={`/certifications/${cert.id}`} key={cert.id}>
                    <Card className="hover:border-primary/50 transition-colors h-full">
                      <CardContent className="p-4 flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          {cert.isImage && cert.icon ? (
                            <img
                              src={cert.icon}
                              alt={cert.title}
                              className="w-6 h-6 object-contain"
                              loading="lazy"
                            />
                          ) : (
                            <Award className="h-5 w-5 text-primary" aria-hidden="true" />
                          )}
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                          <h4 className="text-sm font-bold text-foreground truncate">{cert.title}</h4>
                        </div>
                        <ArrowRight className="h-4 w-4 text-primary ml-auto flex-shrink-0" aria-hidden="true" />
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
              <Button variant="ghost" className="w-full mt-4" asChild>
                <Link to="/certifications" className="flex items-center justify-center">
                  View All Documentation
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-12 md:py-16">
        <div className="container">
          <Card className="bg-gradient-to-br from-primary/10 via-cyan-500/5 to-transparent border-primary/20">
            <CardContent className="p-8 md:p-12 text-center space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">
                Tertarik mendiskusikan bagaimana data dapat mendorong pertumbuhan bisnis Anda?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Saya terbuka untuk kolaborasi, freelance, atau diskusi tentang data science dan BI. Mari terhubung!
              </p>
              <Button size="lg" asChild className="rounded-full px-8">
                <Link to="/contact">Hubungi Saya</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default About;
