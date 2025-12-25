import React from 'react';
import { Button } from './ui/Button';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onNavigate: (target: string) => void;
  language: 'en' | 'es';
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, language }) => {
  const translations = {
    en: {
      line1: 'Move Better.',
      line2: 'Train Pain Free',
      subtext: 'Clinical biomechanics meets high-performance training. Evidence-based protocols. Lasting results.',
      cta1: 'Book Assessment',
      cta2: 'View the Method'
    },
    es: {
      line1: 'Muévete Mejor.',
      line2: 'Entrena Sin Dolor',
      subtext: 'Biomecánica clínica y entrenamiento de alto rendimiento. Protocolos basados en evidencia. Resultados duraderos.',
      cta1: 'Reservar Evaluación',
      cta2: 'Ver el Método'
    }
  };

  const t = translations[language];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">

      {/* Background Content */}
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}images/hero_bg.jpg`}
          alt="Athlete focused"
          className="w-full h-full object-cover opacity-50 animate-scale-in hero-mask"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 max-w-5xl relative z-10 flex flex-col items-start text-left md:items-center md:text-center mt-12">

        <div className="opacity-0 animate-[fadeInUp_1s_ease-out_forwards_0.2s]">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold text-white tracking-tighter leading-none -mb-2 md:-mb-4">
            {t.line1}
          </h1>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold text-motion-muted tracking-tighter leading-none mb-8">
            {t.line2}<span className="text-motion-accent">.</span>
          </h1>
        </div>

        <p className="opacity-0 animate-[fadeInUp_1s_ease-out_forwards_0.5s] text-lg md:text-xl text-gray-300 mb-10 max-w-lg font-normal leading-relaxed tracking-tight">
          {language === 'en' ? (
            <>
              Clinical biomechanics meets high-performance training.
              <span className="text-white/80 block mt-1">Evidence-based protocols. Lasting results.</span>
            </>
          ) : (
            <>
              Biomecánica clínica y entrenamiento de alto rendimiento.
              <span className="text-white/80 block mt-1">Protocolos basados en evidencia. Resultados duraderos.</span>
            </>
          )}
        </p>

        <div className="opacity-0 animate-[fadeInUp_1s_ease-out_forwards_0.7s] flex flex-col sm:flex-row gap-5 items-start sm:items-center">
          <Button
            variant="primary"
            className="pl-8 pr-6 group shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
            onClick={() => onNavigate('contact')}
          >
            {t.cta1} <ArrowRight size={16} className="inline ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            variant="ghost"
            className="text-white hover:text-motion-accent transition-colors"
            onClick={() => onNavigate('#method')}
          >
            {t.cta2}
          </Button>
        </div>
      </div>
    </section>
  );
};