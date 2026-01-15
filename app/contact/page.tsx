"use client";

import { LanguageProvider, useLanguage } from '../../context/LanguageContext';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useState } from 'react';

function ContactContent() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section 
          className="relative h-[40vh] bg-fixed bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
          }}
        >
          <div className="absolute inset-0 bg-slate-900/70" />
          <div className="relative z-10 text-center px-4">
            <span className="inline-block text-xs font-medium tracking-widest text-white/60 uppercase mb-4">
              {t.contact.subtitle}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white">
              {t.contact.title}
            </h1>
            <div className="w-16 h-px bg-white/40 mx-auto mt-4" />
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-light text-slate-900 mb-2">
                  {t.contact.sendMessage}
                </h2>
                <div className="w-12 h-0.5 bg-slate-900 mb-8" />
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-slate-600 mb-2 uppercase tracking-wide">
                        {t.contact.name} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-200 focus:border-slate-400 focus:outline-none transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-slate-600 mb-2 uppercase tracking-wide">
                        {t.contact.email} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-200 focus:border-slate-400 focus:outline-none transition-colors text-sm"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-xs font-medium text-slate-600 mb-2 uppercase tracking-wide">
                      {t.contact.company}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-200 focus:border-slate-400 focus:outline-none transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-medium text-slate-600 mb-2 uppercase tracking-wide">
                      {t.contact.subject} *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-200 focus:border-slate-400 focus:outline-none transition-colors text-sm bg-white"
                    >
                      <option value="">{t.contact.selectSubject}</option>
                      <option value="development">Development Finance & Public Policies</option>
                      <option value="investment">Investment & Private Capital</option>
                      <option value="digital">Digital & MSME Finance</option>
                      <option value="data">Data & Research</option>
                      <option value="green">Green & Sustainable Finance</option>
                      <option value="tenders">{t.contact.tenderSupport}</option>
                      <option value="other">{t.contact.otherRequest}</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-slate-600 mb-2 uppercase tracking-wide">
                      {t.contact.message} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-slate-200 focus:border-slate-400 focus:outline-none transition-colors resize-none text-sm"
                      placeholder={t.contact.messagePlaceholder}
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
              <div>
                <h2 className="text-2xl font-light text-slate-900 mb-2">
                  {t.contact.ourDetails}
                </h2>
                <div className="w-12 h-0.5 bg-slate-900 mb-8" />
                
                <div className="space-y-8">
                  {/* Morocco Office */}
                  <div>
                    <h3 className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">
                      {t.contact.offices.morocco}
                    </h3>
                    <p className="text-slate-900">{t.contact.locations.morocco}</p>
                  </div>

                  {/* Guinea Office */}
                  <div>
                    <h3 className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">
                      {t.contact.offices.guinea}
                    </h3>
                    <p className="text-slate-900">{t.contact.locations.guinea}</p>
                  </div>

                  {/* Email */}
                  <div>
                    <h3 className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">Email</h3>
                    <a href="mailto:info@aguifa.org" className="text-slate-900 hover:text-slate-600 transition-colors">
                      info@aguifa.org
                    </a>
                  </div>

                  {/* Phone */}
                  <div>
                    <h3 className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">
                      {t.contact.phone}
                    </h3>
                    <p className="text-slate-900">+212 615 776 357</p>
                    <p className="text-slate-900">+224 626 904 564</p>
                  </div>
                  {/* Social */}
                  <div>
                    <h3 className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-3">
                      {t.contact.followUs}
                    </h3>
                    <div className="flex gap-3">
                      <a 
                        href="#" 
                        className="w-10 h-10 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:border-slate-400 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                      <a 
                        href="#" 
                        className="w-10 h-10 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:border-slate-400 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default function ContactPage() {
  return (
    <LanguageProvider>
      <ContactContent />
    </LanguageProvider>
  );
}
