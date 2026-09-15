import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    // Respect reduced motion: reveal all immediately without animation
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const elements = document.querySelectorAll<HTMLElement>(".reveal");

    if (prefersReducedMotion) {
      elements.forEach((el) => el.classList.add("revealed"));
      return;
    }

    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add("revealed");
          } else {
            // When leaving viewport, remove revealed so it re-animates on scroll back
            el.classList.remove("revealed");
            // Track exit direction: top vs bottom
            if (entry.boundingClientRect.top < 0) {
              el.setAttribute("data-exit", "top");
            } else {
              el.setAttribute("data-exit", "bottom");
            }
          }
        });
      },
      {
        threshold: 0.08,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);
}
