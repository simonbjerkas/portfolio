import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'

export function Nav() {
  const { pathname } = useLocation()

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-5xl px-6 py-5 flex items-center justify-between">
        <Link
          to="/"
          className="text-sm font-medium tracking-widest uppercase text-foreground/60 hover:text-foreground transition-colors"
        >
          SB
        </Link>
        <nav>
          <Link
            to="/projects"
            className={cn(
              'text-sm tracking-wide transition-colors',
              pathname === '/projects'
                ? 'text-primary'
                : 'text-foreground/50 hover:text-foreground'
            )}
          >
            Projects
          </Link>
        </nav>
      </div>
    </header>
  )
}
