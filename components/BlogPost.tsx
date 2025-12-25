import React from 'react';
import { ArrowLeft, Calendar, User, Clock, Share2, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';

interface BlogPostProps {
    postId: string;
    onNavigate: (target: string, data?: string) => void;
    onBack: () => void;
    language: 'en' | 'es';
}

export const BlogPost: React.FC<BlogPostProps> = ({ postId, onNavigate, onBack, language }) => {
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
    const postsEn: Record<string, any> = {
        '1': {
            id: '1',
            title: "Why Rest is Rust: The Science of Active Recovery",
            date: "Oct 12, 2024",
            author: "Dr. Alex Thorne",
            category: "Rehab Science",
            readTime: "6 min read",
            image: `${import.meta.env.BASE_URL}images/blog_1.jpg`,
            content: (
                <>
                    <p className="lead text-xl text-white font-light mb-8">
                        For decades, the standard advice for injury was R.I.C.E. (Rest, Ice, Compression, Elevation). While well-intentioned, modern research suggests that complete rest might actually be delaying your return to sport.
                    </p>
                    <h3 className="text-2xl text-white font-semibold mt-12 mb-4">The Problem with Passive Rest</h3>
                    <p className="mb-6">
                        When you completely immobilize a tissue, you are signaling to your body that it doesn't need to maintain strength or organization in that area. Muscle atrophy sets in within 48 hours. Tendons lose stiffness. The nervous system reduces its connection to the area.
                    </p>
                    <p className="mb-6">
                        "Rest is rust" isn't just a catchy phrase; it's physiological reality. Mechanotransduction is the process by which cells convert mechanical stimulus into chemical activity. Your cells <em>need</em> load to signal repair.
                    </p>
                </>
            )
        },
        '2': {
            id: '2',
            title: "The Myth of 'Perfect' Posture",
            date: "Sep 28, 2024",
            author: "Sarah Jenkins",
            category: "Biomechanics",
            readTime: "5 min read",
            image: `${import.meta.env.BASE_URL}images/blog_2.jpg`,
            content: (
                <>
                    <p className="lead text-xl text-white font-light mb-8">
                        Sit up straight. Shoulders back. Chest up. We've been told since childhood that there is a single "correct" way to hold our bodies. But evidence suggests that your next posture is your best posture.
                    </p>
                    <h3 className="text-2xl text-white font-semibold mt-12 mb-4">Structure vs. Function</h3>
                    <p className="mb-6">
                        Imaging studies consistently show that "bad" posture (like kyphosis or anterior pelvic tilt) correlates very poorly with pain. Many elite athletes have "terrible" alignment on a static chart but perform flawlessly.
                    </p>
                </>
            )
        },
        '3': {
            id: '3',
            title: "Zone 2 Training for Strength Athletes",
            date: "Sep 15, 2024",
            author: "Mike Ross",
            category: "Performance",
            readTime: "7 min read",
            image: `${import.meta.env.BASE_URL}images/blog_3.jpg`,
            content: (
                <>
                    <p className="lead text-xl text-white font-light mb-8">
                        You lift heavy, but is your engine holding you back? How low-intensity cardio unlocks higher strength outputs and faster recovery between sets.
                    </p>
                    <p className="mb-6">
                        Zone 2 training is performed at 60-70% of your max heart rate. It builds mitochondrial efficiency, allowing you to clear lactate faster. For a strength athlete, this means you can perform more high-quality sets with less fatigue.
                    </p>
                </>
            )
        },
        '4': {
            id: '4',
            title: "Understanding Pain Science",
            date: "Aug 22, 2024",
            author: "Dr. Alex Thorne",
            category: "Education",
            readTime: "8 min read",
            image: `${import.meta.env.BASE_URL}images/blog_4.jpg`,
            content: (
                <>
                    <p className="lead text-xl text-white font-light mb-8">
                        Pain is an output of the brain, designed to protect you. It does not always equal tissue damage.
                    </p>
                </>
            )
        },
        '5': {
            id: '5',
            title: "Mobility vs. Flexibility",
            date: "Aug 10, 2024",
            author: "Sarah Jenkins",
            category: "Biomechanics",
            readTime: "4 min read",
            image: `${import.meta.env.BASE_URL}images/blog_5.jpg`,
            content: (
                <>
                    <p className="lead text-xl text-white font-light mb-8">
                        Flexibility is passive range of motion. Mobility is active control over that range.
                    </p>
                </>
            )
        },
        '6': {
            id: '6',
            title: "Nutrition for Tendon Health",
            date: "Jul 15, 2024",
            author: "Mike Ross",
            category: "Nutrition",
            readTime: "5 min read",
            image: `${import.meta.env.BASE_URL}images/blog_6.jpg`,
            content: (
                <>
                    <p className="lead text-xl text-white font-light mb-8">
                        Tendons recover slowly due to poor blood supply. Nutrition can give them a nudge.
                    </p>
                </>
            )
        }
    };

    const postsEs: Record<string, any> = {
        '1': {
            id: '1',
            title: "Por qué el Reposo es Óxido: La Ciencia de la Recuperación Activa",
            date: "12 Oct, 2024",
            author: "Dr. Alex Thorne",
            category: "Ciencia de Rehabilitación",
            readTime: "6 min lectura",
            image: `${import.meta.env.BASE_URL}images/blog_1.jpg`,
            content: (
                <>
                    <p className="lead text-xl text-white font-light mb-8">
                        Durante décadas, el consejo estándar para lesiones fue R.I.C.E. (Reposo, Hielo, Compresión, Elevación). Aunque bien intencionado, la investigación moderna sugiere que el reposo completo podría estar retrasando tu regreso al deporte.
                    </p>
                    <h3 className="text-2xl text-white font-semibold mt-12 mb-4">El Problema con el Reposo Pasivo</h3>
                    <p className="mb-6">
                        Cuando inmovilizas completamente un tejido, le estás indicando a tu cuerpo que no necesita mantener fuerza u organización en esa área. La atrofia muscular comienza en 48 horas.
                    </p>
                    <p className="mb-6">
                        "El reposo es óxido" no es solo una frase pegadiza; es una realidad fisiológica. La mecanotransducción es el proceso mediante el cual las células convierten el estímulo mecánico en actividad química. Tus células <em>necesitan</em> carga para indicar reparación.
                    </p>
                </>
            )
        },
        '2': {
            id: '2',
            title: "El Mito de la Postura 'Perfecta'",
            date: "28 Sep, 2024",
            author: "Sarah Jenkins",
            category: "Biomecánica",
            readTime: "5 min lectura",
            image: `${import.meta.env.BASE_URL}images/blog_2.jpg`,
            content: (
                <>
                    <p className="lead text-xl text-white font-light mb-8">
                        Siéntate derecho. Hombros atrás. Pecho arriba. Nos han dicho desde niños que hay una sola forma "correcta" de sostener nuestros cuerpos. Pero la evidencia sugiere que tu próxima postura es tu mejor postura.
                    </p>
                    <h3 className="text-2xl text-white font-semibold mt-12 mb-4">Estructura vs. Función</h3>
                    <p className="mb-6">
                        Los estudios de imagen muestran consistentemente que la "mala" postura (como la cifosis o la inclinación pélvica anterior) se correlaciona muy pobremente con el dolor.
                    </p>
                </>
            )
        },
        '3': {
            id: '3',
            title: "Entrenamiento en Zona 2 para Atletas de Fuerza",
            date: "15 Sep, 2024",
            author: "Mike Ross",
            category: "Rendimiento",
            readTime: "7 min lectura",
            image: `${import.meta.env.BASE_URL}images/blog_3.jpg`,
            content: (
                <>
                    <p className="lead text-xl text-white font-light mb-8">
                        Levantas pesado, pero ¿tu motor te limita? Cómo el cardio de baja intensidad desbloquea mayor fuerza y recuperación más rápida entre series.
                    </p>
                </>
            )
        },
        '4': {
            id: '4',
            title: "Entendiendo la Ciencia del Dolor",
            date: "22 Ago, 2024",
            author: "Dr. Alex Thorne",
            category: "Educación",
            readTime: "8 min lectura",
            image: `${import.meta.env.BASE_URL}images/blog_4.jpg`,
            content: (
                <>
                    <p className="lead text-xl text-white font-light mb-8">
                        El dolor es una salida del cerebro, diseñada para protegerte. No siempre es igual a daño tisular.
                    </p>
                </>
            )
        },
        '5': {
            id: '5',
            title: "Movilidad vs. Flexibilidad",
            date: "10 Ago, 2024",
            author: "Sarah Jenkins",
            category: "Biomecánica",
            readTime: "4 min lectura",
            image: `${import.meta.env.BASE_URL}images/blog_5.jpg`,
            content: (
                <>
                    <p className="lead text-xl text-white font-light mb-8">
                        La flexibilidad es rango de movimiento pasivo. La movilidad es control activo sobre ese rango.
                    </p>
                </>
            )
        },
        '6': {
            id: '6',
            title: "Nutrición para la Salud de los Tendones",
            date: "15 Jul, 2024",
            author: "Mike Ross",
            category: "Nutrición",
            readTime: "5 min lectura",
            image: `${import.meta.env.BASE_URL}images/blog_6.jpg`,
            content: (
                <>
                    <p className="lead text-xl text-white font-light mb-8">
                        Los tendones se recuperan lentamente debido al pobre suministro de sangre. La nutrición puede darles un empujón.
                    </p>
                </>
            )
        }
    };

    const posts = language === 'en' ? postsEn : postsEs;
    const post = posts[postId] || posts['1'];

    // Calculate Previous and Next Posts
    const postIds = Object.keys(posts).sort(); // Ensure order 1,2,3...
    const currentIndex = postIds.indexOf(postId);

    const prevPostId = currentIndex > 0 ? postIds[currentIndex - 1] : null;
    const nextPostId = currentIndex < postIds.length - 1 ? postIds[currentIndex + 1] : null;

    const prevPost = prevPostId ? posts[prevPostId] : null;
    const nextPost = nextPostId ? posts[nextPostId] : null;

    return (
        <div className="pt-32 pb-20 min-h-screen animate-[fadeInUp_0.5s_ease-out_forwards]">
            <div className="container mx-auto px-6 max-w-4xl">

                {/* Navigation Top */}
                <div className="flex justify-between items-center mb-8">
                    <button
                        onClick={onBack}
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
                                onClick={() => onNavigate('blog-post', prevPost.id)}
                                className="group w-full text-left"
                            >
                                <span className="flex items-center text-xs text-motion-muted uppercase tracking-widest mb-2 group-hover:text-motion-accent transition-colors">
                                    <ArrowLeft size={14} className="mr-2 group-hover:-translate-x-1 transition-transform" /> {t.prev}
                                </span>
                                <h4 className="text-white font-medium text-lg leading-tight group-hover:text-gray-300 transition-colors line-clamp-2">
                                    {prevPost.title}
                                </h4>
                            </button>
                        ) : (
                            <div className="opacity-0 pointer-events-none">Placeholder</div>
                        )}
                    </div>
                    <div className="text-right">
                        {nextPost ? (
                            <button
                                onClick={() => onNavigate('blog-post', nextPost.id)}
                                className="group w-full text-right flex flex-col items-end"
                            >
                                <span className="flex items-center text-xs text-motion-muted uppercase tracking-widest mb-2 group-hover:text-motion-accent transition-colors">
                                    {t.next} <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <h4 className="text-white font-medium text-lg leading-tight group-hover:text-gray-300 transition-colors line-clamp-2">
                                    {nextPost.title}
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
                    <Button onClick={() => onNavigate('contact')}>
                        {t.book}
                    </Button>
                </div>

            </div>
        </div>
    );
};