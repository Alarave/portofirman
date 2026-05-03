import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Download,
  Mail,
  TrendingUp,
  Award,
  Briefcase,
  BookOpen,
  Star,
  BarChart2,
  Database,
  Cpu,
} from "lucide-react";
import { Link } from "react-router-dom";
import profilePhoto from "@/assets/profile-photo.jpg";
import cvFile from "@/assets/cv.pdf";
import dataScienceLogo from "@/assets/logo/data_science.png";
import bi from "@/assets/logo/bi.png";
import { cn } from "@/lib/utils";
import { useState } from "react";

const slideUp = "opacity-0 animate-slide-up fill-mode-forwards";
const fadeIn = "opacity-0 animate-fade-in fill-mode-forwards";

const Home = () => {
  const [cvDownloading, setCvDownloading] = useState(false);

  const handleCvDownload = () => {
    setCvDownloading(true);
    setTimeout(() => setCvDownloading(false), 2000);
  };

  return (
    <Layout>
      {/* ── Hero Section ─────────────────────────────────────────── */}
      <section className="py-20 md:py-36 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-float translate-x-1/2 translate-y-1/2 pointer-events-none"
          style={{ animationDelay: "1s" }}
        />

        <div className="container relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* ── Text Content ── */}
            <div className="space-y-7 order-2 lg:order-1 text-center lg:text-left">
              {/* Role badge — concise, no "Welcome" noise */}
              <div className={`${fadeIn}`} style={{ animationDelay: "0.05s" }}>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase">
                  <BarChart2 className="w-3.5 h-3.5" aria-hidden="true" />
                  Data Scientist &amp; BI Developer
                </span>
              </div>

              {/* H1 — clear hierarchy */}
              <div className={`${slideUp}`} style={{ animationDelay: "0.1s" }}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1] tracking-tight">
                  Firman{" "}
                  <span className="text-gradient">Pambudiansyah</span>
                </h1>
              </div>

              {/* Value proposition — one clear sentence */}
              <div className={`${slideUp}`} style={{ animationDelay: "0.2s" }}>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
                  Turning raw data into business decisions — through{" "}
                  <span className="text-foreground font-semibold">predictive models</span>,{" "}
                  <span className="text-foreground font-semibold">interactive dashboards</span>, and{" "}
                  <span className="text-foreground font-semibold">SAP S/4HANA</span> implementations.
                </p>
              </div>

              {/* Primary CTAs */}
              <div
                className={`${slideUp} flex flex-wrap justify-center lg:justify-start gap-4 pt-2`}
                style={{ animationDelay: "0.3s" }}
              >
                <Button
                  size="lg"
                  asChild
                  className="group h-13 px-8 rounded-full text-base shadow-lg shadow-primary/20 active:scale-95 transition-all"
                >
                  <Link to="/projects">
                    See My Data Science Work
                    <ArrowRight
                      className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="h-13 px-8 rounded-full text-base border-2 hover:bg-primary/5 active:scale-95 transition-all"
                  onClick={handleCvDownload}
                >
                  <a href={cvFile} target="_blank" rel="noopener noreferrer">
                    <Download
                      className={cn(
                        "mr-2 h-4 w-4 transition-transform",
                        cvDownloading && "animate-bounce"
                      )}
                      aria-hidden="true"
                    />
                    {cvDownloading ? "Opening…" : "Download CV"}
                  </a>
                </Button>
              </div>

              {/* Status tags */}
              <div
                className={`${slideUp} flex flex-wrap justify-center lg:justify-start gap-2 pt-2`}
                style={{ animationDelay: "0.4s" }}
              >
                {["Available for Hire", "Open to Projects", "Remote Friendly"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 glass text-primary text-xs font-semibold rounded-full border border-primary/20 transition-all duration-300 hover:bg-primary/20 hover:border-primary/40 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* ── Profile Photo ── */}
            <div
              className={`${slideUp} order-1 lg:order-2 flex justify-center lg:justify-end animate-float`}
              style={{ animationDelay: "0.15s" }}
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-primary/20 rounded-[2.5rem] blur-3xl group-hover:bg-primary/30 transition-colors duration-500" />
                <div className="relative w-64 h-64 md:w-88 md:h-88 rounded-[2.5rem] overflow-hidden border-8 border-background shadow-2xl skew-y-3 group-hover:skew-y-0 transition-all duration-700 ease-out">
                  <img
                    src={profilePhoto}
                    alt="Firman Pambudiansyah — Data Scientist"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                {/* Float badge */}
                <div
                  className="absolute -bottom-6 -left-6 glass p-4 rounded-2xl shadow-xl animate-float"
                  style={{ animationDelay: "2s" }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                      <Star className="w-5 h-5 text-white fill-white" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">3.88 GPA</p>
                      <p className="text-xs text-muted-foreground">Honors Student</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Section ─────────────────────────────────────────── */}
      <section className="py-16 bg-muted/30 relative" aria-label="Key statistics">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: Award, value: "3.88", label: "GPA", sublabel: "Cum Laude", delay: "0.1s", color: "text-primary" },
              { icon: BookOpen, value: "10+", label: "Projects", sublabel: "Built with passion", delay: "0.2s", color: "text-cyan-500" },
              { icon: TrendingUp, value: "4+", label: "Certifications", sublabel: "Industry Verified", delay: "0.3s", color: "text-emerald-500" },
              { icon: Briefcase, value: "2+", label: "Exp Years", sublabel: "In Data & IT", delay: "0.4s", color: "text-orange-500" },
            ].map((stat) => (
              <div
                key={stat.label}
                className={`${slideUp} relative isolate p-6 md:p-8 rounded-2xl group overflow-hidden transition-all duration-500`}
                style={{ animationDelay: stat.delay }}
              >
                <div className="absolute inset-0 glass border-2 border-primary/5 group-hover:border-primary/20 transition-colors rounded-2xl -z-10" />
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />
                <div
                  className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform duration-500 bg-white dark:bg-zinc-900 border border-border"
                  )}
                >
                  <stat.icon className={cn("w-6 h-6", stat.color)} aria-hidden="true" />
                </div>
                <p className="text-3xl lg:text-4xl font-black tracking-tight text-foreground">{stat.value}</p>
                <p className="text-xs font-bold text-foreground/70 uppercase tracking-widest mt-1">{stat.label}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{stat.sublabel}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core Expertise Section ────────────────────────────────── */}
      <section className="py-20 md:py-28" aria-labelledby="expertise-heading">
        <div className="container">
          <div className={`${fadeIn} text-center mb-16`} style={{ animationDelay: "0.1s" }}>
            <h2
              id="expertise-heading"
              className="text-3xl md:text-4xl font-extrabold text-foreground mb-4 tracking-tight"
            >
              Core Expertise
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Combining technical depth with business strategy to deliver data-driven transformations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                logo: dataScienceLogo,
                icon: BarChart2,
                title: "Data Science & Analytics",
                desc: "Python and SQL to uncover hidden patterns, build predictive models, and forecast future trends with measurable accuracy.",
                color: "from-primary/20 to-cyan-500/10",
                link: "/projects?category=Data+Science",
                delay: "0.2s",
              },
              {
                logo: bi,
                icon: Database,
                title: "Business Intelligence",
                desc: "Interactive Looker Studio and Power BI dashboards that turn complex datasets into clear, actionable business insights.",
                color: "from-emerald-500/20 to-teal-500/10",
                link: "/projects?category=Business+Intelligence",
                delay: "0.3s",
              },
              {
                emoji: "⚙️",
                icon: Cpu,
                title: "SAP S/4HANA",
                desc: "Enterprise resource planning configuration and customization to optimize inventory, procurement, and digital workflows.",
                color: "from-indigo-500/20 to-violet-500/10",
                link: "/projects?category=SAP%2FERP",
                delay: "0.4s",
              },
            ].map((card) => (
              <Link
                key={card.title}
                to={card.link}
                className={`${slideUp} group relative p-8 rounded-[2rem] border border-border/50 bg-card/40 backdrop-blur-sm hover:bg-card/60 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-500 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary`}
                style={{ animationDelay: card.delay }}
                aria-label={`Explore ${card.title} projects`}
              >
                {/* Background Glow Effect */}
                <div className={cn(
                  "absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none bg-gradient-to-br",
                  card.color
                )} />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-background to-muted/50 rounded-2xl flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 overflow-hidden p-3 border border-border/50">
                    {card.logo ? (
                      <img src={card.logo} alt="" className="w-full h-full object-contain" aria-hidden="true" />
                    ) : (
                      <span className="text-3xl" aria-hidden="true">{card.emoji}</span>
                    )}
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-base font-medium">
                      {card.desc}
                    </p>

                    <div className="pt-4 flex items-center gap-2 text-primary font-bold text-sm">
                      <span className="relative">
                        Explore projects
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                      </span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" aria-hidden="true" />
                    </div>
                  </div>
                </div>

                {/* Bottom decorative line */}
                <div className={cn(
                  "absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r transition-all duration-500 scale-x-0 group-hover:scale-x-100 origin-left",
                  card.color
                )} />
              </Link>
            ))}
          </div>

          <div className={`${fadeIn} mt-14 text-center`} style={{ animationDelay: "0.5s" }}>
            <Button
              variant="ghost"
              size="lg"
              asChild
              className="group hover:bg-primary/10 rounded-full px-8 text-primary font-bold"
            >
              <Link to="/about">
                View All Skills &amp; Background
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── CTA Section ───────────────────────────────────────────── */}
      <section className="py-20 md:py-28 relative overflow-hidden" aria-labelledby="cta-heading">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-cyan-500/5 to-transparent -z-10" />
        <div className="container">
          <div className="glass p-10 md:p-20 rounded-[3rem] text-center space-y-8 border-2 border-primary/10 shadow-2xl">
            <div className={`${fadeIn} max-w-2xl mx-auto space-y-5`} style={{ animationDelay: "0.1s" }}>
              <h2
                id="cta-heading"
                className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight"
              >
                Let's Build Something{" "}
                <span className="text-gradient">Data-Driven</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Looking for a data scientist who can bridge analytics and business impact? My inbox is always open.
              </p>
            </div>

            <div
              className={`${slideUp} flex flex-wrap justify-center gap-4 pt-4`}
              style={{ animationDelay: "0.2s" }}
            >
              <Button
                size="lg"
                asChild
                className="group h-14 px-10 rounded-full text-lg shadow-xl shadow-primary/25 active:scale-95 transition-all"
              >
                <Link to="/contact">
                  Start a Conversation
                  <Mail className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="h-14 px-10 rounded-full text-lg border-2 hover:bg-primary/5 active:scale-95 transition-all"
                onClick={handleCvDownload}
              >
                <a href={cvFile} target="_blank" rel="noopener noreferrer">
                  <Download
                    className={cn("mr-2 h-5 w-5 transition-transform", cvDownloading && "animate-bounce")}
                    aria-hidden="true"
                  />
                  {cvDownloading ? "Opening…" : "Download Resume"}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
