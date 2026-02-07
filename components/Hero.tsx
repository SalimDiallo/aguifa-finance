"use client";

import { useLanguage } from '../context/LanguageContext';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Logo from './Logo';
import LangSwitch from './LangSwitch';
import { siteConfig } from '@/i18n/site';

// Définition des slides
const heroSlides = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1920',
    slideKey: 'slide1' as const,
  },
  {
    id: 2,
    image: '/f.jpg',
    slideKey: 'slide2' as const,
  },
  {
    id: 3,
    image: '/a.png',
    slideKey: 'slide3' as const,
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/327502/pexels-photo-327502.jpeg?auto=compress&cs=tinysrgb&w=1920',
    slideKey: 'slide4' as const,
  },
];

export default function Hero() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // WhatsApp contact number and link (using the Morocco phone)
  // WhatsApp number to link (using Morocco number here, feel free to change)
  const whatsappLink = 'https://wa.me/message/J63AY3MISL2KG1';

  // Auto-play du slider
  const nextSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      setTimeout(() => setIsTransitioning(false), 800);
    }
  }, [isTransitioning]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const goToSlide = (index: number) => {
    if (!isTransitioning && index !== currentSlide) {
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 800);
    }
  };

  const currentSlideData = heroSlides[currentSlide];
  const slideContent = t.hero.slides[currentSlideData.slideKey];

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${slide.image}')` }}
          >
            {/* Dark overlay - sobre */}
            <div className="absolute inset-0 bg-slate-900/75" />
          </div>
        </div>
      ))}

      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            {/* Logo (taille réduite) */}
            <div className="flex items-center" style={{ height: '32px' }}>
              <Logo className="w-24 h-8" />
            </div>

            {/* Social Links + Language */}
            <div className="flex items-center gap-2">
              {/* LinkedIn (taille réduite) */}
              <a 
                href={siteConfig.linkdIn}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-6 h-6 flex items-center justify-center text-white/70 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 flex items-center justify-center text-green-400 hover:text-green-600 transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-4.5 h-4.5" viewBox="0 0 32 32" fill="currentColor">
                  <path d="M16.002 5.492c-5.824 0-10.548 4.739-10.548 10.548 0 1.86.484 3.668 1.406 5.266l-1.5 5.486 5.645-1.477c1.548.85 3.295 1.293 5.002 1.293h.006c5.825 0 10.549-4.74 10.549-10.548 0-2.818-1.099-5.468-3.09-7.457-1.987-1.988-4.637-3.111-7.47-3.111zm0 19.065c-1.513 0-2.989-.381-4.288-1.104l-.308-.174-3.353.878.892-3.254-.2-.336c-.851-1.431-1.3-3.065-1.3-4.778 0-5.048 4.105-9.162 9.156-9.162 2.448 0 4.749.955 6.48 2.691 1.729 1.732 2.684 4.037 2.684 6.471 0 5.048-4.104 9.168-9.163 9.168zm5.031-6.886c-.274-.137-1.625-.8-1.877-.891-.251-.093-.434-.137-.617.137-.183.273-.708.89-.868 1.074-.16.183-.321.206-.594.07-.274-.136-1.155-.426-2.2-1.359-.813-.724-1.363-1.618-1.524-1.892-.16-.274-.017-.422.122-.558.125-.125.274-.32.411-.48.138-.16.183-.274.275-.457.092-.183.046-.343-.022-.48-.069-.136-.617-1.484-.846-2.037-.224-.536-.454-.466-.617-.476l-.522-.01c-.16 0-.422.059-.643.277-.22.218-.843.823-.843 2.002s.864 2.323.983 2.484c.12.16 1.697 2.592 4.11 3.534.575.197 1.022.314 1.372.4.576.146 1.1.125 1.515.075.462-.057 1.625-.664 1.854-1.309.229-.646.229-1.199.16-1.31-.068-.11-.25-.182-.523-.32z"/>
                </svg>
              </a>
              
              <div className="w-px h-4 bg-white/20" />

              {/* Language Switch - réduit */}
              <div className="scale-90">
                <LangSwitch variant="light" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 min-h-screen flex items-center pt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left - Text */}
            <div className="space-y-6 ">
              {/* Title */}
              <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-white leading-tight tracking-tight font-semibold">
                {t.hero.title}
                <br />
                <span className="font-semibold">{t.hero.titleHighlight}</span>
                <br />
                {t.hero.titleEnd}
              </h1>

              {/* Dynamic Subtitle */}
              <div className="min-h-[50px]">
                <p 
                  key={currentSlide}
                  className="text-base lg:text-lg text-white/70 font-light animate-fadeIn"
                >
                  {slideContent.subtitle}
                </p>
              </div>

              {/* CTA */}
              <div className="flex gap-4 pt-4">
                <a 
                  href="#contact"
                  className="px-6 py-3 bg-white text-slate-900 text-sm font-medium hover:bg-slate-100 transition-colors"
                >
                  {t.hero.cta}
                </a>
                <a 
                  href="#about"
                  className="px-6 py-3 border border-white/30 text-white text-sm font-medium hover:border-white hover:bg-white/10 transition-colors"
                >
                  {t.about.knowMore}
                </a>
              </div>
            </div>

            {/* Right - Africa Image */}
            <div className="hidden lg:flex justify-end items-center">
              <div className="relative w-full max-w-2xl -mr-12">
                <Image
                  src="/images/sections/Home/hero.png"
                  alt="Africa - AGUIFA Dev Finance"
                  width={1000}
                  height={1000}
                  className="w-full h-auto object-contain opacity-95 scale-150"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 ${
              index === currentSlide 
                ? 'w-8 h-1 bg-white' 
                : 'w-2 h-1 bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
