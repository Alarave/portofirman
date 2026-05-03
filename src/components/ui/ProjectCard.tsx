import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  InventoryBarChart,
  SentimentDonutChart,
  FinancialLineChart,
} from "@/components/ui/ProjectChartThumbnail";

interface Metric {
  label: string;
  value: string;
  color: string;
}

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
  chartType?: "inventory" | "sentiment" | "financial" | null;
  metrics?: Metric[];
}

/** Category → gradient mapping for chart placeholder backgrounds */
const categoryGradient: Record<string, string> = {
  "Data Science": "from-primary/10 via-cyan-500/5 to-background",
  "Business Intelligence": "from-emerald-500/10 via-teal-500/5 to-background",
  "SAP/ERP": "from-indigo-500/10 via-violet-500/5 to-background",
};

export function ProjectCard({
  id,
  title,
  description,
  category,
  technologies,
  thumbnail,
  chartType,
  metrics,
}: ProjectCardProps) {
  const gradient = categoryGradient[category] ?? "from-muted to-background";

  const renderThumbnail = () => {
    if (thumbnail) {
      return (
        <img
          src={thumbnail}
          alt={`${title} — project screenshot`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      );
    }

    // Inline SVG chart for projects without screenshots
    const chartClass = "w-full h-full p-4 text-foreground";
    if (chartType === "inventory") {
      return (
        <div className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center p-2`}>
          <InventoryBarChart className={chartClass} />
        </div>
      );
    }
    if (chartType === "sentiment") {
      return (
        <div className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center p-2`}>
          <SentimentDonutChart className={chartClass} />
        </div>
      );
    }
    if (chartType === "financial") {
      return (
        <div className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center p-2`}>
          <FinancialLineChart className={chartClass} />
        </div>
      );
    }

    // Generic fallback
    return (
      <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${gradient}`}>
        <span className="text-4xl opacity-40" aria-hidden="true">📊</span>
      </div>
    );
  };

  return (
    <Link
      to={`/projects/${id}`}
      className="group h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-2xl"
      aria-label={`View details for ${title}`}
    >
      <Card className="h-full flex flex-col overflow-hidden border-border/50 bg-card hover:border-primary/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 rounded-2xl">
        {/* Thumbnail / Chart */}
        <div className="aspect-video w-full overflow-hidden bg-muted relative">
          {renderThumbnail()}
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
        </div>

        <CardHeader className="pb-2 pt-4">
          <div className="flex items-center justify-between gap-2 mb-1">
            <Badge
              variant="secondary"
              className="text-xs font-semibold px-2.5 py-0.5 bg-primary/10 text-primary border-0"
            >
              {category}
            </Badge>
          </div>
          <h3 className="text-base font-bold leading-snug group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col gap-3 pt-0">
          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {description}
          </p>

          {/* Performance metrics */}
          {metrics && metrics.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {metrics.slice(0, 3).map((m) => (
                <div
                  key={m.label}
                  className="flex flex-col items-center px-2.5 py-1.5 rounded-lg bg-muted/60 border border-border/50 min-w-[60px]"
                >
                  <span className={cn("text-xs font-extrabold", m.color)}>{m.value}</span>
                  <span className="text-[10px] text-muted-foreground leading-tight text-center">{m.label}</span>
                </div>
              ))}
            </div>
          )}

          <div className="mt-auto pt-3 border-t border-border/40">
            {/* Tech stack */}
            <div className="flex flex-wrap gap-1.5 mb-3">
              {technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-0.5 bg-muted/60 text-muted-foreground rounded-md border border-border/40 transition-all duration-300 hover:bg-blue-500/10 hover:text-blue-500 hover:border-blue-500/50 hover:shadow-[0_0_12px_rgba(59,130,246,0.4)] cursor-default"
                >
                  {tech}
                </span>
              ))}
              {technologies.length > 3 && (
                <span className="text-xs px-2 py-0.5 bg-muted/60 text-muted-foreground rounded-md border border-border/40 transition-all duration-300 hover:bg-blue-500/10 hover:text-blue-500 hover:border-blue-500/50 hover:shadow-[0_0_12px_rgba(59,130,246,0.4)] cursor-default">
                  +{technologies.length - 3}
                </span>
              )}
            </div>

            {/* CTA */}
            <div className="flex items-center text-sm font-semibold text-primary gap-1 group/link">
              View Case Study
              <ArrowRight
                className="w-4 h-4 transition-transform group-hover/link:translate-x-1"
                aria-hidden="true"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
