import { Layout } from "@/components/layout/Layout";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "../data/projectsData";
import { cn } from "@/lib/utils";

function SkeletonCard() {
  return (
    <div className="rounded-2xl border border-border/30 overflow-hidden animate-pulse bg-muted/20">
      <div className="aspect-[16/10] bg-muted/40" />
      <div className="p-6 space-y-4">
        <div className="h-4 bg-muted/40 rounded w-1/4" />
        <div className="h-6 bg-muted/40 rounded w-3/4" />
        <div className="space-y-2">
          <div className="h-3 bg-muted/40 rounded w-full" />
          <div className="h-3 bg-muted/40 rounded w-5/6" />
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="h-10 bg-muted/40 rounded-xl" />
          <div className="h-10 bg-muted/40 rounded-xl" />
          <div className="h-10 bg-muted/40 rounded-xl" />
        </div>
      </div>
    </div>
  );
}

export const ProjectsSection = () => {
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(projectsData.map((p) => p.category)))];

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* ── Hero ── */}
      <section className="py-20 md:py-32 bg-background relative overflow-hidden">
        <div className="container relative z-10 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-foreground mb-6">
              Featured Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
              Curated Data Science, AI Engineering, Product Management, and Business Intelligence projects. Delivering strategic analytical solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Projects Grid ── */}
      <section id="projects" className="py-20 bg-background min-h-[600px]">
        <div className="container">
          {/* Header & Controls matching Certifications */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-6 bg-primary rounded-full" />
              <h2 className="text-2xl font-bold text-foreground">All Projects</h2>
              <span className="text-sm font-medium text-muted-foreground ml-2 px-2 py-0.5 rounded-md bg-muted">
                {filteredProjects.length} Items
              </span>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-muted/50 rounded-2xl border border-border/50">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={cn(
                    "px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all",
                    selectedCategory === cat
                      ? "bg-background text-primary shadow-sm font-bold"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            {loading ? (
              <motion.div
                key="skeleton"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {Array.from({ length: 6 }).map((_, i) => (
                  <SkeletonCard key={i} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {filteredProjects.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, i) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <ProjectCard
                          id={project.id}
                          title={project.title}
                          description={project.description}
                          category={project.category}
                          technologies={project.technologies}
                          thumbnail={project.thumbnail}
                          image={project.image}
                          links={project.links}
                          chartType={project.chartType}
                          metrics={project.metrics}
                        />
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-32 bg-background rounded-[2rem] border-2 border-dashed border-border/40">
                    <p className="text-muted-foreground text-xl font-bold">No projects found.</p>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
};

const Projects = () => {
  return (
    <Layout>
      <ProjectsSection />
    </Layout>
  );
};

export default Projects;
