export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  url?: string
  year: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'personal-site',
    title: 'Personal Website',
    description:
      'This very site — built with Vite, React, TypeScript, and shadcn/ui. Designed with a dark editorial aesthetic.',
    tags: ['React', 'TypeScript', 'Tailwind'],
    year: '2026',
    featured: true,
  },
  {
    id: 'project-two',
    title: 'Project Two',
    description:
      'A full-stack application with a focus on real-time collaboration and seamless UX. Built with modern tooling.',
    tags: ['Node.js', 'React', 'WebSockets'],
    year: '2025',
    featured: true,
  },
  {
    id: 'project-three',
    title: 'Project Three',
    description:
      'An open-source CLI tool that automates repetitive developer workflows and integrates with popular services.',
    tags: ['TypeScript', 'CLI', 'Open Source'],
    year: '2025',
    featured: true,
  },
  {
    id: 'project-four',
    title: 'Project Four',
    description:
      'A data visualization dashboard that turns complex datasets into readable, interactive charts.',
    tags: ['D3.js', 'React', 'REST API'],
    year: '2024',
  },
  {
    id: 'project-five',
    title: 'Project Five',
    description:
      'A mobile-first e-commerce experience with cart management, Stripe payments, and a custom CMS backend.',
    tags: ['Next.js', 'Stripe', 'PostgreSQL'],
    year: '2024',
  },
  {
    id: 'project-six',
    title: 'Project Six',
    description:
      'A browser extension that enhances developer productivity with custom shortcuts and workflow automation.',
    tags: ['JavaScript', 'Browser Extension', 'UX'],
    year: '2023',
  },
]
