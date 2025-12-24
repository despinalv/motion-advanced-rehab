import React from 'react';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Carousel } from './ui/Carousel';

interface BlogSectionProps {
  onNavigate: (target: string, data?: string) => void;
  language: 'en' | 'es';
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onNavigate, language }) => {
  const translations = {
    en: {
        brand: 'The Motion Blog',
        title: 'Latest Insights',
        viewAll: 'View all articles',
        read: 'Read Article',
        posts: [
            {
              id: '1',
              title: "Why Rest is Rust: The Science of Active Recovery",
              excerpt: "Bed rest is outdated. Discover how controlled movement accelerates tissue repair and reduces downtime after injury.",
              date: "Oct 12, 2024",
              category: "Rehab Science",
              image: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?q=80&w=1000&auto=format&fit=crop",
              author: "Dr. Alex Thorne"
            },
            {
              id: '2',
              title: "The Myth of 'Perfect' Posture",
              excerpt: "Stop obsessing over alignment. Your next posture is your best posture. Learn why variability matters more than rigidity.",
              date: "Sep 28, 2024",
              category: "Biomechanics",
              image: "https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=1000&auto=format&fit=crop",
              author: "Sarah Jenkins"
            },
            {
              id: '3',
              title: "Zone 2 Training for Strength Athletes",
              excerpt: "You lift heavy, but is your engine holding you back? How low-intensity cardio unlocks higher strength outputs.",
              date: "Sep 15, 2024",
              category: "Performance",
              image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000&auto=format&fit=crop",
              author: "Mike Ross"
            }
        ]
    },
    es: {
        brand: 'The Motion Blog',
        title: 'Últimos Artículos',
        viewAll: 'Ver todos',
        read: 'Leer Artículo',
        posts: [
            {
              id: '1',
              title: "Por qué el Reposo es Óxido: La Ciencia de la Recuperación Activa",
              excerpt: "El reposo en cama es obsoleto. Descubre cómo el movimiento controlado acelera la reparación de tejidos.",
              date: "12 Oct, 2024",
              category: "Ciencia de Rehabilitación",
              image: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?q=80&w=1000&auto=format&fit=crop",
              author: "Dr. Alex Thorne"
            },
            {
              id: '2',
              title: "El Mito de la Postura 'Perfecta'",
              excerpt: "Deja de obsesionarte con la alineación. Tu próxima postura es tu mejor postura. Aprende por qué la variabilidad importa más.",
              date: "28 Sep, 2024",
              category: "Biomecánica",
              image: "https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=1000&auto=format&fit=crop",
              author: "Sarah Jenkins"
            },
            {
              id: '3',
              title: "Entrenamiento en Zona 2 para Atletas de Fuerza",
              excerpt: "Levantas pesado, pero ¿tu motor te limita? Cómo el cardio de baja intensidad desbloquea mayor fuerza.",
              date: "15 Sep, 2024",
              category: "Rendimiento",
              image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000&auto=format&fit=crop",
              author: "Mike Ross"
            }
        ]
    }
  };

  const t = translations[language];

  const renderPost = (post: typeof t.posts[0]) => (
    <article 
        key={post.id} 
        onClick={() => onNavigate('blog-post', post.id)}
        className="group cursor-pointer flex flex-col h-full w-full"
    >
        <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3]">
        <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
            <span className="text-xs font-medium text-white">{post.category}</span>
        </div>
        </div>

        <div className="flex items-center gap-4 text-xs text-motion-muted mb-3">
        <div className="flex items-center gap-1">
            <Calendar size={12} />
            <span>{post.date}</span>
        </div>
        <div className="flex items-center gap-1">
            <User size={12} />
            <span>{post.author}</span>
        </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-motion-accent transition-colors leading-tight">
        {post.title}
        </h3>
        
        <p className="text-motion-muted text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
        {post.excerpt}
        </p>

        <div className="flex items-center text-sm font-medium text-white group-hover:text-motion-accent transition-colors mt-auto">
        {t.read} <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
    </article>
  );

  return (
    <section id="blog" className="py-24 bg-motion-black relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 reveal-on-scroll">
          <div>
            <span className="text-motion-accent font-bold tracking-widest uppercase text-xs mb-4 block">{t.brand}</span>
            <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tighter">{t.title}</h2>
          </div>
          <button 
            onClick={() => onNavigate('blog-library')}
            className="hidden md:flex items-center text-sm text-white hover:text-motion-accent transition-colors mt-4 md:mt-0 group"
          >
            {t.viewAll} <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {t.posts.map((post, index) => (
             <div key={post.id} className="reveal-on-scroll" style={{ transitionDelay: `${index * 100}ms` }}>
                {renderPost(post)}
             </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <Carousel 
            items={t.posts} 
            renderItem={renderPost} 
            className="reveal-on-scroll"
        />

        <div className="mt-12 md:hidden flex justify-center">
             <button 
                onClick={() => onNavigate('blog-library')}
                className="flex items-center text-sm text-white hover:text-motion-accent transition-colors"
             >
                {t.viewAll} <ArrowRight size={16} className="ml-2" />
            </button>
        </div>
      </div>
    </section>
  );
};