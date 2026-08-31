import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";
import profilePhoto from "@/assets/profile-photo.jpg";
const cvFile = "https://drive.google.com/file/d/1AXcL8VjAHFUrzhmVicI0d3VilJ13ixWn/view?usp=drive_link";

import Expertise from "@/components/Expertise";
import { ExperienceSection } from "@/pages/Experience";
import { ProjectsSection } from "@/pages/Projects";
import { CertificationsSection } from "@/pages/Certifications";
import { ContactSection } from "@/pages/Contact";
import { SilkGradientBg } from "@/components/ui/SilkGradientBg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Home = () => {
  const [cvDownloading, setCvDownloading] = useState(false);
  const handleCvDownload = () => {
    setCvDownloading(true);
    setTimeout(() => setCvDownloading(false), 2000);
  };

  return (
    <Layout>
      {/* HERO / MAIN SECTION (100% REPLICA OF react-portfolio-template) */}
      <section id="hero" className="relative w-full overflow-hidden">
        <SilkGradientBg />
        {/* about-section */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-[30px] justify-start md:items-center w-full min-h-0 md:min-h-[700px] pt-28 md:pt-0 px-4 sm:px-6 md:px-[5%] lg:px-[15%] pb-8 md:pb-0 relative z-10">
          
          {/* image-wrapper */}
          <div className="z-10 w-full md:w-auto flex justify-center md:justify-start">
            <img 
              src={profilePhoto} 
              alt="Firman Pambudiansyah" 
              className="w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] rounded-full object-cover border-4 border-primary shadow-[0_0_30px_rgba(33,150,243,0.5)]"
            />
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
            <p className="text-lg sm:text-2xl md:text-[1.8em] font-bold text-primary text-left pt-2 md:pt-1">
              Data Science & ML Engineer
            </p>
            <p className="text-base sm:text-lg text-muted-foreground text-left pt-3 max-w-2xl leading-relaxed font-normal">
              Firman Pambudiansyah — Data Science and ML   Engineer professional with a technical range in machine learning, cloud, and data analytics. Based in Indonesia.
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
              <Button size="lg" asChild className="rounded-xl h-11 sm:h-12 px-6 shadow-md hover:shadow-lg transition-all text-xs sm:text-sm font-bold flex items-center gap-2" onClick={handleCvDownload}>
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
      <section id="about" className="pt-32 md:pt-40 pb-20 md:pb-28 bg-background relative">
        <div className="container px-4 mx-auto">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16 space-y-3 sm:space-y-4">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground">
              About Me
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg font-medium">
              Data Science • Machine Learning • Analytics
            </p>
          </div>
          
          {/* Content */}
          <div className="max-w-4xl mx-auto space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed">
            <p>
              Student at Universitas Gunadarma serving as a High Performance Computing (DGX) laboratory assistant, mentoring students in Deep Learning and advanced AI model implementations.
            </p>
            <p>
              My work centers on leveraging data and technology to solve real-world problems. Whether managing data integrity systems at PT. Pegadaian or coordinating cross-functional initiatives as a student leader, I focus on executing tasks efficiently and bridging communication across teams.
            </p>
            <p>
              I back that with practical technical capability in Data Science, Machine Learning, and High Performance Computing. Implementing deep learning models on advanced NVIDIA DGX systems allows me to understand both the mathematics of algorithms and the practical constraints of hardware acceleration.
            </p>
            <p>
              What drives me is the gap between complex raw data and actionable business insights. I strive to sit at that intersection — turning messy data pipelines into clear predictive models and analytical reports that businesses can trust.
            </p>
          </div>
        </div>
      </section>

      {/* CORE EXPERTISE */}
      <section id="expertise">
        <Expertise />
      </section>

      {/* CAREER TIMELINE / EXPERIENCE */}
      <section id="experience">
        <ExperienceSection />
      </section>

      {/* FEATURED PROJECTS */}
      <section id="projects">
        <ProjectsSection />
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications">
        <CertificationsSection />
      </section>

      {/* CONTACT */}
      <section id="contact">
        <ContactSection />
      </section>
    </Layout>
  );
};

export default Home;
