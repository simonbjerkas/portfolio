import { Separator } from "@/components/ui/separator";

export function AboutSection() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        {/* Section marker */}
        <p className="text-xs tracking-[0.25em] uppercase text-primary mb-8 font-medium">
          01 / About
        </p>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Statement */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold leading-snug tracking-tight">
              Most of the work is in the{" "}
              <span className="text-primary">details</span> nobody notices.
            </h2>
          </div>

          {/* Details */}
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              I’m a software engineer based in Norway, and happy to move for the
              right team. Most of my work so far has been on the web and app
              side, but I’m just as interested in the kinds of software that sit
              further down the stack. What I care about is that it’s fast and
              that people can figure out how to use it without being told.
            </p>
            <p>
              I work across the stack and pick tools to fit the problem instead
              of the other way around. TypeScript and React are where I’m
              quickest, and lately most of my spare time goes to Rust. Film is
              the other thing I spend real time on, enough that I ended up
              building an app for keeping track of what I watch.
            </p>

            <Separator className="my-6 opacity-30" />

            <div className="grid grid-cols-2 gap-4 text-sm">
              {[
                ["Stack", "TypeScript, React, Rust"],
                ["Focus", "Full Stack Development"],
                ["Location", "Norway · Open to relocation"],
                ["Interests", "Cinema, Storytelling, Technology"],
              ].map(([label, value]) => (
                <div key={label}>
                  <p className="text-xs tracking-widest uppercase text-muted-foreground/60 mb-1">
                    {label}
                  </p>
                  <p className="text-foreground/80">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
