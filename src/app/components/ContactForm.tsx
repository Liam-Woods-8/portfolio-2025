'use client';

import { useState, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Here you would typically send the form data to your backend
      // For now, we'll simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-charcoal mb-2 font-bold">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.name ? 'border-red-500' : 'border-charcoal/20'
          } focus:outline-none focus:border-coral bg-white/50 backdrop-blur-sm transition-colors`}
          placeholder="Your name"
        />
        {errors.name && (
          <p className="mt-1 text-red-500 text-sm">{errors.name}</p>
        )}
      </div>

      <div>
        <label className="block text-charcoal mb-2 font-bold">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.email ? 'border-red-500' : 'border-charcoal/20'
          } focus:outline-none focus:border-coral bg-white/50 backdrop-blur-sm transition-colors`}
          placeholder="your@email.com"
        />
        {errors.email && (
          <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
        )}
      </div>

      <div>
        <label className="block text-charcoal mb-2 font-bold">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.message ? 'border-red-500' : 'border-charcoal/20'
          } focus:outline-none focus:border-coral h-32 bg-white/50 backdrop-blur-sm transition-colors`}
          placeholder="Your message"
        />
        {errors.message && (
          <p className="mt-1 text-red-500 text-sm">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`btn-primary w-full relative ${isSubmitting ? 'opacity-80' : ''}`}
      >
        <span className={`transition-opacity ${isSubmitting ? 'opacity-0' : 'opacity-100'}`}>
          Send Message
        </span>
        {isSubmitting && (
          <span className="absolute inset-0 flex items-center justify-center">
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </span>
        )}
      </button>

      {submitStatus === 'success' && (
        <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg animate-fade-in">
          Thank you for your message! I'll get back to you soon.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg animate-fade-in">
          Sorry, there was an error sending your message. Please try again later.
        </div>
      )}
    </form>
  );
} 