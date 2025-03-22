'use client';

import ContactForm from '../ui/ContactForm';

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-white/80 via-sage/10 to-white/80">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-20 sm:mb-32 md:mb-40">Contact</h2>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-8">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-lg font-romana-light transition-colors duration-300 group">
                Name
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 mt-1 bg-white/80 border border-sage/30 rounded-lg focus:outline-none focus:border-forest transition-colors duration-300 group-hover:text-forest"
                />
              </label>
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-lg font-romana-light transition-colors duration-300 group">
                Email
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 mt-1 bg-white/80 border border-sage/30 rounded-lg focus:outline-none focus:border-forest transition-colors duration-300 group-hover:text-forest"
                />
              </label>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="block text-lg font-romana-light transition-colors duration-300 group">
                Message
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 mt-1 bg-white/80 border border-sage/30 rounded-lg focus:outline-none focus:border-forest transition-colors duration-300 group-hover:text-forest"
                ></textarea>
              </label>
            </div>
            <button type="submit" className="btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
} 