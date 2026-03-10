export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  github?: string;
  url?: string;
  year: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "personal-site",
    title: "Personal Website",
    description:
      "This very site — built with Vite, React, TypeScript, and shadcn/ui. Designed with a dark editorial aesthetic.",
    tags: ["React", "TypeScript", "Tailwind"],
    url: "https://simonbjerkas.com",
    year: "2026",
    featured: true,
  },
  {
    id: "cinemate",
    title: "Cinemate",
    description:
      "A platform for film enthusiasts to discover, track, and share their movie experiences. Built with a focus on clean UX and a love for cinema.",
    tags: ["React", "TypeScript", "Film"],
    github: "https://github.com/simonbjerkas/cinemate",
    url: "https://www.cinemate.film",
    year: "2025",
    featured: true,
  },
  {
    id: "mini-shell",
    title: "Mini Shell",
    description:
      "A minimal Unix shell written in Rust. Supports core shell features while keeping the codebase small and readable.",
    tags: ["Rust", "CLI", "Systems"],
    github: "https://github.com/simonbjerkas/shell-rust",
    year: "2025",
    featured: true,
  },
  {
    id: "mini-git",
    title: "Mini Git",
    description:
      "A minimal rewrite of Git in Rust. Implements core version control primitives as a learning exercise in systems programming.",
    tags: ["Rust", "Git", "Systems"],
    github: "https://github.com/simonbjerkas/git-rust",
    year: "2026",
  },
  {
    id: "bachelors-project",
    title: "Bachelor's Project",
    description:
      "My bachelor's degree capstone project, developed in collaboration with an external partner. Details are confidential under NDA.",
    tags: ["NDA", "Academic"],
    year: "2025",
  },
  {
    id: "http-server",
    title: "HTTP Server",
    description:
      "A minimal HTTP server written from scratch in Rust. Handles core HTTP/1.1 request parsing, routing, and response handling.",
    tags: ["Rust", "HTTP", "Networking"],
    github: "https://github.com/simonbjerkas/http-server-rust",
    year: "2026",
  },
];
