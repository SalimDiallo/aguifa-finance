"use client";

import { LanguageProvider, useLanguage } from '../../context/LanguageContext';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';

const expertiseAreas = [
  { 
    id: 'development', 
    titleKey: 'devFinance',
    icon: '/images/sections/Expertise/devFinance.png'
  },
  { 
    id: 'investment', 
    titleKey: 'investment',
    icon: '/images/sections/Expertise/CapitalPrive.png'
  },
  { 
    id: 'green', 
    titleKey: 'green',
    icon: '/images/sections/Expertise/FinanceVerte.png'
  },
  { 
    id: 'digital', 
    titleKey: 'digital',
    icon: '/images/sections/Expertise/Financedigitale.png'
  },
  { 
    id: 'data', 
    titleKey: 'data',
    icon: '/images/sections/Expertise/analyseData.png'
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
            <div className="w-16 h-px bg-white/40 mx-auto mt-4 mb-6" />
            
            {/* Bouton Services Annexes */}
            <a 
              href="#services-annexes"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white text-sm font-medium transition-all"
            >
              {language === 'fr' ? 'Voir les Services Annexes' : 'View Additional Services'}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </section>

        {/* Timeline des Services */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Timeline Container */}
            <div className="relative">
              {/* Ligne verticale */}
              <div className="absolute left-[50px] md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-300 transform md:-translate-x-1/2" />
              
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
                          <h2 className="text-xl lg:text-2xl font-semibold text-slate-900">
                            {serviceData.title}
                          </h2>
                        </div>
                        
                        {/* Icône au centre (sur la ligne) */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                          <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-slate-100 border-2 border-slate-300 flex items-center justify-center">
                            <div className="relative w-16 h-16 lg:w-20 lg:h-20 rounded-full">
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
                          <div className="w-[100px] h-16 rounded-full bg-slate-100 border-2 border-slate-300 flex items-center justify-center">
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
                          <h2 className="text-lg font-semibold text-slate-900 mb-3">
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

        {/* Services Annexes - ADF Academy */}
        <section id="services-annexes" className="py-16 lg:py-24 bg-white border-t border-slate-100 scroll-mt-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="text-center mb-16">
              <span className="inline-block text-xs font-medium tracking-widest text-slate-400 uppercase mb-3">
                ADF Academy
              </span>
              <h2 className="text-3xl lg:text-4xl font-light text-slate-900 mb-4">
                {language === 'fr' ? 'Services Annexes' : 'Additional Services'}
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                {language === 'fr' 
                  ? 'Insertion professionnelle & Développement des compétences en Finance'
                  : 'Professional Integration & Finance Skills Development'}
              </p>
            </div>

            {/* Trois programmes/services */}
            <div className="grid lg:grid-cols-2 gap-8">

              {/* Programme 1: Éducation Financière */}
              <div className="bg-slate-50 border border-slate-200 overflow-hidden flex flex-col">
                {/* Header du programme */}
                <div className="bg-[#2d5a3d] p-6 text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">
                        {language === 'fr' ? 'Éducation Financière & Marchés des Capitaux' : 'Financial Education & Capital Markets'}
                      </h3>
                    </div>
                  </div>
                  <p className="text-white/80 text-sm">
                    {language === 'fr' 
                      ? 'Renforcement des capacités et sensibilisation aux marchés des capitaux'
                      : 'Capacity building and capital markets awareness'}
                  </p>
                </div>

                {/* Description */}
                <div className="p-6 border-b border-slate-200">
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">
                    {language === 'fr'
                      ? 'Programmes structurés d\'éducation financière et de sensibilisation aux marchés des capitaux, destinés principalement aux jeunes salariés, jeunes professionnels et entrepreneurs émergents.'
                      : 'Structured financial education and capital markets awareness programs, primarily aimed at young employees, young professionals and emerging entrepreneurs.'}
                  </p>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {language === 'fr'
                      ? 'Ce service vise à favoriser l\'émergence d\'une classe moyenne résiliente par une gestion optimisée de l\'épargne et une compréhension des marchés de capitaux.'
                      : 'This service aims to foster the emergence of a resilient middle class through optimized savings management and understanding of capital markets.'}
                  </p>
                </div>

                {/* Composantes */}
                <div className="p-6 flex-1">
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                    {language === 'fr' ? 'Composantes du service' : 'Service Components'}
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 p-3 bg-[#2d5a3d] text-white text-sm font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                      {language === 'fr' ? 'Conseil en Stratégie d\'Épargne Productive' : 'Productive Savings Strategy Consulting'}
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-[#a8c5a0] text-slate-900 text-sm font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-600 shrink-0" />
                      {language === 'fr' ? 'Accès aux Marchés des Capitaux' : 'Capital Markets Access'}
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-[#c8dcc4] text-slate-900 text-sm font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-600 shrink-0" />
                      {language === 'fr' ? 'Ingénierie de la Retraite et Prévoyance' : 'Retirement and Pension Engineering'}
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-[#2d5a3d] text-white text-sm font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                      {language === 'fr' ? 'Inclusion Financière Digitale' : 'Digital Financial Inclusion'}
                    </div>
                  </div>
                </div>

                {/* Note */}
                <div className="px-6 pb-6">
                  <p className="text-xs text-slate-500 italic">
                    {language === 'fr'
                      ? 'En cohérence avec les standards de protection des investisseurs et les objectifs de mobilisation de l\'épargne domestique.'
                      : 'Aligned with investor protection standards and domestic savings mobilization objectives.'}
                  </p>
                </div>
              </div>

              {/* Programme 2: Insertion Professionnelle */}
              <div className="bg-slate-50 border border-slate-200 overflow-hidden flex flex-col">
                {/* Header du programme */}
                <div className="bg-[#2d5a3d] p-6 text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">
                        {language === 'fr' ? 'Insertion Professionnelle & Formation' : 'Professional Integration & Training'}
                      </h3>
                    </div>
                  </div>
                  <p className="text-white/80 text-sm">
                    {language === 'fr'
                      ? 'Renforcement des capacités et préparation aux métiers de la finance et du développement'
                      : 'Capacity building and preparation for finance and development careers'}
                  </p>
                </div>

                {/* Description */}
                <div className="p-6 border-b border-slate-200">
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">
                    {language === 'fr'
                      ? 'Pôle de formation et d\'insertion professionnelle d\'AGUIFA Dev Finance (ADF), dédié au renforcement des compétences techniques des étudiants, jeunes diplômés et jeunes professionnels.'
                      : 'AGUIFA Dev Finance (ADF) training and professional integration hub, dedicated to strengthening the technical skills of students, young graduates and young professionals.'}
                  </p>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {language === 'fr'
                      ? 'Passerelle entre l\'enseignement académique et les exigences du marché de l\'emploi institutionnel, visant à doter les futurs cadres des leviers techniques nécessaires pour opérer selon les standards DFIs.'
                      : 'Bridge between academic education and institutional job market requirements, aiming to equip future executives with the technical levers needed to operate according to DFI standards.'}
                  </p>
                </div>

                {/* Composantes */}
                <div className="p-6 flex-1">
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                    {language === 'fr' ? 'Composantes du service' : 'Service Components'}
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 p-3 bg-[#2d5a3d] text-white text-sm font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                      {language === 'fr' ? 'Formation aux standards multilatéraux (DFIs)' : 'Training in multilateral standards (DFIs)'}
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-[#a8c5a0] text-slate-900 text-sm font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-600 shrink-0" />
                      {language === 'fr' ? 'Bootcamps en ingénierie financière & modélisation' : 'Financial engineering & modeling bootcamps'}
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-[#c8dcc4] text-slate-900 text-sm font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-600 shrink-0" />
                      {language === 'fr' ? 'Spécialisation en Data Analytics, MERL & outils décisionnels' : 'Specialization in Data Analytics, MERL & decision tools'}
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-[#2d5a3d] text-white text-sm font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                      {language === 'fr' ? 'Mentorat, immersion opérationnelle & orientation professionnelle' : 'Mentoring, operational immersion & career guidance'}
                    </div>
                  </div>
                </div>

                {/* Note */}
                <div className="px-6 pb-6">
                  <p className="text-xs text-slate-500 italic">
                    {language === 'fr'
                      ? 'Professionnalisation des talents conformément aux standards des Institutions de Financement du Développement.'
                      : 'Talent professionalization in accordance with Development Finance Institution standards.'}
                  </p>
                </div>
              </div>

              {/* Programme 3: Focus Marchés Publics & Appels d’Offres */}
              <div className="bg-slate-50 border border-slate-200 overflow-hidden flex flex-col">
                {/* Header du programme */}
                <div className="bg-[#2d5a3d] p-6 text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      {/* Simple briefcase icon */}
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7V6a4 4 0 00-8 0v1M6.5 12h11M3 10.5V17a2 2 0 002 2h14a2 2 0 002-2v-6.5a2 2 0 00-2-2h-14a2 2 0 00-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">
                        {language === 'fr' ? 'Focus Marchés Publics & Appels d’Offres Internationaux' : 'Focus on Public Procurement & International Tenders'}
                      </h3>
                    </div>
                  </div>
                  <p className="text-white/80 text-sm">
                    {language === 'fr'
                      ? 'Appui technique aux cabinets de conseil. Assistance spécialisée pour les dossiers d’appels d’offres : analyse des TdRs, rédaction structurée, méthodologies conformes aux standards institutionnels (BAD/BM/UE), budgets et ingénierie financière, adaptation profils (CVs), matrices et qualité rédactionnelle.'
                      : 'Technical support to consulting firms. Specialized assistance for tender packages: ToR analysis, structured writing, methodologies aligned with institutional standards (AfDB/WB/EU), budgeting and financial engineering, CV/profile adaptation, matrices and editorial quality.'}
                  </p>
                </div>

                {/* Description */}
                <div className="p-6 border-b border-slate-200">
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">
                    {language === 'fr'
                      ? 'Collaboration flexible en sous-traitance technique ou partenariat stratégique avec les cabinets de conseil nationaux et internationaux.'
                      : 'Flexible collaboration as technical subcontractor or strategic partner with national and international consulting firms.'}
                  </p>
                </div>

                {/* Composantes */}
                <div className="p-6 flex-1">
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                    {language === 'fr' ? 'Composantes du service' : 'Service Components'}
                  </h4>
                  <div className="space-y-2">
                    {/* Revue technique projets */}
                    <div className="flex items-center gap-3 p-3 bg-[#2d5a3d] text-white text-sm font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                      {language === 'fr'
                        ? 'Revue technique des Projets de Soumission'
                        : 'Technical review of submission projects'}
                    </div>
                    {/* Sous-composantes Revue technique */}
                    <ul className="list-inside ml-8 text-xs text-slate-600 mb-1 space-y-1" style={{lineHeight: '1.35'}}>
                      <li>- {language === 'fr' ? 'Cohérence & conformité' : 'Consistency & compliance'}</li>
                      <li>- {language === 'fr' ? 'Calendrier des Livrables' : 'Deliverable schedules'}</li>
                      <li>- {language === 'fr' ? 'Tableau de Contributions Experts' : 'Expert Contributions Table'}</li>
                      <li>- {language === 'fr' ? 'Diagramme GANT' : 'GANTT Chart'}</li>
                    </ul>
                    {/* Structuration méthodologique */}
                    <div className="flex items-center gap-3 p-3 bg-[#a8c5a0] text-slate-900 text-sm font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-600 shrink-0" />
                      {language === 'fr'
                        ? 'Structuration méthodologique propre à chaque Projet'
                        : 'Project-specific methodological structuring'}
                    </div>
                    <ul className="list-inside ml-8 text-xs text-slate-700 mb-1 space-y-1" style={{lineHeight: '1.35'}}>
                      <li>- {language === 'fr' ? 'Attendus institutionnels' : 'Institutional expectations'}</li>
                    </ul>
                    {/* Optimisation des CVs */}
                    <div className="flex items-center gap-3 p-3 bg-[#c8dcc4] text-slate-900 text-sm font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-600 shrink-0" />
                      {language === 'fr'
                        ? 'Optimisation des CVs & références'
                        : 'CV & references optimization'}
                    </div>
                    <ul className="list-inside ml-8 text-xs text-slate-700 mb-1 space-y-1" style={{lineHeight: '1.35'}}>
                      <li>- {language === 'fr' ? 'Base de données de Consultants Experts' : 'Expert Consultants Database'}</li>
                    </ul>
                    {/* Montage financier */}
                    <div className="flex items-center gap-3 p-3 bg-[#2d5a3d] text-white text-sm font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                      {language === 'fr'
                        ? 'Montage financier'
                        : 'Financial structuring'}
                    </div>
                    <ul className="list-inside ml-8 text-xs text-slate-600 mb-1 space-y-1" style={{lineHeight: '1.35'}}>
                      <li>- {language === 'fr' ? 'Taux hommes (Experts)/mois, simulations, barèmes bailleurs, alignement aux contributions' : 'Man/month expert rates, simulations, donor scales, contribution alignment'}</li>
                    </ul>
                  </div>
                </div>
                
                {/* Note */}
                <div className="px-6 pb-6">
                  <p className="text-xs text-slate-600 italic">
                    {language === 'fr'
                      ? 'Assistance spécifiquement orientée sur la réussite des appels d’offres BAD/BM/UE dans le respect des standards internationaux.'
                      : 'Assistance specifically focused on successful AfDB/WB/EU tenders in accordance with international standards.'}
                  </p>
                </div>
              </div>

            </div>

            {/* CTA Section */}
            <div className="mt-12 text-center">
              <div className="inline-flex flex-col sm:flex-row items-center gap-4">
                <a 
                  href="/contact"
                  className="px-6 py-3 bg-[#2d5a3d] text-white text-sm font-medium hover:bg-[#234a31] transition-colors"
                >
                  {language === 'fr' ? 'En savoir plus sur ADF Academy' : 'Learn more about ADF Academy'}
                </a>
                <a 
                  href="mailto:academy@aguifa.org"
                  className="px-6 py-3 border border-slate-300 text-slate-700 text-sm font-medium hover:bg-slate-50 transition-colors"
                >
                  academy@aguifa.org
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-slate-50 border-t border-slate-100">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <a 
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors"
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
