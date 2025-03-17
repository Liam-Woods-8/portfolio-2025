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
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <label className="block text-lg mb-3">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-6 py-4 bg-transparent border-b-2 ${
            errors.name ? 'border-red-500' : 'border-primary'
          } focus:outline-none focus:border-secondary transition-colors text-lg`}
          placeholder="Your name"
        />
        {errors.name && (
          <p className="mt-2 text-red-500">{errors.name}</p>
        )}
      </div>

      <div>
        <label className="block text-lg mb-3">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-6 py-4 bg-transparent border-b-2 ${
            errors.email ? 'border-red-500' : 'border-primary'
          } focus:outline-none focus:border-secondary transition-colors text-lg`}
          placeholder="your@email.com"
        />
        {errors.email && (
          <p className="mt-2 text-red-500">{errors.email}</p>
        )}
      </div>

      <div>
        <label className="block text-lg mb-3">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={`w-full px-6 py-4 bg-transparent border-b-2 ${
            errors.message ? 'border-red-500' : 'border-primary'
          } focus:outline-none focus:border-secondary h-32 resize-none transition-colors text-lg`}
          placeholder="Your message"
        />
        {errors.message && (
          <p className="mt-2 text-red-500">{errors.message}</p>
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
        <div className="mt-6 p-4 bg-green-50 text-green-700 text-lg">
          Thank you for your message! I'll get back to you soon.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mt-6 p-4 bg-red-50 text-red-700 text-lg">
          Sorry, there was an error sending your message. Please try again later.
        </div>
      )}
    </form>
  );
} 