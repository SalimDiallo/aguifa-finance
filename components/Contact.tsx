"use client";

import { siteConfig } from '@/i18n/site';
import { useLanguage } from '../context/LanguageContext';
import ContactForm from './ContactForm';

export default function Contact() {
  const { t } = useLanguage();

  const contactInfo = [
    {
      label: t.contact.offices.morocco,
      value: t.contact.locations.morocco,
      href: null,
    },
    {
      label: t.contact.offices.guinea,
      value: t.contact.locations.guinea,
      href: null,
    },
    {
      label: t.contact.phone,
      value: '+212 615 776 357',
      href: 'tel:+212615776357',
    },
    {
      label: t.contact.emailContact,
      value: 'info@aguifa-finance.com',
      href: 'mailto:info@aguifa-finance.com',
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
            <ContactForm />
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

            {/* Google Map - Conakry Lambagui */}
            <div className="relative h-64 bg-slate-100 border border-slate-200 overflow-hidden group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.8012365847814!2d-13.6631!3d9.5370!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf1cd735d5e842c7%3A0x7c8f7e8a2e8c8e8a!2sLambagui%2C%20Conakry%2C%20Guinea!5e0!3m2!1sen!2s!4v1705500000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
              {/* Location overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-4">
                <div className="flex items-center gap-2 text-white">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm font-medium">{t.contact.locations.guinea}</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-500 uppercase tracking-wide">{t.contact.followUs}</span>
                <a
                  href={siteConfig.linkdIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:border-slate-400 transition-colors"
                >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>               
                </a>
                <a
                  href={siteConfig.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 border border-green-200 flex items-center justify-center text-green-500 hover:text-green-800 hover:border-green-400 transition-colors"
                  aria-label="WhatsApp"
                >
                  {/* WhatsApp SVG */}
                  <svg className="w-5 h-5" viewBox="0 0 32 32" fill="currentColor">
                    <path d="M16.002 5.492c-5.824 0-10.548 4.739-10.548 10.548 0 1.86.484 3.668 1.406 5.266l-1.5 5.486 5.645-1.477c1.548.85 3.295 1.293 5.002 1.293h.006c5.825 0 10.549-4.74 10.549-10.548 0-2.818-1.099-5.468-3.09-7.457-1.987-1.988-4.637-3.111-7.47-3.111zm0 19.065c-1.513 0-2.989-.381-4.288-1.104l-.308-.174-3.353.878.892-3.254-.2-.336c-.851-1.431-1.3-3.065-1.3-4.778 0-5.048 4.105-9.162 9.156-9.162 2.448 0 4.749.955 6.48 2.691 1.729 1.732 2.684 4.037 2.684 6.471 0 5.048-4.104 9.168-9.163 9.168zm5.031-6.886c-.274-.137-1.625-.8-1.877-.891-.251-.093-.434-.137-.617.137-.183.273-.708.89-.868 1.074-.16.183-.321.206-.594.07-.274-.136-1.155-.426-2.2-1.359-.813-.724-1.363-1.618-1.524-1.892-.16-.274-.017-.422.122-.558.125-.125.274-.32.411-.48.138-.16.183-.274.275-.457.092-.183.046-.343-.022-.48-.069-.136-.617-1.484-.846-2.037-.224-.536-.454-.466-.617-.476l-.522-.01c-.16 0-.422.059-.643.277-.22.218-.843.823-.843 2.002s.864 2.323.983 2.484c.12.16 1.697 2.592 4.11 3.534.575.197 1.022.314 1.372.4.576.146 1.1.125 1.515.075.462-.057 1.625-.664 1.854-1.309.229-.646.229-1.199.16-1.31-.068-.11-.25-.182-.523-.32z"/>
                  </svg>
                </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
