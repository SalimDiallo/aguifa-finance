"use client";

import { useLanguage } from '../context/LanguageContext';

export default function Values() {
  const { t, language } = useLanguage();

  const values = [
    {
      key: 'integrity',
      data: t.values.integrity,
      number: '01',
    },
    {
      key: 'excellence',
      data: t.values.excellence,
      number: '02',
    },
    {
      key: 'innovation',
      data: t.values.innovation,
      number: '03',
    },
    {
      key: 'independence',
      data: t.values.independence,
      number: '04',
    },
  ];

  const quote = language === 'fr' 
    ? 'Nous croyons en ce que nous disons et nous disons ce en quoi nous croyons.'
    : 'We believe in what we say and we say what we believe.';

  return (
    <>
      {/* Section avec image fixe (parallaxe) */}
      <section 
        className="relative h-[50vh] lg:h-[60vh] bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
        }}
      >
        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-slate-900/70" />
        
        {/* Contenu centré */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-4">
            <span className="inline-block text-xs font-medium tracking-widest text-white/60 uppercase mb-4">
              {t.values.subtitle}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-4">
              {t.values.title}
            </h2>
            <div className="w-16 h-px bg-white/40 mx-auto" />
          </div>
        </div>
      </section>

      {/* Section Valeurs - contenu qui défile */}
      <section className="py-16 lg:py-24 bg-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Values - Layout en grille créative */}
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            {values.map(({ key, data, number }) => (
              <div
                key={key}
                className="relative group"
              >
                {/* Numéro en fond */}
                <span className="absolute -top-8 -left-4 text-[100px] font-extralight text-slate-100 leading-none select-none group-hover:text-slate-200 transition-colors duration-500">
                  {number}
                </span>
                
                {/* Contenu */}
                <div className="relative pt-6 pl-2">
                  <div className="w-8 h-px bg-slate-900 mb-4" />
                  <h3 className="text-lg lg:text-xl font-medium text-slate-900 mb-3">
                    {data.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {data.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Citation */}
          <div className="mt-20 pt-12 border-t border-slate-100">
            <div className="max-w-xl mx-auto text-center">
              <svg className="w-6 h-6 text-slate-200 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-base lg:text-lg text-slate-600 font-light italic leading-relaxed">
                {quote}
              </blockquote>
              <p className="text-xs text-slate-400 font-medium tracking-widest uppercase mt-4">
                AGUIFA Dev Finance
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
