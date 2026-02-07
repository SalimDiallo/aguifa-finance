"use client";

import { LanguageProvider, useLanguage } from '../../context/LanguageContext';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContactForm from '../../components/ContactForm';
import { siteConfig } from '@/i18n/site';

function ContactContent() {
  const { t, language } = useLanguage();

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
                
                <ContactForm 
                  showCompany={true}
                  useSubjectSelect={true}
                  messageRows={6}
                />
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
                    <a href="mailto:info@aguifa-finance.com" className="text-slate-900 hover:text-slate-600 transition-colors">
                       info@aguifa-finance.com
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
                      {/* LinkedIn */}
                      <a 
                        href={t.contact.linkdIn}
                        className="w-10 h-10 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:border-slate-400 transition-colors"
                        aria-label="LinkedIn"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                      {/* WhatsApp */}
                      <a
                        href={siteConfig.whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 border border-green-200 flex items-center justify-center text-green-500 hover:text-green-700 hover:border-green-400 transition-colors"
                        aria-label="WhatsApp"
                      >
                        <svg className="w-5 h-5" viewBox="0 0 32 32" fill="currentColor">
                          <path d="M16.002 5.492c-5.824 0-10.548 4.739-10.548 10.548 0 1.86.484 3.668 1.406 5.266l-1.5 5.486 5.645-1.477c1.548.85 3.295 1.293 5.002 1.293h.006c5.825 0 10.549-4.74 10.549-10.548 0-2.818-1.099-5.468-3.09-7.457-1.987-1.988-4.637-3.111-7.47-3.111zm0 19.065c-1.513 0-2.989-.381-4.288-1.104l-.308-.174-3.353.878.892-3.254-.2-.336c-.851-1.431-1.3-3.065-1.3-4.778 0-5.048 4.105-9.162 9.156-9.162 2.448 0 4.749.955 6.48 2.691 1.729 1.732 2.684 4.037 2.684 6.471 0 5.048-4.104 9.168-9.163 9.168zm5.031-6.886c-.274-.137-1.625-.8-1.877-.891-.251-.093-.434-.137-.617.137-.183.273-.708.89-.868 1.074-.16.183-.321.206-.594.07-.274-.136-1.155-.426-2.2-1.359-.813-.724-1.363-1.618-1.524-1.892-.16-.274-.017-.422.122-.558.125-.125.274-.32.411-.48.138-.16.183-.274.275-.457.092-.183.046-.343-.022-.48-.069-.136-.617-1.484-.846-2.037-.224-.536-.454-.466-.617-.476l-.522-.01c-.16 0-.422.059-.643.277-.22.218-.843.823-.843 2.002s.864 2.323.983 2.484c.12.16 1.697 2.592 4.11 3.534.575.197 1.022.314 1.372.4.576.146 1.1.125 1.515.075.462-.057 1.625-.664 1.854-1.309.229-.646.229-1.199.16-1.31-.068-.11-.25-.182-.523-.32z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Google Maps Section */}
        <section className="bg-slate-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              {language === 'fr' ? 'Notre localisation - Bureau Guinée' : 'Our Location - Guinea Office'}
            </h3>
          </div>
          <div className="w-full h-[400px] lg:h-[500px] relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15823.95076977493!2d-13.6824!3d9.535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf1cd06f7c9e6f0b%3A0x7c4d5f8e3a9b2c1d!2sLambagui%2C%20Conakry%2C%20Guinea!5e0!3m2!1sen!2s!4v1705000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="AGUIFA Guinea Office - Conakry Lambagny"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute bottom-4 left-4 bg-white/90 rounded px-4 py-2 shadow text-slate-900 text-sm font-medium">
              Fossidet, Yattayah, Commune de Lambagny, Conakry - Guinea
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
