import React, { useEffect } from 'react';
import { ArrowLeft, Calendar, User, Clock, Share2, ArrowRight } from 'lucide-react';
import { blogPosts } from '../src/data/blogPosts';
import { Button } from './ui/Button';
import { useParams, useNavigate } from 'react-router-dom';

interface BlogPostProps {
    // Props are less relevant now as we use params, but keeping signature for compatibility if needed
    onNavigate?: (target: string, data?: string) => void;
    onBack?: () => void;
    language: 'en' | 'es';
}

export const BlogPost: React.FC<BlogPostProps> = ({ onBack, language }) => {
    const { id } = useParams<{ id: string }>(); // This 'id' is actually the slug
    const navigate = useNavigate();

    const translations = {
        en: {
            back: 'Back to Journal',
            read: 'min read',
            prev: 'Previous',
            next: 'Next',
            ready: 'Ready to move better?',
            join: 'Join our programs and apply these principles to your own training today.',
            book: 'Book an Assessment'
        },
        es: {
            back: 'Volver al Blog',
            read: 'min lectura',
            prev: 'Anterior',
            next: 'Siguiente',
            ready: '¿Listo para moverte mejor?',
            join: 'Únete a nuestros programas y aplica estos principios a tu entrenamiento hoy.',
            book: 'Reservar Evaluación'
        }
    };

    const t = translations[language];

    // Data
    const postsEn: Record<string, any> = blogPosts.en;
    const postsEs: Record<string, any> = blogPosts.es;

    const posts = language === 'en' ? postsEn : postsEs;

    // FIND POST BY SLUG (since 'id' from params is the slug)
    // We search the values to find the matching slug
    const post = Object.values(posts).find((p: any) => p.slug === id) || Object.values(posts)[0];

    // Calculate Previous and Next Posts
    const allPosts = Object.values(posts);
    const currentIndex = allPosts.findIndex((p: any) => p.slug === id);

    const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
    const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    const handleBack = () => {
        if (onBack) onBack();
        else navigate('/blog');
    }

    return (
        <div className="pt-32 pb-20 min-h-screen animate-[fadeInUp_0.5s_ease-out_forwards]">
            <div className="container mx-auto px-6 max-w-4xl">

                {/* Navigation Top */}
                <div className="flex justify-between items-center mb-8">
                    <button
                        onClick={handleBack}
                        className="flex items-center text-motion-muted hover:text-white transition-colors group"
                    >
                        <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                        {t.back}
                    </button>

                    <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors">
                        <Share2 size={18} />
                    </button>
                </div>

                {/* Header */}
                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="bg-motion-accent/20 text-motion-accent text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                            {post.category}
                        </span>
                        <span className="text-motion-muted text-xs flex items-center gap-1">
                            <Clock size={12} /> {post.readTime}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tighter mb-6 leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex items-center gap-4 text-sm text-motion-muted border-t border-white/10 pt-6 mt-8">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-white/10 overflow-hidden">
                                <img src={`${import.meta.env.BASE_URL}images/avatar_placeholder.jpg`} alt="Author" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-white font-medium">{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar size={14} />
                            <span>{post.date}</span>
                        </div>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="w-full aspect-video rounded-2xl overflow-hidden mb-12 shadow-2xl">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                </div>

                {/* Content */}
                <div className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed">
                    {post.content}
                </div>

                {/* Post Navigation */}
                <div className="mt-20 pt-12 border-t border-white/10 grid md:grid-cols-2 gap-8">
                    <div className="text-left">
                        {prevPost ? (
                            <button
                                onClick={() => navigate(`/blog/${(prevPost as any).slug}`)}
                                className="group w-full text-left bg-transparent border-none p-0 cursor-pointer"
                            >
                                <span className="flex items-center text-xs text-motion-muted uppercase tracking-widest mb-2 group-hover:text-motion-accent transition-colors">
                                    <ArrowLeft size={14} className="mr-2 group-hover:-translate-x-1 transition-transform" /> {t.prev}
                                </span>
                                <h4 className="text-white font-medium text-lg leading-tight group-hover:text-gray-300 transition-colors line-clamp-2">
                                    {(prevPost as any).title}
                                </h4>
                            </button>
                        ) : (
                            <div className="opacity-0 pointer-events-none">Placeholder</div>
                        )}
                    </div>
                    <div className="text-right">
                        {nextPost ? (
                            <button
                                onClick={() => navigate(`/blog/${(nextPost as any).slug}`)}
                                className="group w-full text-right flex flex-col items-end bg-transparent border-none p-0 cursor-pointer"
                            >
                                <span className="flex items-center text-xs text-motion-muted uppercase tracking-widest mb-2 group-hover:text-motion-accent transition-colors">
                                    {t.next} <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <h4 className="text-white font-medium text-lg leading-tight group-hover:text-gray-300 transition-colors line-clamp-2">
                                    {(nextPost as any).title}
                                </h4>
                            </button>
                        ) : (
                            <div className="opacity-0 pointer-events-none">Placeholder</div>
                        )}
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-20 p-10 bg-motion-surface rounded-3xl border border-white/5 text-center">
                    <h3 className="text-2xl font-semibold text-white mb-4">{t.ready}</h3>
                    <p className="text-motion-muted mb-8 max-w-lg mx-auto">
                        {t.join}
                    </p>
                    <Button onClick={() => navigate('/contact')}>
                        {t.book}
                    </Button>
                </div>

            </div>
        </div>
    );
};