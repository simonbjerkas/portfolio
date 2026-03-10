import { projects } from '@/data/projects'
import { ProjectCard } from '@/components/ProjectCard'

export function Projects() {
  return (
    <div className="min-h-screen px-6 pt-32 pb-24">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <p className="text-xs tracking-[0.25em] uppercase text-primary mb-6 font-medium">
          All work
        </p>
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-none mb-4">
          Projects
        </h1>
        <p className="text-muted-foreground text-lg mb-16 max-w-md">
          A collection of things I've built — side projects, tools, and
          experiments.
        </p>

        {/* Featured grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {projects
            .filter((p) => p.featured)
            .map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
        </div>

        {/* Rest as list */}
        {projects.filter((p) => !p.featured).length > 0 && (
          <>
            <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground/50 mb-2 font-medium">
              More
            </p>
            <div className="border-t border-border">
              {projects
                .filter((p) => !p.featured)
                .map((project, i) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={projects.filter((p) => p.featured).length + i}
                    variant="minimal"
                  />
                ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
