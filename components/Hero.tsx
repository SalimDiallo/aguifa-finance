"use client";

import { useLanguage } from '../context/LanguageContext';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Logo from './Logo';
import LangSwitch from './LangSwitch';

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
                href={t.contact.linkdIn}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-6 h-6 flex items-center justify-center text-white/70 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
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
