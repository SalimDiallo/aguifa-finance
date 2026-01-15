"use client";

import { useState, useEffect } from 'react';
import { LanguageProvider } from '../context/LanguageContext';
import LoadingIntro from '../components/LoadingIntro';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Values from '../components/Values';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [hasVisited, setHasVisited] = useState(false);

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà visité (session storage)
    const visited = sessionStorage.getItem('aguifa-visited');
    if (visited) {
      setShowIntro(false);
      setHasVisited(true);
    }
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
    sessionStorage.setItem('aguifa-visited', 'true');
  };

  return (
    <LanguageProvider>
      {/* Écran d'introduction - seulement à la première visite de la session */}
      {showIntro && !hasVisited && (
        <LoadingIntro onComplete={handleIntroComplete} />
      )}

      <div className="min-h-screen">
        <main>
          {/* Hero en premier - plein écran */}
          <Hero />
          
          {/* Header juste après le Hero - devient fixe au scroll */}
          <Header />
          
          {/* Reste du contenu */}
          <div className="py-24">
            <About />
          </div>
          
          {/* Section Services - Design professionnel avec parallaxe */}
          <Services />
          
          {/* Autres sections */}
          <div className="space-y-24 py-24">
            <Values />
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
