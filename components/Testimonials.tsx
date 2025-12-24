import React from 'react';
import { TestimonialItem } from '../types';

interface TestimonialsProps {
  language: 'en' | 'es';
}

export const Testimonials: React.FC<TestimonialsProps> = ({ language }) => {
  const translations = {
    en: {
        title: 'Success Stories',
        stories: [
            {
                id: '1',
                quote: "Attention to biomechanics is next level. From chronic knee pain to running a 10k in just 3 months.",
                author: "Sarah Jenkins",
                role: "Marathon Runner"
            },
            {
                id: '2',
                quote: "I realized my 'strength' was compensating for instability. Now I lift heavier and without back pain.",
                author: "Marcus Thorne",
                role: "CrossFit Athlete"
            }
        ]
    },
    es: {
        title: 'Historias de Éxito',
        stories: [
            {
                id: '1',
                quote: "La atención a la biomecánica es de otro nivel. De dolor crónico de rodilla a correr 10k en solo 3 meses.",
                author: "Sarah Jenkins",
                role: "Corredora de Maratón"
            },
            {
                id: '2',
                quote: "Me di cuenta de que mi 'fuerza' estaba compensando inestabilidad. Ahora levanto más peso y sin dolor de espalda.",
                author: "Marcus Thorne",
                role: "Atleta de CrossFit"
            }
        ]
    }
  };

  const t = translations[language];

  return (
    <section id="testimonials" className="py-16 bg-motion-black border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-xs font-bold text-motion-muted uppercase tracking-widest mb-12 reveal-on-scroll">
          {t.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-32">
          {t.stories.map((s) => (
            <div key={s.id} className="reveal-on-scroll">
              <p className="text-2xl md:text-3xl text-white font-medium leading-tight mb-8">
                "{s.quote}"
              </p>
              <div>
                <p className="text-white text-sm font-semibold tracking-wide">{s.author}</p>
                <p className="text-motion-muted text-sm">{s.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};