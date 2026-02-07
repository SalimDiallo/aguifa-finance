"use client";

import { LanguageProvider, useLanguage } from '../../context/LanguageContext';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';

// Type definitions
type ProjectSize = 'normal' | 'wide' | 'tall' | 'large' | 'full-width';

interface ProjectItem {
  id: number;
  image?: string;
  title: string;
  titleEn: string;
  subtitle?: string;
  subtitleEn?: string;
  description: string;
  descriptionEn: string;
  badge?: string;
  year: string;
}

// Ajout des traductions en anglais
const projects: ProjectItem[] = [
  {
    id: 1,
    image: '/images/sections/Projects/CommodityBusket.jpg',
    title: 'Commodities Bucket (Panier de Matières premières)',
    titleEn: 'Commodities Bucket',
    subtitle: undefined,
    subtitleEn: undefined,
    description: "Programme dédié à la mitigation des risques de change (Structuration et analyse de portefeuilles de matières premières)",
    descriptionEn: "Program dedicated to currency risk mitigation (Structuring and analyzing commodity portfolios)",
    badge: undefined,
    year: '2024',
  },
  {
    id: 2,
    image: '/images/sections/Projects/SWEED2.jpg',
    title: "SWEED II (Sahel Women's Empowerment and Demographic Dividend)",
    titleEn: "SWEED II (Sahel Women's Empowerment and Demographic Dividend)",
    subtitle: undefined,
    subtitleEn: undefined,
    description: "Projet régional pour accélérer la transition démographique et renforcer l'autonomisation des femmes et des filles en Afrique subsaharienne.\n\nBanque mondiale / UNFPA.",
    descriptionEn: "Regional project to accelerate the demographic transition and strengthen the empowerment of women and girls in sub-Saharan Africa.\n\nWorld Bank / UNFPA.",
    badge: undefined,
    year: '2020'
  },
  {
    id: 3,
    image: '/images/sections/Projects/AESTAP.jpg',
    title: 'AESTAP (Africa Energy Sector Technical Assistance Program)',
    titleEn: 'AESTAP (Africa Energy Sector Technical Assistance Program)',
    subtitle: undefined,
    subtitleEn: undefined,
    description: "Programme d’assistance technique soutenant les réformes du secteur de l’énergie et la structuration de projets énergétiques durables en Afrique.",
    descriptionEn: "Technical assistance program supporting energy sector reforms and structuring sustainable energy projects in Africa.",
    badge: undefined,
    year: '2024',
  },
  {
    id: 4,
    image: '/images/sections/Projects/Africaenergysummit.jpg',
    title: 'AES (Africa Energy Summit)',
    titleEn: 'AES (Africa Energy Summit)',
    subtitle: undefined,
    subtitleEn: undefined,
    description: "Plateforme panafricaine de dialogue stratégique consacrée aux politiques énergétiques, à l’investissement et au financement des infrastructures en Afrique.",
    descriptionEn: "Pan-African platform for strategic dialogue dedicated to energy policies, investment, and infrastructure financing in Africa.",
    badge: undefined,
    year: '2025',
  },
  {
    id: 5,
    image: '/images/sections/Projects/ElectricityRegulatoryIndex.jpg',
    title: 'ERI (Electricity Regulatory Index for Africa)',
    titleEn: 'ERI (Electricity Regulatory Index for Africa)',
    subtitle: undefined,
    subtitleEn: undefined,
    description: "Initiative analytique mesurant la performance des cadres réglementaires du secteur de l’électricité et favorisant l’intégration régionale des marchés énergétiques africains.",
    descriptionEn: "Analytical initiative measuring the performance of electricity regulatory frameworks and fostering regional integration of African energy markets.",
    badge: undefined,
    year: '2025'
  },
  {
    id: 6,
    image: '/images/sections/Projects/AfDBAnnualMeeting.jpg',
    title: 'AfDB Annual Meeting',
    titleEn: 'AfDB Annual Meeting',
    subtitle: undefined,
    subtitleEn: undefined,
    description: "Rencontres annuelles réunissant les États membres, partenaires et investisseurs autour des priorités stratégiques du Groupe de la Banque Africaine de Développement.",
    descriptionEn: "Annual meetings bringing together member states, partners, and investors to discuss the African Development Bank Group's strategic priorities.",
    badge: undefined,
    year: '2024'
  },
  {
    id: 7,
    image: '/images/sections/Projects/afd.png',
    title: 'AFD',
    titleEn: 'AFD',
    subtitle: undefined,
    subtitleEn: undefined,
    description: "Programme de renforcement de l’écosystème entrepreneurial féminin au Ghana.",
    descriptionEn: "Program to strengthen the female entrepreneurial ecosystem in Ghana.",
    badge: undefined,
    year: '2025'
  },
  {
    id: 8,
    image: '/images/sections/Projects/kfw.png',
    title: 'KfW - Tamwilcom (Maroc)',
    titleEn: 'KfW - Tamwilcom (Morocco)',
    subtitle: undefined,
    subtitleEn: undefined,
    description: "Programme de coopération visant le renforcement institutionnel et opérationnel de Tamwilcom dans le soutien au financement des PME au Maroc.",
    descriptionEn: "Cooperation program aimed at strengthening Tamwilcom's institutional and operational capacity to support SME financing in Morocco.",
    badge: undefined,
    year: '2025'
  },
];

function ProjectsContent() {
  const { language } = useLanguage();

  // Libellés multilingues pour l'en-tête
  const headerLabels = {
    fr: {
      section: "Projets",
      title: "Nos Réalisations",
    },
    en: {
      section: "Projects",
      title: "Our Achievements",
    }
  };

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
              {headerLabels[language].section}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white">
              {headerLabels[language].title}
            </h1>
            <div className="w-16 h-px bg-white/40 mx-auto mt-4" />
          </div>
        </section>

        {/* Projects List */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-12">
              {projects.map((project) => (
                <div key={project.id} className="flex flex-col md:flex-row gap-6 md:items-center pb-6 border-b border-slate-200 last:border-b-0">
                  {project.image && (
                    <div className="flex-shrink-0 w-full md:w-48 h-32 md:h-36 overflow-hidden relative bg-slate-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.image}
                        alt={language === "fr" ? project.title : project.titleEn}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="flex-1 flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-900">
                        {language === "fr" ? project.title : project.titleEn}
                      </h3>
                      {project.year && (
                        <span className="ml-2 text-xs bg-slate-900 text-white px-2.5 py-1 rounded-full">
                          {project.year}
                        </span>
                      )}
                    </div>
                    {(language === "fr" ? project.subtitle : project.subtitleEn) && (
                      <div className="font-medium text-slate-600">
                        {language === "fr" ? project.subtitle : project.subtitleEn}
                      </div>
                    )}
                    <p className="text-slate-700 whitespace-pre-line">
                      {language === "fr" ? project.description : project.descriptionEn}
                    </p>
                  </div>
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
