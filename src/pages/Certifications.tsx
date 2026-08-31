import { Layout } from "@/components/layout/Layout";
import { certificationsData } from "./CertificationDetail";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Calendar, ExternalLink, SortAsc, SortDesc, ArrowUpDown } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useState } from "react";

export const CertificationsSection = () => {
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

  const sortedData = [...certificationsData].sort((a, b) => {
    const yearA = parseInt(a.year);
    const yearB = parseInt(b.year);
    return sortOrder === "newest" ? yearB - yearA : yearA - yearB;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-black text-foreground tracking-tight">
            Certifications & Workshops
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A comprehensive collection of my professional certifications, academic workshops, and industry credentials.
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          {/* Sorting Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-6 bg-primary rounded-full" />
              <h2 className="text-2xl font-bold text-foreground">All Credentials</h2>
              <span className="text-sm font-medium text-muted-foreground ml-2 px-2 py-0.5 rounded-md bg-muted">
                {sortedData.length} Items
              </span>
            </div>
            
            <div className="flex items-center gap-2 p-1 bg-muted/50 rounded-2xl border border-border/50">
              <button
                onClick={() => setSortOrder(sortOrder === "newest" ? "oldest" : "newest")}
                className="flex items-center gap-3 px-6 py-2.5 rounded-xl text-sm font-bold bg-background text-primary shadow-lg shadow-black/5 hover:scale-105 transition-all duration-300 group"
              >
                {sortOrder === "newest" ? (
                  <>
                    <SortDesc className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
                    <span>Showing: Newest First</span>
                  </>
                ) : (
                  <>
                    <SortAsc className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
                    <span>Showing: Oldest First</span>
                  </>
                )}
                <div className="w-px h-4 bg-border/50 mx-1" />
                <ArrowUpDown className="w-3.5 h-3.5 text-muted-foreground opacity-50" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedData.map((cert, index) => (
              <div 
                key={cert.id} 
                className="opacity-0 animate-slide-up fill-mode-forwards"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Link to={`/certifications/${cert.id}`}>
                  <Card className="group h-full hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden border-border/50">
                    <div className="aspect-video relative overflow-hidden bg-muted">
                      {cert.isImage && cert.icon ? (
                        <img 
                          src={cert.icon} 
                          alt={cert.title} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-primary/5">
                          <Award className="w-16 h-16 text-primary/20" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <span className="text-white font-bold flex items-center gap-2">
                          View Details <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-none font-bold">
                          {cert.year}
                        </Badge>
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                          <Calendar className="w-3.5 h-3.5" />
                          Verified
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2">
                          {cert.title}
                        </h3>
                        <p className="text-sm text-muted-foreground font-medium">
                          {cert.issuer}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {cert.skills.slice(0, 3).map((skill) => (
                          <Badge key={skill} variant="outline" className="text-[10px] uppercase tracking-wider py-0 px-2 font-bold">
                            {skill}
                          </Badge>
                        ))}
                        {cert.skills.length > 3 && (
                          <span className="text-[10px] text-muted-foreground font-bold pl-1">
                            +{cert.skills.length - 3} more
                          </span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

const Certifications = () => {
  return (
    <Layout>
      <CertificationsSection />
    </Layout>
  );
};

export default Certifications;
