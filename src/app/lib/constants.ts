export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Project 1",
    description: "Description of project 1",
    technologies: ["React", "TypeScript", "Tailwind"],
    link: "https://github.com/yourusername/project1",
    image: "/images/project1.jpg"
  },
  {
    title: "Project 2",
    description: "Description of project 2",
    technologies: ["Next.js", "Node.js", "MongoDB"],
    link: "https://github.com/yourusername/project2",
    image: "/images/project2.jpg"
  },
  // Add more projects as needed
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