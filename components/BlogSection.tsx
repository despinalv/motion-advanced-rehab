import React from 'react';
import { ArrowRight, Calendar, User, Loader2 } from 'lucide-react';
import { Carousel } from './ui/Carousel';
import { useBlogPosts } from '../hooks/useBlogPosts';

interface BlogSectionProps {
  onNavigate: (target: string, data?: string) => void;
  language: 'en' | 'es';
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onNavigate, language }) => {
  const { posts, loading } = useBlogPosts(language);

  const translations = {
    en: {
      brand: 'The Motion Blog',
      title: 'Latest Insights',
      viewAll: 'View all articles',
      read: 'Read Article',
      loading: 'Loading articles...'
    },
    es: {
      brand: 'The Motion Blog',
      title: 'Últimos Artículos',
      viewAll: 'Ver todos',
      read: 'Leer Artículo',
      loading: 'Cargando artículos...'
    }
  };

  const t = translations[language];
  const displayPosts = posts.slice(0, 3); // Show top 3

  const renderPost = (post: typeof displayPosts[0]) => (
    <article
      key={post.id}
      onClick={() => onNavigate('blog-post', post.slug)}
      className="group cursor-pointer flex flex-col h-full w-full"
    >
      <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3]">
        {post.image ? (
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        ) : (
          <div className="w-full h-full bg-white/10 flex items-center justify-center text-motion-muted">
            No Image
          </div>
        )}
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
          <span className="text-xs font-medium text-white">{post.category}</span>
        </div>
      </div>

      <div className="flex items-center gap-4 text-xs text-motion-muted mb-3">
        <div className="flex items-center gap-1">
          <Calendar size={12} />
          <span>{new Date(post.date).toLocaleDateString()}</span>
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

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 text-motion-muted">
            <Loader2 className="w-8 h-8 animate-spin mb-4" />
            <p>{t.loading}</p>
          </div>
        ) : (
          <>
            {/* Desktop Grid */}
            <div className="hidden md:grid md:grid-cols-3 gap-8">
              {displayPosts.map((post, index) => (
                <div key={post.id} className="reveal-on-scroll" style={{ transitionDelay: `${index * 100}ms` }}>
                  {renderPost(post)}
                </div>
              ))}
            </div>

            {/* Mobile Carousel */}
            <Carousel
              items={displayPosts}
              renderItem={renderPost}
              className="reveal-on-scroll"
            />
          </>
        )}

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