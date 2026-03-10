# simonbjerkas.com

Personal website and portfolio — built with Vite, React, and shadcn/ui.

## Stack

- **[Vite](https://vite.dev/)** — build tool and dev server
- **[React 19](https://react.dev/)** + **TypeScript**
- **[Tailwind CSS v4](https://tailwindcss.com/)**
- **[shadcn/ui](https://ui.shadcn.com/)** — component primitives
- **[React Router v7](https://reactrouter.com/)** — client-side routing
- **[Geist](https://vercel.com/font)** — typeface (self-hosted)

## Pages

| Route | Description |
|---|---|
| `/` | Hero, about, featured projects, contact |
| `/projects` | Full project list |

## Getting started

```bash
npm install
npm run dev
```

## Commands

```bash
npm run build      # production build
npm run preview    # preview production build locally
npm run lint       # lint
```

> Run Lighthouse against `npm run preview` (`localhost:4173`), not the dev server — Vite serves unbundled modules in dev which skews performance scores significantly.

## Updating content

| What | Where |
|---|---|
| Projects | `src/data/projects.ts` |
| About text / stack | `src/components/AboutSection.tsx` |
| Social / contact links | `src/components/ConnectSection.tsx` |
| Hero roles (typewriter) | `src/components/Hero.tsx` |
| Portrait photo | Replace `public/portrait.webp` |

## Deployment

Deployed on [Vercel](https://vercel.com/). Push to `main` to trigger a deploy.

> If you add new routes, update `public/sitemap.xml` manually.
