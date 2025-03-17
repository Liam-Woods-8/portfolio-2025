'use client';

import ContactForm from '../ui/ContactForm';

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-base via-light-blue/20 to-base">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Contact</h2>
        <div className="max-w-2xl mx-auto glass-effect p-12">
          <ContactForm />
        </div>
      </div>
    </section>
  );
} 