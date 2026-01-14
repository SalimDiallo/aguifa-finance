"use client";

import { useLanguage } from '../context/LanguageContext';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Logo from './Logo';

// Définition des slides avec leurs images Pexels et textes
const heroSlides = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=1920',
    slideKey: 'slide1' as const,
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/4947381/pexels-photo-4947381.jpeg?auto=compress&cs=tinysrgb&w=1920',
    slideKey: 'slide2' as const,
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1920',
    slideKey: 'slide3' as const,
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/327502/pexels-photo-327502.jpeg?auto=compress&cs=tinysrgb&w=1920',
    slideKey: 'slide4' as const,
  },
];

export default function Hero() {
  const { t, language, toggleLanguage } = useLanguage();
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
      {/* Slides Container - Background Images */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-out ${
            index === currentSlide
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-105'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${slide.image}')` }}
          >
            {/* Green Overlay */}
            <div className="absolute inset-0 bg-[#1a5a3c]/70" />
          </div>
        </div>
      ))}

      {/* Top Bar - Logo + Social Links + Language */}
      <div className="absolute top-0 left-0 right-0 z-30 bg-white/50">
        <div className="px-8 lg:px-16 xl:px-24 py-6 flex justify-center">
          <div className="flex items-center justify-between max-w-7xl mx-auto flex-1">
            {/* Logo */}
           <Logo/>

            {/* Social Links + Language Switch */}
            <div className="flex items-center gap-4">
              {/* LinkedIn */}
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-lg flex items-center justify-center text-white/90 hover:text-white hover:bg-white/20 transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-lg flex items-center justify-center text-white/90 hover:text-white hover:bg-white/20 transition-all"
                aria-label="Facebook"
              >
                <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Separator */}
              <div className="w-px h-6 bg-white/20 mx-2" />

              {/* Language Switch with Flags */}
              <button
                onClick={toggleLanguage}
                className="flex items-center cursor-pointer gap-2 px-3 py-2 backdrop-blur-sm transition-all duration-300 group"
              >
                {/* Current Language Flag */}
                <span className="text-lg group-hover:scale-110 transition-transform">
                  {language === 'fr' ? '🇫🇷' : '🇬🇧'}
                </span>
                <span className="text-white/90 text-sm font-semibold tracking-wide">
                  {language === 'fr' ? 'FR' : 'EN'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Grid Layout */}
      <div className="relative z-20 min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 xl:px-24 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Side - Text Content */}
            <div className="space-y-6">
              {/* Title - Bold uppercase style */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight uppercase tracking-tight">
                {t.hero.title}
                <br />
                <span className="text-white">{t.hero.titleHighlight}</span>
                <br />
                {t.hero.titleEnd}
              </h1>

              {/* Dynamic Subtitle based on current slide */}
              <div className="min-h-[60px]">
                <p 
                  key={currentSlide}
                  className="text-lg lg:text-xl text-white/90 font-light animate-fadeIn"
                >
                  {slideContent.subtitle}
                </p>
              </div>

              {/* CTA Button - Institutional Profile (Download button) */}
            </div>

            {/* Right Side - Africa Map Image */}
            <div className="hidden lg:flex justify-end items-center">
              <div className="relative w-full max-w-xl">
                {/* Decorative circles */}
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/5 animate-pulse" />
                <div className="absolute -bottom-5 -left-5 w-24 h-24 rounded-full bg-emerald-400/10 animate-pulse" style={{ animationDelay: '1s' }} />
                
                {/* Glow effect behind the image */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 via-transparent to-yellow-500/20 blur-3xl scale-110" />
                
                {/* Main Image with floating animation */}
                <div className="relative animate-float">
                  <Image
                    src="/images/sections/Home/hero.png"
                    alt="Africa - AGUIFA Dev Finance"
                    width={600}
                    height={700}
                    className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                    priority
                  />
                </div>
                
                {/* Subtle ring decoration */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-full border border-white/10 animate-spin-slow" />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-500 rounded-full ${
              index === currentSlide 
                ? 'w-8 h-2 bg-white' 
                : 'w-2 h-2 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Custom Animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from { 
            opacity: 0; 
            transform: translateY(10px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px); 
          }
          50% { 
            transform: translateY(-15px); 
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        @keyframes spin-slow {
          from { 
            transform: translate(-50%, -50%) rotate(0deg); 
          }
          to { 
            transform: translate(-50%, -50%) rotate(360deg); 
          }
        }
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
