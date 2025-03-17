export const PROJECTS = [
  {
    title: "Project One",
    description: "A brief description of the project and the technologies used. This should be a detailed explanation of what the project accomplishes and how it was built.",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "/projects/1"
  },
  {
    title: "Project Two",
    description: "A brief description of the project and the technologies used. This should be a detailed explanation of what the project accomplishes and how it was built.",
    technologies: ["Next.js", "TypeScript", "Tailwind"],
    link: "/projects/2"
  },
  {
    title: "Project Three",
    description: "A brief description of the project and the technologies used. This should be a detailed explanation of what the project accomplishes and how it was built.",
    technologies: ["Python", "Django", "PostgreSQL"],
    link: "/projects/3"
  }
];

export const SKILLS = [
  {
    title: "Frontend",
    skills: ["React & Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Python", "SQL & NoSQL"]
  },
  {
    title: "Tools",
    skills: ["Git", "Docker", "AWS"]
  }
];

export const SOCIAL_LINKS = [
  { type: 'github' as const, href: '/github' },
  { type: 'linkedin' as const, href: '/linkedin' },
  { type: 'email' as const, href: 'mailto:your@email.com' }
]; 