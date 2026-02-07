"use client";

import { useState } from 'react';
import { LanguageProvider, useLanguage } from '../../context/LanguageContext';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  roleEn: string;
  shortBio: string;
  shortBioEn: string;
  fullBio: string[];
  fullBioEn: string[];
  education: string[];
  educationEn: string[];
  image: string;
  linkedin?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 'pema',
    name: 'Pema Guilavogui',
    role: 'Directeur Associé Politique Publique et Developpement Durable',
    roleEn: 'Associate Director - Public Policy and Sustainable Development',
    shortBio: 'Haut cadre de l\'administration publique guinéenne, Pema Guilavogui cumule plus de quinze années d\'expérience en planification du développement, analyse économique, politiques publiques et coordination institutionnelle.',
    shortBioEn: 'Senior executive of the Guinean public administration, Pema Guilavogui has over fifteen years of experience in development planning, economic analysis, public policies and institutional coordination.',
    fullBio: [
      'Son parcours s\'est construit au cœur de l\'appareil étatique et des institutions financières internationales.',
      'Il a occupé des fonctions stratégiques au Ministère du Plan et de la Coopération Internationale, notamment comme Chef de la Division Études et Stratégies, puis comme Secrétaire Général, où il a piloté l\'élaboration, l\'évaluation et la supervision des cadres stratégiques nationaux (PNDES 2015–2020 et 2020–2025), assuré la cohérence intersectorielle des politiques publiques et conduit la coordination technique avec les bailleurs internationaux.',
      'Sur le plan multilatéral, il a représenté la Guinée en tant que Directeur Exécutif auprès de la Banque Islamique de Développement, participant aux travaux du Conseil d\'Administration et aux décisions relatives aux financements et projets de développement.',
      'Il exerce également des responsabilités de gouvernance en tant qu\'Administrateur du Port Autonome de Conakry, renforçant son exposition aux enjeux d\'infrastructures, de logistique, de commerce et de gestion d\'actifs publics.',
    ],
    fullBioEn: [
      'His career was built at the heart of the state apparatus and international financial institutions.',
      'He held strategic positions at the Ministry of Planning and International Cooperation, notably as Head of the Studies and Strategies Division, then as Secretary General, where he led the development, evaluation and supervision of national strategic frameworks (PNDES 2015–2020 and 2020–2025), ensured cross-sectoral coherence of public policies and conducted technical coordination with international donors.',
      'At the multilateral level, he represented Guinea as Executive Director at the Islamic Development Bank, participating in Board proceedings and decisions on financing and development projects.',
      'He also exercises governance responsibilities as Administrator of the Conakry Autonomous Port, strengthening his exposure to infrastructure, logistics, trade and public asset management issues.',
    ],
    education: [
      'Master en Public Affairs (University of Washington, Seattle)',
      'Licence et Master en économie et politiques publiques (Université Mohammed V de Rabat)',
    ],
    educationEn: [
      'Master in Public Affairs (University of Washington, Seattle)',
      'Bachelor\'s and Master\'s in Economics and Public Policy (Mohammed V University, Rabat)',
    ],
    image: '/images/sections/Team/h.jpg',
    // linkedin: '#',
  },
   {
    id: 'joseph',
    name: 'Joseph Gougna',
    role: 'Associate Director - Stategie et Developement',
    roleEn: 'Associate Director - Strategy and Development',
    shortBio: 'Spécialiste en ingénierie financière et en politiques publiques, Joseph Gougna dispose d\'une expérience diversifiée à l\'interface entre banques commerciales, institutions financières internationales, cabinets de conseil et administrations publiques.',
    shortBioEn: 'Specialist in financial engineering and public policies, Joseph Gougna has diverse experience at the interface between commercial banks, international financial institutions, consulting firms and public administrations.',
    fullBio: [
      'Il a exercé au sein de la Banque Africaine de Développement, où il a contribué aux travaux du département en charge des politiques énergétiques et de la régulation, couvrant la structuration de programmes multi-pays, l\'analyse financière et opérationnelle de projets, l\'appui aux réformes sectorielles, ainsi que la préparation de documents stratégiques liés à l\'énergie et à la transition écologique.',
      'Il a également participé à des missions d\'assistance technique et au suivi d\'opérations financées par la BAD.',
      'En conseil, il intervient auprès des gouvernements et des bailleurs (AFD, KfW, BEI, BAD) sur la conception de projets, études de faisabilité, structuration institutionnelle, modélisation financière et rédaction de documents techniques, en conformité avec les standards des partenaires techniques et financiers.',
      'Son expérience au sein de FirstBank (Guinée) a renforcé sa maîtrise de l\'analyse crédit, du risque de contrepartie, des simulations IFRS9 et de la structuration des engagements bancaires sur des portefeuilles corporate et retail.',
    ],
    fullBioEn: [
      'He worked at the African Development Bank, where he contributed to the work of the department in charge of energy policies and regulation, covering the structuring of multi-country programs, financial and operational analysis of projects, support for sectoral reforms, as well as the preparation of strategic documents related to energy and ecological transition.',
      'He also participated in technical assistance missions and monitoring of AfDB-funded operations.',
      'In consulting, he works with governments and donors (AFD, KfW, EIB, AfDB) on project design, feasibility studies, institutional structuring, financial modeling and drafting of technical documents, in compliance with the standards of technical and financial partners.',
      'His experience at FirstBank (Guinea) strengthened his mastery of credit analysis, counterparty risk, IFRS9 simulations and structuring of banking commitments on corporate and retail portfolios.',
    ],
    education: [
      'MBA en Corporate Finance, Audit et Contrôle',
      'Licence en Banque et Finance',
      'Master en Politiques Publiques et Gouvernance (en cours)',
    ],
    educationEn: [
      'MBA in Corporate Finance, Audit and Control',
      'Bachelor\'s in Banking and Finance',
      'Master in Public Policy and Governance (in progress)',
    ],
    image: '/images/sections/Team/gnouma.jpg',
    linkedin: '#',
  },

  {
    id: 'juliette',
    name: 'Juliette Rioual',
    role: 'Spécialiste Finance verte',
    roleEn: 'Green Finance Specialist',
    shortBio: 'Analyste financière, formée à NEOMA Business School (Programme Grande École, MSc Finance – Investment & Wealth Management), avec une spécialisation en modélisation financière, analyse crédit, gestion d\'actifs immobiliers et contrôle financier.',
    shortBioEn: 'Financial analyst, trained at NEOMA Business School (Grande École Program, MSc Finance – Investment & Wealth Management), with specialization in financial modeling, credit analysis, real estate asset management and financial control.',
    fullBio: [
      'Son parcours académique inclut également un semestre de MBA international à Sogang University (Séoul).',
      'Juliette Rioual a débuté sa carrière chez Exteam, où elle est intervenue en contrôle de gestion, audit interne et comptabilité, développant une compréhension approfondie du reporting financier, du suivi de trésorerie et des KPI.',
      'Elle a ensuite rejoint Batipart Investment à Luxembourg, au sein du contrôle financier, contribuant au suivi et au reporting d\'un portefeuille immobilier multi-pays (Europe et Amérique du Nord).',
      'Au sein du Groupe BPCE – Compagnie Européenne de Garanties et de Cautions (CEGC), elle a exercé comme Chargée d\'Affaires Junior puis Analyste Entreprises, spécialisée dans la souscription de cautions de marché, l\'analyse financière d\'entreprises du BTP, l\'évaluation du risque de contrepartie et la préparation de notes pour les comités d\'engagement.',
      'Actuellement chez KPMG France, elle intervient comme Auditeur Financier (Financial Services) et Data Analyst, renforçant ses compétences en audit légal, analyse des risques, fiabilisation des données et data analytics appliquées à la finance.',
    ],
    fullBioEn: [
      'Her academic background also includes a semester of international MBA at Sogang University (Seoul).',
      'Juliette Rioual began her career at Exteam, where she worked in management control, internal audit and accounting, developing a deep understanding of financial reporting, cash flow monitoring and KPIs.',
      'She then joined Batipart Investment in Luxembourg, in financial control, contributing to the monitoring and reporting of a multi-country real estate portfolio (Europe and North America).',
      'At Groupe BPCE – Compagnie Européenne de Garanties et de Cautions (CEGC), she worked as Junior Business Manager then Corporate Analyst, specialized in market guarantee underwriting, financial analysis of construction companies, counterparty risk assessment and preparation of notes for commitment committees.',
      'Currently at KPMG France, she works as Financial Auditor (Financial Services) and Data Analyst, strengthening her skills in statutory audit, risk analysis, data reliability and data analytics applied to finance.',
    ],
    education: [
      'NEOMA Business School – Programme Grande École, MSc Finance',
      'MBA international à Sogang University (Séoul)',
      'Certifiée AMF',
    ],
    educationEn: [
      'NEOMA Business School – Grande École Program, MSc Finance',
      'International MBA at Sogang University (Seoul)',
      'AMF Certified',
    ],
    image: '/images/sections/Team/f.jpg',
    linkedin: '#',
  },
  {
    id: 'baba',
    name: 'Kankani Gariba',
    role: 'Expert Suivi Evaluation et Analyse de données',
    roleEn: 'Evaluation and Data Analysis Expert',
    shortBio: 'Spécialiste du Monitoring, Evaluation, Research and Learning (MERL), Baba Kankani Gariba cumule plus de dix années d\'expérience au sein d\'organisations internationales, programmes multilatéraux et institutions publiques.',
    shortBioEn: 'MERL (Monitoring, Evaluation, Research and Learning) specialist, Baba Kankani Gariba has over ten years of experience in international organizations, multilateral programs and public institutions.',
    fullBio: [
      'Son expertise est centrée sur les systèmes de suivi-évaluation, l\'analyse de données complexes et l\'appui stratégique aux politiques publiques.',
      'Il a occupé le poste de MERL Manager Global pour l\'initiative Africa Frontline First (AFF) – Last Mile Health, où il a dirigé un réseau de 17 spécialistes MERL dans 24 pays africains, structuré des cadres de résultats alignés sur les théories du changement, et piloté l\'agenda de recherche et d\'apprentissage à l\'échelle continentale.',
      'Auparavant, il a exercé au sein de TAI Collaborative à Washington DC, renforçant la gestion de la connaissance et l\'analyse stratégique d\'une coalition internationale de bailleurs, ainsi qu\'à SNV – Netherlands Development Organisation, où il a supervisé le dispositif MERL du programme GrEEn financé par l\'Union européenne (€20,6 millions).',
      'Il a également contribué à des évaluations et dispositifs MEAL pour Catholic Relief Services (CRS).',
    ],
    fullBioEn: [
      'His expertise is centered on monitoring and evaluation systems, complex data analysis and strategic support for public policies.',
      'He held the position of Global MERL Manager for the Africa Frontline First (AFF) initiative – Last Mile Health, where he led a network of 17 MERL specialists across 24 African countries, structured results frameworks aligned with theories of change, and led the research and learning agenda at continental scale.',
      'Previously, he worked at TAI Collaborative in Washington DC, strengthening knowledge management and strategic analysis of an international donor coalition, as well as at SNV – Netherlands Development Organisation, where he supervised the MERL framework of the EU-funded GrEEn program (€20.6 million).',
      'He also contributed to evaluations and MEAL frameworks for Catholic Relief Services (CRS).',
    ],
    education: [
      'MSc en Big Data Analytics',
      'MSc en Planning, Monitoring and Evaluation',
      'MPhil en Integrated Sustainable Development',
      'Formation en droit',
      'Expertise technique : R, SPSS, SQL, Excel avancé, Power BI, Tableau, KoboToolbox, CommCare, LogAlto',
    ],
    educationEn: [
      'MSc in Big Data Analytics',
      'MSc in Planning, Monitoring and Evaluation',
      'MPhil in Integrated Sustainable Development',
      'Law training',
      'Technical expertise: R, SPSS, SQL, Advanced Excel, Power BI, Tableau, KoboToolbox, CommCare, LogAlto',
    ],
    image: '/images/sections/Team/h.jpg',
    linkedin: '#',
  },
];

// Composant carte membre avec accordéon
function TeamMemberCard({ member, isExpanded, onToggle }: { 
  member: TeamMember; 
  isExpanded: boolean; 
  onToggle: () => void;
}) {
  const { language } = useLanguage();
  
  const role = language === 'fr' ? member.role : member.roleEn;
  const shortBio = language === 'fr' ? member.shortBio : member.shortBioEn;
  const fullBio = language === 'fr' ? member.fullBio : member.fullBioEn;
  const education = language === 'fr' ? member.education : member.educationEn;
  const viewMore = language === 'fr' ? 'Voir plus' : 'View more';
  const viewLess = language === 'fr' ? 'Réduire' : 'Collapse';
  const formationTitle = language === 'fr' ? 'Formation & Expertise' : 'Education & Expertise';

  return (
    <div 
      className={`bg-white border transition-all duration-500 ${
        isExpanded ? 'border-slate-300 shadow-xl' : 'border-slate-200 hover:border-slate-300 hover:shadow-lg'
      }`}
    >
      {/* Header avec grande photo - toujours visible */}
      <div className="p-6">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Grande Photo */}
          <div className="md:col-span-1">
            <div className="relative aspect-square md:aspect-3/4 overflow-hidden bg-slate-100">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
            
            {/* LinkedIn sous la photo */}
            {/* {member.linkedin && (
              <a 
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 w-full flex items-center justify-center gap-2 py-2 border border-slate-200 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            )} */}
          </div>

          {/* Info de base */}
          <div className="md:col-span-2 flex flex-col">
            <div>
              <h3 className="text-xl font-medium text-slate-900 mb-1">{member.name}</h3>
              <p className="text-sm text-slate-500 mb-4">{role}</p>
              <div className="w-10 h-0.5 bg-slate-900 mb-4" />
            </div>
            
            {/* Bio courte */}
            <p className="text-sm text-slate-600 leading-relaxed flex-1">
              {shortBio}
            </p>
            
            {/* Bouton expand */}
            <button 
              onClick={onToggle}
              className={`mt-4 self-start inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 ${
                isExpanded 
                  ? 'bg-slate-900 text-white hover:bg-slate-800' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {isExpanded ? viewLess : viewMore}
              <svg 
                className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Contenu dépliable - Détails */}
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6 border-t border-slate-100">
          <div className="pt-5 space-y-4">
            {/* Biographie complète */}
            <div className="space-y-3">
              {fullBio.map((paragraph, i) => (
                <p key={i} className="text-sm text-slate-600 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Formation */}
            <div className="pt-4 border-t border-slate-100">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                {formationTitle}
              </h4>
              <ul className="grid sm:grid-cols-2 gap-2">
                {education.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TeamContent() {
  const { t, language } = useLanguage();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleMember = (id: string) => {
    setExpandedId(prev => prev === id ? null : id);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section 
          className="relative h-[40vh] bg-fixed bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
          }}
        >
          <div className="absolute inset-0 bg-slate-900/70" />
          <div className="relative z-10 text-center px-4">
            <span className="inline-block text-xs font-medium tracking-widest text-white/60 uppercase mb-4">
              {t.team.subtitle}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white">
              {t.team.title}
            </h1>
            <div className="w-16 h-px bg-white/40 mx-auto mt-4" />
          </div>
        </section>

        {/* Team Intro */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-slate-600 leading-relaxed text-lg">
              {t.team.intro}
            </p>
            <p className="text-slate-500 mt-4">
              {t.team.introDetail}
            </p>
          </div>
        </section>

        {/* Team Members - Accordéon */}
        <section className="py-16 lg:py-24 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-12">
              <h2 className="text-sm font-medium tracking-widest text-slate-400 uppercase mb-2">
                {language === 'fr' ? 'Équipe de direction' : 'Leadership Team'}
              </h2>
              <p className="text-slate-600">
                {language === 'fr' 
                  ? 'Cliquez sur un profil pour découvrir le parcours complet'
                  : 'Click on a profile to discover the full background'
                }
              </p>
            </div>

            <div className="space-y-4">
              {teamMembers.map((member) => (
                <TeamMemberCard
                  key={member.id}
                  member={member}
                  isExpanded={expandedId === member.id}
                  onToggle={() => toggleMember(member.id)}
                />
              ))}
            </div>

            {/* Join Us CTA */}
            <div className="mt-20 text-center py-12 border-t border-slate-200">
              <h3 className="text-xl font-light text-slate-900 mb-4">{t.team.joinUs}</h3>
              <p className="text-slate-600 mb-6 max-w-md mx-auto">
                {t.team.joinUsText}
              </p>
              <a 
                href="mailto:info@aguifa.org"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors"
              >
                {t.team.seeOpportunities}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default function TeamPage() {
  return (
    <LanguageProvider>
      <TeamContent />
    </LanguageProvider>
  );
}
