"use client";

import { useLanguage } from '../context/LanguageContext';
import Image from 'next/image';
import { useState, useEffect } from 'react';

// Images pour le carrousel
const carouselImages = [
  {
    src: '/images/sections/Home/images_animations/Image 1 - Finance de Developpement.webp',
    alt: 'Finance de Développement'
  },
  {
    src: '/images/sections/Home/images_animations/Image 2 - Ingenierie Financiere.webp',
    alt: 'Ingénierie Financière'
  },
  {
    src: '/images/sections/Home/images_animations/Image 3 - Politique Publique.webp',
    alt: 'Politique Publique'
  }
];

export default function About() {
  const { t } = useLanguage();
  const [currentImage, setCurrentImage] = useState(0);

  // Auto-défilement des images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-16 lg:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Image Carousel */}
          <div className="relative">
            {/* Cadre décoratif */}
            <div className="absolute -top-4 -left-4 w-full h-full border border-slate-200 hidden lg:block" />
            
            <div className="relative overflow-hidden bg-slate-100">
              {/* Images en carousel */}
              <div className="aspect-[4/3] grid">
                {carouselImages.map((image, index) => (
                  <div
                    key={index}
                    className={`col-start-1 row-start-1 transition-opacity duration-1000 ease-in-out ${
                      index === currentImage 
                        ? 'opacity-100' 
                        : 'opacity-0'
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>
              
              {/* Indicateurs de navigation */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`h-1 transition-all duration-300 ${
                      index === currentImage 
                        ? 'bg-white w-8' 
                        : 'bg-white/50 hover:bg-white/70 w-2'
                    }`}
                    aria-label={`Image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="space-y-6">
            {/* Badge */}
            <span className="inline-block text-xs font-medium tracking-widest text-slate-500 uppercase">
              {t.about.subtitle}
            </span>
            
            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-slate-900">
              {t.about.title}
            </h2>

            {/* Ligne décorative */}
            <div className="w-12 h-0.5 bg-slate-900" />
            
            {/* Descriptions */}
            <div className="space-y-4">
              <p className="text-slate-700 leading-relaxed">
                <span className="font-semibold text-slate-900">AGUIFA Dev Finance (ADF)</span> {t.about.description1}
              </p>
              <p className="text-slate-600 leading-relaxed text-sm">
                {t.about.description2}
              </p>
            </div>

            {/* CTA Link */}
            <a
              href="/about"
              className="inline-flex items-center gap-2 text-sm text-slate-900 font-medium hover:text-slate-600 transition-colors group"
            >
              {t.about.knowMore}
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
