"use client";

import { LanguageProvider } from '../../context/LanguageContext';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Nom Prénom',
    role: 'Fondateur & CEO',
    bio: 'Expert en finance du développement avec plus de 15 ans d\'expérience dans le secteur bancaire et les institutions financières internationales.',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    linkedin: '#'
  },
  {
    name: 'Nom Prénom',
    role: 'Directeur des Opérations',
    bio: 'Spécialiste en structuration de fonds et gestion de portefeuille avec une expertise approfondie des marchés africains.',
    image: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=400',
    linkedin: '#'
  },
  {
    name: 'Nom Prénom',
    role: 'Directrice ESG & Impact',
    bio: 'Experte en finance durable et critères ESG, elle accompagne nos clients dans leurs stratégies d\'investissement responsable.',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
    linkedin: '#'
  },
  {
    name: 'Nom Prénom',
    role: 'Responsable Data & Analytics',
    bio: 'Data scientist avec une solide expérience en modélisation financière et analyse prédictive.',
    image: 'https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=400',
    linkedin: '#'
  },
];

export default function TeamPage() {
  return (
    <LanguageProvider>
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
                Les visages d'AGUIFA
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white">
                Notre Équipe
              </h1>
              <div className="w-16 h-px bg-white/40 mx-auto mt-4" />
            </div>
          </section>

          {/* Team Grid */}
          <section className="py-16 lg:py-24 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              
              {/* Intro */}
              <div className="max-w-2xl mx-auto text-center mb-16">
                <p className="text-slate-600 leading-relaxed">
                  Notre équipe réunit des experts passionnés par le développement de l'Afrique, 
                  combinant expertise technique internationale et connaissance approfondie des réalités locales.
                </p>
              </div>

              {/* Team Members */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                  <div key={index} className="group">
                    {/* Photo */}
                    <div className="relative aspect-[3/4] overflow-hidden bg-slate-100 mb-4">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                      {/* Overlay LinkedIn */}
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
                    <p className="text-sm text-slate-500 mb-2">{member.role}</p>
                    <p className="text-sm text-slate-600 leading-relaxed">{member.bio}</p>
                  </div>
                ))}
              </div>

              {/* Join Us CTA */}
              <div className="mt-20 text-center py-12 border-t border-slate-100">
                <h3 className="text-xl font-light text-slate-900 mb-4">Rejoignez notre équipe</h3>
                <p className="text-slate-600 mb-6 max-w-md mx-auto">
                  Nous sommes toujours à la recherche de talents passionnés par la finance et le développement de l'Afrique.
                </p>
                <a 
                  href="mailto:careers@aguifa.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors"
                >
                  Voir les opportunités
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
}
