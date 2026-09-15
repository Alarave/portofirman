import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import profilePhoto from "@/assets/profile-photo.jpg";
import photoDiri from "@/assets/photo-diri.png";
const cvFile = "https://drive.google.com/file/d/1AXcL8VjAHFUrzhmVicI0d3VilJ13ixWn/view?usp=drive_link";

const heroImages = [profilePhoto, photoDiri];

import Expertise from "@/components/Expertise";
import { ExperienceSection } from "@/pages/Experience";
import { ProjectsSection } from "@/pages/Projects";
import { CertificationsSection } from "@/pages/Certifications";
import { ContactSection } from "@/pages/Contact";
import { SilkGradientBg } from "@/components/ui/SilkGradientBg";
import { Typewriter } from "@/components/ui/Typewriter";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Home = () => {
  useScrollReveal();
  const [cvDownloading, setCvDownloading] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const location = useLocation();

  // Slideshow every 5 seconds for relaxed, cinematic viewing
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // If user accesses /#hero or /#top, scrub hash from address bar immediately
    if (window.location.hash === "#hero" || window.location.hash === "#top") {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }

    // Scroll to about if on /about or state has scrollTo
    const target = location.pathname === "/about" ? "about" : (location.state as { scrollTo?: string })?.scrollTo;
    if (target) {
      setTimeout(() => {
        const el = document.getElementById(target);
        if (el) {
          const yOffset = -70;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
    }
  }, [location.pathname, location.state]);

  const handleCvDownload = () => {
    setCvDownloading(true);
    setTimeout(() => setCvDownloading(false), 2000);
  };

  return (
    <Layout>
      {/* HERO / MAIN SECTION */}
      <section id="top" className="relative w-full overflow-hidden min-h-screen flex items-center">
        <SilkGradientBg />
        {/* about-section */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-[30px] justify-start md:items-center w-full pt-32 md:pt-36 px-4 sm:px-6 md:px-[5%] lg:px-[15%] pb-24 md:pb-32 relative z-10">
          
          {/* image-wrapper: 4:5 rotated card, straightens + colorizes on hover, floating glass name-card, champagne glow halo */}
          <div className="z-10 w-full md:w-auto flex justify-center md:justify-start">
            <div className="group relative w-[220px] sm:w-[260px] md:w-[300px] aspect-[4/5] rounded-3xl overflow-hidden rotate-[-2deg] hover:rotate-0 grayscale-[35%] hover:grayscale-0 scale-100 hover:scale-[1.02] border-2 border-[#F7E7CE]/60 hover:border-[#F7E7CE] shadow-[0_0_35px_rgba(247,231,206,0.25)] hover:shadow-[0_0_55px_rgba(247,231,206,0.6)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer bg-muted">
              {/* Slideshow Images with cinematic crossfade */}
              <AnimatePresence initial={false}>
                <motion.img
                  key={currentImageIndex}
                  src={heroImages[currentImageIndex]}
                  alt="Firman Pambudiansyah"
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{
                    opacity: { duration: 1.5, ease: [0.25, 1, 0.5, 1] },
                    scale: { duration: 2.2, ease: [0.25, 1, 0.5, 1] },
                  }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Indicator dots */}
              <div className="absolute top-3 right-3 z-20 flex gap-1.5 backdrop-blur-md bg-black/30 px-2 py-1 rounded-full border border-white/10">
                {heroImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(i);
                    }}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-500",
                      i === currentImageIndex ? "bg-white w-4" : "bg-white/40 hover:bg-white/80 w-1.5"
                    )}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>

              {/* Floating glass name-card that slides up on hover */}
              <div className="absolute z-20 bottom-3 left-3 right-3 backdrop-blur-md bg-background/75 dark:bg-black/60 border border-white/30 dark:border-white/10 rounded-2xl p-3 shadow-xl transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <div className="text-left">
                  <p className="text-xs font-bold text-foreground leading-tight tracking-tight">
                    Firman Pambudiansyah
                  </p>
                  <p className="text-[10px] text-primary font-medium tracking-wide">
                    Data Science &amp; ML
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* content */}
          <div className="text-left z-10 w-full md:w-auto">
            {/* social_icons (Desktop only) */}
            <div className="hidden md:flex flex-row gap-[10px] text-foreground mb-4">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                <svg viewBox="0 0 24 24" className="w-[1.8em] h-[1.8em]" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                <svg viewBox="0 0 24 24" className="w-[1.8em] h-[1.8em]" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-[4.5em] font-black leading-[1.15] md:leading-none m-0 tracking-tight text-foreground text-left break-words">
              Firman Pambudiansyah
            </h1>
            <p className="text-lg sm:text-2xl md:text-[1.8em] font-bold text-primary text-left pt-2 md:pt-1 min-h-[1.5em] flex items-center">
              <Typewriter
                words={[
                  "Data Science & ML Engineer",
                  "System Analyst",
                  "Data Analyst",
                ]}
                typingSpeed={75}
                deletingSpeed={35}
                pauseDuration={2200}
              />
            </p>
            <p className="text-base sm:text-lg text-muted-foreground text-left pt-3 max-w-2xl leading-relaxed font-normal">
              Firman Pambudiansyah — Data Science and ML Engineer professional with a technical range in machine learning, cloud, and data analytics. Based in Indonesia.
            </p>

            {/* mobile_social_icons (Mobile only) */}
            <div className="flex md:hidden flex-row gap-[10px] text-foreground pt-[12px]">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                <svg viewBox="0 0 24 24" className="w-[1.8em] h-[1.8em]" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                <svg viewBox="0 0 24 24" className="w-[1.8em] h-[1.8em]" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 pt-6 md:pt-8">
              <Button size="lg" asChild className="btn-interactive rounded-xl h-11 sm:h-12 px-6 shadow-md hover:shadow-lg text-xs sm:text-sm font-bold flex items-center gap-2" onClick={handleCvDownload}>
                <a href={cvFile} target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  {cvDownloading ? "Opening..." : "Download Resume"}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT ME */}
      <section id="about" className="py-28 md:py-36 bg-background relative overflow-hidden">
        <div className="container px-4 mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            className="max-w-4xl mx-auto"
          >
            {/* Header */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
                },
              }}
              className="text-center mb-8 sm:mb-10 space-y-3 sm:space-y-4"
            >
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground">
                About Me
              </h2>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-primary/10 text-primary border border-primary/20 shadow-sm">
                Data Science • Machine Learning • Analytics
              </div>
            </motion.div>
            
            {/* Content */}
            <div className="space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed">
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
                  },
                }}
              >
                I am a student at Universitas Gunadarma serving as a High Performance Computing (DGX) laboratory assistant, where I mentor students in Deep Learning and advanced AI model implementations.
              </motion.p>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
                  },
                }}
              >
                My work centers on leveraging data and technology to solve real-world problems. Whether managing data integrity systems at PT Pegadaian or coordinating cross-functional initiatives as a student leader, I focus on executing tasks efficiently and bridging communication across teams.
              </motion.p>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
                  },
                }}
              >
                I back this up with practical technical capabilities in Data Science, Machine Learning, and High Performance Computing. Implementing deep learning models on advanced NVIDIA DGX systems allows me to understand both the mathematical foundations of algorithms and the practical constraints of hardware acceleration.
              </motion.p>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
                  },
                }}
              >
                What drives me is the gap between complex raw data and actionable business insights. I strive to sit at that intersection — turning messy data pipelines into clear predictive models and analytical reports that businesses can trust.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CORE EXPERTISE */}
      <section id="expertise" className="reveal">
        <Expertise />
      </section>

      {/* CAREER TIMELINE / EXPERIENCE */}
      <section id="experience" className="reveal">
        <ExperienceSection />
      </section>

      {/* FEATURED PROJECTS */}
      <section id="projects" className="reveal">
        <ProjectsSection />
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="reveal">
        <CertificationsSection />
      </section>

      {/* CONTACT */}
      <section id="contact" className="reveal">
        <ContactSection />
      </section>
    </Layout>
  );
};

export default Home;
