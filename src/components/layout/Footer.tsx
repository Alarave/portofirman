import React from "react";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { useLocation } from "react-router-dom";
import profilePhoto from "@/assets/profile-photo.jpg";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#expertise", label: "Expertise" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#certifications", label: "Certifications" },
  { href: "/#contact", label: "Contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || "firmanpambudiansyah@gmail.com";
  const rawWhatsApp = import.meta.env.VITE_CONTACT_WHATSAPP;
  const waHref = rawWhatsApp ? `https://wa.me/${rawWhatsApp.replace(/[^0-9]/g, "")}` : "/#contact";
  const waTarget = rawWhatsApp ? "_blank" : undefined;
  const waRel = rawWhatsApp ? "noopener noreferrer" : undefined;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (location.pathname === "/" || location.pathname === "") {
      if (href === "/") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        if (window.location.hash) {
          window.history.replaceState(null, "", window.location.pathname);
        }
        return;
      }
      if (href.startsWith("/#")) {
        e.preventDefault();
        const id = href.replace("/#", "");
        const el = document.getElementById(id);
        if (el) {
          const yOffset = -70;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }
    }
  };

  return (
    <footer
      role="contentinfo"
      className="pt-12 pb-6 bg-background/50 backdrop-blur-sm"
    >
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-border/40">
        {/* Brand Column */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full overflow-hidden ring-1 ring-border/60 bg-muted/30 flex-shrink-0">
              <img
                src={profilePhoto}
                alt="Firman Profile Photo"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
            <div>
              <span className="font-semibold text-xs tracking-wider uppercase text-foreground">
                FIRMAN PAMBUDIANSYAH
              </span>
              <p className="text-[11px] text-muted-foreground leading-tight">
                Data Science &amp; AI Engineer
              </p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Building intelligent machine learning systems, predictive models, and modern data-driven solutions.
          </p>
        </div>

        {/* Quick Navigation */}
        <div>
          <h3 className="text-xs font-bold tracking-wider uppercase text-foreground mb-4">
            Navigation
          </h3>
          <nav aria-label="Footer navigation links" className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Specializations / Expertise */}
        <div>
          <h3 className="text-xs font-bold tracking-wider uppercase text-foreground mb-4">
            Specialization
          </h3>
          <ul className="flex flex-col gap-2 text-xs text-muted-foreground">
            <li>Machine Learning &amp; Deep Learning</li>
            <li>Predictive Time-Series Forecasting</li>
            <li>Large Language Models &amp; Agentic AI</li>
            <li>Business Intelligence &amp; Analytics</li>
          </ul>
        </div>

        {/* Social Network Links */}
        <div>
          <h3 className="text-xs font-bold tracking-wider uppercase text-foreground mb-4">
            Connect
          </h3>
          <nav aria-label="Footer social links" className="flex flex-col gap-2">
            <a
              href="https://www.linkedin.com/in/firman-pambudiansyah/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Linkedin className="w-3.5 h-3.5 text-primary/80 group-hover:text-primary transition-colors" aria-hidden="true" />
              LinkedIn
            </a>
            <a
              href="https://github.com/Alarave"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Github className="w-3.5 h-3.5 text-primary/80 group-hover:text-primary transition-colors" aria-hidden="true" />
              GitHub
            </a>
            <a
              href={`mailto:${contactEmail}`}
              className="group inline-flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Mail className="w-3.5 h-3.5 text-primary/80 group-hover:text-primary transition-colors" aria-hidden="true" />
              Email
            </a>
            <a
              href={waHref}
              target={waTarget}
              rel={waRel}
              className="group inline-flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-emerald-500 transition-colors duration-200"
            >
              <Phone className="w-3.5 h-3.5 text-primary/80 group-hover:text-emerald-500 transition-colors" aria-hidden="true" />
              WhatsApp
            </a>
          </nav>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container pt-6 flex justify-center items-center text-center">
        <span className="text-xs font-medium text-muted-foreground">
          © {currentYear} Firman Pambudiansyah. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
