import React, { useState, useMemo, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SkillItem {
  name: string;
  level: number;
  iconSlug: string;
  category: string;
  years?: number;
  note?: string;
}

export interface SkillCategoryGroup {
  title: string;
  skills: SkillItem[];
}

export const referencePortfolioSkills: SkillCategoryGroup[] = [
  {
    title: "AI & Data Science",
    skills: [
      { name: "Python", level: 95, iconSlug: "python", category: "data", years: 3, note: "Used in production since 2022" },
      { name: "Pandas", level: 92, iconSlug: "pandas", category: "data", years: 3, note: "Data Wrangling & Analysis" },
      { name: "NumPy", level: 90, iconSlug: "numpy", category: "data", years: 3, note: "Matrix & Vector Computations" },
      { name: "Scikit-learn", level: 88, iconSlug: "scikitlearn", category: "data", years: 2, note: "Machine Learning Models" },
      { name: "TensorFlow", level: 85, iconSlug: "tensorflow", category: "data", years: 2, note: "LSTM & Deep Learning" },
      { name: "PyTorch", level: 80, iconSlug: "pytorch", category: "data", years: 2, note: "Neural Networks" },
    ],
  },
  {
    title: "AI Engineering & RAG",
    skills: [
      { name: "LangChain", level: 88, iconSlug: "langchain", category: "ai", years: 1, note: "Hybrid RAG & AI Agents" },
      { name: "OpenAI API", level: 90, iconSlug: "openai", category: "ai", years: 2, note: "LLMs & Embeddings" },
      { name: "FAISS", level: 85, iconSlug: "meta", category: "ai", years: 1, note: "Vector DB & Semantic Search" },
      { name: "FastAPI", level: 82, iconSlug: "fastapi", category: "ai", years: 2, note: "Async REST APIs" },
      { name: "Flask", level: 80, iconSlug: "flask", category: "ai", years: 2, note: "Python Microservices" },
    ],
  },
  {
    title: "Frontend & Web",
    skills: [
      { name: "React", level: 88, iconSlug: "react", category: "frontend", years: 2, note: "Used in production since 2023" },
      { name: "TypeScript", level: 82, iconSlug: "typescript", category: "frontend", years: 2, note: "Type-Safe Frontend" },
      { name: "JavaScript", level: 88, iconSlug: "javascript", category: "frontend", years: 3, note: "ES6+ Modern Logic" },
      { name: "HTML5", level: 92, iconSlug: "html5", category: "frontend", years: 4, note: "Semantic Structure" },
      { name: "CSS3", level: 88, iconSlug: "css3", category: "frontend", years: 4, note: "Responsive Styling" },
      { name: "Tailwind CSS", level: 88, iconSlug: "tailwindcss", category: "frontend", years: 2, note: "Utility-First Design" },
    ],
  },
  {
    title: "Databases & Analytics",
    skills: [
      { name: "PostgreSQL", level: 90, iconSlug: "postgresql", category: "database", years: 3, note: "Queries & Indexing" },
      { name: "MySQL", level: 85, iconSlug: "mysql", category: "database", years: 3, note: "Relational Storage" },
      { name: "MongoDB", level: 80, iconSlug: "mongodb", category: "database", years: 2, note: "NoSQL Collections" },
      { name: "Power BI", level: 88, iconSlug: "powerbi", category: "analytics", years: 2, note: "Business Dashboards" },
      { name: "Tableau", level: 85, iconSlug: "tableau", category: "analytics", years: 2, note: "Data Visualizations" },
    ],
  },
  {
    title: "Infrastructure & Tools",
    skills: [
      { name: "Git", level: 92, iconSlug: "git", category: "tools", years: 4, note: "Version Control" },
      { name: "GitHub", level: 90, iconSlug: "github", category: "tools", years: 4, note: "CI/CD & Repositories" },
      { name: "Docker", level: 80, iconSlug: "docker", category: "devops", years: 2, note: "Containerization" },
      { name: "NVIDIA DGX", level: 80, iconSlug: "nvidia", category: "devops", years: 1, note: "HPC GPU Cluster" },
      { name: "VS Code", level: 95, iconSlug: "visualstudiocode", category: "tools", years: 4, note: "Primary IDE" },
      { name: "Jira", level: 85, iconSlug: "jira", category: "product", years: 2, note: "Agile Tracking" },
    ],
  },
];

const SkillIcon = ({ slug, name }: { slug: string; name: string }) => {
  const [imgError, setImgError] = useState(false);

  if (imgError || !slug) {
    return (
      <div className="w-full h-full flex items-center justify-center text-palette-primary font-black text-[10px]">
        {name.slice(0, 2).toUpperCase()}
      </div>
    );
  }

  return (
    <img
      src={`https://cdn.simpleicons.org/${slug}`}
      alt={name}
      className="w-full h-full object-contain filter transition-transform group-hover:scale-110"
      onError={() => setImgError(true)}
    />
  );
};

export const SkillsList: React.FC<SkillsListProps> = ({
  skills = referencePortfolioSkills,
  title = "Skills",
  subtitle = "Tools and technologies I use regularly.",
}) => {
  const [selectedTitles, setSelectedTitles] = useState<string[]>(["all"]);
  const [expanded, setExpanded] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const groupTitles = useMemo(
    () => skills.map((g) => g.title),
    [skills]
  );

  const toggleTitle = (tName: string) => {
    if (tName === "all") {
      setSelectedTitles(["all"]);
      return;
    }
    setSelectedTitles((prev) => {
      const withoutAll = prev.filter((t) => t !== "all");
      if (withoutAll.includes(tName)) {
        const next = withoutAll.filter((t) => t !== tName);
        return next.length === 0 ? ["all"] : next;
      }
      return [...withoutAll, tName];
    });
  };

  const filteredGroups = useMemo(() => {
    if (selectedTitles.includes("all")) return skills;
    return skills.filter((g) => selectedTitles.includes(g.title));
  }, [skills, selectedTitles]);

  const getCount = (tName: string) => {
    if (tName === "all") return skills.flatMap((g) => g.skills).length;
    const found = skills.find((g) => g.title === tName);
    return found ? found.skills.length : 0;
  };

  const rowHeight = 140;
  const maxRowsCollapsed = 3;
  const collapsedPx = rowHeight * maxRowsCollapsed;
  const maxHeight = `${collapsedPx}px`;

  const [hasOverflow, setHasOverflow] = useState(false);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) {
      setHasOverflow(false);
      return;
    }
    const check = () => {
      setHasOverflow(el.scrollHeight > collapsedPx);
    };
    check();
    const ro = new ResizeObserver(() => check());
    ro.observe(el);
    return () => ro.disconnect();
  }, [filteredGroups, collapsedPx, selectedTitles, expanded]);

  useEffect(() => setExpanded(false), [selectedTitles]);

  const collapsedHeightTarget = hasOverflow ? maxHeight : "auto";

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h2 className="text-3xl md:text-4xl font-black text-foreground tracking-tight">
          {title}
        </h2>
        <p className="text-muted-foreground text-sm md:text-base">
          {subtitle}
        </p>
      </div>

      {/* Category Filter Pills (Same as Reference Portfolio) */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => toggleTitle("all")}
          aria-pressed={selectedTitles.includes("all")}
          className={cn(
            "px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 border select-none",
            selectedTitles.includes("all")
              ? "bg-palette-primary text-white border-palette-primary shadow-md shadow-palette-primary/20"
              : "bg-card text-muted-foreground border-border hover:border-palette-primary/40 hover:text-foreground"
          )}
        >
          All ({getCount("all")})
        </button>

        {groupTitles.map((tName) => {
          const active = selectedTitles.includes(tName);
          return (
            <button
              key={tName}
              onClick={() => toggleTitle(tName)}
              aria-pressed={active}
              className={cn(
                "px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 border select-none",
                active
                  ? "bg-palette-primary text-white border-palette-primary shadow-md shadow-palette-primary/20"
                  : "bg-card text-muted-foreground border-border hover:border-palette-primary/40 hover:text-foreground"
              )}
            >
              {tName} ({getCount(tName)})
            </button>
          );
        })}
      </div>

      {/* Collapsible Container */}
      <motion.div
        animate={{ height: expanded ? "auto" : collapsedHeightTarget }}
        transition={{ duration: 0.45 }}
        className="overflow-hidden"
      >
        <motion.div
          key={selectedTitles.join("-")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
          className="space-y-8"
          ref={contentRef}
        >
          {filteredGroups.map((group) => (
            <section key={group.title} className="space-y-4">
              <h3 className="text-sm font-extrabold uppercase tracking-widest text-palette-primary flex items-center gap-2">
                <span className="w-1.5 h-4 bg-palette-primary rounded-full" />
                {group.title}
              </h3>

              {/* Grid 6 Columns Desktop (Identical to Reference Template) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {group.skills.map((s) => (
                  <motion.div
                    key={s.name}
                    whileHover={{ y: -6 }}
                    className="p-4 rounded-2xl bg-card border border-border/60 shadow-xs hover:border-palette-primary/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="space-y-0.5">
                        <div className="font-bold text-sm text-foreground group-hover:text-palette-primary transition-colors">
                          {s.name}
                        </div>
                        <div className="text-[10px] text-muted-foreground leading-tight">
                          {s.years ? `${s.years} yr${s.years > 1 ? "s" : ""}` : null}
                          {s.note ? <span className="block text-[10px] text-muted-foreground/80 mt-0.5">{s.note}</span> : null}
                        </div>
                      </div>

                      {/* Brand Logo Icon */}
                      <div className="w-8 h-8 rounded-xl bg-palette-primary/10 p-1.5 flex items-center justify-center shrink-0 border border-palette-primary/20 group-hover:border-palette-primary/50 transition-colors">
                        <SkillIcon slug={s.iconSlug} name={s.name} />
                      </div>
                    </div>

                    {/* Animated Progress Bar */}
                    <div className="mt-3">
                      <div className="flex justify-between items-center text-[9px] font-bold text-muted-foreground mb-1">
                        <span>Level</span>
                        <span className="text-palette-primary">{s.level}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${s.level}%` }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-palette-primary to-palette-light"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          ))}
        </motion.div>
      </motion.div>

      {/* Expand / Collapse Control Button */}
      {(hasOverflow || expanded) && (
        <div className="flex justify-center pt-2">
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-card hover:bg-muted text-foreground text-xs font-bold shadow-sm transition-all"
            aria-expanded={expanded}
          >
            {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            <span>{expanded ? "Show less" : "Show more"}</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default SkillsList;
