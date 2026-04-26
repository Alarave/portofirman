import { Layout } from "@/components/layout/Layout";
import { certificationsData } from "./CertificationDetail";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Calendar, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const Certifications = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container text-center space-y-6">
          <Badge variant="outline" className="px-4 py-1.5 border-primary/20 bg-primary/5 text-primary text-sm font-bold">
            Credentials & Documentation
          </Badge>
          <h1 className="text-4xl md:text-6xl font-black text-foreground tracking-tight">
            Certifications & <span className="text-gradient">Workshops</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A comprehensive collection of my professional certifications, academic workshops, and industry credentials.
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificationsData.map((cert, index) => (
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

          {/* Contact CTA */}
          <div className="mt-24 p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-primary/10 via-background to-background border-2 border-primary/10 text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-black text-foreground leading-tight">
              Verify my <span className="text-gradient">Credentials?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-xl mx-auto">
              Need more information about my academic background or specific certifications? Feel free to reach out.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild className="rounded-full px-10 h-14 text-lg shadow-xl shadow-primary/20">
                <Link to="/contact">Get in Touch</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full px-10 h-14 text-lg border-2">
                <Link to="/about">About Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Certifications;
