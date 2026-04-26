import { Layout } from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  GraduationCap,
  Award,
  BookOpen,
  ShieldCheck,
  ArrowRight,
  Globe,
  Code2,
  BarChart3,
  Database,
  Calendar,
  MapPin,
  Star,
  Laptop,
  Download,
} from "lucide-react";
import { Link } from "react-router-dom";
import { certificationsData } from "./CertificationDetail";
import profilePhoto from "@/assets/profile-photo.jpg";
import cvFile from "@/assets/cv.pdf";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

// --- DATA SKILLS ---
const programmingSkills = [
  { name: "Python", level: 85 },
  { name: "SQL", level: 90 },
  { name: "TypeScript", level: 75 },
];
const biTools = [
  { name: "Power BI", level: 85 },
  { name: "Looker Studio", level: 80 },
  { name: "Google BigQuery", level: 75 },
  { name: "SAP Cloud Analytics", level: 80 },
];
const otherSkills = [
  { name: "Microsoft Excel", level: 90 },
  { name: "SAP S/4HANA", level: 85 },
  { name: "Figma", level: 70 },
  { name: "GitHub", level: 75 },
];

const languages = [
  { name: "Indonesian", level: 100, proficiency: "Native / Fluent", flag: "🇮🇩" },
  { name: "English", level: 70, proficiency: "Professional Working", flag: "🇺🇸" },
];

const relevantCourses = [
  "Data Science", "Business Intelligence", "Database Management",
  "Statistics", "Machine Learning", "Information Systems", "ERP Systems"
];

const conferences = [
  {
    title: "EECSI 2025",
    description: "International Conference on Electrical Engineering, Computer Science and Informatics",
    year: "2025",
    type: "Conference",
  },
  {
    title: "ASEAN Data Analytics - SAP Workshop",
    description: "SAP Analytics Cloud and Data Integration Workshop",
    year: "2024",
    type: "Workshop",
  },
  {
    title: "PWC Workshop",
    description: "Professional Development and Business Analytics",
    year: "2024",
    type: "Workshop",
  },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: string }) => {
  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="space-y-2 animate-slide-up opacity-0" style={{ animationDelay: delay }}>
      <div className="flex justify-between text-sm">
        <span className="font-medium text-foreground/80">{name}</span>
        <span className="font-bold text-primary">{level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div 
          className="h-full bg-primary transition-all duration-1000 ease-out"
          style={{ width: animated ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
};

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24" id="hero">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Profile Photo */}
            <div className="lg:col-span-4 animate-scale-in opacity-0">
              <div className="relative max-w-sm mx-auto lg:mx-0">
                <div className="aspect-square rounded-2xl overflow-hidden border-4 border-background shadow-xl">
                  <img src={profilePhoto} alt="Firman Pambudiansyah" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-4 rounded-xl shadow-lg animate-float">
                  <p className="text-lg font-bold">3.88 GPA</p>
                  <p className="text-xs uppercase tracking-wider opacity-90">Honors</p>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="lg:col-span-8 space-y-6">
              <div className="animate-fade-in opacity-0">
                <Badge variant="outline" className="mb-4 px-3 py-1 border-primary/20 bg-primary/5 text-primary">
                  About My Journey
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  I'm <span className="text-gradient">Firman Pambudiansyah</span>
                </h1>
                <p className="text-xl text-muted-foreground font-medium flex items-center gap-2">
                  <Laptop className="h-5 w-5 text-primary" />
                  Technical Consultant & Data Strategist
                </p>
              </div>

              <div className="animate-slide-up opacity-0" style={{ animationDelay: "0.2s" }}>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  An Information Systems student at Gunadarma University, specializing in 
                  <span className="text-foreground font-semibold"> SAP S/4HANA</span>,
                  <span className="text-foreground font-semibold"> Data Analytics</span>, and
                  <span className="text-foreground font-semibold"> Business Intelligence</span>.
                </p>
                <div className="flex flex-wrap gap-4 pt-6">
                  <Button asChild className="rounded-full px-6">
                    <a href={cvFile} target="_blank" rel="noopener noreferrer">
                      <Download className="mr-2 h-4 w-4" />
                      Download CV
                    </a>
                  </Button>
                  <Button variant="outline" asChild className="rounded-full px-6">
                    <Link to="/contact">Contact Me</Link>
                  </Button>
                </div>
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 animate-slide-up opacity-0" style={{ animationDelay: "0.3s" }}>
                {[
                  { label: "Based In", value: "Jakarta, ID", icon: MapPin },
                  { label: "University", value: "Gunadarma", icon: GraduationCap },
                  { label: "GPA Score", value: "3.88 / 4.0", icon: Star },
                  { label: "Core Major", value: "Info Systems", icon: Laptop },
                ].map((item) => (
                  <div key={item.label} className="p-4 rounded-xl border border-border bg-card/50">
                    <item.icon className="h-5 w-5 text-primary mb-2" />
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{item.label}</p>
                    <p className="text-sm font-bold text-foreground">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Skills */}
      <section className="py-16 md:py-24 bg-muted/30" id="education-skills">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Education */}
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <GraduationCap className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">Education</h2>
              </div>
              <div className="space-y-6">
                {[
                  {
                    school: "Gunadarma University",
                    sub: "Bachelor of Information Systems",
                    year: "2023 - Present",
                    desc: "Focusing on Data Science, Business Intelligence, and ERP Systems."
                  },
                  {
                    school: "SMA Negeri 5 Jakarta",
                    sub: "Natural Sciences (IPA)",
                    year: "2020 - 2023",
                    desc: "Successfully graduated with 89.67 average grade."
                  }
                ].map((edu, i) => (
                  <div key={edu.school} className="relative pl-6 border-l-2 border-primary/20 py-2">
                    <div className="absolute -left-[9px] top-4 w-4 h-4 rounded-full bg-primary" />
                    <span className="text-xs font-bold text-primary mb-1 block">{edu.year}</span>
                    <h3 className="text-lg font-bold text-foreground">{edu.school}</h3>
                    <p className="text-sm font-semibold text-muted-foreground mb-2">{edu.sub}</p>
                    <p className="text-sm text-muted-foreground">{edu.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <Code2 className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">Technical Skills</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Programming</h4>
                  {programmingSkills.map((s, i) => <SkillBar key={s.name} name={s.name} level={s.level} delay={`${i * 0.1}s`} />)}
                </div>
                <div className="space-y-6">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">BI Tools</h4>
                  {biTools.map((s, i) => <SkillBar key={s.name} name={s.name} level={s.level} delay={`${i * 0.1}s`} />)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Languages & Credentials */}
      <section className="py-16 md:py-24" id="languages-credentials">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Languages */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center gap-3">
                <Globe className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">Languages</h2>
              </div>
              <div className="space-y-4">
                {languages.map((l) => (
                  <div key={l.name} className="p-4 rounded-xl border border-border bg-card">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{l.flag}</span>
                        <span className="font-bold">{l.name}</span>
                      </div>
                      <span className="text-xs font-bold text-primary">{l.proficiency}</span>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: `${l.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Credentials */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-3">
                <Award className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">Certifications & Workshops</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certificationsData.slice(0, 4).map((cert) => (
                  <Link to={`/certifications/${cert.id}`} key={cert.id}>
                    <Card className="hover:border-primary/50 transition-colors h-full">
                      <CardContent className="p-4 flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          {cert.isImage && cert.icon ? (
                            <img src={cert.icon} alt={cert.title} className="w-6 h-6 object-contain" />
                          ) : (
                            <Award className="h-5 w-5 text-primary" />
                          )}
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                          <h4 className="text-sm font-bold text-foreground truncate">{cert.title}</h4>
                        </div>
                        <ArrowRight className="h-4 w-4 text-primary ml-auto flex-shrink-0" />
                      </CardContent>
                    </Card>
                  </Link>
                ))}
                {conferences.slice(0, 2).map((conf) => (
                  <Card key={conf.title} className="bg-muted/30 border-dashed">
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                        <ShieldCheck className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-muted-foreground">{conf.type} · {conf.year}</p>
                        <h4 className="text-sm font-bold text-foreground truncate">{conf.title}</h4>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <Button variant="ghost" className="w-full mt-4" asChild>
                <Link to="/certifications" className="flex items-center justify-center">
                  View All Documentation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8 md:p-12 text-center space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">Let's build something great together.</h2>
              <p className="text-primary-foreground/80 max-w-xl mx-auto">
                Ready to bring data-driven insights to your next project? Let's talk about how I can help.
              </p>
              <Button variant="secondary" size="lg" asChild className="rounded-full">
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default About;