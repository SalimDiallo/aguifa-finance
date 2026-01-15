"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface LoadingIntroProps {
  onComplete: () => void;
}

export default function LoadingIntro({ onComplete }: LoadingIntroProps) {
  const [phase, setPhase] = useState<'logo' | 'text' | 'zoom' | 'done'>('logo');

  useEffect(() => {
    // Phase 1: Logo apparaît (0 -> 800ms)
    const timer1 = setTimeout(() => setPhase('text'), 800);
    
    // Phase 2: Texte apparaît (800 -> 1800ms)
    const timer2 = setTimeout(() => setPhase('zoom'), 1800);
    
    // Phase 3: Zoom et disparition (1800 -> 2600ms)
    const timer3 = setTimeout(() => setPhase('done'), 2600);
    
    // Terminé
    const timer4 = setTimeout(() => onComplete(), 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  return (
    <div 
      className={`
        fixed inset-0 z-[100] bg-slate-900 flex items-center justify-center
        transition-opacity duration-500
        ${phase === 'done' ? 'opacity-0 pointer-events-none' : 'opacity-100'}
      `}
    >
      {/* Contenu central */}
      <div 
        className={`
          relative flex flex-col items-center transition-all duration-700 ease-out
          ${phase === 'zoom' || phase === 'done' ? 'scale-150 opacity-0' : 'scale-100 opacity-100'}
        `}
      >
        {/* Logo */}
        <div 
          className={`
            relative w-24 h-24 mb-6 transition-all duration-700 ease-out
            ${phase === 'logo' ? 'scale-100 opacity-100' : 'scale-100 opacity-100'}
          `}
          style={{
            animation: phase === 'logo' ? 'fadeInScale 0.8s ease-out forwards' : undefined
          }}
        >
          <Image
            src="/images/logo.png"
            alt="AGUIFA Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Texte */}
        <div 
          className={`
            text-center transition-all duration-500 ease-out
            ${phase !== 'logo' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          `}
        >
          <h1 className="text-2xl sm:text-3xl font-light text-white tracking-wider mb-2">
            AGUIFA
          </h1>
          <div className="text-xs sm:text-sm text-white/60 tracking-[0.3em] uppercase">
            Dev Finance
          </div>
        </div>

        {/* Ligne de progression */}
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-32">
          <div className="h-px bg-white/20 w-full">
            <div 
              className="h-full bg-white/60 transition-all duration-1000 ease-out"
              style={{
                width: phase === 'logo' ? '0%' : phase === 'text' ? '50%' : '100%'
              }}
            />
          </div>
        </div>
      </div>

      {/* Lignes décoratives */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Ligne horizontale */}
        <div 
          className={`
            absolute top-1/2 left-0 h-px bg-white/5 transition-all duration-1000 ease-out
            ${phase !== 'logo' ? 'w-full' : 'w-0'}
          `}
        />
        {/* Ligne verticale */}
        <div 
          className={`
            absolute left-1/2 top-0 w-px bg-white/5 transition-all duration-1000 ease-out
            ${phase !== 'logo' ? 'h-full' : 'h-0'}
          `}
        />
      </div>

      {/* Coins décoratifs */}
      <div className="absolute top-8 left-8 w-12 h-12 border-l border-t border-white/10" />
      <div className="absolute top-8 right-8 w-12 h-12 border-r border-t border-white/10" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-l border-b border-white/10" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-r border-b border-white/10" />

      {/* Styles pour l'animation */}
      <style jsx>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
