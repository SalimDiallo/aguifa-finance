"use client";

import { LanguageProvider, useLanguage } from '../../context/LanguageContext';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function AboutContent() {
  const { t } = useLanguage();

  return (
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
              {t.about.subtitle}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white">
              {t.about.title}
            </h1>
            <div className="w-16 h-px bg-white/40 mx-auto mt-4" />
          </div>
        </section>

        {/* Content */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Introduction */}
            <div className="mb-16">
              <p className="text-slate-600 leading-relaxed text-lg mb-6">
                <span className="font-semibold text-slate-900">AGUIFA Dev Finance (ADF)</span> {t.about.description1}
              </p>
              <p className="text-slate-600 leading-relaxed">
                {t.about.description2}
              </p>
              <p className="text-slate-500 text-sm mt-6 italic">
                {t.about.standardsNote}
              </p>
            </div>

            {/* Mission & Vision Grid */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* Mission */}
              <div>
                <h2 className="text-2xl font-light text-slate-900 mb-4">{t.about.mission.title}</h2>
                <div className="w-12 h-0.5 bg-slate-900 mb-6" />
                <p className="text-slate-600 leading-relaxed">
                  {t.about.mission.description}
                </p>
                <p className="text-slate-500 text-sm mt-4">
                  {t.about.mission.detail}
                </p>
              </div>

              {/* Vision */}
              <div>
                <h2 className="text-2xl font-light text-slate-900 mb-4">{t.about.vision.title}</h2>
                <div className="w-12 h-0.5 bg-slate-900 mb-6" />
                <p className="text-slate-600 leading-relaxed">
                  {t.about.vision.description}
                </p>
                <p className="text-slate-500 text-sm mt-4">
                  {t.about.vision.detail}
                </p>
              </div>
            </div>

            {/* Ressources Stratégiques */}
            <div className="border-t border-slate-100 pt-16">
              <h2 className="text-2xl font-light text-slate-900 mb-4">{t.about.resources.title}</h2>
              <div className="w-12 h-0.5 bg-slate-900 mb-6" />
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {t.about.resources.network}
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    {t.about.resources.database}
                  </p>
                </div>
                <div>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {t.about.resources.capacity}
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    {t.about.resources.engineering}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default function AboutPage() {
  return (
    <LanguageProvider>
      <AboutContent />
    </LanguageProvider>
  );
}
