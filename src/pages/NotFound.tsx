import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p className="text-xs tracking-[0.25em] uppercase text-primary mb-6 font-medium">
        404
      </p>
      <h1 className="text-6xl sm:text-7xl font-bold tracking-tight mb-4 text-foreground/10">
        Lost?
      </h1>
      <p className="text-muted-foreground mb-10">
        This page doesn't exist.
      </p>
      <Link
        to="/"
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
      >
        <span className="group-hover:-translate-x-1 transition-transform">←</span>
        Back home
      </Link>
    </div>
  )
}
