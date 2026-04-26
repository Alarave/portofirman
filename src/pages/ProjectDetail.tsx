import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { projectsData } from "./Projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github, Calendar, Tag } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  // Fix ID matching (trim spaces just in case)
  const project = projectsData.find((p) => p.id.trim() === id?.trim());

  if (!project) {
    return (
      <Layout>
        <div className="container py-20 text-center space-y-6">
          <div className="text-6xl">🔍</div>
          <h1 className="text-2xl font-bold">Project Not Found</h1>
          <p className="text-muted-foreground">
            The project you're looking for doesn't exist.
          </p>
          <Button asChild>
            <Link to="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Back Button */}
      <section className="py-8">
        <div className="container">
          <Button variant="ghost" asChild className="pl-0 hover:bg-transparent">
            <Link to="/projects" className="text-muted-foreground hover:text-primary">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
            </Link>
          </Button>
        </div>
      </section>

      {/* Hero Image & Header */}
      <section className="pb-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content (Left) */}
            <div className="lg:col-span-2 space-y-8">
              {/* Large Image - Focus on Detail */}
              <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg border border-border bg-muted">
                {project.image || project.thumbnail ? (
                  <img
                    src={project.image || project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-muted">
                    <span className="text-6xl opacity-50">🚀</span>
                  </div>
                )}
              </div>

              {/* Title & Category */}
              <div className="space-y-4">
                <Badge variant="outline" className="text-sm px-3 py-1">
                  {project.category}
                </Badge>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                  {project.title}
                </h1>
              </div>

              {/* Overview */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
                  <span className="w-1 h-6 bg-primary rounded-full"></span>
                  Project Overview
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {project.fullDescription}
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
                  <span className="w-1 h-6 bg-primary rounded-full"></span>
                  Key Features
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.features?.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar (Right) */}
            <div className="space-y-6">
              {/* Tech Stack Card */}
              <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Tag className="w-4 h-4 text-primary" />
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="font-normal">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Links Card */}
              <div className="bg-card border border-border rounded-xl p-6 shadow-sm space-y-3">
                <h3 className="font-semibold text-foreground mb-2">Project Links</h3>
                
                {project.links?.liveDemo && (
                  <Button className="w-full" asChild>
                    <a
                      href={project.links.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}

                <Button variant="outline" className="w-full" asChild>
                  {project.links?.github ? (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Source Code
                    </a>
                  ) : (
                    <span className="opacity-50 cursor-not-allowed">
                      <Github className="mr-2 h-4 w-4" />
                      Private Repository
                    </span>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;