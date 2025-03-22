'use client';

import { useState } from 'react';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mqakpyvr', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
        // Reset the form after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 md:py-32">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-12 sm:mb-16 md:mb-24">Contact</h2>
        <div className="max-w-4xl mx-auto">
          <form 
            id="contact-form" 
            className="contact-form space-y-6"
            onSubmit={handleSubmit}
            action="https://formspree.io/f/mqakpyvr"
            method="POST"
          >
            <div className="form-group">
              <label htmlFor="name" className="block text-lg sm:text-xl font-palugada mb-2">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 rounded-lg bg-white/80 backdrop-blur-sm border-2 border-forest text-forest placeholder-forest/50 focus:outline-none focus:ring-2 focus:ring-forest focus:border-transparent"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="block text-lg sm:text-xl font-palugada mb-2">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 rounded-lg bg-white/80 backdrop-blur-sm border-2 border-forest text-forest placeholder-forest/50 focus:outline-none focus:ring-2 focus:ring-forest focus:border-transparent"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="block text-lg sm:text-xl font-palugada mb-2">Message:</label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full px-4 py-2 rounded-lg bg-white/80 backdrop-blur-sm border-2 border-forest text-forest placeholder-forest/50 focus:outline-none focus:ring-2 focus:ring-forest focus:border-transparent resize-none"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="btn-secondary"
              >
                Send Message
              </button>
            </div>
            {isSubmitted && (
              <p className="text-forest text-lg sm:text-xl text-center font-palugada mt-4 animate-fade-in">
                Thank you! Your message has been sent.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
} 