"use client";

import { useLanguage } from '../context/LanguageContext';
import { useState } from 'react';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      label: t.contact.address,
      value: 'Dakar, Sénégal',
      href: null,
    },
    {
      label: t.contact.phone,
      value: '+221 XX XXX XX XX',
      href: 'tel:+221XXXXXXXX',
    },
    {
      label: t.contact.emailContact,
      value: 'contact@aguifa.com',
      href: 'mailto:contact@aguifa.com',
    },
  ];

  return (
    <section id="contact" className="py-16 lg:py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-medium tracking-widest text-slate-500 uppercase mb-3">
            {t.contact.subtitle}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-slate-900 mb-3">
            {t.contact.title}
          </h2>
          <div className="w-12 h-0.5 bg-slate-900 mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div className="bg-white border border-slate-200 p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-slate-600 mb-2 uppercase tracking-wide">
                    {t.contact.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-200 focus:border-slate-400 focus:outline-none transition-colors text-sm"
                    placeholder="Jean Dupont"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-slate-600 mb-2 uppercase tracking-wide">
                    {t.contact.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-200 focus:border-slate-400 focus:outline-none transition-colors text-sm"
                    placeholder="jean@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-xs font-medium text-slate-600 mb-2 uppercase tracking-wide">
                  {t.contact.subject}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-200 focus:border-slate-400 focus:outline-none transition-colors text-sm"
                  placeholder="Comment pouvons-nous vous aider ?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs font-medium text-slate-600 mb-2 uppercase tracking-wide">
                  {t.contact.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-slate-200 focus:border-slate-400 focus:outline-none transition-colors resize-none text-sm"
                  placeholder="Décrivez votre projet..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full py-3 bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors"
              >
                {t.contact.send}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            
            {/* Info Cards */}
            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-white border border-slate-200"
                >
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">{info.label}</div>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-sm font-medium text-slate-900 hover:text-slate-600 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-sm font-medium text-slate-900">{info.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="relative h-48 bg-slate-100 border border-slate-200 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-6 h-6 text-slate-400 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-sm text-slate-600">Dakar, Sénégal</p>
                <p className="text-xs text-slate-400">Afrique de l'Ouest</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {['linkedin', 'twitter'].map((social) => (
                <a
                  key={social}
                  href={`https://${social}.com/aguifa`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:border-slate-400 transition-colors"
                >
                  {social === 'linkedin' && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  )}
                  {social === 'twitter' && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
