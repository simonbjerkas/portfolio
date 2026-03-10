import { Link } from 'react-router-dom'
import { projects } from '@/data/projects'
import { ProjectCard } from './ProjectCard'

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured)

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        {/* Section marker */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-primary mb-3 font-medium">
              02 — Work
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Selected projects
            </h2>
          </div>
          <Link
            to="/projects"
            className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            View all
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <div className="mt-8 sm:hidden">
          <Link
            to="/projects"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            View all projects
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
