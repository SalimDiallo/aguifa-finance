"use client";

import { LanguageProvider } from '../../context/LanguageContext';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';

const expertiseAreas = [
  {
    id: 'development',
    title: 'Finance de Développement',
    description: 'Nous accompagnons les gouvernements, institutions publiques et partenaires techniques dans la conception, la revue et l\'évaluation de politiques sectorielles et programmes de développement.',
    icon: '/images/icon-dev-finance.png',
    details: [
      'Conception de politiques sectorielles',
      'Évaluation de programmes de développement',
      'Accompagnement technique des institutions',
      'Structuration de projets d\'infrastructure'
    ]
  },
  {
    id: 'investment',
    title: 'Investment & Private Capital',
    description: 'Conseil stratégique en structuration de fonds, levée de capitaux et accompagnement des investisseurs institutionnels dans leurs opérations en Afrique.',
    icon: '/images/icon-investment.png',
    details: [
      'Structuration de fonds d\'investissement',
      'Due diligence et évaluation',
      'Levée de capitaux',
      'Accompagnement post-investissement'
    ]
  },
  {
    id: 'digital',
    title: 'Digital Finance & MSME',
    description: 'Solutions innovantes de financement digital pour les micro, petites et moyennes entreprises africaines, favorisant l\'inclusion financière.',
    icon: '/images/icon-digital.png',
    details: [
      'Solutions de paiement digital',
      'Financement des MPME',
      'Inclusion financière',
      'Partenariats Fintech'
    ]
  },
  {
    id: 'data',
    title: 'Data & Analytics',
    description: 'Exploitation de données et analyses avancées pour éclairer les décisions d\'investissement et optimiser la performance des portefeuilles.',
    icon: '/images/icon-data.png',
    details: [
      'Analyse de données financières',
      'Modélisation prédictive',
      'Tableaux de bord et reporting',
      'Intelligence économique'
    ]
  },
  {
    id: 'green',
    title: 'ESG & Green Finance',
    description: 'Structuration de financements verts et durables alignés sur les critères ESG pour une croissance responsable du continent africain.',
    icon: '/images/icon-green.png',
    details: [
      'Finance verte et climat',
      'Critères ESG',
      'Obligations vertes',
      'Certification et reporting ESG'
    ]
  }
];

export default function ExpertisePage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section 
            className="relative h-[40vh] bg-fixed bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
            }}
          >
            <div className="absolute inset-0 bg-slate-900/70" />
            <div className="relative z-10 text-center px-4">
              <span className="inline-block text-xs font-medium tracking-widest text-white/60 uppercase mb-4">
                Notre savoir-faire
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white">
                Expertise
              </h1>
              <div className="w-16 h-px bg-white/40 mx-auto mt-4" />
            </div>
          </section>

          {/* Expertise Areas */}
          <section className="py-16 lg:py-24 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="space-y-16">
                {expertiseAreas.map((area, index) => (
                  <div 
                    key={area.id}
                    className={`grid lg:grid-cols-2 gap-12 items-center ${
                      index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Image */}
                    <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="relative aspect-square max-w-sm mx-auto">
                        <Image
                          src={area.icon}
                          alt={area.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <span className="text-xs text-slate-400 tracking-widest uppercase">
                        0{index + 1}
                      </span>
                      <h2 className="text-2xl lg:text-3xl font-light text-slate-900 mt-2 mb-4">
                        {area.title}
                      </h2>
                      <div className="w-12 h-0.5 bg-slate-900 mb-6" />
                      <p className="text-slate-600 leading-relaxed mb-6">
                        {area.description}
                      </p>
                      <ul className="space-y-2">
                        {area.details.map((detail, i) => (
                          <li key={i} className="flex items-center gap-3 text-sm text-slate-600">
                            <span className="w-1 h-1 rounded-full bg-slate-400" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
}
