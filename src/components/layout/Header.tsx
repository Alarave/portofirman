import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, FileText, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

import cvFile from "@/assets/cv.pdf";
import dataScienceLogo from "@/assets/logo/data_science.png";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/experience", label: "Experience" },
  { path: "/projects", label: "Projects" },
  { path: "/certifications", label: "Certifications" },
  { path: "/contact", label: "Contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "sticky top-0 z-[100] w-full transition-all duration-500",
        isScrolled 
          ? "h-16 bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-black/5" 
          : "h-24 bg-background/80 backdrop-blur-lg border-b border-transparent"
      )}
    >
      <div className="container h-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-primary/40 group-hover:rotate-[10deg] group-hover:scale-110 transition-all duration-500">
              <span className="text-xl font-black text-white">F</span>
            </div>
            {/* Subtle glow */}
            <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg scale-0 group-hover:scale-150 transition-transform duration-500 pointer-events-none" />
          </div>
          <div className="flex flex-col -space-y-1">
            <span className="text-xl font-black tracking-tighter text-foreground group-hover:text-primary transition-colors">FIRMAN</span>
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] group-hover:text-foreground transition-colors">Portfolio</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "relative px-1 py-2 text-sm font-bold transition-all duration-300 group/nav",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
                <span 
                  className={cn(
                    "absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-primary to-cyan-500 rounded-full transition-all duration-500 transform origin-left",
                    isActive ? "w-full opacity-100" : "w-0 opacity-0 group-hover/nav:w-full group-hover/nav:opacity-100"
                  )} 
                />
              </Link>
            );
          })}
          
          <div className="h-6 w-px bg-border/50 mx-4" />
          
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 h-10 font-bold shadow-xl shadow-primary/10 hover:shadow-primary/20 transition-all border-none">
              <a href={cvFile} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Resume
              </a>
            </Button>
          </div>
        </nav>

        {/* Mobile Controls */}
        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-muted/50 hover:bg-primary/10 group transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-5 h-5">
              <span className={cn(
                "absolute block w-5 h-0.5 bg-foreground transition-all duration-300",
                isMenuOpen ? "top-2 rotate-45" : "top-1"
              )} />
              <span className={cn(
                "absolute block w-5 h-0.5 bg-foreground transition-all duration-300 top-2",
                isMenuOpen ? "opacity-0" : "opacity-100"
              )} />
              <span className={cn(
                "absolute block w-5 h-0.5 bg-foreground transition-all duration-300",
                isMenuOpen ? "top-2 -rotate-45" : "top-3"
              )} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div 
        className={cn(
          "fixed inset-0 top-[64px] z-40 bg-background lg:hidden transition-all duration-500",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsMenuOpen(false)}
      >
        <nav 
          className={cn(
            "bg-background border-b border-border/50 p-8 space-y-4 transition-all duration-500 transform",
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          )}
          onClick={(e) => e.stopPropagation()}
        >
          {navItems.map((item, index) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                "flex items-center justify-between p-4 rounded-2xl text-lg font-black transition-all duration-300",
                location.pathname === item.path
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              )}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {item.label}
              <ArrowRight className={cn(
                "h-5 w-5 transition-transform duration-300",
                location.pathname === item.path ? "translate-x-0" : "-translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
              )} />
            </Link>
          ))}
          
          <Button asChild className="w-full h-14 text-base font-bold rounded-2xl mt-6 shadow-2xl shadow-primary/20">
            <a href={cvFile} target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>
              <FileText className="h-5 w-5 mr-2" />
              Download My Resume
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}