const LINKS = [
  { label: "GitHub", href: "https://github.com/simonbjerkas" },
  { label: "Email", href: "mailto:simon.bjerkas10@gmail.com" },
];

export function ConnectSection() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs tracking-[0.25em] uppercase text-primary mb-8 font-medium">
          03 — Connect
        </p>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-snug">
            Interested in working together?{" "}
            <span className="text-primary">Let’s connect</span>.
          </h2>

          <div className="space-y-1">
            {LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                className="group flex items-center justify-between py-4 border-b border-border hover:border-primary/40 transition-colors"
              >
                <span className="text-foreground/70 group-hover:text-foreground transition-colors">
                  {label}
                </span>
                <span className="text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-1 transition-all">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
