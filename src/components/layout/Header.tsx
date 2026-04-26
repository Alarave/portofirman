import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
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
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full glass border-b border-primary/10">
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:rotate-12 transition-all duration-300">
            <span className="text-xl font-black text-primary group-hover:text-white">F</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">Firman</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "relative text-sm font-semibold transition-all duration-300 hover:text-primary py-2",
                location.pathname === item.path
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {item.label}
              {location.pathname === item.path && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full animate-in fade-in zoom-in duration-300" />
              )}
            </Link>
          ))}
          
          <Button asChild size="sm" className="gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all rounded-full px-6">
            <a 
              href={cvFile} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FileText className="h-4 w-4" />
              Download CV
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-5 w-5 text-primary" />
          ) : (
            <Menu className="h-5 w-5 text-primary" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden glass border-t border-primary/10 animate-in slide-in-from-top duration-300 overflow-hidden">
          <div className="container py-8 flex flex-col gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "text-lg font-bold transition-all duration-300 hover:pl-2 hover:text-primary border-l-4 py-1 pl-4",
                  location.pathname === item.path
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
            
            <Button asChild className="mt-4 gap-2 h-12 text-base rounded-2xl">
              <a
                href={cvFile}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
              >
                <FileText className="h-5 w-5" />
                Download CV
              </a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}