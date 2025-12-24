import React from 'react';
import { Button } from './ui/Button';
import { ArrowLeft, CheckCircle2, ArrowRight, Activity, Zap, Layers } from 'lucide-react';

interface ServiceDetailProps {
  serviceId: string;
  onNavigate: (target: string, data?: string) => void;
  onBack: () => void;
  language: 'en' | 'es';
}

export const ServiceDetail: React.FC<ServiceDetailProps> = ({ serviceId, onNavigate, onBack, language }) => {
  
  const translations = {
    en: {
        back: 'Back',
        detail: 'Service Detail',
        compare: 'Compare Plans',
        protocol: 'The Protocol',
        included: "What's Included",
        cards: {
            data: { title: 'Data Driven', desc: 'No guessing.' },
            active: { title: 'Active Recovery', desc: 'Movement is medicine.' },
            blocks: { title: 'Individualized Blocks', desc: 'Programs updated based on your progress.' }
        }
    },
    es: {
        back: 'Volver',
        detail: 'Detalle del Servicio',
        compare: 'Comparar Planes',
        protocol: 'El Protocolo',
        included: "Qué incluye",
        cards: {
            data: { title: 'Basado en Datos', desc: 'Sin adivinanzas.' },
            active: { title: 'Recuperación Activa', desc: 'El movimiento es medicina.' },
            blocks: { title: 'Bloques Individualizados', desc: 'Programas actualizados según tu progreso.' }
        }
    }
  };

  const t = translations[language];

  // Data for each service
  const serviceDataEn: Record<string, any> = {
    rehab: {
      title: "Athlete Rehab",
      subtitle: "Bridge the gap between rehab and performance.",
      description: "Traditional physical therapy stops when you are 'pain-free'. We stop when you are performing at your peak. Our hybrid approach combines clinical manual therapy with strength and conditioning principles to ensure you don't just recover—you evolve.",
      image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1600&auto=format&fit=crop",
      benefits: [
        "In-depth biomechanical assessment",
        "Hands-on manual therapy for tissue quality",
        "Load management using Oura/Garmin data",
        "Sport-specific strength programming"
      ],
      process: [
        { title: "Assess", desc: "We identify the root cause, not just the symptom." },
        { title: "Restore", desc: "Manual therapy to reset tissue tone and range of motion." },
        { title: "Load", desc: "Progressive strength training to build tissue capacity." },
        { title: "Perform", desc: "Return to sport with higher resilience than before." }
      ],
      ctaText: "Apply for Rehab",
      planName: "Athlete Rehab"
    },
    running: {
      title: "Return to Run",
      subtitle: "Run further, faster, and pain-free.",
      description: "Whether you're dealing with runner's knee, shin splints, or achilles tendinopathy, our running protocol is designed to rebuild your gait. We use video analysis to optimize your mechanics and prescribe unilateral strength work to fix imbalances.",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1600&auto=format&fit=crop",
      benefits: [
        "Frame-by-frame video gait analysis",
        "Cadence and stride length optimization",
        "Run-specific plyometrics and strength",
        "Volume ramping tailored to your tissue tolerance"
      ],
      process: [
        { title: "Analyze", desc: "Video capture of your running mechanics." },
        { title: "Correct", desc: "Drills and cues to fix form errors immediately." },
        { title: "Strengthen", desc: "Targeted loading for hips, calves, and feet." },
        { title: "Scale", desc: "Safe volume progression to race day." }
      ],
      ctaText: "Start Running Program",
      planName: "Return to Run"
    },
    online: {
      title: "Online Coaching",
      subtitle: "Elite programming, wherever you are.",
      description: "Access the same methodology used by our in-house athletes from anywhere in the world. This isn't a PDF template. It's a living program that adapts to your daily biofeedback, ensuring you are training at the optimal intensity for your current state.",
      image: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=1600&auto=format&fit=crop",
      benefits: [
        "Custom training blocks delivered via Motion App",
        "Async video form checks for main lifts",
        "Weekly adjustments based on readiness",
        "Direct access to your coach via chat"
      ],
      process: [
        { title: "Onboard", desc: "Virtual movement screen and goal setting." },
        { title: "Program", desc: "4-week blocks built for your equipment access." },
        { title: "Execute", desc: "Track weights, reps, and RPE in the app." },
        { title: "Refine", desc: "Weekly check-ins to adjust trajectory." }
      ],
      ctaText: "Start Online Coaching",
      planName: "Online Coaching"
    }
  };

  const serviceDataEs: Record<string, any> = {
    rehab: {
      title: "Rehabilitación de Atletas",
      subtitle: "Une la brecha entre rehabilitación y rendimiento.",
      description: "La fisioterapia tradicional se detiene cuando 'no tienes dolor'. Nosotros paramos cuando estás rindiendo al máximo. Nuestro enfoque híbrido combina terapia manual clínica con principios de fuerza y acondicionamiento.",
      image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1600&auto=format&fit=crop",
      benefits: [
        "Evaluación biomecánica profunda",
        "Terapia manual para calidad del tejido",
        "Gestión de carga usando datos de Oura/Garmin",
        "Programación de fuerza específica"
      ],
      process: [
        { title: "Evaluar", desc: "Identificamos la causa raíz, no solo el síntoma." },
        { title: "Restaurar", desc: "Terapia manual para resetear tono y rango." },
        { title: "Cargar", desc: "Entrenamiento de fuerza progresivo." },
        { title: "Rendir", desc: "Volver al deporte con mayor resiliencia." }
      ],
      ctaText: "Aplicar a Rehabilitación",
      planName: "Rehabilitación de Atletas"
    },
    running: {
      title: "Return to Run",
      subtitle: "Corre más lejos, más rápido y sin dolor.",
      description: "Ya sea rodilla de corredor o tendinopatía de aquiles, nuestro protocolo está diseñado para reconstruir tu marcha. Usamos análisis de video para optimizar tu mecánica.",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1600&auto=format&fit=crop",
      benefits: [
        "Análisis de marcha cuadro por cuadro",
        "Optimización de cadencia y zancada",
        "Pliometría y fuerza específica",
        "Aumento de volumen seguro"
      ],
      process: [
        { title: "Analizar", desc: "Captura de video de tu mecánica." },
        { title: "Corregir", desc: "Ejercicios para arreglar errores de forma." },
        { title: "Fortalecer", desc: "Carga dirigida para caderas y pies." },
        { title: "Escalar", desc: "Progresión segura hasta el día de carrera." }
      ],
      ctaText: "Iniciar Programa",
      planName: "Return to Run"
    },
    online: {
      title: "Coaching Online",
      subtitle: "Programación de élite, donde sea que estés.",
      description: "Accede a la misma metodología usada por nuestros atletas internos. No es una plantilla PDF. Es un programa vivo que se adapta a tu biofeedback diario.",
      image: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=1600&auto=format&fit=crop",
      benefits: [
        "Bloques de entrenamiento vía Motion App",
        "Chequeos de video asíncronos",
        "Ajustes semanales según disposición",
        "Acceso directo a tu coach"
      ],
      process: [
        { title: "Inicio", desc: "Pantalla de movimiento virtual." },
        { title: "Programar", desc: "Bloques de 4 semanas." },
        { title: "Ejecutar", desc: "Rastrea pesos y RPE en la app." },
        { title: "Refinar", desc: "Chequeos semanales para ajustar." }
      ],
      ctaText: "Iniciar Coaching",
      planName: "Coaching Online"
    }
  };

  const serviceData = language === 'en' ? serviceDataEn : serviceDataEs;
  const data = serviceData[serviceId] || serviceData['rehab'];

  return (
    <div className="pt-32 pb-20 min-h-screen animate-[fadeInUp_0.5s_ease-out_forwards]">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Back Button */}
        <button 
          onClick={onBack} 
          className="flex items-center text-motion-muted hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          {t.back}
        </button>

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-start mb-24">
            <div className="flex-1 space-y-6">
                <span className="text-motion-accent font-bold tracking-widest uppercase text-xs">{t.detail}</span>
                <h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tighter leading-tight">
                    {data.title}
                </h1>
                <p className="text-xl text-motion-muted leading-relaxed font-light border-l-2 border-motion-accent/50 pl-6">
                    {data.subtitle}
                </p>
                <p className="text-gray-300 leading-relaxed text-lg max-w-2xl">
                    {data.description}
                </p>
                
                <div className="pt-6 flex flex-wrap gap-4">
                    <Button onClick={() => onNavigate('contact', data.planName)} className="group">
                        {data.ctaText} <ArrowRight size={16} className="inline ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button variant="secondary" onClick={() => onNavigate('compare')}>
                        {t.compare}
                    </Button>
                </div>
            </div>

            {/* Image */}
            <div className="w-full lg:w-5/12 aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl animate-[fadeInUp_0.8s_ease-out_0.2s_forwards] opacity-0">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
                <img src={data.image} alt={data.title} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" />
            </div>
        </div>

        {/* The Process */}
        <div className="mb-24 animate-[fadeInUp_0.8s_ease-out_0.3s_forwards] opacity-0">
            <h2 className="text-3xl font-semibold text-white mb-12 tracking-tight">{t.protocol}</h2>
            <div className="grid md:grid-cols-4 gap-8">
                {data.process.map((step: any, index: number) => (
                    <div key={index} className="relative">
                        <div className="text-6xl font-bold text-white/5 mb-4 select-none">0{index + 1}</div>
                        <h3 className="text-xl font-medium text-white mb-2">{step.title}</h3>
                        <p className="text-sm text-motion-muted leading-relaxed">{step.desc}</p>
                        {index < 3 && (
                            <div className="hidden md:block absolute top-8 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-1/2"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>

        {/* Benefits / Features */}
        <div className="grid md:grid-cols-2 gap-12 items-center bg-motion-surface p-8 md:p-12 rounded-3xl animate-[fadeInUp_0.8s_ease-out_0.4s_forwards] opacity-0">
            <div>
                <h3 className="text-2xl font-semibold text-white mb-6">{t.included}</h3>
                <div className="space-y-4">
                    {data.benefits.map((benefit: string, index: number) => (
                        <div key={index} className="flex items-start gap-3">
                            <div className="mt-1 text-motion-accent">
                                <CheckCircle2 size={20} />
                            </div>
                            <span className="text-gray-300">{benefit}</span>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
                 <div className="bg-white/5 p-6 rounded-xl border border-white/5 hover:border-motion-accent/30 transition-colors">
                    <Activity className="text-motion-accent mb-3" size={24} />
                    <h4 className="text-white font-medium mb-1">{t.cards.data.title}</h4>
                    <p className="text-xs text-motion-muted">{t.cards.data.desc}</p>
                 </div>
                 <div className="bg-white/5 p-6 rounded-xl border border-white/5 hover:border-motion-accent/30 transition-colors">
                    <Zap className="text-motion-accent mb-3" size={24} />
                    <h4 className="text-white font-medium mb-1">{t.cards.active.title}</h4>
                    <p className="text-xs text-motion-muted">{t.cards.active.desc}</p>
                 </div>
                 <div className="bg-white/5 p-6 rounded-xl border border-white/5 hover:border-motion-accent/30 transition-colors col-span-2">
                    <Layers className="text-motion-accent mb-3" size={24} />
                    <h4 className="text-white font-medium mb-1">{t.cards.blocks.title}</h4>
                    <p className="text-xs text-motion-muted">{t.cards.blocks.desc}</p>
                 </div>
            </div>
        </div>

      </div>
    </div>
  );
};