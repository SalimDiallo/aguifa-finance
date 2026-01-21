"use client";

import { LanguageProvider, useLanguage } from '../../context/LanguageContext';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    titleFr: 'Commodities Bucket',
    titleEn: 'Commodities Bucket',
    category: 'Investment',
    descriptionFr: 'Structuration et analyse de portefeuilles de commodités pour investisseurs institutionnels.',
    descriptionEn: 'Commodities portfolio structuring and analysis for institutional investors.',
    image: '/images/sections/Projects/CommodityBusket.jpg',
    year: '2024'
  },
  {
    id: 2,
    titleFr: 'SWEED II',
    titleEn: 'SWEED II',
    category: 'Development Finance',
    descriptionFr: 'Programme de développement des énergies renouvelables et d\'efficacité énergétique.',
    descriptionEn: 'Renewable energy development and energy efficiency program.',
    image: '/images/sections/Projects/SWEED2.jpg',
    year: '2024'
  },
  {
    id: 3,
    titleFr: 'AESTAP',
    titleEn: 'AESTAP',
    category: 'Public Policies',
    descriptionFr: 'Appui technique à la réforme du secteur de l\'énergie et structuration de projets.',
    descriptionEn: 'Technical support for energy sector reform and project structuring.',
    image: '/images/sections/Projects/AESTAP.jpg',
    year: '2024'
  },
  {
    id: 4,
    titleFr: 'Africa Energy Summit',
    titleEn: 'Africa Energy Summit',
    category: 'Events',
    descriptionFr: 'Contribution et participation au sommet africain sur l\'énergie.',
    descriptionEn: 'Contribution and participation in the African Energy Summit.',
    image: '/images/sections/Projects/Africaenergysummit.jpg',
    year: '2024'
  },
  {
    id: 5,
    titleFr: 'ERI 2024',
    titleEn: 'ERI 2024',
    category: 'Research',
    descriptionFr: 'Étude et rapport sur l\'intégration régionale économique en Afrique.',
    descriptionEn: 'Study and report on regional economic integration in Africa.',
    image: '/images/sections/Projects/ElectricityRegulatoryIndex.jpg',
    year: '2024'
  },
  {
    id: 6,
    titleFr: 'AfDB Annual Meeting',
    titleEn: 'AfDB Annual Meeting',
    category: 'Institutional',
    descriptionFr: 'Participation aux réunions annuelles de la Banque Africaine de Développement.',
    descriptionEn: 'Participation in the African Development Bank annual meetings.',
    image: '/images/sections/Projects/AfDBAnnualMeeting.jpg',
    year: '2024'
  },
];

function ProjectsContent() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section 
          className="relative h-[40vh] bg-fixed bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
          }}
        >
          <div className="absolute inset-0 bg-slate-900/70" />
          <div className="relative z-10 text-center px-4">
            <span className="inline-block text-xs font-medium tracking-widest text-white/60 uppercase mb-4">
              {t.projects.subtitle}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white">
              {t.projects.title}
            </h1>
            <div className="w-16 h-px bg-white/40 mx-auto mt-4" />
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Intro */}
            <div className="max-w-2xl mx-auto text-center mb-16">
              <p className="text-slate-600 leading-relaxed">
                {t.projects.intro}
              </p>
            </div>

            {/* Projects */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div key={project.id} className="group">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 mb-4">
                    <Image
                      src={project.image}
                      alt={language === 'fr' ? project.titleFr : project.titleEn}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors duration-300" />
                    <span className="absolute top-4 left-4 text-xs bg-white px-3 py-1 text-slate-700">
                      {project.category}
                    </span>
                  </div>
                  
                  {/* Info */}
                  <span className="text-xs text-slate-400">{project.year}</span>
                  <h3 className="text-lg font-medium text-slate-900 mt-1 mb-2 group-hover:text-slate-600 transition-colors">
                    {language === 'fr' ? project.titleFr : project.titleEn}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {language === 'fr' ? project.descriptionFr : project.descriptionEn}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <LanguageProvider>
      <ProjectsContent />
    </LanguageProvider>
  );
}
