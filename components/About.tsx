import React from 'react';
import { Award, GraduationCap } from 'lucide-react';
import { Carousel } from './ui/Carousel';

interface AboutProps {
    language: 'en' | 'es';
}

export const About: React.FC<AboutProps> = ({ language }) => {
    const translations = {
        en: {
            title: 'The Team.',
            subtitle: 'Experts in movement, recovery, and performance.',
            desc: 'We are a multidisciplinary team dedicated to optimizing human performance through evidence-based clinical practice.',
            roles: {
                physio: 'Physiotherapist',
                nutri: 'Nutritionist',
                master: 'Master in'
            },
            team: [
                {
                    name: "Sofía López",
                    role: "Physiotherapist",
                    specialty: "Master in Sports Rehabilitation",
                    image: `${import.meta.env.BASE_URL}images/team_sofia.jpg`,
                    bio: "Specializing in the transition from injury to peak athletic performance."
                },
                {
                    name: "Maria J. Palma",
                    role: "Physiotherapist",
                    specialty: "Master in Neurological Physiotherapy",
                    image: `${import.meta.env.BASE_URL}images/team_maria.jpg`,
                    bio: "Expert in neuroplasticity and movement disorders recovery."
                },
                {
                    name: "Karen Lagos",
                    role: "Nutritionist",
                    specialty: "Clinical & Sports Nutrition",
                    image: `${import.meta.env.BASE_URL}images/team_karen.jpg`,
                    bio: "Fueling recovery and optimizing metabolic health for longevity."
                }
            ]
        },
        es: {
            title: 'El Equipo.',
            subtitle: 'Expertos en movimiento, recuperación y rendimiento.',
            desc: 'Somos un equipo multidisciplinario dedicado a optimizar el rendimiento humano a través de la práctica clínica basada en evidencia.',
            roles: {
                physio: 'Fisioterapeuta',
                nutri: 'Nutricionista',
                master: 'Máster en'
            },
            team: [
                {
                    name: "Sofía López",
                    role: "Fisioterapeuta",
                    specialty: "Máster en Readaptación Deportiva",
                    image: `${import.meta.env.BASE_URL}images/team_sofia.jpg`,
                    bio: "Especialista en la transición desde la lesión hasta el máximo rendimiento deportivo."
                },
                {
                    name: "Maria J. Palma",
                    role: "Fisioterapeuta",
                    specialty: "Máster en Fisioterapia Neurológica",
                    image: `${import.meta.env.BASE_URL}images/team_maria.jpg`,
                    bio: "Experta en neuroplasticidad y recuperación de trastornos del movimiento."
                },
                {
                    name: "Karen Lagos",
                    role: "Nutricionista",
                    specialty: "Nutrición Clínica y Deportiva",
                    image: `${import.meta.env.BASE_URL}images/team_karen.jpg`,
                    bio: "Alimentando la recuperación y optimizando la salud metabólica para la longevidad."
                }
            ]
        }
    };

    const t = translations[language];

    const renderMember = (member: typeof t.team[0]) => (
        <div
            className="group relative w-full h-[500px] overflow-hidden rounded-2xl bg-motion-surface"
        >
            {/* Full Height Image */}
            <img
                src={member.image}
                alt={member.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
            />

            {/* Gradient Overlay - darker at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition-opacity duration-300" />

            {/* Content Container - Slides up on hover */}
            <div className="absolute bottom-0 left-0 w-full p-8 translate-y-[100px] group-hover:translate-y-0 transition-transform duration-500 ease-out will-change-transform">

                {/* Name & Role - Always Visible (conceptually, though translate pushes bio down) */}
                <div className="mb-4">
                    <h3 className="text-3xl font-bold text-white mb-2 leading-tight">{member.name}</h3>
                    <p className="text-motion-accent font-bold tracking-widest text-xs uppercase">{member.role}</p>
                </div>

                {/* Bio & Details - Revealed on Hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <div className="flex items-center gap-2 mb-4 text-white/90">
                        <GraduationCap size={16} className="text-motion-accent" />
                        <span className="text-sm font-medium">{member.specialty}</span>
                    </div>
                    <div className="h-px w-full bg-white/20 mb-4" />
                    <p className="text-sm text-gray-300 leading-relaxed">
                        {member.bio}
                    </p>
                </div>
            </div>

            {/* Helper visual to indicate interactivity on mobile/default */}
            <div className="absolute bottom-8 right-8 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/50 group-hover:opacity-0 transition-opacity md:hidden">
                <span className="text-xl leading-none mb-1">+</span>
            </div>
        </div>
    );

    return (
        <section id="about" className="py-24 bg-motion-black border-t border-white/5 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                {/* Header */}
                <div className="max-w-3xl mb-16 reveal-on-scroll">
                    <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tighter mb-6" dangerouslySetInnerHTML={{
                        __html: language === 'en'
                            ? t.title.replace('Team', '<span class="text-motion-accent">Team</span>')
                            : t.title.replace('Equipo', '<span class="text-motion-accent">Equipo</span>')
                    }}>
                    </h2>
                    <p className="text-xl text-white font-medium mb-4">{t.subtitle}</p>
                    <p className="text-lg text-motion-muted leading-relaxed font-light">
                        {t.desc}
                    </p>
                </div>

                {/* Desktop Grid */}
                <div className="hidden md:grid md:grid-cols-3 gap-6">
                    {t.team.map((member, index) => (
                        <div
                            key={index}
                            className="reveal-on-scroll"
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            {renderMember(member)}
                        </div>
                    ))}
                </div>

                {/* Mobile Carousel */}
                <Carousel
                    items={t.team}
                    renderItem={renderMember}
                    className="reveal-on-scroll"
                />
            </div>
        </section>
    );
};