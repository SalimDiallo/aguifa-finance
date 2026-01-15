"use client";

import { LanguageProvider, useLanguage } from '../../context/LanguageContext';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Joseph Gougna',
    role: 'Founder & Managing Director',
    roleFr: 'Fondateur & Directeur Général',
    bio: 'Spécialiste en ingénierie financière, finance de développement et politiques publiques, avec une expérience opérationnelle au sein de la Banque Africaine de Développement (BAD), du secteur bancaire (analyse crédit & risques IFRS9) et de l\'investissement privé (PE/VC, M&A, structuration).',
    bioEn: 'Specialist in financial engineering, development finance and public policies, with operational experience at the African Development Bank (AfDB), banking sector (credit analysis & IFRS9 risks) and private investment (PE/VC, M&A, structuring).',
    detailsFr: [
      'Expérience avérée dans la conception, structuration et analyse de projets financés par les bailleurs (AFD, KfW, BAD, WB, EIB, EBRD)',
      'Due diligence, modélisation financière avancée, élaboration de propositions techniques',
      'Solide maîtrise des processus d\'appels d\'offres internationaux',
      'Compétences en énergie, gouvernance, intégration régionale, et structuration de mécanismes financiers innovants'
    ],
    detailsEn: [
      'Proven experience in the design, structuring and analysis of donor-funded projects (AFD, KfW, AfDB, WB, EIB, EBRD)',
      'Due diligence, advanced financial modeling, technical proposal development',
      'Strong command of international tender processes',
      'Skills in energy, governance, regional integration, and structuring innovative financial mechanisms'
    ],
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    linkedin: '#'
  },
  {
    name: 'Juliette Rioual',
    role: 'Data Analyst',
    roleFr: 'Data Analyst',
    bio: 'Analyste de données spécialisée dans la modélisation financière et l\'analyse sectorielle.',
    bioEn: 'Data analyst specialized in financial modeling and sector analysis.',
    detailsFr: [],
    detailsEn: [],
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
    linkedin: '#'
  },
   {
    name: 'Juliette Rioual',
    role: 'Data Analyst',
    roleFr: 'Data Analyst',
    bio: 'Analyste de données spécialisée dans la modélisation financière et l\'analyse sectorielle.',
    bioEn: 'Data analyst specialized in financial modeling and sector analysis.',
    detailsFr: [],
    detailsEn: [],
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
    linkedin: '#'
  },
   {
    name: 'Juliette Rioual',
    role: 'Data Analyst',
    roleFr: 'Data Analyst',
    bio: 'Analyste de données spécialisée dans la modélisation financière et l\'analyse sectorielle.',
    bioEn: 'Data analyst specialized in financial modeling and sector analysis.',
    detailsFr: [],
    detailsEn: [],
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
    linkedin: '#'
  },
];

function TeamContent() {
  const { t, language } = useLanguage();

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

        {/* Team Members */}
        <section className="py-16 lg:py-24 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Featured Member - Joseph Gougna */}
            <div className="mb-20">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Photo */}
                <div className="relative">
                  <div className="aspect-[3/4] max-w-sm mx-auto lg:mx-0 overflow-hidden bg-slate-200">
                    <Image
                      src={teamMembers[0].image}
                      alt={teamMembers[0].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Info */}
                <div>
                  <h2 className="text-2xl lg:text-3xl font-light text-slate-900 mb-1">
                    {teamMembers[0].name}
                  </h2>
                  <p className="text-slate-500 mb-6">
                    {language === 'fr' ? teamMembers[0].roleFr : teamMembers[0].role}
                  </p>
                  <div className="w-12 h-0.5 bg-slate-900 mb-6" />
                  
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {language === 'fr' ? teamMembers[0].bio : teamMembers[0].bioEn}
                  </p>

                  <ul className="space-y-3">
                    {(language === 'fr' ? teamMembers[0].detailsFr : teamMembers[0].detailsEn).map((detail, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                        <span className="w-1 h-1 rounded-full bg-slate-400 mt-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <a 
                    href={teamMembers[0].linkedin}
                    className="inline-flex items-center gap-2 mt-8 text-sm text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Other Team Members */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.slice(1).map((member, index) => (
                <div key={index} className="group">
                  {/* Photo */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-slate-200 mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    {/* LinkedIn Overlay */}
                    <a 
                      href={member.linkedin}
                      className="absolute bottom-4 right-4 w-10 h-10 bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <svg className="w-5 h-5 text-slate-700" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                  
                  {/* Info */}
                  <h3 className="text-lg font-medium text-slate-900">{member.name}</h3>
                  <p className="text-sm text-slate-500 mb-2">
                    {language === 'fr' ? member.roleFr : member.role}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {language === 'fr' ? member.bio : member.bioEn}
                  </p>
                </div>
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
