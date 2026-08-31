import React from "react";
import { Database, Sparkles, Layers, GraduationCap, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

import gunadarmaLogo from "@/assets/logo/gunadarma_logo.jpg";
import sman5Logo from "@/assets/logo/sman5_logo.png";
import { SkillsShowcase } from "@/components/ui/skills-showcase";

function AnimatedCounter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    https://127.0.0.1:7705/static/artifacts/8963a4b7-47fb-4eb5-9a9f-9fad9708fcd9/.user_uploaded/media_1788174219454.png?csrf=484abd90-d295-440b-9e45-56f1f262ae11
    if (isInView) {
      const controls = animate(count, value, { duration: 1.2, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, count, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const labelsDataScience = [
  "Python",
  "SQL",
  "PostgreSQL",
  "Pandas",
  "Scikit-learn",
  "Predictive Modeling",
  "SAP S/4HANA Integration",
  "Time-Series Forecasting",
  "Matplotlib",
  "Seaborn"
];

const labelsAI = [
  "OpenAI API",
  "Groq",
  "LangChain",
  "Qdrant",
  "Hugging Face",
  "LlamaIndex",
  "RAG Systems",
  "Streamlit",
  "Prompt Engineering"
];

const labelsProduct = [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Product Strategy",
  "REST APIs",
  "Git & GitHub Actions",
  "CI/CD",
  "Netlify",
  "System Architecture"
];

const languages = [
  { name: "Indonesian", level: 100, proficiency: "Native / Fluent", flag: "🇮🇩" },
  { name: "English", level: 75, proficiency: "Professional Working", flag: "🇺🇸" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
    },
  }),
};

export const Expertise: React.FC = () => {
  return (
    <section className="py-12 sm:py-20 bg-background space-y-12 sm:space-y-20" id="expertise">
      {/* ── CORE EXPERTISE ── */}
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16 space-y-3 sm:space-y-4">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground">
            Core Expertise
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
            Spanning Data Science, AI Engineering, and Product Development to deliver end-to-end intelligent solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1: Data Science */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
            className="group relative p-5 sm:p-7 rounded-2xl border border-border/30 bg-card/20 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-primary/5"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:scale-110 transition-transform duration-300">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2.5 text-foreground group-hover:text-primary transition-colors">
                Data Science & Analytics
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                Specialized in building end-to-end predictive models, data pipelines, and analytical tools. Experienced in integrating enterprise data systems like SAP S/4HANA to unlock actionable business insights.
              </p>
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-1.5 pt-4 border-t border-border/40">
                <span className="text-[11px] font-bold text-foreground mr-1">
                  Tech stack:
                </span>
                {labelsDataScience.map((label, index) => (
                  <Badge key={index} variant="secondary" className="px-2.5 py-0.5 text-[10px] font-medium rounded-md bg-muted/60 hover:bg-primary/20 text-muted-foreground hover:text-foreground transition-colors">
                    {label}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 2: AI Engineering */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
            className="group relative p-5 sm:p-7 rounded-2xl border border-border/30 bg-card/20 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-primary/5"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2.5 text-foreground group-hover:text-primary transition-colors">
                GenAI & LLM Solutions
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                Designing enterprise-grade Generative AI solutions and RAG architectures. Building smart assistants, custom knowledge bases, and AI-enabled workflows to empower data-driven automation.
              </p>
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-1.5 pt-4 border-t border-border/40">
                <span className="text-[11px] font-bold text-foreground mr-1">
                  Tech stack:
                </span>
                {labelsAI.map((label, index) => (
                  <Badge key={index} variant="secondary" className="px-2.5 py-0.5 text-[10px] font-medium rounded-md bg-muted/60 hover:bg-primary/20 text-muted-foreground hover:text-foreground transition-colors">
                    {label}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 3: Product Strategy */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
            className="group relative p-5 sm:p-7 rounded-2xl border border-border/30 bg-card/20 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-primary/5"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:scale-110 transition-transform duration-300">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2.5 text-foreground group-hover:text-primary transition-colors">
                Product & Full Stack Dev
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                Combining tech execution with strategic product management. Building responsive React frontends, robust REST APIs, and maintaining CI/CD deployment pipelines for scalable products.
              </p>
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-1.5 pt-4 border-t border-border/40">
                <span className="text-[11px] font-bold text-foreground mr-1">
                  Tech stack:
                </span>
                {labelsProduct.map((label, index) => (
                  <Badge key={index} variant="secondary" className="px-2.5 py-0.5 text-[10px] font-medium rounded-md bg-muted/60 hover:bg-primary/20 text-muted-foreground hover:text-foreground transition-colors">
                    {label}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── TECH STACK & TOOLS ── */}
      <div className="container px-4 mx-auto pt-16 sm:pt-24 space-y-10 sm:space-y-14">
        <div className="max-w-2xl">
          <h3 className="text-2xl sm:text-3.5xl font-black text-foreground tracking-tight">Tech Stack & Tools</h3>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1.5">Languages, frameworks, and tools I use to bring ideas to life.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {[
            {
              title: "DATA SCIENCE & MACHINE LEARNING",
              skills: [
                { name: "Python", icon: "devicon-python-plain text-[#3776AB]" },
                { name: "Scikit-Learn", icon: "devicon-scikitlearn-plain text-[#F7931E]" },
                { name: "PyTorch", icon: "devicon-pytorch-original text-[#EE4C2C]" },
                { name: "TensorFlow", icon: "devicon-tensorflow-line text-[#FF6F00]" },
                { name: "Pandas", icon: "devicon-pandas-plain text-[#150458]" },
                { name: "NumPy", icon: "devicon-numpy-plain text-[#013243]" },
                { name: "Keras", icon: "devicon-keras-plain text-[#D00000]" },
                { name: "Flask", icon: "devicon-flask-original text-[#000000] dark:text-white" },
                { name: "FastAPI", icon: "devicon-fastapi-plain text-[#009688]" },
                { name: "Docker", icon: "devicon-docker-plain text-[#2496ED]" },
                { name: "Streamlit", icon: "devicon-streamlit-plain text-[#FF4B4B]" },
                { name: "Jupyter", icon: "devicon-jupyter-plain text-[#F37626]" },
                { name: "Anaconda", icon: "devicon-anaconda-original text-[#44A833]" },
                { name: "Kaggle", icon: "devicon-kaggle-original text-[#20BEFF]" },
              ]
            },
            {
              title: "DATABASES & ANALYTICS",
              skills: [
                { name: "PostgreSQL", icon: "devicon-postgresql-plain text-[#4169E1]" },
                { name: "MongoDB", icon: "devicon-mongodb-plain text-[#47A248]" },
                { name: "MySQL", icon: "devicon-mysql-original text-[#4479A1]" },
                { name: "Google BigQuery", icon: "devicon-googlecloud-plain text-[#4285F4]" },
              ]
            },
            {
              title: "WEB DEVELOPMENT",
              skills: [
                { name: "HTML5", icon: "devicon-html5-plain text-[#E34F26]" },
                { name: "JavaScript", icon: "devicon-javascript-plain text-[#F7DF1E]" },
                { name: "TypeScript", icon: "devicon-typescript-plain text-[#3178C6]" },
                { name: "React", icon: "devicon-react-original text-[#61DAFB]" },
                { name: "Tailwind CSS", icon: "devicon-tailwindcss-original text-[#06B6D4]" },
                { name: "Bootstrap", icon: "devicon-bootstrap-plain text-[#7952B3]" },
                { name: "PHP", icon: "devicon-php-plain text-[#777BB4]" },
                { name: "Laravel", icon: "devicon-laravel-original text-[#FF2D20]" },
              ]
            },
            {
              title: "PRODUCT MANAGEMENT",
              skills: [
                { name: "Jira", icon: "devicon-jira-plain text-[#0052CC]" },
                { name: "Figma", icon: "devicon-figma-plain text-[#F24E1E]" },
                { name: "Trello", icon: "devicon-trello-plain text-[#0079BF]" },
                { name: "Notion", icon: "devicon-notion-plain text-[#000000] dark:text-white" },
                { name: "Asana", icon: "devicon-asana-plain text-[#FC636B]" },
              ]
            }
          ].map((cat) => (
            <div key={cat.title} className="p-6 rounded-2xl border border-border/20 bg-card/20 backdrop-blur-sm space-y-5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><polyline points="20 6 9 17 4 12" /></svg>
                {cat.title}
              </div>
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-background border border-border/40 text-xs sm:text-sm font-semibold text-foreground/90 shadow-sm hover:border-primary/30 transition-all">
                    <i className={`${skill.icon} text-base`} />
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── EDUCATION SECTION ── */}
      <div className="container px-4 mx-auto pt-4 sm:pt-8 space-y-6 sm:space-y-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-2xl font-black text-foreground tracking-tight">Education</h3>
            <p className="text-xs text-muted-foreground">Academic background & qualifications</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            {
              school: "Gunadarma University",
              sub: "Bachelor of Information Systems",
              year: "2023 — Present",
              desc: "Specializing in Data Science and ERP Systems. Maintaining a high academic standing with multiple project implementations in SAP S/4HANA and Python-based analytics.",
              statsLabel: "Cumulative GPA",
              statsVal: "3.88",
              logo: gunadarmaLogo,
            },
            {
              school: "SMA Negeri 5 Jakarta",
              sub: "Natural Sciences (IPA)",
              year: "2020 — 2023",
              desc: "Developed strong analytical thinking and mathematical foundation. Active in technology and science extracurriculars.",
              statsLabel: "Avg. Score",
              statsVal: "89.67",
              logo: sman5Logo,
            },
          ].map((edu) => (
            <div
              key={edu.school}
              className="group relative p-5 sm:p-6 rounded-2xl border border-border/20 bg-card/20 backdrop-blur-sm hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-start">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white flex items-center justify-center p-2.5 border border-border/80 shadow-sm shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <img src={edu.logo} alt={edu.school} className="w-full h-full object-contain" />
                </div>

                <div className="flex-1 space-y-2 w-full">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {edu.school}
                    </h4>
                    <Badge className="bg-primary/10 text-primary border-0 font-bold tracking-wider text-[10px] sm:text-xs px-2.5 py-0.5 rounded-full">
                      {edu.year}
                    </Badge>
                  </div>

                  <p className="text-xs sm:text-sm font-semibold text-primary/90">{edu.sub}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-1">{edu.desc}</p>

                  <div className="pt-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted/50 border border-border/40">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{edu.statsLabel}:</span>
                      <span className="text-xs sm:text-sm font-black text-foreground font-mono">{edu.statsVal}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── LANGUAGES SECTION ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="container px-4 mx-auto pt-6 sm:pt-10 space-y-6 sm:space-y-8"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
            <Globe className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-2xl font-black text-foreground tracking-tight">Languages</h3>
            <p className="text-xs text-muted-foreground">Linguistic proficiency</p>
          </div>
        </div>

        <div className="max-w-xl">
          <SkillsShowcase items={languages} />
        </div>
      </motion.div>
    </section>
  );
};

export default Expertise;
