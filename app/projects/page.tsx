"use client";

import { LanguageProvider } from '../../context/LanguageContext';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Structuration Fonds Infrastructure',
    category: 'Investment',
    description: 'Accompagnement dans la structuration d\'un fonds d\'infrastructure de 500M$ pour l\'Afrique de l\'Ouest.',
    image: 'https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=800',
    year: '2024'
  },
  {
    id: 2,
    title: 'Programme Inclusion Financière',
    category: 'Digital & MSME',
    description: 'Conception d\'un programme d\'inclusion financière touchant plus de 2 millions de bénéficiaires.',
    image: 'https://images.pexels.com/photos/6289065/pexels-photo-6289065.jpeg?auto=compress&cs=tinysrgb&w=800',
    year: '2024'
  },
  {
    id: 3,
    title: 'Évaluation Politique Agricole',
    category: 'Development Finance',
    description: 'Évaluation d\'impact d\'une politique de financement agricole pour un gouvernement ouest-africain.',
    image: 'https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=800',
    year: '2023'
  },
  {
    id: 4,
    title: 'Obligation Verte Souveraine',
    category: 'Green Finance',
    description: 'Accompagnement dans l\'émission de la première obligation verte souveraine d\'un pays africain.',
    image: 'https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=800',
    year: '2023'
  },
  {
    id: 5,
    title: 'Plateforme Data Analytics',
    category: 'Data & Analytics',
    description: 'Développement d\'une plateforme d\'analyse de données pour un fonds d\'investissement panafricain.',
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800',
    year: '2023'
  },
  {
    id: 6,
    title: 'Due Diligence Énergies Renouvelables',
    category: 'Investment',
    description: 'Due diligence complète pour un projet de parc solaire de 100MW.',
    image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=800',
    year: '2022'
  },
];

export default function ProjectsPage() {
  return (
    <LanguageProvider>
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
                Nos réalisations
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white">
                Projets
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
                  Découvrez une sélection de nos projets récents illustrant notre expertise 
                  dans la structuration de solutions financières pour l'Afrique.
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
                        alt={project.title}
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
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{project.description}</p>
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
