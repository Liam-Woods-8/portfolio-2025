import Link from 'next/link'
import dynamic from 'next/dynamic'
import ContactForm from './components/ContactForm'

const ImagePlaceholder = dynamic(() => import('./components/ImagePlaceholder'), {
  ssr: false
});

const projects = [
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

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center geometric-pattern">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <h1 className="font-sao-torpes text-8xl md:text-9xl lg:text-[12rem] mb-8 text-gradient">
              Liam Woods
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
              <div>
                <p className="text-2xl md:text-3xl leading-relaxed mb-8 text-text/90">
                  Full Stack Developer crafting exceptional digital experiences through innovative code and creative design solutions
                </p>
                <div className="flex gap-8">
                  <a href="#projects" className="btn-primary">View Work</a>
                  <a href="#contact" className="btn-secondary">Contact</a>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple/20 via-mid-blue/20 to-light-blue/20 rounded-2xl -z-10 blur-xl"></div>
                <ImagePlaceholder
                  width={500}
                  height={500}
                  text="LW"
                  className="w-full aspect-square object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 bg-gradient-to-b from-base via-light-blue/30 to-base">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Projects</h2>
          <div className="relative space-y-[-6rem] pt-8">
            {projects.map((project, index) => (
              <article 
                key={index} 
                className="card group rounded-2xl transform transition-all duration-500 hover:-translate-y-4 hover:shadow-xl relative bg-base"
                style={{
                  zIndex: projects.length - index,
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div className="order-2 md:order-1">
                    <h3 className="font-sao-torpes text-4xl mb-6 text-gradient">{project.title}</h3>
                    <p className="text-lg mb-6 leading-relaxed text-text/90">{project.description}</p>
                    <div className="flex flex-wrap gap-3 mb-8">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="px-4 py-2 bg-light-blue/40 text-text text-sm rounded-full">{tech}</span>
                      ))}
                    </div>
                    <Link href={project.link} className="hover-reveal inline-block text-lg">
                      View Project
                    </Link>
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="relative rounded-xl overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-tr from-purple/10 to-mid-blue/10 -z-10"></div>
                      <ImagePlaceholder
                        width={600}
                        height={400}
                        text={project.title}
                        className="w-full aspect-video object-cover rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-32 bg-gradient-to-b from-base via-mid-blue/10 to-base">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
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
            ].map((category, index) => (
              <div key={index} className="glass-effect p-8">
                <h3 className="font-sao-torpes text-3xl mb-6 text-gradient">{category.title}</h3>
                <ul className="space-y-4 text-lg text-text/90">
                  {category.skills.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gradient-to-b from-base via-light-blue/20 to-base">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Contact</h2>
          <div className="max-w-2xl mx-auto glass-effect p-12">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-purple/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-lg text-text/90">© 2024 Liam Woods</p>
            <div className="flex gap-12">
              {[
                { href: "https://github.com/yourusername", text: "GitHub" },
                { href: "https://linkedin.com/in/yourusername", text: "LinkedIn" },
                { href: "mailto:your@email.com", text: "Email" }
              ].map((link, index) => (
                <Link 
                  key={index}
                  href={link.href} 
                  className="hover-reveal text-lg text-text/90"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
