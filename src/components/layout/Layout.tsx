import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CursorSpotlight } from "@/components/ui/CursorSpotlight";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  useScrollReveal();
  return (
    <div className="min-h-screen w-full overflow-x-hidden flex flex-col bg-background text-foreground relative">
      <CursorSpotlight />
      <Header />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
