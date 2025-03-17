'use client';

import { useState, FormEvent, ChangeEvent } from 'react';

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
  { id: 'message', label: 'Message', type: 'textarea', rows: 5 }
];

export default function ContactForm() {
  const [formState, setFormState] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log(formState);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const renderFormField = (field: FormField) => (
    <div key={field.id} className="form-group">
      <label htmlFor={field.id} className="form-label">
        {field.label}
      </label>
      {field.type === 'textarea' ? (
        <textarea
          id={field.id}
          rows={field.rows}
          className="form-input resize-none"
          value={formState[field.id]}
          onChange={handleInputChange}
          required
        />
      ) : (
        <input
          type={field.type}
          id={field.id}
          className="form-input"
          value={formState[field.id]}
          onChange={handleInputChange}
          required
        />
      )}
    </div>
  );

  return (
    <div className="relative">
      {/* Decorative elements */}
      <div className="absolute -top-6 -left-6 w-12 h-12 bg-purple/20 rounded-full blur-xl"></div>
      <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-mid-blue/20 rounded-full blur-xl"></div>
      
      <form onSubmit={handleSubmit} className="relative z-10">
        {FORM_FIELDS.map(renderFormField)}
        
        <button type="submit" className="form-submit">
          Send Message
        </button>
      </form>

      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #C4D9FF 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
    </div>
  );
} 