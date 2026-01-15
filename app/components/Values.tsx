"use client";

import { useLanguage } from '../context/LanguageContext';

export default function Values() {
  const { t } = useLanguage();

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

  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Ligne verticale décorative */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-100 hidden lg:block" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-block text-xs font-medium tracking-widest text-slate-500 uppercase mb-3">
            {t.values.subtitle}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-slate-900 mb-3">
            {t.values.title}
          </h2>
          <div className="w-12 h-0.5 bg-slate-900 mx-auto" />
        </div>

        {/* Values - Layout créatif en zigzag */}
        <div className="space-y-0">
          {values.map(({ key, data, number }, index) => (
            <div
              key={key}
              className={`
                relative flex flex-col lg:flex-row items-center gap-6 lg:gap-12 py-12
                ${index !== values.length - 1 ? 'border-b border-slate-100' : ''}
                ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}
              `}
            >
              {/* Numéro grand - côté */}
              <div className={`
                lg:w-1/3 flex justify-center lg:justify-${index % 2 === 0 ? 'end' : 'start'}
              `}>
                <span className="text-[120px] lg:text-[180px] font-extralight text-slate-100 leading-none select-none">
                  {number}
                </span>
              </div>

              {/* Point central sur la ligne */}
              <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-slate-900 z-10" />

              {/* Contenu */}
              <div className={`
                lg:w-2/3 text-center lg:text-left space-y-3
                ${index % 2 === 1 ? 'lg:text-right' : ''}
              `}>
                <h3 className="text-xl lg:text-2xl font-medium text-slate-900">
                  {data.title}
                </h3>
                <p className="text-slate-600 leading-relaxed max-w-md mx-auto lg:mx-0">
                  {data.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Citation - sobre et élégante */}
        <div className="mt-16 lg:mt-24 pt-12 border-t border-slate-100">
          <div className="max-w-2xl mx-auto text-center">
            <svg className="w-8 h-8 text-slate-200 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="text-lg lg:text-xl text-slate-700 font-light italic leading-relaxed">
              We believe in what we say and we say what we believe.
            </blockquote>
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="w-8 h-px bg-slate-300" />
              <p className="text-sm text-slate-500 font-medium tracking-wide">AGUIFA Dev Finance</p>
              <div className="w-8 h-px bg-slate-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
