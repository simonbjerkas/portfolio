import { Separator } from "@/components/ui/separator";

export function AboutSection() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        {/* Section marker */}
        <p className="text-xs tracking-[0.25em] uppercase text-primary mb-8 font-medium">
          01 — About
        </p>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Statement */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold leading-snug tracking-tight">
              Crafting software that feels{" "}
              <span className="text-primary">intentional</span>.
            </h2>
          </div>

          {/* Details */}
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              I’m a software engineer based in Norway and relocating to
              Amsterdam, with a passion for building clean, performant web
              applications. I care deeply about the craft — both the code and
              the experience it creates.
            </p>
            <p>
              I enjoy working across the stack and choosing tools based on the
              problem at hand. While I have experience with tools like
              TypeScript and React, I also enjoy exploring other languages and
              ecosystems, especially Rust. Outside of software, I have a big
              passion for movies and cinema, which strongly shapes how I think
              about creativity, storytelling, and craft.
            </p>

            <Separator className="my-6 opacity-30" />

            <div className="grid grid-cols-2 gap-4 text-sm">
              {[
                ["Stack", "TypeScript, React, Rust"],
                ["Focus", "Software Engineering & Software Craft"],
                ["Location", "Norway -> Netherlands"],
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
