import React from 'react';
import { Move, Dumbbell, LineChart } from 'lucide-react';

interface MethodProps {
  language: 'en' | 'es';
}

export const Method: React.FC<MethodProps> = ({ language }) => {
  const content = {
    en: {
      title: 'The Power of Movement.',
      description: 'Most clinics treat symptoms. We re-engineer how you move. By bridging the gap between rehabilitation and performance, we create permanent resilience.',
      items: [
        {
          title: "Biomechanics",
          description: "Root cause analysis using the Joint-by-Joint approach. We don't guess; we assess."
        },
        {
          title: "Active Loading",
          description: "Passive modalities are minimized. True healing happens through controlled, progressive movement."
        },
        {
          title: "Data Driven",
          description: "Progress is measured by neuromuscular control and force output, not just how you feel."
        }
      ]
    },
    es: {
      title: 'El Poder del Movimiento.',
      description: 'La mayoría de las clínicas tratan los síntomas. Nosotros rediseñamos cómo te mueves. Al unir la rehabilitación con el rendimiento, creamos resiliencia permanente.',
      items: [
        {
          title: "Biomecánica",
          description: "Análisis de causa raíz utilizando el enfoque Articulación-por-Articulación. No adivinamos; evaluamos."
        },
        {
          title: "Carga Activa",
          description: "Modalidades pasivas minimizadas. La verdadera curación ocurre a través del movimiento controlado y progresivo."
        },
        {
          title: "Basado en Datos",
          description: "El progreso se mide por control neuromuscular y producción de fuerza, no solo por cómo te sientes."
        }
      ]
    }
  };

  const t = content[language];

  const icons = [<Move size={40} />, <Dumbbell size={40} />, <LineChart size={40} />];

  return (
    <section id="method" className="py-16 bg-motion-black relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-motion-accent/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16 reveal-on-scroll">
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tighter leading-tight mb-4" dangerouslySetInnerHTML={{ __html: language === 'en' 
                ? t.title.replace('Power', '<span class="text-motion-accent">Power</span>') 
                : t.title.replace('Poder', '<span class="text-motion-accent">Poder</span>') 
            }}>
            </h2>
          </div>
          <div className="pb-2">
            <p className="text-lg text-motion-muted leading-relaxed font-light">
              {t.description}
            </p>
          </div>
        </div>

        {/* Updated Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {t.items.map((item, idx) => (
            <div 
              key={idx} 
              className="reveal-zoom group"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="mb-6 text-motion-accent group-hover:text-white transition-colors duration-500 ease-out">
                {icons[idx]}
              </div>
              <h3 className="text-2xl font-medium text-white mb-4 tracking-tight">{item.title}</h3>
              <p className="text-motion-muted leading-relaxed text-base font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};