"use client";

import { useLanguage } from '../context/LanguageContext';
import Image from 'next/image';
import { useState } from 'react';

const serviceIcons = {
  devFinance: '/images/icon-dev-finance.png',
  investment: '/images/icon-investment.png',
  digital: '/images/icon-digital.png',
  data: '/images/icon-data.png',
  green: '/images/icon-green.png',
};

const serviceColors = {
  devFinance: { bg: 'from-emerald-600 to-emerald-800', hover: 'hover:border-emerald-500' },
  investment: { bg: 'from-amber-500 to-amber-700', hover: 'hover:border-amber-500' },
  digital: { bg: 'from-teal-500 to-teal-700', hover: 'hover:border-teal-500' },
  data: { bg: 'from-indigo-500 to-indigo-700', hover: 'hover:border-indigo-500' },
  green: { bg: 'from-green-500 to-green-700', hover: 'hover:border-green-500' },
};

export default function Expertise() {
  const { t } = useLanguage();
  const [activeService, setActiveService] = useState<string | null>(null);

  const services = [
    { key: 'devFinance', data: t.services.devFinance },
    { key: 'investment', data: t.services.investment },
    { key: 'digital', data: t.services.digital },
    { key: 'data', data: t.services.data },
    { key: 'green', data: t.services.green },
  ];

  return (
    <section id="expertise" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-semibold tracking-wide uppercase mb-4">
            {t.expertise.subtitle}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            {t.expertise.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-amber-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ key, data }, index) => (
            <div
              key={key}
              className={`group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-transparent ${serviceColors[key as keyof typeof serviceColors].hover}`}
              onMouseEnter={() => setActiveService(key)}
              onMouseLeave={() => setActiveService(null)}
            >
              {/* Top gradient bar */}
              <div className={`h-2 bg-gradient-to-r ${serviceColors[key as keyof typeof serviceColors].bg}`} />

              <div className="p-8">
                {/* Icon */}
                <div className="relative w-20 h-20 mx-auto mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-br ${serviceColors[key as keyof typeof serviceColors].bg} rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity`} />
                  <Image
                    src={serviceIcons[key as keyof typeof serviceIcons]}
                    alt={data.title}
                    fill
                    className="object-contain p-2 rounded-2xl"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 text-center mb-4 group-hover:text-emerald-800 transition-colors">
                  {data.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-center text-sm leading-relaxed mb-4">
                  {data.description}
                </p>

                {/* Details - shown on hover */}
                <div className={`overflow-hidden transition-all duration-500 ${activeService === key ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-gray-500 text-center text-xs leading-relaxed border-t border-gray-100 pt-4 mt-4">
                    {data.details}
                  </p>
                </div>

                {/* Read More Link */}
                <div className="text-center mt-6">
                  <a
                    href={`#${key}`}
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 bg-gradient-to-r ${serviceColors[key as keyof typeof serviceColors].bg} text-white opacity-80 group-hover:opacity-100 hover:scale-105`}
                  >
                    {data.readMore}
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Number badge */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                <span className="text-sm font-bold text-gray-400">0{index + 1}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-wrap justify-center gap-4 p-6 bg-gradient-to-r from-emerald-800 to-emerald-900 rounded-2xl shadow-xl">
            <span className="text-white/80 self-center">Découvrez comment nous pouvons vous accompagner</span>
            <a
              href="#contact"
              className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-400 text-emerald-900 font-bold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
