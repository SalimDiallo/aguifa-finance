"use client";

import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import Image from 'next/image';

// Services data avec icônes
const services = [
  {
    id: 'development',
    icon: '/images/icon-dev-finance.png',
    titleKey: 'developmentFinance',
    descKey: 'developmentFinanceDesc',
  },
  {
    id: 'investment',
    icon: '/images/icon-investment.png',
    titleKey: 'investmentCapital',
    descKey: 'investmentCapitalDesc',
  },
  {
    id: 'digital',
    icon: '/images/icon-digital.png',
    titleKey: 'digitalMsme',
    descKey: 'digitalMsmeDesc',
  },
  {
    id: 'data',
    icon: '/images/icon-data.png',
    titleKey: 'dataAnalytics',
    descKey: 'dataAnalyticsDesc',
  },
  {
    id: 'green',
    icon: '/images/icon-green.png',
    titleKey: 'greenFinance',
    descKey: 'greenFinanceDesc',
  }
];

// Traductions pour les services
const serviceTranslations = {
  fr: {
    sectionTitle: 'Nos Domaines d\'Expertise',
    sectionSubtitle: 'Des solutions financières sur mesure pour l\'Afrique',
    developmentFinance: 'Finance de Développement',
    developmentFinanceDesc: 'Nous accompagnons les gouvernements, institutions publiques et partenaires techniques dans la conception, la revue et l\'évaluation de politiques sectorielles et programmes de développement.',
    investmentCapital: 'Investment & Private Capital',
    investmentCapitalDesc: 'Conseil stratégique en structuration de fonds, levée de capitaux et accompagnement des investisseurs institutionnels dans leurs opérations en Afrique.',
    digitalMsme: 'Digital Finance & MSME',
    digitalMsmeDesc: 'Solutions innovantes de financement digital pour les micro, petites et moyennes entreprises africaines, favorisant l\'inclusion financière.',
    dataAnalytics: 'Data & Analytics',
    dataAnalyticsDesc: 'Exploitation de données et analyses avancées pour éclairer les décisions d\'investissement et optimiser la performance des portefeuilles.',
    greenFinance: 'ESG & Green Finance',
    greenFinanceDesc: 'Structuration de financements verts et durables alignés sur les critères ESG pour une croissance responsable du continent africain.',
    learnMore: 'En savoir plus',
  },
  en: {
    sectionTitle: 'Our Areas of Expertise',
    sectionSubtitle: 'Tailored financial solutions for Africa',
    developmentFinance: 'Development Finance',
    developmentFinanceDesc: 'We support governments, public institutions and technical partners in the design, review and evaluation of sectoral policies and development programs.',
    investmentCapital: 'Investment & Private Capital',
    investmentCapitalDesc: 'Strategic advisory in fund structuring, capital raising and support for institutional investors in their African operations.',
    digitalMsme: 'Digital Finance & MSME',
    digitalMsmeDesc: 'Innovative digital financing solutions for African micro, small and medium enterprises, promoting financial inclusion.',
    dataAnalytics: 'Data & Analytics',
    dataAnalyticsDesc: 'Data exploitation and advanced analytics to inform investment decisions and optimize portfolio performance.',
    greenFinance: 'ESG & Green Finance',
    greenFinanceDesc: 'Structuring green and sustainable financing aligned with ESG criteria for responsible growth of the African continent.',
    learnMore: 'Learn more',
  }
};

export default function Services() {
  const { language } = useLanguage();
  const t = serviceTranslations[language as keyof typeof serviceTranslations] || serviceTranslations.fr;
  const [activeService, setActiveService] = useState<string | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  // Effet parallaxe subtil
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = -rect.top / window.innerHeight;
        setScrollY(scrollProgress * 30);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Services de gauche (indices 0, 1, 2)
  const leftServices = services.slice(0, 3);
  // Services de droite (indices 3, 4)
  const rightServices = services.slice(3);

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="relative py-16 lg:py-20 overflow-hidden bg-slate-50"
    >
      {/* Background subtil avec effet parallaxe */}
      <div 
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${scrollY}px)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-100" />
        <div className="absolute top-0 left-0 right-0 h-px bg-slate-200" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header de section - compact */}
        <div className="text-center mb-10 lg:mb-12">
          <span className="inline-block text-xs font-medium tracking-widest text-slate-500 uppercase mb-3">
            Expertise
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-slate-900 mb-3">
            {t.sectionTitle}
          </h2>
          <div className="w-12 h-0.5 bg-emerald-700 mx-auto mb-4" />
          <p className="text-base text-slate-600 max-w-xl mx-auto font-light">
            {t.sectionSubtitle}
          </p>
        </div>

        {/* Layout : Image au centre, services de chaque côté */}
        <div className="grid lg:grid-cols-9 gap-4 lg:gap-6 items-start">
          
          {/* Colonne gauche : 3 services */}
          <div className="lg:col-span-3 space-y-2">
            {leftServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                t={t}
                isActive={activeService === service.id}
                onClick={() => setActiveService(activeService === service.id ? null : service.id)}
              />
            ))}
          </div>

          {/* Colonne centrale : Image Afrique - mise en valeur */}
          <div className="lg:col-span-3 flex justify-center order-first lg:order-none mb-6 lg:mb-0 py-4">
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 lg:w-full lg:h-[420px]">
              <Image
                src="/images/sections/Home/hero-africa.png"
                alt="Africa Map"
                fill
                className="object-contain drop-shadow-lg"
                priority
              />
            </div>
          </div>

          {/* Colonne droite : 2 services */}
          <div className="lg:col-span-3 space-y-2">
            {rightServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                t={t}
                isActive={activeService === service.id}
                onClick={() => setActiveService(activeService === service.id ? null : service.id)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Ligne décorative en bas */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-slate-200" />
    </section>
  );
}

// Composant ServiceCard avec description intégrée (expand/collapse)
interface ServiceCardProps {
  service: typeof services[0];
  t: typeof serviceTranslations.fr;
  isActive: boolean;
  onClick: () => void;
}

function ServiceCard({ service, t, isActive, onClick }: ServiceCardProps) {
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
            alt={t[service.titleKey as keyof typeof t] as string}
            fill
            className="object-contain"
          />
        </div>

        {/* Titre */}
        <h3 className={`
          flex-1 font-medium text-sm truncate transition-colors duration-200
          ${isActive ? 'text-emerald-700' : 'text-slate-800'}
        `}>
          {t[service.titleKey as keyof typeof t]}
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
            {t[service.descKey as keyof typeof t]}
          </p>
          <a 
            href={`#${service.id}`}
            className="inline-flex items-center gap-1 mt-2 text-emerald-700 hover:text-emerald-800 text-xs font-medium transition-colors"
          >
            {t.learnMore}
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
