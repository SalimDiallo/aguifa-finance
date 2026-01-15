"use client";

import { LanguageProvider } from '../../context/LanguageContext';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';

const insights = [
  {
    id: 1,
    type: 'Article',
    title: 'L\'avenir de la finance verte en Afrique',
    excerpt: 'Une analyse approfondie des opportunités et défis du financement durable sur le continent africain.',
    image: 'https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '15 Janvier 2026',
    readTime: '8 min'
  },
  {
    id: 2,
    type: 'Rapport',
    title: 'État des lieux du Private Equity en Afrique de l\'Ouest',
    excerpt: 'Notre rapport annuel sur les tendances du capital-investissement dans la région.',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '10 Janvier 2026',
    readTime: '15 min'
  },
  {
    id: 3,
    type: 'Article',
    title: 'Inclusion financière : le rôle des Fintechs',
    excerpt: 'Comment les solutions digitales transforment l\'accès aux services financiers en Afrique.',
    image: 'https://images.pexels.com/photos/6289065/pexels-photo-6289065.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '5 Janvier 2026',
    readTime: '6 min'
  },
  {
    id: 4,
    type: 'Étude de cas',
    title: 'Structuration d\'un fonds d\'infrastructure',
    excerpt: 'Retour d\'expérience sur notre accompagnement dans la création d\'un fonds panafricain.',
    image: 'https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '20 Décembre 2025',
    readTime: '10 min'
  },
  {
    id: 5,
    type: 'Article',
    title: 'Les critères ESG dans l\'investissement africain',
    excerpt: 'Pourquoi et comment intégrer les critères ESG dans les décisions d\'investissement.',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '15 Décembre 2025',
    readTime: '7 min'
  },
  {
    id: 6,
    type: 'Rapport',
    title: 'Perspectives économiques Afrique 2026',
    excerpt: 'Notre analyse des perspectives macroéconomiques pour les principales économies africaines.',
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '1 Décembre 2025',
    readTime: '20 min'
  },
];

export default function InsightsPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section 
            className="relative h-[40vh] bg-fixed bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
            }}
          >
            <div className="absolute inset-0 bg-slate-900/70" />
            <div className="relative z-10 text-center px-4">
              <span className="inline-block text-xs font-medium tracking-widest text-white/60 uppercase mb-4">
                Publications & Analyses
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white">
                Insights
              </h1>
              <div className="w-16 h-px bg-white/40 mx-auto mt-4" />
            </div>
          </section>

          {/* Insights Grid */}
          <section className="py-16 lg:py-24 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              
              {/* Featured Article */}
              <div className="mb-16">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                    <Image
                      src={insights[0].image}
                      alt={insights[0].title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 uppercase tracking-wide">{insights[0].type}</span>
                    <h2 className="text-2xl lg:text-3xl font-light text-slate-900 mt-2 mb-4">
                      {insights[0].title}
                    </h2>
                    <p className="text-slate-600 leading-relaxed mb-4">{insights[0].excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                      <span>{insights[0].date}</span>
                      <span>•</span>
                      <span>{insights[0].readTime} de lecture</span>
                    </div>
                    <a 
                      href="#"
                      className="inline-flex items-center gap-2 text-sm text-slate-900 font-medium hover:text-slate-600 transition-colors"
                    >
                      Lire l'article
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Other Articles */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {insights.slice(1).map((insight) => (
                  <article key={insight.id} className="group">
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 mb-4">
                      <Image
                        src={insight.image}
                        alt={insight.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 text-xs bg-white px-2 py-1 text-slate-700">
                        {insight.type}
                      </span>
                    </div>
                    
                    {/* Info */}
                    <div className="flex items-center gap-3 text-xs text-slate-400 mb-2">
                      <span>{insight.date}</span>
                      <span>•</span>
                      <span>{insight.readTime}</span>
                    </div>
                    <h3 className="text-lg font-medium text-slate-900 mb-2 group-hover:text-slate-600 transition-colors">
                      {insight.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{insight.excerpt}</p>
                  </article>
                ))}
              </div>

              {/* Newsletter CTA */}
              <div className="mt-20 py-12 px-8 bg-slate-50 text-center">
                <h3 className="text-xl font-light text-slate-900 mb-3">Restez informé</h3>
                <p className="text-slate-600 mb-6 max-w-md mx-auto text-sm">
                  Recevez nos dernières analyses et publications directement dans votre boîte mail.
                </p>
                <div className="flex gap-3 max-w-md mx-auto">
                  <input 
                    type="email"
                    placeholder="Votre email"
                    className="flex-1 px-4 py-3 border border-slate-200 text-sm focus:border-slate-400 focus:outline-none"
                  />
                  <button className="px-6 py-3 bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors">
                    S'inscrire
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
}
