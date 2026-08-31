"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export interface LanguageItem {
  name: string
  level: number
  proficiency: string
  flag: string
}

const defaultLanguages: LanguageItem[] = [
  { name: "Indonesian", level: 100, proficiency: "Native / Fluent", flag: "🇮🇩" },
  { name: "English", level: 75, proficiency: "Professional Working", flag: "🇺🇸" },
]

export function SkillsShowcase({ items = defaultLanguages }: { items?: LanguageItem[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="flex flex-col w-full">
      {/* Languages list */}
      <div className="flex flex-col gap-1">
        {items.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={cn(
                "relative flex items-center justify-between py-5 px-4 -mx-4 cursor-pointer",
                "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                "rounded-xl",
                hoveredIndex === index ? "bg-primary/[0.05] dark:bg-primary/[0.08]" : "bg-transparent",
              )}
            >
              {/* Left side - flag & language name */}
              <div className="relative flex items-center gap-4">
                <div
                  className={cn(
                    "h-6 w-1 rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                    hoveredIndex === index ? "bg-primary scale-y-100" : "bg-primary/30 scale-y-100",
                  )}
                />

                <span className="text-2xl sm:text-3xl leading-none">{skill.flag}</span>

                <div>
                  <span
                    className={cn(
                      "block text-base font-bold tracking-tight transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                      hoveredIndex === index ? "text-primary translate-x-1" : "text-foreground",
                    )}
                  >
                    {skill.name}
                  </span>
                  <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
                    {skill.proficiency}
                  </p>
                </div>
              </div>

              {/* Right side - progress visualization */}
              <div className="flex items-center gap-4">
                <div className="relative w-28 sm:w-40 h-2 rounded-full overflow-hidden bg-border/50 dark:bg-border/30">
                  {/* Background track */}
                  <div className="absolute inset-0 bg-muted/50 dark:bg-muted/20" />

                  {/* Animated fill using framer-motion automatically on scroll */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                    className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary/80 to-primary"
                  />

                  {/* Shine effect on hover */}
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent",
                      "transition-transform duration-700 ease-out",
                      hoveredIndex === index ? "translate-x-full" : "-translate-x-full",
                    )}
                    style={{
                      transitionDelay: hoveredIndex === index ? "300ms" : "0ms",
                    }}
                  />
                </div>

                <div className="relative w-12">
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className={cn(
                      "block text-sm font-black font-mono tabular-nums text-right",
                      "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                      hoveredIndex === index ? "text-primary" : "text-foreground/80",
                    )}
                  >
                    {skill.level}%
                  </motion.span>
                </div>
              </div>
            </div>

            {index < items.length - 1 && (
              <div
                className={cn(
                  "mx-4 h-px transition-all duration-500",
                  hoveredIndex === index || hoveredIndex === index + 1
                    ? "bg-transparent"
                    : "bg-border/30 dark:bg-border/20",
                )}
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
