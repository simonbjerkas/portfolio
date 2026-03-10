export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border mt-32">
      <div className="mx-auto max-w-5xl px-6 py-10 flex items-center justify-between">
        <span className="text-xs text-muted-foreground tracking-widest uppercase">
          Simon Bjerkås
        </span>
        <span className="text-xs text-muted-foreground">
          © {year}
        </span>
      </div>
    </footer>
  )
}
