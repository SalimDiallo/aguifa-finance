"use client";

import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import Image from 'next/image';

// Services data avec icônes
const services = [
  {
    id: 'development',
    icon: '/images/sections/Expertise/devFinance.png',
    serviceKey: 'devFinance',
  },
  {
    id: 'investment',
    icon: '/images/sections/Expertise/CapitalPrive.png',
    serviceKey: 'investment',
  },
  {
    id: 'digital',
    icon: '/images/sections/Expertise/Financedigitale.png',
    serviceKey: 'digital',
  },
  {
    id: 'data',
    icon: '/images/sections/Expertise/analyseData.png',
    serviceKey: 'data',
  },
  {
    id: 'green',
    icon: '/images/sections/Expertise/FinanceVerte.png',
    serviceKey: 'green',
  }
];

export default function Services() {
  const { t } = useLanguage();
  const [activeService, setActiveService] = useState<string | null>(null);

  return (
    <>
      {/* Section avec image fixe (parallaxe) - Header Expertise */}
      <section 
        id="expertise"
        className="relative h-[50vh] lg:h-[60vh] bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
        }}
      >
        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-slate-900/70" />
        
        {/* Contenu centré */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-4">
            <span className="inline-block text-xs font-medium tracking-widest text-white/60 uppercase mb-4">
              {t.expertise.subtitle}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-4">
              {t.expertise.title}
            </h2>
            <div className="w-16 h-px bg-white/40 mx-auto mb-4" />
            <p className="text-white/70 max-w-lg mx-auto">
              {t.expertise.ctaText}
            </p>
          </div>
        </div>
      </section>

      {/* Section Services - contenu qui défile */}
      <section id="services" className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Layout : Image à gauche, services à droite */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            
         

            {/* Colonne : Tous les services */}
            <div className="space-y-3">
              {services.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  t={t}
                  isActive={activeService === service.id}
                  onClick={() => setActiveService(activeService === service.id ? null : service.id)}
                />
              ))}
              
              {/* CTA vers Expertise */}
              <div className="pt-4">
                <a 
                  href="/expertise"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors"
                >
                  {t.expertise.ctaText}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

               {/* Colonne : Image Afrique */}
            <div className="flex justify-center lg:sticky lg:top-24">
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-full lg:h-[500px]">
                <Image
                  src="/images/sections/Home/hero-africa.png"
                  alt="Africa Map"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Composant ServiceCard avec description intégrée (expand/collapse)
interface ServiceCardProps {
  service: typeof services[0];
  t: ReturnType<typeof useLanguage>['t'];
  isActive: boolean;
  onClick: () => void;
}

function ServiceCard({ service, t, isActive, onClick }: ServiceCardProps) {
  const serviceData = t.services[service.serviceKey as keyof typeof t.services];
  
  return (
    <div className="border border-slate-200 bg-white transition-all duration-200 hover:border-slate-300">
      {/* Header cliquable */}
      <button
        onClick={onClick}
        className="w-full text-left p-3 flex items-center gap-3"
      >
        {/* Icône */}
        <div className={`
          relative w-10 h-10 flex-shrink-0 overflow-hidden
          transition-all duration-200 grayscale-[30%] 
          ${isActive ? 'grayscale-0' : 'group-hover:grayscale-0'}
        `}>
          <Image
            src={service.icon}
            alt={serviceData.title}
            fill
            className="object-contain"
          />
        </div>

        {/* Titre */}
        <h3 className={`
          flex-1 font-medium text-sm truncate transition-colors duration-200
          ${isActive ? 'text-emerald-700' : 'text-slate-800'}
        `}>
          {serviceData.title}
        </h3>

        {/* Indicateur expand/collapse */}
        <svg 
          className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isActive ? 'rotate-180' : ''}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Description - visible directement sous la carte quand active */}
      <div className={`
        overflow-hidden transition-all duration-300 ease-in-out
        ${isActive ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}
      `}>
        <div className="px-3 pb-3 pt-1 border-t border-slate-100">
          <p className="text-sm text-slate-600 leading-relaxed">
            {serviceData.description}
          </p>
          <a 
            href={`/expertise#${service.id}`}
            className="inline-flex items-center gap-1 mt-2 text-emerald-700 hover:text-emerald-800 text-xs font-medium transition-colors"
          >
            {serviceData.readMore}
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
