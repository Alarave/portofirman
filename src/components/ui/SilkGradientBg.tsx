import React, { useEffect, useRef } from "react";

export function SilkGradientBg() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const t = (currentTime - startTime) / 1000;
      const ph = t * 0.50;
      const amt = 0.34;
      const dir = 1;
      const spin = ph * dir;
      // Sway angle modulation centered around 180deg (Top: Light -> Bottom: Dark)
      const currentAngle = 180 + Math.sin(spin * 0.6) * 24 * amt;

      if (containerRef.current) {
        containerRef.current.style.backgroundImage = `
          url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.12'/></svg>"),
          linear-gradient(${currentAngle}deg, #57D2F4 0%, #1B6AA7 40%, #031C26 75%, transparent 100%)
        `;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 -z-10 pointer-events-none transition-opacity duration-700 opacity-30 dark:opacity-45"
      style={{
        backgroundSize: "120px 120px, auto",
        backgroundBlendMode: "overlay, normal",
        WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%)",
        maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%)",
      }}
    />
  );
}
