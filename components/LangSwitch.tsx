"use client";

import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import Image from 'next/image';

interface LangSwitchProps {
  variant?: 'light' | 'dark';
}

const languages = [
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
];

export default function LangSwitch({ variant = 'dark' }: LangSwitchProps) {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const isDark = variant === 'dark';
  const currentLang = languages.find(l => l.code === language) || languages[0];

  // Fermer le dropdown quand on clique ailleurs
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (langCode: string) => {
    setLanguage(langCode as 'fr' | 'en');
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Bouton principal */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className={`
          flex items-center gap-2 px-3 py-1.5 border transition-all duration-200
          ${isDark 
            ? 'border-slate-300 text-slate-700 hover:border-slate-500 hover:text-slate-900' 
            : 'border-white/30 text-white/90 hover:border-white hover:text-white'
          }
        `}
      >
        <span className="text-base">{currentLang.flag}</span>
        <span className="text-xs font-medium tracking-wider uppercase">
          {currentLang.code.toUpperCase()}
        </span>
        <svg 
          className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div 
          className={`
            absolute top-full right-0 mt-2 py-1 min-w-[140px] z-50
            ${isDark 
              ? 'bg-white border border-slate-200 shadow-lg' 
              : 'bg-slate-800 border border-slate-700'
            }
          `}
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              className={`
                w-full flex items-center gap-3 px-4 py-2 text-left transition-colors
                ${lang.code === language 
                  ? isDark 
                    ? 'bg-slate-100 text-slate-900' 
                    : 'bg-slate-700 text-white'
                  : isDark 
                    ? 'text-slate-600 hover:bg-slate-50 hover:text-slate-900' 
                    : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                }
              `}
            >
              <span className="text-lg">{lang.flag}</span>
              <span className="text-sm">{lang.label}</span>
              {lang.code === language && (
                <svg className="w-4 h-4 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}