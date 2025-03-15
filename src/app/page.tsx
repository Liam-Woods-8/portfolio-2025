import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center geometric-pattern">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center md:text-left">
              <h1 className="font-sao-torpes text-6xl md:text-7xl lg:text-8xl mb-6">
                I&apos;m Liam Woods
              </h1>
              <p className="font-romana-light text-xl md:text-2xl text-charcoal/80 mb-8">
                Full Stack Developer crafting vibrant digital experiences
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="btn-primary">View My Work</button>
                <button className="btn-secondary">Get in Touch</button>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="w-full aspect-square relative animate-float">
                <div className="absolute inset-0 bg-gradient-to-br from-golden/20 to-coral/20 rounded-full -z-10 transform scale-95 blur-xl"></div>
                <Image
                  src="/profile-image.jpg"
                  alt="Liam Woods"
                  width={500}
                  height={500}
                  priority
                  className="rounded-full border-4 border-white shadow-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-charcoal/5">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="card">
                <div className="aspect-video bg-golden/10 rounded-lg mb-4"></div>
                <h3 className="font-sao-torpes text-2xl mb-2">Project Title</h3>
                <p className="text-charcoal/70 mb-4">
                  A brief description of the project and the technologies used.
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-golden/10 text-golden rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-coral/10 text-coral rounded-full text-sm">Node.js</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="section-title">About Me</h2>
              <p className="text-lg mb-6 text-charcoal/80">
                I&apos;m a passionate developer who brings together technical expertise and creative design. 
                My approach combines modern web technologies with vibrant Latin American-inspired aesthetics 
                to create unique and engaging digital experiences.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-golden/10 rounded-lg">
                  <h3 className="font-sao-torpes text-xl mb-2">Frontend</h3>
                  <p>React, Next.js, Tailwind CSS</p>
                </div>
                <div className="p-4 bg-coral/10 rounded-lg">
                  <h3 className="font-sao-torpes text-xl mb-2">Backend</h3>
                  <p>Node.js, Python, SQL</p>
                </div>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="aspect-square relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-sky-blue/20 to-golden/20 rounded-2xl -z-10 transform rotate-6"></div>
                <Image
                  src="/about-image.jpg"
                  alt="Modern workspace setup"
                  width={500}
                  height={500}
                  className="rounded-2xl shadow-xl transform -rotate-6 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-charcoal/5">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Let&apos;s Connect</h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <label className="block text-charcoal mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:outline-none focus:border-coral"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-charcoal mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:outline-none focus:border-coral"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-charcoal mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:outline-none focus:border-coral h-32"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
