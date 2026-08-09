export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  github?: string;
  url?: string;
  appStore?: string;
  year: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "cinemate",
    title: "Cinemate",
    description:
      "A place to find films, keep track of what you've watched, and see what everyone else is watching. Live on the web and on the iOS App Store.",
    tags: ["React Native", "TanStack Start", "Convex"],
    url: "https://www.cinemate.film",
    appStore: "https://apps.apple.com/us/app/cinemate-movie-log/id6780675283",
    year: "2026",
    featured: true,
  },
  {
    id: "mini-shell",
    title: "Mini Shell",
    description:
      "A small Unix shell in Rust. Built it to understand what actually happens between hitting enter and getting a prompt back.",
    tags: ["Rust", "CLI", "Systems"],
    github: "https://github.com/simonbjerkas/shell-rust",
    year: "2025",
    featured: true,
  },
  {
    id: "mini-git",
    title: "Mini Git",
    description:
      "Git rebuilt from scratch in Rust, far enough to commit and read history back. Mostly an excuse to see how the object store really works.",
    tags: ["Rust", "Git", "Systems"],
    github: "https://github.com/simonbjerkas/git-rust",
    year: "2026",
  },
  {
    id: "bachelors-project",
    title: "Bachelor's Project",
    description:
      "Capstone project for my bachelor's, built in a team of six with an international customer in the health sector. Under NDA, so that's about as much as I can say.",
    tags: ["PostgreSQL", "WebSockets", "Auth"],
    year: "2025",
    featured: true,
  },
  {
    id: "http-server",
    title: "HTTP Server",
    description:
      "An HTTP server written from scratch in Rust. Parses HTTP/1.1 by hand, routes requests, writes responses. No frameworks.",
    tags: ["Rust", "HTTP", "Networking"],
    github: "https://github.com/simonbjerkas/http-server-rust",
    year: "2026",
  },
  {
    id: "personal-site",
    title: "Personal Website",
    description:
      "The site you're reading. Vite, React, TypeScript and shadcn/ui, kept plain on purpose so the work is the loudest thing on the page.",
    tags: ["React", "TypeScript", "Tailwind"],
    github: "https://github.com/simonbjerkas/portfolio",
    url: "https://simonbjerkas.com",
    year: "2026",
  },
];
