import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import logoPortfolio from "@/assets/logo/LOGO PORTOFOLIO.png";

const cvFile = "https://drive.google.com/file/d/1AXcL8VjAHFUrzhmVicI0d3VilJ13ixWn/view?usp=drive_link";

const navItems = [
  { path: "/", label: "Home", id: "top" },
  { path: "/about", label: "About", id: "about" },
  { path: "/experience", label: "Experience", id: "experience" },
  { path: "/projects", label: "Projects", id: "projects" },
  { path: "/certifications", label: "Certifications", id: "certifications" },
  { path: "/contact", label: "Contact", id: "contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Scrollspy
      const sections = navItems.map((item) => item.id);
      let currentSection = "top";

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            currentSection = section;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (itemId: string, itemPath: string) => {
    if (location.pathname === "/" || location.pathname === "") {
      return activeSection === itemId;
    }
    return location.pathname === itemPath;
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string, path: string) => {
    if (location.pathname === "/" || location.pathname === "") {
      e.preventDefault();
      if (id === "top" || id === "hero") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        if (window.location.hash) {
          window.history.replaceState(null, "", window.location.pathname);
        }
        setActiveSection("top");
        return;
      }
      const el = document.getElementById(id);
      if (el) {
        const yOffset = -70;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
        setActiveSection(id);
      }
    } else {
      e.preventDefault();
      navigate("/", { state: { scrollTo: id === "hero" ? "top" : id } });
    }
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/75 backdrop-blur-xl shadow-sm border-b border-border/30"
          : "bg-transparent"
      )}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <nav
          className="flex items-center justify-between py-2 md:py-2.5"
          aria-label="Primary navigation"
        >
          {/* Brand Logo & Name */}
          <a
            href="/"
            onClick={(e) => handleNavClick(e, "top", "/")}
            className="nav-logo text-2xl font-black tracking-tighter text-foreground hover:text-primary transition-colors"
          >
            FIRMAN
          </a>

          {/* Desktop Nav Links with Gliding Active Indicator */}
          <div className="hidden lg:flex items-center gap-1 bg-muted/30 p-1 rounded-full border border-border/30">
            {navItems.map((item) => {
              const active = isActive(item.id, item.path);
              return (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={(e) => handleNavClick(e, item.id, item.path)}
                  className={cn(
                    "relative px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors duration-200 z-10 rounded-full",
                    active ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {active && (
                    <motion.div
                      layoutId="activeNavPill"
                      transition={{ type: "spring", stiffness: 150, damping: 19 }}
                      className="absolute inset-0 bg-primary rounded-full -z-10 shadow-[0_0_12px_rgba(33,150,243,0.4)]"
                    />
                  )}
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <Button
              asChild
              size="sm"
              variant="outline"
              className="hidden sm:inline-flex rounded-full text-xs font-bold h-8 px-4 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all"
            >
              <a href={cvFile} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-primary" />
                <span>Resume</span>
              </a>
            </Button>

            <ThemeToggle />

            {/* Mobile Nav Toggle */}
            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                  <Menu className="w-4 h-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] flex flex-col gap-6 pt-12 bg-background/95 backdrop-blur-xl border-border/40">
                <div className="flex items-center gap-3 pb-4">
                  <img src={logoPortfolio} alt="Logo" className="h-8 w-auto" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-foreground">Firman Pambudiansyah</p>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Navigation</p>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.path}>
                      <a
                        href={item.path}
                        onClick={(e) => handleNavClick(e, item.id, item.path)}
                        className={cn(
                          "text-sm font-bold uppercase tracking-wider py-2 px-3 rounded-xl transition-all",
                          isActive(item.id, item.path)
                            ? "bg-primary/15 text-primary font-black border-l-4 border-primary"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                        )}
                      >
                        {item.label}
                      </a>
                    </SheetClose>
                  ))}
                </div>

                <div className="mt-auto pt-6 space-y-3">
                  <SheetClose asChild>
                    <Button asChild className="w-full rounded-xl bg-primary text-primary-foreground font-bold text-xs h-10">
                      <a href={cvFile} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                        <FileText className="w-4 h-4" />
                        <span>View Resume</span>
                      </a>
                    </Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}