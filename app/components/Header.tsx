"use client";

import { useLanguage } from '../context/LanguageContext';
import { useState, useEffect, useRef } from 'react';
import Logo from './Logo';
import LangSwitch from './LangSwitch';

export default function Header() {
  const { t, language, toggleLanguage } = useLanguage();
  const [isFixed, setIsFixed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const headerAnchor = document.getElementById('header-anchor');
      if (headerAnchor) {
        const anchorPosition = headerAnchor.getBoundingClientRect().top;
        setIsFixed(anchorPosition <= 0);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#expertise', label: t.nav.expertise },
    { href: '#team', label: t.nav.team },
    { href: '#projects', label: t.nav.projects },
    { href: '#insights', label: t.nav.insights },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <>
      {/* Anchor point pour le header */}
      <div id="header-anchor" className={isFixed ? 'h-24' : ''} />
      
      <header 
        ref={headerRef}
        className={`w-full z-50 transition-all duration-500 flex justify-center ${
          isFixed 
            ? 'fixed top-0 left-0 right-0 bg-white shadow-sm' 
            : 'relative bg-emerald-900'
        }`}
      >
        <div className="max-w-8xl mx-auto px-8">
          <nav className="flex items-center justify-between h-24 gap-10">
            {/* Logo */}
                <Logo />

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-all duration-300 relative group ${
                    isFixed 
                      ? 'text-gray-600 hover:text-emerald-900' 
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${
                    isFixed ? 'bg-emerald-900' : 'bg-white'
                  }`} />
                </a>
              ))}
            </div>

            {/* Language Toggle & CTA */}
            <LangSwitch />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-3"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`h-0.5 w-full transition-all duration-300 ${
                  isFixed ? 'bg-emerald-900' : 'bg-white'
                } ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`h-0.5 w-full transition-all duration-300 ${
                  isFixed ? 'bg-emerald-900' : 'bg-white'
                } ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`h-0.5 w-full transition-all duration-300 ${
                  isFixed ? 'bg-emerald-900' : 'bg-white'
                } ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </nav>

          {/* Mobile Menu */}
          <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0'
          }`}>
            <div className={`rounded-lg p-6 space-y-1 ${
              isFixed ? 'bg-gray-50' : 'bg-white/10 backdrop-blur-sm'
            }`}>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block font-medium py-3 px-4 rounded-md transition-colors ${
                    isFixed 
                      ? 'text-gray-700 hover:bg-gray-100 hover:text-emerald-900' 
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-3 pt-4 mt-4 border-t border-gray-200/20">
                <button
                  onClick={toggleLanguage}
                  className={`px-5 py-3 border rounded-md font-medium transition-all ${
                    isFixed 
                      ? 'border-gray-300 text-gray-600 hover:border-emerald-900 hover:text-emerald-900'
                      : 'border-white/30 text-white hover:border-white'
                  }`}
                >
                  {language === 'fr' ? 'EN' : 'FR'}
                </button>
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex-1 text-center px-5 py-3 bg-emerald-900 text-white rounded-md font-medium hover:bg-emerald-800 transition-all"
                >
                  {t.hero.cta}
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
