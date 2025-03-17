import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import ContactForm from './components/ContactForm'

const ImagePlaceholder = dynamic(() => import('./components/ImagePlaceholder'), {
  ssr: false
});

export default function Home() {
  return (
    <main className="min-h-screen font-romana-light">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center geometric-pattern">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center md:text-left">
              <div className="mb-4 inline-block hover-shine">
                <span className="text-coral text-xl">Full Stack Developer</span>
              </div>
              <h1 className="font-sao-torpes text-6xl md:text-7xl lg:text-8xl mb-6 text-shadow hover-shine">
                I&apos;m Liam Woods
              </h1>
              <p className="text-xl md:text-2xl text-charcoal/80 mb-8 max-w-2xl leading-relaxed">
                Crafting exceptional digital experiences through innovative code and creative design solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a href="#projects" className="btn-primary">View My Work</a>
                <a href="#contact" className="btn-secondary">Get in Touch</a>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="w-full aspect-square relative animate-float">
                <div className="absolute inset-0 bg-gradient-to-br from-golden/20 via-coral/20 to-sky-blue/20 rounded-full -z-10 transform scale-95 blur-xl"></div>
                <ImagePlaceholder
                  width={500}
                  height={500}
                  text="Profile"
                  className="rounded-full border-4 border-white shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-32 bg-gradient-to-b from-white to-golden/5">
        <div className="container mx-auto px-4">
          <h2 className="font-sao-torpes text-5xl md:text-6xl text-center mb-24">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <article key={index} className="card group">
                <div className="aspect-video bg-gradient-to-br from-golden/10 to-coral/10 rounded-lg mb-6 overflow-hidden">
                  <ImagePlaceholder
                    width={600}
                    height={400}
                    text={project.title}
                    className="w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-sao-torpes text-2xl md:text-3xl mb-3">{project.title}</h3>
                <p className="text-charcoal/70 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-golden/10 text-golden rounded-full text-sm">{tech}</span>
                  ))}
                </div>
                <Link href={project.link} className="text-coral hover:text-orange transition-colors">
                  View Project →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Experience */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-16">
            <div className="flex-1">
              <h2 className="font-sao-torpes text-5xl md:text-6xl mb-12">Skills & Experience</h2>
              <p className="text-lg mb-12 text-charcoal/80 max-w-2xl leading-relaxed">
                With a passion for creating seamless user experiences and robust backend systems,
                I bring ideas to life through clean, efficient code and modern design principles.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="glass-effect p-6 rounded-xl hover:shadow-lg transition-all duration-300">
                  <h3 className="font-sao-torpes text-2xl md:text-3xl mb-4 text-coral">Frontend</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-golden rounded-full"></span>
                      React & Next.js
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-golden rounded-full"></span>
                      TypeScript
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-golden rounded-full"></span>
                      Tailwind CSS
                    </li>
                  </ul>
                </div>
                <div className="glass-effect p-6 rounded-xl hover:shadow-lg transition-all duration-300">
                  <h3 className="font-sao-torpes text-2xl md:text-3xl mb-4 text-coral">Backend</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-golden rounded-full"></span>
                      Node.js
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-golden rounded-full"></span>
                      Python
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-golden rounded-full"></span>
                      SQL & NoSQL
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="aspect-square relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-sky-blue/20 via-golden/20 to-coral/20 rounded-2xl -z-10 transform rotate-6"></div>
                <ImagePlaceholder
                  width={500}
                  height={500}
                  text="Workspace"
                  className="rounded-2xl shadow-xl transform -rotate-6"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gradient-to-b from-golden/5 to-white">
        <div className="container mx-auto px-4">
          <h2 className="font-sao-torpes text-5xl md:text-6xl text-center mb-24">Let&apos;s Connect</h2>
          <div className="max-w-2xl mx-auto glass-effect p-8 rounded-2xl mt-16">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-charcoal/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-charcoal/60">© 2024 Liam Woods. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="https://github.com/yourusername" className="text-charcoal hover:text-coral transition-colors">
                GitHub
              </Link>
              <Link href="https://linkedin.com/in/yourusername" className="text-charcoal hover:text-coral transition-colors">
                LinkedIn
              </Link>
              <Link href="mailto:your@email.com" className="text-charcoal hover:text-coral transition-colors">
                Email
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

const projects = [
  {
    title: "Project One",
    description: "A brief description of the project and the technologies used.",
    image: "/project1.jpg",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "/projects/1"
  },
  {
    title: "Project Two",
    description: "A brief description of the project and the technologies used.",
    image: "/project2.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind"],
    link: "/projects/2"
  },
  {
    title: "Project Three",
    description: "A brief description of the project and the technologies used.",
    image: "/project3.jpg",
    technologies: ["Python", "Django", "PostgreSQL"],
    link: "/projects/3"
  }
];
