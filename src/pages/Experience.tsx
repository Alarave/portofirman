import { Layout } from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Briefcase,
  Calendar,
  MapPin,
  Users,
  Award,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

interface ExperienceData {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  icon: any;
  description: string;
  responsibilities: string[];
  achievements?: string[];
}

const allExperiences: ExperienceData[] = [
  {
    id: 0,
    title: "Asisten Praktikum DGX",
    company: "Universitas Gunadarma",
    location: "Depok, Indonesia",
    period: "Feb 2026 — Present",
    type: "Teaching Assistant",
    icon: GraduationCap,
    description:
      "Served as a laboratory assistant for High Performance Computing (DGX) practical sessions, mentoring students in Deep Learning implementations and the utilization of advanced AI infrastructure.",
    responsibilities: [
      "Assisting students during laboratory sessions using NVIDIA DGX systems",
      "Explaining Deep Learning concepts and practical AI model training techniques",
      "Providing technical support for student projects in the field of High Performance Computing (HPC)",
      "Regularly evaluating students' practical results and assignments",
    ],
  },
  {
    id: 1,
    title: "Data Entry Agent",
    company: "PT. Pegadaian",
    location: "Jakarta, Indonesia",
    period: "Aug 2025 — Present",
    type: "Part-time",
    icon: Briefcase,
    description:
      "Responsible for accurate data entry and management of customer records in the company's database system. Ensuring data integrity and compliance with company policies.",
    responsibilities: [
      "Managing and processing large volumes of customer data with high accuracy",
      "Performing quality checks on entered data to maintain database integrity",
      "Collaborating with team members to streamline data entry processes",
      "Generating reports on data entry metrics and performance",
    ],
  },
  {
    id: 3,
    title: "Coordinator of Commission VI MPK",
    company: "SMA Negeri 5 Jakarta",
    location: "Jakarta, Indonesia",
    period: "Aug 2020 — Sep 2022",
    type: "Student Leadership",
    icon: Users,
    description:
      "Oversaw and evaluated the execution of Student Council (OSIS) work programs across Communication, ICT, and Entrepreneurship divisions.",
    responsibilities: [
      "Monitored work program accountability reports (LPJ) across 3 sub-divisions",
      "Coordinated cross-functional alignment between student council bodies and extracurricular clubs",
      "Led regular commission review sessions to maintain organizational standards",
      "Bridged communication between student representatives and school leadership",
    ],
    achievements: [
      "Supervised the execution and reporting of 15+ school events and student initiatives",
      "Standardized work program reporting templates and evaluation rubrics",
    ],
  },
];

const TimelineItem = ({
  exp,
  index,
}: {
  exp: ExperienceData;
  index: number;
}) => {
  const Icon = exp.icon;
  const isEven = index % 2 === 0;

  return (
    <div className={`relative flex flex-col md:flex-row items-center md:justify-between w-full mb-12 ${isEven ? "md:flex-row-reverse" : ""}`}>
      {/* Spacer to push card to one side in desktop */}
      <div className="hidden md:block w-[calc(50%-2rem)]" />

      {/* Glow Center Node (Dot) */}
      <div className="absolute left-[18px] md:left-1/2 md:-translate-x-1/2 top-4 md:top-6 w-9 h-9 rounded-full bg-background border border-primary/40 flex items-center justify-center z-20 shadow-[0_0_12px_rgba(33,150,243,0.3)] group">
        <Icon className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
      </div>

      {/* Timeline Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="w-full md:w-[calc(50%-2rem)] pl-12 md:pl-0"
      >
        <Card className="group relative bg-card/45 backdrop-blur-md border border-border/40 hover:border-primary/40 hover:shadow-[0_0_20px_rgba(33,150,243,0.08)] transition-all duration-500 rounded-2xl overflow-hidden">
          <CardContent className="p-6 md:p-7">
            {/* Year Badge inside card top-right for desktop / simple row for mobile */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="text-[10px] font-semibold tracking-wider uppercase bg-primary/10 text-primary border-none">
                  {exp.type}
                </Badge>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="w-3.5 h-3.5" />
                  {exp.location}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-primary/80">
                <Calendar className="w-3.5 h-3.5" />
                {exp.period}
              </div>
            </div>

            {/* Position & Company */}
            <div className="mb-4">
              <h3 className="text-lg font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                {exp.title}
              </h3>
              <p className="text-sm font-semibold text-muted-foreground mt-1">
                {exp.company}
              </p>
            </div>

            {/* Description */}
            <p className="text-xs font-normal leading-relaxed text-muted-foreground/90 mb-5">
              {exp.description}
            </p>

            {/* Responsibilities */}
            <div className="space-y-2.5">
              {exp.responsibilities.map((resp, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-xs leading-relaxed text-muted-foreground/80">
                    {resp}
                  </span>
                </div>
              ))}
            </div>

            {/* Achievements */}
            {exp.achievements && exp.achievements.length > 0 && (
              <div className="mt-5 pt-5 border-t border-border/40">
                <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-3">
                  Key Achievements
                </p>
                <div className="space-y-2">
                  {exp.achievements.map((ach, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <Award className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-muted-foreground/80">{ach}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export const ExperienceSection = () => {
  return (
    <>
      {/* Header */}
      <section className="pt-24 pb-12">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-3xl mx-auto space-y-4"
          >
            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-black tracking-tight leading-none text-foreground">
              Career History
            </motion.h1>
            <motion.p variants={itemVariants} className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              A chronological overview of my professional engineering roles, leadership responsibilities, and academic contributions.
            </motion.p>
          </motion.div>
        </div>
      </section>
 
      {/* Timeline Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container relative max-w-6xl">
          {/* Centered Timeline Spine */}
          <div className="absolute left-[35px] md:left-1/2 md:-translate-x-1/2 top-4 bottom-12 w-[2px] bg-gradient-to-b from-primary/60 via-primary/30 to-transparent pointer-events-none" />

          <div className="relative space-y-0">
            {allExperiences.map((exp, i) => (
              <TimelineItem
                key={exp.id}
                exp={exp}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

const Experience = () => {
  return (
    <Layout>
      <ExperienceSection />
    </Layout>
  );
};

export default Experience;
