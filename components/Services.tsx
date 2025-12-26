import React from 'react';
import { ServiceItem } from '../types';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Carousel } from './ui/Carousel';

interface ServicesProps {
  onNavigate: (target: string, data?: string) => void;
  language: 'en' | 'es';
}

export const Services: React.FC<ServicesProps> = ({ onNavigate, language }) => {
  const translations = {
    en: {
      title: 'Programs',
      compare: 'Compare plans',
      viewDetails: 'View Details',
      services: [
        {
          id: 'rehab',
          title: "Athlete Rehab",
          price: "Hybrid",
          description: "Injury readaptation designed for high performance.",
          image: `${import.meta.env.BASE_URL}images/service_rehab.webp`
        },
        {
          id: 'running',
          title: "Return to Run",
          price: "Program",
          description: "Technique analysis and unilateral strength for pain-free miles.",
          image: `${import.meta.env.BASE_URL}images/service_running.webp`
        },
        {
          id: 'online',
          title: "Online Coaching",
          price: "VIRTUAL",
          description: "Full functional assessment and programming from anywhere.",
          image: `${import.meta.env.BASE_URL}images/service_online.webp`
        }
      ]
    },
    es: {
      title: 'Programas',
      compare: 'Comparar planes',
      viewDetails: 'Ver Detalles',
      services: [
        {
          id: 'rehab',
          title: "Rehabilitación de Atletas",
          price: "Híbrido",
          description: "Readaptación de lesiones diseñada para alto rendimiento.",
          image: `${import.meta.env.BASE_URL}images/service_rehab.webp`
        },
        {
          id: 'running',
          title: "Return to Run",
          price: "Programa",
          description: "Análisis técnico y fuerza unilateral para kilómetros sin dolor.",
          image: `${import.meta.env.BASE_URL}images/service_running.webp`
        },
        {
          id: 'online',
          title: "Online Coaching",
          price: "VIRTUAL",
          description: "Evaluación funcional completa y programación desde cualquier lugar.",
          image: `${import.meta.env.BASE_URL}images/service_online.webp`
        }
      ]
    }
  };

  const t = translations[language];

  const renderServiceCard = (service: typeof t.services[0]) => (
    <div
      key={service.id}
      onClick={() => onNavigate('service-detail', service.id)}
      className="group relative h-[450px] overflow-hidden rounded-2xl bg-motion-surface cursor-pointer w-full"
    >
      <div className="absolute inset-0">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-60 group-hover:opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
      </div>

      <div className="absolute bottom-0 left-0 w-full p-8">
        <p className="text-motion-accent text-xs font-bold mb-3 uppercase tracking-widest">{service.price}</p>
        <h3 className="text-3xl font-semibold text-white mb-4 tracking-tighter">{service.title}</h3>
        <p className="text-gray-300 text-sm leading-relaxed max-w-xs mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
          {service.description}
        </p>
        <div className="flex items-center text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 translate-y-2 group-hover:translate-y-0">
          {t.viewDetails} <ArrowRight size={16} className="ml-2" />
        </div>
      </div>
    </div>
  );

  return (
    <section id="services" className="py-16 bg-motion-black">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex justify-between items-end mb-12 reveal-on-scroll">
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tighter">{t.title}</h2>
          <button
            onClick={() => onNavigate('compare')}
            className="hidden md:flex items-center text-sm text-motion-accent hover:text-white transition-colors"
          >
            {t.compare} <ArrowUpRight size={16} className="ml-1" />
          </button>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid lg:grid-cols-3 gap-6">
          {t.services.map((service) => (
            <div key={service.id} className="reveal-on-scroll">
              {renderServiceCard(service)}
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <Carousel
          items={t.services}
          renderItem={renderServiceCard}
          className="reveal-on-scroll"
        />

        {/* Mobile View All Button */}
        <div className="mt-8 md:hidden flex justify-center">
          <button
            onClick={() => onNavigate('compare')}
            className="flex items-center text-sm text-motion-accent hover:text-white transition-colors"
          >
            {t.compare} <ArrowUpRight size={16} className="ml-1" />
          </button>
        </div>

      </div>
    </section>
  );
};