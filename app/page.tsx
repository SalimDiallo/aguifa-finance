"use client";

import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Values from './components/Values';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <main>
          {/* Hero en premier - plein écran */}
          <Hero />
          
          {/* Header juste après le Hero - devient fixe au scroll */}
          <Header />
          
          {/* Reste du contenu avec marges entre sections */}
          <div className="space-y-24 py-16">
            <About />
            <Expertise />
            <Values />
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
