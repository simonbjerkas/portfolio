import { Badge } from "@/components/ui/badge";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index: number;
  variant?: "default" | "minimal";
}

function LinkIcon({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="text-muted-foreground/40 hover:text-primary transition-colors"
      onClick={(e) => e.stopPropagation()}
    >
      {label === "GitHub" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
      )}
    </a>
  );
}

export function ProjectCard({
  project,
  index,
  variant = "default",
}: ProjectCardProps) {
  if (variant === "minimal") {
    return (
      <div className="group py-6 border-b border-border flex items-start justify-between gap-6 transition-colors hover:border-primary/40 cursor-default">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs text-muted-foreground/50 font-mono tabular-nums">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed pl-8">
            {project.description}
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0 pt-0.5">
          {project.github && (
            <LinkIcon href={project.github} label="GitHub" />
          )}
          {project.url && <LinkIcon href={project.url} label="Live" />}
          <span className="text-xs text-muted-foreground/50 font-mono">
            {project.year}
          </span>
          <div className="w-5 h-px bg-muted-foreground/30 group-hover:bg-primary group-hover:w-8 transition-all" />
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "group relative p-6 bg-card border border-border rounded-lg",
        "hover:border-primary/40 transition-all duration-300 cursor-default",
        "hover:bg-card/80",
      )}
    >
      {/* Top row */}
      <div className="flex items-start justify-between mb-4">
        <span className="text-xs text-primary/60 font-mono tabular-nums font-medium">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="flex items-center gap-3">
          {project.github && (
            <LinkIcon href={project.github} label="GitHub" />
          )}
          {project.url && <LinkIcon href={project.url} label="Live" />}
          <span className="text-xs text-muted-foreground/40 font-mono">
            {project.year}
          </span>
        </div>
      </div>

      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
        {project.title}
      </h3>

      <p className="text-sm text-muted-foreground leading-relaxed mb-5">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Badge
            key={tag}
            variant="secondary"
            className="text-xs font-normal text-muted-foreground/70 bg-secondary/60"
          >
            {tag}
          </Badge>
        ))}
      </div>

      {/* Accent line on hover */}
      <div className="absolute left-0 top-4 bottom-4 w-px bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center rounded-full" />
    </div>
  );
}
