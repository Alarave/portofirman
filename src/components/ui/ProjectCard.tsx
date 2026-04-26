import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  thumbnail?: string;
  image?: string;
  links?: {
    liveDemo?: string;
    github?: string;
  };
}

export function ProjectCard({
  id,
  title,
  description,
  category,
  technologies,
  thumbnail,
  links,
}: ProjectCardProps) {
  return (
    <Link to={`/projects/${id}`} className="group h-full">
      <Card className="h-full flex flex-col overflow-hidden border-border/50 bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        {/* Image Container - Fixed Aspect Ratio for Consistency */}
        <div className="aspect-video w-full overflow-hidden bg-muted relative">
          {thumbnail ? (
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            // Fallback UI if no image provided (Agar tetap rapi)
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted to-muted/50">
              <span className="text-4xl opacity-50">🚀</span>
            </div>
          )}
          
          {/* Overlay on Hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        </div>

        <CardHeader className="pb-2">
          <div className="flex justify-between items-start gap-2">
            <Badge variant="secondary" className="text-xs font-medium">
              {category}
            </Badge>
          </div>
          <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
            {title}
          </h3>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col gap-4">
          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {description}
          </p>

          <div className="mt-auto pt-4 border-t border-border/50">
            <div className="flex flex-wrap gap-2 mb-4">
              {technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-1 bg-muted/50 text-muted-foreground rounded-md border border-border/50"
                >
                  {tech}
                </span>
              ))}
              {technologies.length > 3 && (
                <span className="text-xs px-2 py-1 bg-muted/50 text-muted-foreground rounded-md border border-border/50">
                  +{technologies.length - 3}
                </span>
              )}
            </div>
            
            <div className="flex items-center text-sm font-medium text-primary gap-1 group/link">
              View Details <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}