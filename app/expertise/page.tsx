"use client";

import { LanguageProvider, useLanguage } from '../../context/LanguageContext';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';

const expertiseAreas = [
  { 
    id: 'development', 
    titleKey: 'devFinance',
    icon: '/images/icon-dev-finance.png'
  },
  { 
    id: 'investment', 
    titleKey: 'investment',
    icon: '/images/icon-investment.png'
  },
  { 
    id: 'green', 
    titleKey: 'green',
    icon: '/images/icon-green.png'
  },
  { 
    id: 'digital', 
    titleKey: 'digital',
    icon: '/images/icon-digital.png'
  },
  { 
    id: 'data', 
    titleKey: 'data',
    icon: '/images/icon-data.png'
  }
];

const detailsFr: {[key: string]: string} = {
  development: 'Conception, analyse et évaluation de politiques publiques, structuration financière de projets, cadres de résultats, modélisation économique, analyse institutionnelle, stratégies de mobilisation des ressources et conformité aux standards des bailleurs internationaux.',
  investment: 'Analyse d\'investissements, due diligence, modélisation financière avancée, valorisation d\'entreprises, structuration de fonds et véhicules d\'investissement, optimisation de deals et préparation aux levées de capitaux.',
  green: 'Développement de cadres ESG, structuration de financements verts, reporting climat, analyses de risques environnementaux et solutions de transition énergétique conformes aux standards internationaux.',
  digital: 'Conception de modèles de financement TPME / PME, systèmes digitaux et fintech, diagnostic des chaînes de valeur SME, scoring, mécanismes d\'inclusion financière et modernisation des processus financiers.',
  data: 'Production d\'analyses sectorielles, modèles financiers multi-scénarios, outils analytiques et tableaux de bord, modélisation économique, études d\'impact et systèmes d\'aide à la décision basés sur la data.'
};

const detailsEn: {[key: string]: string} = {
  development: 'Design, analysis and evaluation of public policies, financial structuring of projects, results frameworks, economic modeling, institutional analysis, resource mobilization strategies and compliance with international donor standards.',
  investment: 'Investment analysis, due diligence, advanced financial modeling, company valuation, fund and investment vehicle structuring, deal optimization and capital raising preparation.',
  green: 'ESG framework development, green financing structuring, climate reporting, environmental risk analysis and energy transition solutions compliant with international standards.',
  digital: 'MSME financing model design, digital and fintech systems, SME value chain diagnostics, scoring, financial inclusion mechanisms and financial process modernization.',
  data: 'Sector analyses production, multi-scenario financial models, analytical tools and dashboards, economic modeling, impact studies and data-driven decision support systems.'
};

function ExpertiseContent() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section avec parallaxe */}
        <section 
          className="relative h-[45vh] bg-fixed bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
          }}
        >
          <div className="absolute inset-0 bg-slate-900/70" />
          <div className="relative z-10 text-center px-4">
            <span className="inline-block text-xs font-medium tracking-widest text-white/60 uppercase mb-4">
              AGUIFA Dev Finance
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white">
              {t.expertise.title}
            </h1>
            <div className="w-16 h-px bg-white/40 mx-auto mt-4" />
          </div>
        </section>

        {/* Timeline des Services */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Timeline Container */}
            <div className="relative">
              {/* Ligne verticale */}
              <div className="absolute left-[50px] md:left-1/2 top-0 bottom-0 w-0.5 bg-emerald-700 transform md:-translate-x-1/2" />
              
              {/* Services */}
              <div className="space-y-12 lg:space-y-16">
                {expertiseAreas.map((area, index) => {
                  const serviceData = t.services[area.titleKey as keyof typeof t.services];
                  const details = language === 'fr' ? detailsFr[area.id] : detailsEn[area.id];
                  const isLeft = index % 2 === 0;
                  
                  return (
                    <div key={area.id} id={area.id} className="relative">
                      {/* Layout pour grands écrans */}
                      <div className={`hidden md:grid md:grid-cols-2 gap-8 items-center ${!isLeft ? 'direction-rtl' : ''}`}>
                        
                        {/* Titre (à gauche ou droite selon position) */}
                        <div className={`${isLeft ? 'text-right pr-12' : 'text-left pl-12 order-2'}`}>
                          <h2 className="text-xl lg:text-2xl font-semibold text-emerald-800">
                            {serviceData.title}
                          </h2>
                        </div>
                        
                        {/* Icône au centre (sur la ligne) */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                          <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-emerald-50 border-2 border-emerald-700 flex items-center justify-center">
                            <div className="relative w-10 h-10 lg:w-12 lg:h-12">
                              <Image
                                src={area.icon}
                                alt={serviceData.title}
                                fill
                                className="object-contain"
                              />
                            </div>
                          </div>
                        </div>
                        
                        {/* Description (à droite ou gauche selon position) */}
                        <div className={`${isLeft ? 'pl-12 order-2' : 'pr-12 text-right'}`}>
                          <div className={`p-5 rounded-lg border border-slate-200 bg-slate-50 ${isLeft ? 'rounded-tl-none' : 'rounded-tr-none'}`}>
                            <p className="text-slate-700 text-sm leading-relaxed">
                              {details}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Layout pour mobiles */}
                      <div className="md:hidden flex gap-6">
                        {/* Icône */}
                        <div className="flex-shrink-0 relative z-10">
                          <div className="w-[100px] h-16 rounded-full bg-emerald-50 border-2 border-emerald-700 flex items-center justify-center">
                            <div className="relative w-10 h-10">
                              <Image
                                src={area.icon}
                                alt={serviceData.title}
                                fill
                                className="object-contain"
                              />
                            </div>
                          </div>
                        </div>
                        
                        {/* Contenu */}
                        <div className="flex-1 pt-2">
                          <h2 className="text-lg font-semibold text-emerald-800 mb-3">
                            {serviceData.title}
                          </h2>
                          <div className="p-4 rounded-lg border border-slate-200 bg-slate-50 rounded-tl-none">
                            <p className="text-slate-700 text-sm leading-relaxed">
                              {details}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Image parallaxe de séparation */}
        <section 
          className="relative h-[30vh] bg-fixed bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
          }}
        >
          <div className="absolute inset-0 bg-slate-900/60" />
        </section>

        {/* Services Annexes */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-semibold text-emerald-800 mb-3">
                {t.expertise.annexServices.title}
              </h2>
              <div className="w-16 h-1 bg-emerald-700" />
            </div>

            <div className="space-y-8">
              {/* Focus */}
              <div className="flex items-start gap-3">
                <span className="text-emerald-700 mt-1">▶</span>
                <h3 className="text-lg font-semibold text-slate-900">
                  {t.expertise.annexServices.focusTitle}
                </h3>
              </div>

              {/* Description */}
              <div>
                <h4 className="font-semibold text-slate-900 mb-3">{t.expertise.annexServices.supportTitle}</h4>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {t.expertise.annexServices.supportDescription}
                </p>
                <p className="text-slate-500 text-sm">
                  {language === 'fr' 
                    ? 'Collaboration flexible en sous-traitance technique ou partenariat stratégique avec les cabinets de conseil nationaux et internationaux.'
                    : 'Flexible collaboration in technical subcontracting or strategic partnership with national and international consulting firms.'}
                </p>
              </div>

              {/* Composantes du service - Style encadré */}
              <div className="mt-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1 h-6 bg-emerald-700" />
                  <h4 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
                    {t.expertise.annexServices.components}
                  </h4>
                </div>
                
                <div className="space-y-0 border-l-2 border-emerald-700 ml-2">
                  {/* Item 1 - Vert */}
                  <div className="p-4 bg-emerald-700 text-white border-b border-emerald-600">
                    <p className="font-medium">** {language === 'fr' ? 'Revue technique des Projets de Soumission' : 'Technical review of Submission Projects'}</p>
                    <p className="text-sm text-emerald-100 mt-1">
                      [{language === 'fr' ? 'Cohérence & conformité, Calendrier des Livrables, Tableau de Contributions Experts, Diagramme GANT' : 'Coherence & compliance, Deliverables Schedule, Expert Contributions Table, GANT Diagram'}]
                    </p>
                  </div>
                  
                  {/* Item 2 - Gris */}
                  <div className="p-4 bg-slate-100 border-b border-slate-200">
                    <p className="font-medium text-slate-800">{language === 'fr' ? 'Structuration méthodologique propre à chaque Projet' : 'Project-specific methodological structuring'}</p>
                    <p className="text-sm text-slate-600 mt-1">
                      [{language === 'fr' ? 'Attendu institutionnelle' : 'Institutional expectations'}]
                    </p>
                  </div>
                  
                  {/* Item 3 - Blanc */}
                  <div className="p-4 bg-white border border-slate-200 border-l-0">
                    <p className="font-medium text-slate-800">{language === 'fr' ? 'Optimisation des CVs & références' : 'CV & reference optimization'}</p>
                    <p className="text-sm text-slate-600 mt-1">
                      [** {language === 'fr' ? 'Base de données de Consultants Experts' : 'Expert Consultants Database'}]
                    </p>
                  </div>
                  
                  {/* Item 4 - Noir */}
                  <div className="p-4 bg-slate-900 text-white">
                    <p className="font-medium">** {language === 'fr' ? 'Montage financier' : 'Financial setup'}</p>
                    <p className="text-sm text-slate-300 mt-1">
                      [{language === 'fr' ? 'Taux hommes (Experts)/mois, simulations, barèmes bailleurs, alignement au contributions' : 'Man-day rates (Experts)/month, simulations, donor scales, alignment with contributions'}]
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-slate-50 border-t border-slate-100">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <a 
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-700 text-white text-sm font-medium hover:bg-emerald-800 transition-colors"
            >
              {t.expertise.ctaButton}
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default function ExpertisePage() {
  return (
    <LanguageProvider>
      <ExpertiseContent />
    </LanguageProvider>
  );
}
