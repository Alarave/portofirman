import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { projectsData } from "./Projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Tag,
  BarChart2,
  Code2,
  FileText,
  ArrowRight,
  Mail,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  InventoryBarChart,
  SentimentDonutChart,
  FinancialLineChart,
} from "@/components/ui/ProjectChartThumbnail";

type Tab = "overview" | "metrics" | "code";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find((p) => p.id.trim() === id?.trim());
  const [activeTab, setActiveTab] = useState<Tab>("overview");

  if (!project) {
    return (
      <Layout>
        <div className="container py-20 text-center space-y-6">
          <div className="text-6xl" aria-hidden="true">🔍</div>
          <h1 className="text-2xl font-bold">Project Not Found</h1>
          <p className="text-muted-foreground">The project you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" /> Back to Projects
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const hasMetrics = project.metrics && project.metrics.length > 0;
  const hasCode = !!project.codeSnippet;
  const hasChart = !!project.chartType;

  const tabs: { id: Tab; label: string; icon: typeof FileText }[] = [
    { id: "overview", label: "Overview", icon: FileText },
    ...(hasMetrics ? [{ id: "metrics" as Tab, label: "Metrics & Results", icon: BarChart2 }] : []),
    ...(hasCode ? [{ id: "code" as Tab, label: "Code Snippet", icon: Code2 }] : []),
  ];

  const renderChart = () => {
    const cls = "w-full max-h-64 text-foreground";
    if (project.chartType === "inventory") return <InventoryBarChart className={cls} />;
    if (project.chartType === "sentiment") return <SentimentDonutChart className={cls} />;
    if (project.chartType === "financial") return <FinancialLineChart className={cls} />;
    return null;
  };

  return (
    <Layout>
      {/* ── Back ── */}
      <section className="py-6 border-b border-border/40">
        <div className="container">
          <Button variant="ghost" asChild className="pl-0 hover:bg-transparent text-muted-foreground hover:text-primary">
            <Link to="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" /> Back to Projects
            </Link>
          </Button>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="py-10 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">

            {/* ── Left: Main ── */}
            <div className="lg:col-span-2 space-y-8">

              {/* Hero image / chart */}
              <div
                className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg border border-border bg-muted"
                role="img"
                aria-label={`${project.title} — visual representation`}
              >
                {project.image || project.thumbnail ? (
                  <img
                    src={project.image || project.thumbnail}
                    alt={`${project.title} — project screenshot`}
                    className="w-full h-full object-cover"
                  />
                ) : hasChart ? (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/5 to-muted p-6">
                    {renderChart()}
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-muted">
                    <span className="text-6xl opacity-40" aria-hidden="true">📊</span>
                  </div>
                )}
              </div>

              {/* Title & category */}
              <div className="space-y-3">
                <Badge variant="outline" className="text-sm px-3 py-1 border-primary/30 text-primary">
                  {project.category}
                </Badge>
                <h1 className="text-2xl md:text-3xl font-extrabold text-foreground leading-tight tracking-tight">
                  {project.title}
                </h1>
              </div>

              {/* ── Tabs ── */}
              <div>
                <div
                  className="flex gap-1 border-b border-border/50 mb-6"
                  role="tablist"
                  aria-label="Project details tabs"
                >
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      role="tab"
                      aria-selected={activeTab === tab.id}
                      aria-controls={`tabpanel-${tab.id}`}
                      onClick={() => setActiveTab(tab.id)}
                      className={cn(
                        "flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-t-lg border-b-2 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                        activeTab === tab.id
                          ? "border-primary text-primary bg-primary/5"
                          : "border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      )}
                    >
                      <tab.icon className="w-4 h-4" aria-hidden="true" />
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Tab: Overview */}
                {activeTab === "overview" && (
                  <div
                    id="tabpanel-overview"
                    role="tabpanel"
                    aria-labelledby="tab-overview"
                    className="space-y-8 animate-fade-in"
                  >
                    {/* STAR description */}
                    <div className="space-y-3">
                      <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
                        <span className="w-1 h-5 bg-primary rounded-full" aria-hidden="true" />
                        Project Overview
                      </h2>
                      <p className="text-muted-foreground leading-relaxed text-base">
                        {project.fullDescription}
                      </p>
                    </div>

                    {/* Key Features */}
                    <div className="space-y-3">
                      <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
                        <span className="w-1 h-5 bg-primary rounded-full" aria-hidden="true" />
                        Key Features
                      </h2>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5" aria-label="Key features list">
                        {project.features?.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3 text-muted-foreground text-sm">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" aria-hidden="true" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Tab: Metrics */}
                {activeTab === "metrics" && hasMetrics && (
                  <div
                    id="tabpanel-metrics"
                    role="tabpanel"
                    aria-labelledby="tab-metrics"
                    className="space-y-8 animate-fade-in"
                  >
                    <div className="space-y-3">
                      <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
                        <span className="w-1 h-5 bg-primary rounded-full" aria-hidden="true" />
                        Performance Metrics
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        Hasil terukur dari implementasi proyek ini.
                      </p>
                    </div>

                    {/* Metric cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {project.metrics!.map((m) => (
                        <div
                          key={m.label}
                          className="p-5 rounded-2xl border border-border bg-card text-center space-y-1 hover:border-primary/30 hover:shadow-md transition-all"
                        >
                          <p className={cn("text-3xl font-extrabold", m.color)}>{m.value}</p>
                          <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                            {m.label}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Chart visualization */}
                    {hasChart && (
                      <div className="space-y-3">
                        <h3 className="text-base font-semibold text-foreground">Data Visualization</h3>
                        <div
                          className="p-6 rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-muted/30"
                          role="img"
                          aria-label={`${project.title} — data visualization chart`}
                        >
                          {renderChart()}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Tab: Code */}
                {activeTab === "code" && hasCode && (
                  <div
                    id="tabpanel-code"
                    role="tabpanel"
                    aria-labelledby="tab-code"
                    className="space-y-4 animate-fade-in"
                  >
                    <div className="space-y-2">
                      <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
                        <span className="w-1 h-5 bg-primary rounded-full" aria-hidden="true" />
                        Code Snippet
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        Contoh kode inti dari implementasi proyek ini.
                      </p>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden border border-border">
                      {/* Code header bar */}
                      <div className="flex items-center gap-1.5 px-4 py-2.5 bg-zinc-900 border-b border-zinc-700">
                        <span className="w-3 h-3 rounded-full bg-red-500" aria-hidden="true" />
                        <span className="w-3 h-3 rounded-full bg-yellow-500" aria-hidden="true" />
                        <span className="w-3 h-3 rounded-full bg-green-500" aria-hidden="true" />
                        <span className="ml-3 text-xs text-zinc-400 font-mono">
                          {project.category === "SAP/ERP" ? "abap" : "python"}
                        </span>
                      </div>
                      <pre className="bg-zinc-950 text-zinc-100 p-5 text-xs md:text-sm font-mono leading-relaxed overflow-x-auto">
                        <code>{project.codeSnippet}</code>
                      </pre>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* ── Right: Sidebar ── */}
            <div className="space-y-5">
              {/* Tech Stack */}
              <div className="bg-card border border-border rounded-2xl p-5 shadow-sm">
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2 text-sm">
                  <Tag className="w-4 h-4 text-primary" aria-hidden="true" />
                  Tools &amp; Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="font-normal text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div className="bg-card border border-border rounded-2xl p-5 shadow-sm space-y-3">
                <h3 className="font-semibold text-foreground mb-1 text-sm">Project Links</h3>

                {project.links?.liveDemo && (
                  <Button className="w-full rounded-xl" asChild>
                    <a href={project.links.liveDemo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" aria-hidden="true" />
                      Live Demo
                    </a>
                  </Button>
                )}

                {project.links?.github ? (
                  <Button variant="outline" className="w-full rounded-xl" asChild>
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" aria-hidden="true" />
                      View Source Code
                    </a>
                  </Button>
                ) : (
                  <Button variant="outline" className="w-full rounded-xl opacity-50 cursor-not-allowed" disabled>
                    <Github className="mr-2 h-4 w-4" aria-hidden="true" />
                    Private Repository
                  </Button>
                )}
              </div>

              {/* Quick metrics in sidebar */}
              {hasMetrics && (
                <div className="bg-card border border-border rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-foreground mb-3 text-sm flex items-center gap-2">
                    <BarChart2 className="w-4 h-4 text-primary" aria-hidden="true" />
                    Key Results
                  </h3>
                  <div className="space-y-2">
                    {project.metrics!.map((m) => (
                      <div key={m.label} className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">{m.label}</span>
                        <span className={cn("font-bold", m.color)}>{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ── Contextual CTA at bottom of case study ── */}
          <div className="mt-16 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-cyan-500/5 to-transparent border border-primary/15 text-center space-y-5">
            <h2 className="text-xl md:text-2xl font-extrabold text-foreground">
              Tertarik dengan proyek seperti ini?
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto text-sm md:text-base">
              Saya terbuka untuk kolaborasi, freelance, atau diskusi tentang data science dan BI.
              Mari ngobrol!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="rounded-full px-8 group">
                <Link to="/contact">
                  <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
                  Hubungi Saya
                </Link>
              </Button>
              <Button variant="outline" asChild className="rounded-full px-8 group">
                <Link to="/projects">
                  Lihat Proyek Lainnya
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
