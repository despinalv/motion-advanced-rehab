import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Calendar, User, Search } from 'lucide-react';

import { blogPosts } from '../src/data/blogPosts';

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
      posts: Object.values(blogPosts.en)
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
      posts: Object.values(blogPosts.es)
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
                onClick={() => onNavigate('blog-post', post.slug)}
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