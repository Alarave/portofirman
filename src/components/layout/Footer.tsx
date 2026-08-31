import { Mail, Phone, MapPin, Linkedin, Github, Heart, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import profilePhoto from "@/assets/profile-photo.jpg";

const NAV_LINKS = [
  { href: "/#hero", label: "Home" },
  { href: "/#expertise", label: "Expertise" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#certifications", label: "Certifications" },
  { href: "/#contact", label: "Contact" },
];

const SOCIALS = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/firman-pambudiansyah/" },
  { name: "GitHub", url: "https://github.com/Alarave" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="pt-12 pb-6 bg-background/50 backdrop-blur-sm"
    >
      <div className="container pb-10 grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-8 md:gap-12">
        {/* Brand Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img
              src={profilePhoto}
              alt="Firman Profile Photo"
              className="w-10 h-10 object-cover rounded-full opacity-90 shadow-[0_0_12px_rgba(33,150,243,0.3)]"
            />
            <div>
              <p className="text-sm font-bold tracking-wide uppercase text-foreground">
                FIRMAN PAMBUDIANSYAH
              </p>
              <p className="text-xs font-medium text-primary mt-0.5">
                Data Science & ML Engineer
              </p>
            </div>
          </div>

          <p className="text-xs font-normal leading-relaxed text-muted-foreground max-w-sm">
            Data Science & Product Management specialist. Engineering predictive models, optimizing data systems, and creating impactful business intelligence dashboards.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xs font-bold tracking-wider uppercase text-foreground mb-4">
            Navigation
          </h3>
          <nav aria-label="Footer navigation" className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Social Network Links */}
        <div>
          <h3 className="text-xs font-bold tracking-wider uppercase text-foreground mb-4">
            Network
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
              href="mailto:firmanpambudiansyah@gmail.com"
              className="group inline-flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Mail className="w-3.5 h-3.5 text-primary/80 group-hover:text-primary transition-colors" aria-hidden="true" />
              Email Client
            </a>
            <a
              href="https://wa.me/6285974267164"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-emerald-500 transition-colors duration-200"
            >
              <Phone className="w-3.5 h-3.5 text-primary/80 group-hover:text-emerald-500 transition-colors" aria-hidden="true" />
              WhatsApp Sync
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
