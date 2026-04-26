import { cn } from "@/lib/utils";

interface SkillBarProps {
  name: string;
  level: number;
  className?: string;
}

export function SkillBar({ name, level, className }: SkillBarProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full animate-skill-fill"
          style={{ "--skill-level": `${level}%`, width: `${level}%` } as React.CSSProperties}
        />
      </div>
    </div>
  );
}
