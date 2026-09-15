import { Layout } from "@/components/layout/Layout";
import { certificationsData } from "./CertificationDetail";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Calendar, ExternalLink, SortAsc, SortDesc, ArrowUpDown, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useState, useRef } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const ITEMS_PER_PAGE = 6;

export const CertificationsSection = () => {
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const sectionRef = useRef<HTMLDivElement>(null);

  const sortedData = [...certificationsData].sort((a, b) => {
    const yearA = parseInt(a.year);
    const yearB = parseInt(b.year);
    return sortOrder === "newest" ? yearB - yearA : yearA - yearB;
  });

  const totalPages = Math.ceil(sortedData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedData = sortedData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    setCurrentPage(page);
    if (sectionRef.current) {
      const yOffset = -80;
      const y = sectionRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleSortToggle = () => {
    setSortOrder((prev) => (prev === "newest" ? "oldest" : "newest"));
    setCurrentPage(1);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 md:pt-36 pb-12 bg-background">
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
      <section ref={sectionRef} className="pt-8 pb-28 md:pb-36" id="certifications-list">
        <div className="container">
          {/* Sorting Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-6 bg-primary rounded-full" />
              <h2 className="text-2xl font-bold text-foreground">All Credentials</h2>
              <span className="text-xs font-semibold text-muted-foreground ml-2 px-3 py-1 rounded-full bg-muted/80 border border-border/50">
                Showing {startIndex + 1}–{Math.min(startIndex + ITEMS_PER_PAGE, sortedData.length)} of {sortedData.length}
              </span>
            </div>
            
            <div className="flex items-center gap-2 p-1 bg-muted/50 rounded-2xl border border-border/50">
              <button
                onClick={handleSortToggle}
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
            {paginatedData.map((cert, index) => (
              <div 
                key={cert.id} 
                className="opacity-0 animate-slide-up fill-mode-forwards"
                style={{ animationDelay: `${index * 0.08}s` }}
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

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="mt-14 flex justify-center">
              <Pagination>
                <PaginationContent className="gap-2">
                  <PaginationItem>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="gap-1 border-border/60 hover:bg-primary/10 disabled:opacity-40"
                    >
                      <ChevronLeft className="h-4 w-4" />
                      <span className="hidden sm:inline">Previous</span>
                    </Button>
                  </PaginationItem>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <PaginationItem key={page}>
                      <Button
                        variant={currentPage === page ? "default" : "outline"}
                        size="sm"
                        onClick={() => handlePageChange(page)}
                        className={cn(
                          "w-9 h-9 p-0 font-bold transition-all duration-200",
                          currentPage === page
                            ? "bg-primary text-primary-foreground shadow-md shadow-primary/25 pointer-events-none"
                            : "border-border/60 hover:bg-muted text-muted-foreground hover:text-foreground"
                        )}
                      >
                        {page}
                      </Button>
                    </PaginationItem>
                  ))}

                  <PaginationItem>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="gap-1 border-border/60 hover:bg-primary/10 disabled:opacity-40"
                    >
                      <span className="hidden sm:inline">Next</span>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}

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
