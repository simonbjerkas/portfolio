import { useEffect, useState } from "react";

const ROLES = [
  "software engineer.",
  "problem solver.",
  "movie lover.",
  "builder.",
  "passionate learner.",
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];

    if (paused) {
      const t = setTimeout(() => {
        setDeleting(true);
        setPaused(false);
      }, 2000);
      return () => clearTimeout(t);
    }

    if (!deleting) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1));
        }, 60);
        return () => clearTimeout(t);
      } else {
        setPaused(true);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, 30);
        return () => clearTimeout(t);
      } else {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % ROLES.length);
      }
    }
  }, [displayed, deleting, paused, roleIndex]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 overflow-hidden">
      {/* Portrait — replace src with your photo: /portrait.jpg */}
      <div
        className="hidden md:block absolute inset-y-0 right-0 pointer-events-none"
        style={{
          width: "55%",
          maskImage: [
            "linear-gradient(to right, transparent 0%, black 35%)",
            "linear-gradient(to bottom, transparent 0%, black 12%, black 80%, transparent 100%)",
          ].join(", "),
          maskComposite: "intersect",
          WebkitMaskImage: [
            "linear-gradient(to right, transparent 0%, black 35%)",
            "linear-gradient(to bottom, transparent 0%, black 12%, black 80%, transparent 100%)",
          ].join(", "),
          WebkitMaskComposite: "source-in",
        }}
      >
        <img
          src="/portrait.webp"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          decoding="sync"
          className="w-full h-full object-cover object-top opacity-[0.18]"
          style={{ filter: "grayscale(100%) contrast(1.1)" }}
        />
      </div>

      {/* Radial glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "20%",
          left: "-10%",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, color-mix(in srgb, #B7FE50 8%, transparent) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div className="mx-auto max-w-5xl w-full relative">
        {/* Section marker */}
        <p className="text-xs tracking-[0.25em] uppercase text-primary mb-8 animate-fade-up font-medium">
          00 — Hello
        </p>

        {/* Name */}
        <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold tracking-tight leading-none mb-6 animate-fade-up-delay-1">
          Simon
          <br />
          <span className="text-foreground/35">Bjerkås</span>
        </h1>

        {/* Typewriter role */}
        <div className="mt-8 animate-fade-up-delay-2 h-8 flex items-center">
          <span className="text-lg sm:text-xl text-muted-foreground font-light">
            I'm a{" "}
            <span className="text-foreground font-medium">{displayed}</span>
            <span className="cursor-blink text-primary ml-0.5">|</span>
          </span>
        </div>

        {/* Tagline */}
        <p className="mt-6 max-w-lg text-muted-foreground text-base leading-relaxed animate-fade-up-delay-3">
          I build thoughtful digital products — with a focus on clean code,
          intuitive UX, and lasting quality.
        </p>

        {/* Scroll cue */}
        <div className="mt-16 flex items-center gap-3 animate-fade-up-delay-3">
          <div className="w-8 h-px bg-primary" />
          <span className="text-xs tracking-widest uppercase text-muted-foreground">
            Scroll to explore
          </span>
        </div>
      </div>
    </section>
  );
}
