'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formState);
  };

  return (
    <div className="relative">
      {/* Decorative elements */}
      <div className="absolute -top-6 -left-6 w-12 h-12 bg-purple/20 rounded-full blur-xl"></div>
      <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-mid-blue/20 rounded-full blur-xl"></div>
      
      <form onSubmit={handleSubmit} className="relative z-10">
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="form-input"
            value={formState.name}
            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="form-input"
            value={formState.email}
            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            className="form-input resize-none"
            value={formState.message}
            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
            required
          ></textarea>
        </div>

        <button type="submit" className="form-submit">
          Send Message
        </button>
      </form>

      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, ${getComputedStyle(document.documentElement).getPropertyValue('--tw-color-mid-blue')} 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
    </div>
  );
} 