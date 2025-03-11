import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-['Sao_Torpes'] mb-6 gradient-text">
            Liam Woods
          </h1>
          <h2 className="text-2xl md:text-3xl font-['Romana_Light'] text-[var(--royal-blue)] mb-8">
            Full Stack Developer
          </h2>
          <p className="text-xl md:text-2xl max-w-2xl font-['Romana_Light'] mb-12">
            Creating modern web experiences with clean, efficient code and beautiful design.
          </p>
          <div className="flex gap-6">
            <Link href="#projects" className="btn-primary">
              View Projects
            </Link>
            <Link href="#contact" className="border-2 border-[var(--deep-blue)] text-[var(--deep-blue)] px-6 py-2 rounded-lg transition-all hover:bg-[var(--deep-blue)] hover:text-white">
              Contact Me
            </Link>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[var(--yellow)] opacity-10 rounded-bl-full" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[var(--forest-green)] opacity-10 rounded-tr-full" />
      </section>

      {/* Projects Preview */}
      <section id="projects" className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project cards will go here */}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="section-title">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6 font-['Romana_Light']">
                I'm a full stack developer passionate about creating modern, efficient web applications.
                With expertise in both front-end and back-end development, I bring ideas to life through
                clean code and intuitive design.
              </p>
              <div className="flex gap-4">
                <Link href="#contact" className="btn-primary">
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {/* Skill cards will go here */}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Let's Connect</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg mb-8 font-['Romana_Light']">
              Interested in working together? Let's discuss your project.
            </p>
            {/* Contact form will go here */}
          </div>
        </div>
      </section>
    </div>
  )
}
