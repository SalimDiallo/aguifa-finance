"use client";

import { useLanguage } from '../context/LanguageContext';
import Image from 'next/image';

export default function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-24 h-10 p-2 relative overflow-hidden rounded-sm bg-white mb-4">
                <Image
                  src="/images/Logo.png"
                  alt="AGUIFA Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
           
            {/* Contact Info */}
            <div className="space-y-1 text-xs text-slate-500">
              <p>info@aguifa-finance.com</p>
              <p>+212 615 776 357</p>
              <p>+224 624 682 317</p>
            </div>
          </div>

        

          {/* Locations & Social */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-slate-300 uppercase tracking-wider">
              {t.footer.offices}
            </h3>
            <div className="space-y-3 text-sm text-slate-400 mb-6 grid grid-cols-2">
              <div>
                <p className="text-slate-300 text-xs uppercase tracking-wide mb-1">{t.footer.morocco}</p>
                <p>{t.contact.locations.morocco}</p>
              </div>
              <div>
                <p className="text-slate-300 text-xs uppercase tracking-wide mb-1">{t.footer.guinea}</p>
                <p>{t.contact.locations.guinea}</p>
              </div>
            </div>
            
            <h3 className="text-sm font-semibold mb-3 text-slate-300 uppercase tracking-wider">{t.footer.followUs}</h3>
            <div className="flex gap-3">
                <a
                  key={"linkedin"}
                  href={`https://.com/aguifa`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 border border-slate-700 hover:border-slate-500 hover:bg-slate-800 flex items-center justify-center transition-all"
                >
                    <svg className="w-4 h-4 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <p className="text-slate-500">
              © {new Date().getFullYear()} AGUIFA Dev Finance. {t.footer.rights}
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-slate-500 hover:text-slate-300 transition-colors">
                {t.footer.privacy}
              </a>
              <span className="text-slate-700">|</span>
              <a href="#" className="text-slate-500 hover:text-slate-300 transition-colors">
                {t.footer.terms}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
