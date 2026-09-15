import { Layout } from "@/components/layout/Layout";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "../data/projectsData";
import { cn } from "@/lib/utils";

export const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(projectsData.map((p) => p.category)))];

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-28 md:pt-36 pb-12 bg-background relative overflow-hidden">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-foreground mb-6">
              Featured Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
              Curated Data Science, Full Stack Development, and Machine Learning projects. Delivering strategic analytical solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Projects Grid ── */}
      <section id="projects" className="pt-8 pb-28 md:pb-36 bg-background min-h-[600px]">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header & Controls matching Certifications */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-6 bg-primary rounded-full" />
              <h2 className="text-2xl font-bold text-foreground">All Projects</h2>
              <span
                aria-live="polite"
                className="text-sm font-medium text-muted-foreground ml-2 px-2 py-0.5 rounded-md bg-muted"
              >
                {filteredProjects.length} Items
              </span>
            </div>

            {/* Category Filter */}
            <div
              role="group"
              aria-label="Filter proyek berdasarkan kategori"
              className="flex flex-wrap items-center gap-1.5 p-1 bg-muted/50 rounded-2xl border border-border/50"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  aria-pressed={selectedCategory === cat}
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
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {filteredProjects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProjects.map((project, i) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: i * 0.04 }}
                    >
                      <ProjectCard
                        id={project.id}
                        title={project.title}
                        description={project.description}
                        category={project.category}
                        technologies={project.technologies}
                        thumbnail={project.thumbnail}
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
