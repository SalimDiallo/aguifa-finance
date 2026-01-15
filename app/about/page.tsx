"use client";

import { LanguageProvider } from '../../context/LanguageContext';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function AboutPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section 
            className="relative h-[40vh] bg-fixed bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
            }}
          >
            <div className="absolute inset-0 bg-slate-900/70" />
            <div className="relative z-10 text-center px-4">
              <span className="inline-block text-xs font-medium tracking-widest text-white/60 uppercase mb-4">
                Qui sommes-nous
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white">
                À Propos
              </h1>
              <div className="w-16 h-px bg-white/40 mx-auto mt-4" />
            </div>
          </section>

          {/* Content */}
          <section className="py-16 lg:py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-slate-600 leading-relaxed text-lg">
                  <span className="font-semibold text-slate-900">AGUIFA Dev Finance (ADF)</span> est un cabinet de conseil spécialisé dans la structuration de solutions de financement durable pour l'Afrique.
                </p>
                
                <h2 className="text-2xl font-light text-slate-900 mt-12 mb-6">Notre Mission</h2>
                <p className="text-slate-600 leading-relaxed">
                  Accompagner les acteurs publics et privés dans la conception, la structuration et la mise en œuvre de solutions financières innovantes et durables, adaptées aux réalités du continent africain.
                </p>

                <h2 className="text-2xl font-light text-slate-900 mt-12 mb-6">Notre Vision</h2>
                <p className="text-slate-600 leading-relaxed">
                  Être le partenaire de référence pour le financement du développement durable en Afrique, en combinant expertise technique, connaissance approfondie des marchés locaux et engagement pour l'impact.
                </p>

                <h2 className="text-2xl font-light text-slate-900 mt-12 mb-6">Nos Engagements</h2>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0" />
                    Excellence et rigueur dans nos analyses
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0" />
                    Indépendance et objectivité de nos recommandations
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0" />
                    Innovation et adaptation aux contextes locaux
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0" />
                    Impact mesurable et durable
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
}
