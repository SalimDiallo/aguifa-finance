"use client";

import { useLanguage } from '../context/LanguageContext';
import { useState, useEffect, useRef } from 'react';
import Logo from './Logo';
import LangSwitch from './LangSwitch';

export default function Header() {
  const { t } = useLanguage();
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
    { href: '/', label: t.nav.home },
    { href: '/about', label: t.nav.about },
    { href: '/expertise', label: t.nav.expertise },
    { href: '/team', label: t.nav.team },
    { href: '/projects', label: t.nav.projects },
    { href: '/insights', label: t.nav.insights },
    { href: '/contact', label: t.nav.contact },
  ];

  return (
    <>
      {/* Anchor point pour le header */}
      <div id="header-anchor" className={isFixed ? 'h-16' : ''} />
      
      <header 
        ref={headerRef}
        className={`w-full z-50 transition-all duration-300 ${
          isFixed 
            ? 'fixed top-0 left-0 right-0 bg-white border-b border-slate-200' 
            : 'relative bg-slate-900'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16 gap-8">
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm transition-colors duration-200 ${
                    isFixed 
                      ? 'text-slate-600 hover:text-slate-900' 
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Language Toggle */}
            <div className="hidden lg:block">
              <LangSwitch variant={isFixed ? 'dark' : 'light'} />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={`h-0.5 w-full transition-all duration-200 ${
                  isFixed ? 'bg-slate-900' : 'bg-white'
                } ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                <span className={`h-0.5 w-full transition-all duration-200 ${
                  isFixed ? 'bg-slate-900' : 'bg-white'
                } ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`h-0.5 w-full transition-all duration-200 ${
                  isFixed ? 'bg-slate-900' : 'bg-white'
                } ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
              </div>
            </button>
          </nav>

          {/* Mobile Menu */}
          <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-[400px] opacity-100 pb-4' : 'max-h-0 opacity-0'
          }`}>
            <div className={`py-2 space-y-1 ${
              isFixed ? 'bg-white' : 'bg-slate-800'
            }`}>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-sm py-2 px-3 transition-colors ${
                    isFixed 
                      ? 'text-slate-700 hover:text-slate-900 hover:bg-slate-50' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-700'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 px-3 border-t border-slate-200/20">
                <LangSwitch variant={isFixed ? 'dark' : 'light'} />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
