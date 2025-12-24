import React from 'react';
import { Button } from './ui/Button';
import { Check, Minus, ArrowRight, ShieldCheck, ArrowLeft } from 'lucide-react';

interface ComparePlansProps {
  onNavigate: (target: string, planName?: string) => void;
  onBack: () => void;
  language: 'en' | 'es';
}

export const ComparePlans: React.FC<ComparePlansProps> = ({ onNavigate, onBack, language }) => {
  const translations = {
    en: {
        back: 'Back',
        title: 'Choose Your Protocol.',
        desc: "We don't do cookie-cutter templates. Every plan is built on your specific biomechanics and goals.",
        complete: 'Most Complete',
        apply: 'Apply Now',
        teaser: 'Not sure which plan is right for you?',
        book: 'Book a Free Discovery Call',
        plans: [
            {
              name: "Return to Run",
              price: "Program",
              subtitle: "Virtual / Async",
              description: "For runners dealing with nagging injuries or chasing a PR.",
              features: [
                "Video Gait Analysis",
                "Run-Specific Strength Plan",
                "Weekly Volume Management",
                "Video Form Review (Async)",
                "Monthly Check-in Calls",
                "Motion App Access"
              ],
              notIncluded: ["In-person Manual Therapy", "24/7 Priority Chat", "Biometric Data Analysis"]
            },
            {
              name: "Athlete Rehab",
              price: "Hybrid",
              subtitle: "In-Person + Digital",
              description: "The complete protocol. Clinical manual therapy meets high-performance training.",
              features: [
                "In-Person Biomechanical Assessment",
                "Weekly Manual Therapy Sessions",
                "Custom Rehab & Strength Programming",
                "24/7 Priority Chat Support",
                "Real-time Load Monitoring (Oura/Garmin)",
                "Motion App Access",
                "Biometric Data Analysis"
              ],
              notIncluded: []
            },
            {
              name: "Online Coaching",
              price: "Virtual",
              subtitle: "Remote Coaching",
              description: "Elite programming for strength athletes anywhere in the world.",
              features: [
                "Virtual Movement Screen",
                "Custom Strength Programming",
                "Weekly Form Checks (Async)",
                "Bi-Weekly Progress Calls",
                "Motion App Access",
                "Load Management"
              ],
              notIncluded: ["In-person Manual Therapy", "24/7 Priority Chat"]
            }
        ]
    },
    es: {
        back: 'Volver',
        title: 'Elige Tu Protocolo.',
        desc: "No hacemos plantillas genéricas. Cada plan se construye sobre tu biomecánica y objetivos específicos.",
        complete: 'Más Completo',
        apply: 'Aplicar Ahora',
        teaser: '¿No estás seguro de qué plan es para ti?',
        book: 'Reserva una Llamada Gratuita',
        plans: [
            {
              name: "Return to Run",
              price: "Programa",
              subtitle: "Virtual / Asíncrono",
              description: "Para corredores con lesiones persistentes o buscando una marca personal.",
              features: [
                "Análisis de Marcha en Video",
                "Plan de Fuerza Específico",
                "Gestión Semanal de Volumen",
                "Revisión de Forma (Asíncrona)",
                "Llamadas Mensuales",
                "Acceso a Motion App"
              ],
              notIncluded: ["Terapia Manual Presencial", "Chat Prioritario 24/7", "Análisis de Datos Biométricos"]
            },
            {
              name: "Rehabilitación de Atletas",
              price: "Híbrido",
              subtitle: "Presencial + Digital",
              description: "El protocolo completo. Terapia manual clínica y entrenamiento de alto rendimiento.",
              features: [
                "Evaluación Biomecánica Presencial",
                "Sesiones Semanales de Terapia Manual",
                "Programación de Fuerza y Rehabilitación",
                "Soporte por Chat 24/7",
                "Monitoreo de Carga en Tiempo Real",
                "Acceso a Motion App",
                "Análisis de Datos Biométricos"
              ],
              notIncluded: []
            },
            {
              name: "Online Coaching",
              price: "Virtual",
              subtitle: "Coaching Remoto",
              description: "Programación de élite para atletas de fuerza en cualquier lugar del mundo.",
              features: [
                "Pantalla de Movimiento Virtual",
                "Programación de Fuerza Personalizada",
                "Chequeos de Forma Semanales",
                "Llamadas de Progreso Quincenales",
                "Acceso a Motion App",
                "Gestión de Carga"
              ],
              notIncluded: ["Terapia Manual Presencial", "Chat Prioritario 24/7"]
            }
        ]
    }
  };

  const t = translations[language];

  // Reconstruct plans with highlight logic (Athlete Rehab is always highlighted, index 1)
  const plans = t.plans.map((p, i) => ({
      ...p,
      highlight: i === 1
  }));

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

        {/* Header */}
        <div className="max-w-3xl mb-16 mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tighter mb-6" dangerouslySetInnerHTML={{ __html: language === 'en' 
                ? t.title.replace('Protocol', '<span class="text-motion-accent">Protocol</span>') 
                : t.title.replace('Protocolo', '<span class="text-motion-accent">Protocolo</span>') }}>
            </h1>
            <p className="text-lg text-motion-muted leading-relaxed">
                {t.desc}
            </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 max-w-7xl mx-auto items-stretch">
            {plans.map((plan, index) => (
                <div 
                    key={index}
                    style={{ animationDelay: `${index * 150}ms`, opacity: 0 }}
                    className={`relative flex flex-col p-6 lg:p-8 rounded-3xl border animate-[fadeInUp_0.8s_ease-out_forwards] ${
                        plan.highlight 
                            ? 'bg-motion-surface border-motion-accent shadow-[0_0_40px_rgba(124,58,237,0.1)] md:scale-105 hover:scale-[1.07] hover:shadow-[0_0_60px_rgba(124,58,237,0.2)] z-10' 
                            : 'bg-black border-white/10 hover:border-white/20 hover:scale-[1.03] hover:bg-white/5'
                    } transition-all duration-300`}
                >
                    {plan.highlight && (
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-motion-accent text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg flex items-center gap-2 w-max">
                           <ShieldCheck size={14} /> {t.complete}
                        </div>
                    )}

                    <div className="mb-8">
                        <p className="text-motion-accent text-xs font-bold uppercase tracking-widest mb-2">{plan.price}</p>
                        <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-2">{plan.name}</h3>
                        <p className="text-sm text-white/60 mb-4">{plan.subtitle}</p>
                        <p className="text-motion-muted text-sm leading-relaxed">{plan.description}</p>
                    </div>

                    <div className="flex-1 space-y-4 mb-8">
                        {plan.features.map((feature, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${plan.highlight ? 'bg-motion-accent text-white' : 'bg-white/10 text-white'}`}>
                                    <Check size={12} strokeWidth={3} />
                                </div>
                                <span className="text-sm text-gray-300">{feature}</span>
                            </div>
                        ))}
                        {plan.notIncluded.map((feature, i) => (
                            <div key={i} className="flex items-start gap-3 opacity-50">
                                <div className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-transparent border border-white/20 text-white/40">
                                    <Minus size={12} />
                                </div>
                                <span className="text-sm text-motion-muted">{feature}</span>
                            </div>
                        ))}
                    </div>

                    <Button 
                        variant={plan.highlight ? 'primary' : 'secondary'} 
                        fullWidth 
                        onClick={() => onNavigate('contact', plan.name)}
                        className="group"
                    >
                        {t.apply} <ArrowRight size={16} className="inline ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            ))}
        </div>

        {/* FAQ Teaser */}
        <div className="mt-24 text-center animate-[fadeInUp_0.8s_ease-out_0.5s_forwards] opacity-0">
            <p className="text-motion-muted text-sm mb-4">{t.teaser}</p>
            <Button variant="ghost" onClick={() => onNavigate('contact')}>
                {t.book} <ArrowRight size={16} className="inline ml-2" />
            </Button>
        </div>

      </div>
    </div>
  );
};