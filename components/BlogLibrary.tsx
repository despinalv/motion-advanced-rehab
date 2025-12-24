import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Calendar, User, Search } from 'lucide-react';

interface BlogLibraryProps {
  onNavigate: (target: string, data?: string) => void;
  onBack: () => void;
  language: 'en' | 'es';
}

export const BlogLibrary: React.FC<BlogLibraryProps> = ({ onNavigate, onBack, language }) => {
  const [activeCategory, setActiveCategory] = useState(language === 'en' ? 'All' : 'Todos');

  const translations = {
    en: {
        back: 'Back',
        brand: 'The Motion Blog',
        title: 'Insights & Research.',
        desc: 'Deep dives into biomechanics, rehab science, and high-performance training. No fluff, just evidence-based protocols.',
        search: 'Search articles...',
        read: 'Read Article',
        noResults: 'No articles found in this category.',
        categories: ['All', 'Rehab Science', 'Biomechanics', 'Performance', 'Nutrition', 'Education'],
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
              },
              {
                id: '4',
                title: "Understanding Pain Science",
                excerpt: "Pain doesn't always equal damage. We dive deep into the biopsychosocial model of pain and how to retrain your brain.",
                date: "Aug 22, 2024",
                category: "Education",
                image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?q=80&w=1000&auto=format&fit=crop",
                author: "Dr. Alex Thorne"
              },
              {
                id: '5',
                title: "Mobility vs. Flexibility",
                excerpt: "Being bendy isn't enough. Why you need to control your range of motion to prevent injury.",
                date: "Aug 10, 2024",
                category: "Biomechanics",
                image: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=1000&auto=format&fit=crop",
                author: "Sarah Jenkins"
              },
              {
                id: '6',
                title: "Nutrition for Tendon Health",
                excerpt: "Collagen, Vitamin C, and timing. What to eat to support your connective tissue recovery.",
                date: "Jul 15, 2024",
                category: "Nutrition",
                image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1000&auto=format&fit=crop",
                author: "Mike Ross"
              }
        ]
    },
    es: {
        back: 'Volver',
        brand: 'The Motion Blog',
        title: 'Insights e Investigación.',
        desc: 'Profundizamos en biomecánica, ciencia de rehabilitación y entrenamiento de alto rendimiento. Sin relleno, solo protocolos basados en evidencia.',
        search: 'Buscar artículos...',
        read: 'Leer Artículo',
        noResults: 'No se encontraron artículos.',
        categories: ['Todos', 'Ciencia de Rehabilitación', 'Biomecánica', 'Rendimiento', 'Nutrición', 'Educación'],
        posts: [
            {
                id: '1',
                title: "Por qué el Reposo es Óxido: La Ciencia de la Recuperación Activa",
                excerpt: "El reposo es obsoleto. Descubre cómo el movimiento controlado acelera la reparación de tejidos y reduce el tiempo de inactividad.",
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
              },
              {
                id: '4',
                title: "Entendiendo la Ciencia del Dolor",
                excerpt: "El dolor no siempre es igual a daño. Profundizamos en el modelo biopsicosocial del dolor y cómo reentrenar tu cerebro.",
                date: "22 Ago, 2024",
                category: "Educación",
                image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?q=80&w=1000&auto=format&fit=crop",
                author: "Dr. Alex Thorne"
              },
              {
                id: '5',
                title: "Movilidad vs. Flexibilidad",
                excerpt: "Ser flexible no es suficiente. Por qué necesitas controlar tu rango de movimiento para prevenir lesiones.",
                date: "10 Ago, 2024",
                category: "Biomecánica",
                image: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=1000&auto=format&fit=crop",
                author: "Sarah Jenkins"
              },
              {
                id: '6',
                title: "Nutrición para la Salud de los Tendones",
                excerpt: "Colágeno, Vitamina C y timing. Qué comer para apoyar la recuperación de tu tejido conectivo.",
                date: "15 Jul, 2024",
                category: "Nutrición",
                image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1000&auto=format&fit=crop",
                author: "Mike Ross"
              }
        ]
    }
  };

  const t = translations[language];
  const activeAll = language === 'en' ? 'All' : 'Todos';
  
  // Reset category if switching languages
  if (!t.categories.includes(activeCategory) && activeCategory !== activeAll) {
      setActiveCategory(activeAll);
  }

  const filteredPosts = activeCategory === activeAll 
    ? t.posts 
    : t.posts.filter(post => post.category === activeCategory);

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
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
                <span className="text-motion-accent font-bold tracking-widest uppercase text-xs mb-4 block">{t.brand}</span>
                <h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tighter mb-6" dangerouslySetInnerHTML={{ __html: t.title.replace('&', '&<br/>').replace('e', 'e<br/>') }}>
                </h1>
                <p className="text-lg text-motion-muted leading-relaxed max-w-lg">
                    {t.desc}
                </p>
            </div>
            
            <div className="mt-8 md:mt-0 relative">
                <input 
                    type="text" 
                    placeholder={t.search} 
                    className="bg-white/5 border border-white/10 rounded-full py-3 px-6 pr-12 text-white focus:outline-none focus:border-motion-accent transition-colors w-full md:w-64"
                />
                <Search size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-motion-muted" />
            </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-12">
            {t.categories.map((cat, i) => (
                <button 
                    key={i} 
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === cat ? 'bg-white text-black' : 'bg-white/5 text-motion-muted hover:bg-white/10 hover:text-white'}`}
                >
                    {cat}
                </button>
            ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.length > 0 ? (
                filteredPosts.map((post, index) => (
                <article 
                  key={post.id} 
                  onClick={() => onNavigate('blog-post', post.id)}
                  className="group cursor-pointer flex flex-col h-full animate-[fadeInUp_0.5s_ease-out_forwards]"
                  style={{ animationDelay: `${index * 50}ms`, opacity: 0 }}
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
                ))
            ) : (
                <div className="col-span-3 text-center py-20 text-motion-muted">
                    {t.noResults}
                </div>
            )}
        </div>
      </div>
    </div>
  );
};