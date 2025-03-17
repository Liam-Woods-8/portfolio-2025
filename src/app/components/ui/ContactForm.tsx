'use client';

import { FormEvent, ChangeEvent, useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormField {
  id: keyof FormData;
  label: string;
  type: string;
  rows?: number;
}

const FORM_FIELDS: FormField[] = [
  { id: 'name', label: 'Name', type: 'text' },
  { id: 'email', label: 'Email', type: 'email' },
  { id: 'message', label: 'Message', type: 'textarea', rows: 4 }
];

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const renderFormField = ({ id, label, type, rows }: FormField) => {
    if (type === 'textarea') {
      return (
        <div key={id} className="mb-6 group">
          <label htmlFor={id} className="block mb-2 text-text/90 group-hover:text-forest transition-colors">{label}</label>
          <textarea
            id={id}
            name={id}
            rows={rows}
            value={formData[id]}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-base border border-sage rounded-lg focus:outline-none focus:border-forest text-text/90"
            required
          />
        </div>
      );
    }

    return (
      <div key={id} className="mb-6 group">
        <label htmlFor={id} className="block mb-2 text-text/90 group-hover:text-forest transition-colors">{label}</label>
        <input
          type={type}
          id={id}
          name={id}
          value={formData[id]}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-base border border-sage rounded-lg focus:outline-none focus:border-forest text-text/90"
          required
        />
      </div>
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {FORM_FIELDS.map(renderFormField)}
      <button
        type="submit"
        className="w-full btn-primary"
      >
        Send Message
      </button>
    </form>
  );
} 