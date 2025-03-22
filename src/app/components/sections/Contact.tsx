'use client';

import ContactForm from '../ui/ContactForm';

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-white/80 via-sage/10 to-white/80">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-20 sm:mb-32 md:mb-40">Contact</h2>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-8">
            <div className="relative">
              <input
                type="text"
                id="name"
                className="peer w-full px-4 py-3 bg-white/50 border border-sage/30 rounded-lg focus:outline-none focus:border-forest transition-colors"
                placeholder=" "
              />
              <label
                htmlFor="name"
                className="absolute left-4 top-3 text-text/60 transition-all duration-300 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-forest peer-focus:bg-white px-1 font-palugada"
              >
                Name
              </label>
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                className="peer w-full px-4 py-3 bg-white/50 border border-sage/30 rounded-lg focus:outline-none focus:border-forest transition-colors"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="absolute left-4 top-3 text-text/60 transition-all duration-300 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-forest peer-focus:bg-white px-1 font-palugada"
              >
                Email
              </label>
            </div>
            <div className="relative">
              <textarea
                id="message"
                rows={5}
                className="peer w-full px-4 py-3 bg-white/50 border border-sage/30 rounded-lg focus:outline-none focus:border-forest transition-colors resize-none"
                placeholder=" "
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-4 top-3 text-text/60 transition-all duration-300 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-forest peer-focus:bg-white px-1 font-palugada"
              >
                Message
              </label>
            </div>
            <button
              type="submit"
              className="btn-primary w-full font-palugada"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
} 