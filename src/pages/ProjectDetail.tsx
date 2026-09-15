import { useParams, Link, useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { projectsData } from "../data/projectsData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  Play,
  Code2,
  Download,
  Bug,
  Terminal,
  Lock,
  CheckCircle2,
  BarChart2,
  Tag,
  FileText,
  Mail,
} from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  InventoryBarChart,
  SentimentDonutChart,
  FinancialLineChart,
} from "@/components/ui/ProjectChartThumbnail";
import { CodeExplorer } from "@/components/ui/CodeExplorer";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const currentIndex = projectsData.findIndex((p) => p.id.trim() === id?.trim());
  const project = currentIndex !== -1 ? projectsData[currentIndex] : null;
  
  const [viewMode, setViewMode] = useState<"preview" | "code">("preview");
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const prevProject =
    currentIndex !== -1
      ? projectsData[(currentIndex - 1 + projectsData.length) % projectsData.length]
      : null;
  const nextProject =
    currentIndex !== -1
      ? projectsData[(currentIndex + 1) % projectsData.length]
      : null;

  useEffect(() => {
    setActiveSlideIndex(0);
    setViewMode("preview");
  }, [id, project]);

  const hasMetrics = !!(project?.metrics && project.metrics.length > 0);

  // Keyboard navigation (ArrowLeft: Previous, ArrowRight: Next)
  useEffect(() => {
    if (!prevProject || !nextProject) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }
      if (e.key === "ArrowLeft") {
        navigate(`/projects/${prevProject.id}`);
      } else if (e.key === "ArrowRight") {
        navigate(`/projects/${nextProject.id}`);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevProject?.id, nextProject?.id, navigate]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!project) {
    return (
      <Layout>
        <div className="container py-24 text-center space-y-6">
          <div className="text-6xl" aria-hidden="true">🔍</div>
          <h1 className="text-2xl font-bold">Project Not Found</h1>
          <p className="text-muted-foreground">Proyek yang Anda cari tidak ditemukan.</p>
          <Link
            to="/"
            state={{ scrollTo: "projects" }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" /> Kembali ke Beranda
          </Link>
        </div>
      </Layout>
    );
  }

  const slides =
    project.views && project.views.length > 0
      ? project.views.map((v) => ({ image: v.image, label: v.label }))
      : project.image || project.thumbnail
      ? [{ image: project.image || project.thumbnail, label: project.title }]
      : [];
  const currentSlide = slides[activeSlideIndex] || slides[0] || null;
  const hasChart = !!project.chartType;

  const renderChart = () => {
    const cls = "w-full max-h-72 text-foreground";
    if (project.chartType === "inventory") return <InventoryBarChart className={cls} />;
    if (project.chartType === "sentiment") return <SentimentDonutChart className={cls} />;
    if (project.chartType === "financial") return <FinancialLineChart className={cls} />;
    return null;
  };

  return (
    <Layout>
      <div className="min-h-[calc(100vh-4rem)] w-full max-w-full overflow-x-hidden pt-14 pb-12 sm:pt-20 sm:pb-16 bg-background text-foreground flex items-center justify-center">
        <div className="container max-w-7xl mx-auto px-3 sm:px-6 w-full">
          
          {/* Top subtle back button */}
          <div className="mb-3 sm:mb-4">
            <Link
              to="/"
              state={{ scrollTo: "projects" }}
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors group"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
              <span>Kembali ke Projects</span>
            </Link>
          </div>

          {/* Main Grid: Left Canvas + Right Card */}
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px] xl:grid-cols-[minmax(0,1fr)_380px] gap-4 sm:gap-6 items-stretch w-full">
            
            {/* ── Left Side: Rounded Showcase Canvas (Browser Window Mockup) ── */}
            <div className="relative rounded-2xl sm:rounded-3xl border border-border bg-card/80 shadow-2xl flex flex-col min-h-[380px] sm:min-h-[480px] lg:min-h-[580px] min-w-0 overflow-hidden backdrop-blur-xl group">
              
              {/* Soft ambient background glow behind canvas */}
              <div
                className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-accent/5 to-transparent blur-3xl opacity-60 pointer-events-none -z-10"
                aria-hidden="true"
              />

              {/* ── Window Mockup Header Bar ── */}
              <div className="h-10 sm:h-11 px-3.5 sm:px-4 border-b border-border/60 bg-muted/40 backdrop-blur-md flex items-center justify-between gap-2 select-none shrink-0 z-20">
                {/* Window Traffic Lights */}
                <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/80 border border-[#e0443e]/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/80 border border-[#dea123]/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/80 border border-[#1aab29]/40" />
                </div>

                {/* Mockup URL / Context Pill */}
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-background/80 border border-border/50 text-[11px] sm:text-xs font-mono text-muted-foreground shadow-2xs max-w-[220px] sm:max-w-xs truncate">
                  <Lock className="w-3 h-3 text-muted-foreground/70 shrink-0" />
                  <span className="truncate">
                    {project.mockupUrl
                      ? project.mockupUrl.replace(/^https?:\/\//, "")
                      : `${project.id}.app`}
                  </span>
                </div>

                {/* Slide Status Badge (If multiple slides) */}
                <div className="flex items-center justify-end shrink-0 min-w-[50px]">
                  {slides.length > 1 && viewMode === "preview" ? (
                    <span className="text-[10px] sm:text-[11px] font-mono font-medium px-2 py-0.5 rounded-full bg-background/80 border border-border/50 text-muted-foreground">
                      {activeSlideIndex + 1} / {slides.length}
                    </span>
                  ) : (
                    <span className="w-2.5" />
                  )}
                </div>
              </div>

              {/* Viewport: Preview Mode */}
              {viewMode === "preview" ? (
                <div className="relative w-full flex-1 min-h-0 bg-muted/20 flex items-center justify-center p-2 sm:p-4 lg:p-6 overflow-hidden">
                  {currentSlide ? (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <img
                        key={currentSlide.image}
                        src={currentSlide.image}
                        alt={`${project.title} - ${currentSlide.label}`}
                        className="w-full h-full object-contain max-h-[340px] sm:max-h-[460px] lg:max-h-[540px] rounded-lg sm:rounded-xl shadow-md border border-border/40 transition-all duration-300 select-none bg-background/50"
                      />

                      {/* Controls Slide (Hanya tampil jika ada lebih dari 1 gambar) */}
                      {slides.length > 1 && (
                        <>
                          {/* Tombol Previous - Hover Reveal */}
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
                            }}
                            aria-label="Previous image"
                            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-background/90 text-foreground border border-border/80 shadow-lg backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
                          >
                            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                          </button>

                          {/* Tombol Next - Hover Reveal */}
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveSlideIndex((prev) => (prev + 1) % slides.length);
                            }}
                            aria-label="Next image"
                            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-background/90 text-foreground border border-border/80 shadow-lg backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
                          >
                            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                          </button>

                          {/* Integrated Bottom Pill: Caption + Dots */}
                          <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5 bg-background/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-border/70 shadow-md transition-all">
                            <span className="text-[11px] sm:text-xs font-medium text-foreground tracking-tight">
                              {currentSlide.label}
                            </span>
                            <div className="h-3 w-[1px] bg-border/80" />
                            <div className="flex items-center gap-1.5">
                              {slides.map((_, idx) => (
                                <button
                                  key={idx}
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setActiveSlideIndex(idx);
                                  }}
                                  aria-label={`Slide ${idx + 1}`}
                                  className={cn(
                                    "h-1.5 rounded-full transition-all cursor-pointer",
                                    activeSlideIndex === idx
                                      ? "w-4 bg-primary"
                                      : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/70"
                                  )}
                                />
                              ))}
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  ) : hasChart ? (
                    <div className="w-full h-full flex items-center justify-center p-4 sm:p-8">
                      {renderChart()}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center text-muted-foreground gap-2 p-8 sm:p-12">
                      <Terminal className="w-10 h-10 sm:w-12 sm:h-12 text-muted-foreground/60" />
                      <span className="text-xs font-mono">Preview Not Available</span>
                    </div>
                  )}
                </div>
              ) : (
                /* Viewport: Live GitHub API Code Explorer */
                <div className="flex-1 min-h-0 flex flex-col p-1 sm:p-2">
                  <CodeExplorer
                    githubUrl={project.links?.github}
                    defaultSnippet={project.codeSnippet}
                    repoName={project.id}
                    className="border-0 shadow-none rounded-xl sm:rounded-2xl flex-1 min-h-[350px] sm:min-h-[460px] lg:min-h-[520px]"
                  />
                </div>
              )}
            </div>

            {/* ── Right Side: Control Card (Studio Style Themed) ── */}
            <div className="rounded-2xl sm:rounded-3xl border border-border bg-card p-5 sm:p-6 lg:p-7 shadow-xl flex flex-col justify-between backdrop-blur-xl gap-6">
              
              {/* Top content block */}
              <div className="space-y-5">
                {/* Header: Category */}
                <div>
                  <Badge
                    variant="secondary"
                    className="rounded-full px-3 py-1 text-xs border border-border font-medium bg-muted/60 text-foreground"
                  >
                    {project.category}
                  </Badge>
                </div>

                {/* Title & Description */}
                <div>
                  <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-foreground tracking-tight leading-tight">
                    {project.title.split("—")[0].trim()}
                  </h1>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-2.5 leading-relaxed">
                    {project.description}
                  </p>
                  {/* Quick Tech Highlights */}
                  <div className="flex flex-wrap gap-1.5 mt-3.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-muted text-muted-foreground border border-border/50"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-[11px] text-muted-foreground self-center">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Segmented Control: [ ▷ Preview ] and [ </> Code ] */}
                <div className="grid grid-cols-2 p-1 bg-muted/70 rounded-xl border border-border text-xs font-medium">
                  <button
                    onClick={() => setViewMode("preview")}
                    className={cn(
                      "flex items-center justify-center gap-2 py-2 rounded-lg transition-all cursor-pointer",
                      viewMode === "preview"
                        ? "bg-background text-foreground font-semibold shadow-xs"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <Play className="w-3.5 h-3.5 fill-current" /> Preview
                  </button>
                  <button
                    onClick={() => setViewMode("code")}
                    className={cn(
                      "flex items-center justify-center gap-2 py-2 rounded-lg transition-all cursor-pointer",
                      viewMode === "code"
                        ? "bg-background text-foreground font-semibold shadow-xs"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <Code2 className="w-4 h-4" /> Code
                  </button>
                </div>

                {/* Action Buttons: Standard & Consistent */}
                <div className="space-y-2.5 pt-2">
                  {/* 1. Live Demo (jika ada link valid) */}
                  {project.links?.liveDemo && project.links.liveDemo !== "#" && (
                    <a
                      href={project.links.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 rounded-xl bg-primary text-primary-foreground text-xs sm:text-sm font-semibold hover:opacity-95 shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <ExternalLink className="w-4 h-4" /> Open live preview
                    </a>
                  )}

                  {/* 2. GitHub (Permanen Hitam) */}
                  {project.links?.github && project.links.github !== "#" && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 rounded-xl bg-[#181717] dark:bg-[#1F2328] hover:bg-[#24292F] dark:hover:bg-[#2D333B] text-white text-xs sm:text-sm font-semibold shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer border border-black/10 dark:border-white/10"
                    >
                      <Github className="w-4 h-4" /> View on GitHub
                    </a>
                  )}

                  {/* 3. Documentation (jika ada file PRD/docs valid) */}
                  {project.links?.prd && project.links.prd !== "#" && (
                    <a
                      href={project.links.prd}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 rounded-xl border border-border bg-background hover:bg-muted text-foreground text-xs sm:text-sm font-medium transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Download className="w-4 h-4" /> Download Documentation
                    </a>
                  )}
                </div>
              </div>

              {/* Bottom footer: Report issue & Navigation Arrows */}
              <div className="pt-4 border-t border-border flex items-center justify-between">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Bug className="w-3.5 h-3.5" />
                  <span>Report an issue</span>
                </Link>

                {/* Arrow navigation buttons */}
                {prevProject && nextProject && (
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => navigate(`/projects/${prevProject.id}`)}
                      title={`Sebelumnya: ${prevProject.title}`}
                      className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer border border-transparent hover:border-border"
                    >
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => navigate(`/projects/${nextProject.id}`)}
                      title={`Berikutnya: ${nextProject.title}`}
                      className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer border border-transparent hover:border-border"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>


          {/* ── Level 4: Case Study & Technical Breakdown (2-Column Balanced) ── */}
          <div className="mt-10 sm:mt-12 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] gap-8 items-start w-full">
              
              {/* Left Column: Problem, Solusi & Architecture */}
              <div className="space-y-8 min-w-0">
                {/* Project Overview */}
                <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-xs space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2.5">
                    <div className="w-1.5 h-6 bg-primary rounded-full" />
                    Project Overview
                  </h2>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    {project.fullDescription || project.description}
                  </p>
                </div>

                {/* Key Features & Architecture */}
                {project.features && project.features.length > 0 && (
                  <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-xs space-y-5">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      Key Features &amp; Architecture
                    </h3>
                    <ul className="space-y-3">
                      {project.features.map((feature, idx) => {
                        const colonIndex = feature.indexOf(":");
                        const hasColon = colonIndex !== -1;
                        const title = hasColon ? feature.slice(0, colonIndex).trim() : "";
                        const desc = hasColon ? feature.slice(colonIndex + 1).trim() : feature;

                        return (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-xs sm:text-sm text-muted-foreground leading-relaxed p-3.5 rounded-xl bg-muted/20 border border-border/30 hover:border-border transition-colors"
                          >
                            <span className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                            <div>
                              {hasColon ? (
                                <>
                                  <strong className="font-semibold text-foreground mr-1.5">{title}:</strong>
                                  <span>{desc}</span>
                                </>
                              ) : (
                                <span>{feature}</span>
                              )}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>

              {/* Right Column: Sticky Tech Specs & Performance Visualization */}
              <div className="space-y-6 min-w-0 lg:sticky lg:top-24">
                {/* Tools & Tech Stack */}
                <div className="bg-card border border-border rounded-2xl p-6 shadow-xs space-y-4">
                  <h3 className="font-semibold text-foreground text-base flex items-center gap-2">
                    <Tag className="w-4 h-4 text-primary" />
                    Full Tech Stack &amp; Libraries
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="font-medium text-xs py-1.5 px-3 bg-muted/70 hover:bg-primary/10 hover:text-primary transition-colors cursor-default border border-border/50"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Performance Visualization if Available */}
                {hasChart && (
                  <div className="bg-card border border-border rounded-2xl p-6 shadow-xs space-y-4">
                    <h3 className="font-semibold text-foreground text-base flex items-center gap-2">
                      <BarChart2 className="w-4 h-4 text-primary" />
                      Performance Visualization
                    </h3>
                    <div className="w-full flex items-center justify-center p-3 bg-muted/20 rounded-xl">
                      {renderChart()}
                    </div>
                  </div>
                )}
              </div>
            </div>


            {/* ── Contextual CTA Banner ── */}
            <div className="mt-14 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-palette-primary/10 via-palette-light/10 to-transparent border border-primary/15 text-center space-y-4">
              <h2 className="text-xl sm:text-2xl font-extrabold text-foreground">
                Tertarik dengan proyek seperti ini?
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto text-xs sm:text-sm">
                Saya terbuka untuk kolaborasi, freelance, atau diskusi seputar data science dan full stack web development.
              </p>
              <div className="flex flex-wrap justify-center gap-3 pt-2">
                <Button asChild className="rounded-full px-6">
                  <Link to="/contact">
                    <Mail className="mr-2 h-4 w-4" />
                    Hubungi Saya
                  </Link>
                </Button>
                <Button variant="outline" asChild className="rounded-full px-6">
                  <Link to="/" state={{ scrollTo: "projects" }}>
                    Lihat Proyek Lainnya
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectDetail;
