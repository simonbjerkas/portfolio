import { Badge } from '@/components/ui/badge'
import type { Project } from '@/data/projects'
import { cn } from '@/lib/utils'

interface ProjectCardProps {
  project: Project
  index: number
  variant?: 'default' | 'minimal'
}

export function ProjectCard({ project, index, variant = 'default' }: ProjectCardProps) {
  if (variant === 'minimal') {
    return (
      <div className="group py-6 border-b border-border flex items-start justify-between gap-6 transition-colors hover:border-primary/40 cursor-default">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs text-muted-foreground/50 font-mono tabular-nums">
              {String(index + 1).padStart(2, '0')}
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
          <span className="text-xs text-muted-foreground/50 font-mono">
            {project.year}
          </span>
          <div className="w-5 h-px bg-muted-foreground/30 group-hover:bg-primary group-hover:w-8 transition-all" />
        </div>
      </div>
    )
  }

  return (
    <div
      className={cn(
        'group relative p-6 bg-card border border-border rounded-lg',
        'hover:border-primary/40 transition-all duration-300 cursor-default',
        'hover:bg-card/80'
      )}
    >
      {/* Top row */}
      <div className="flex items-start justify-between mb-4">
        <span className="text-xs text-primary/60 font-mono tabular-nums font-medium">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="text-xs text-muted-foreground/40 font-mono">
          {project.year}
        </span>
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
  )
}
