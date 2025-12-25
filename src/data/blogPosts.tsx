import React from 'react';

export interface BlogPostData {
    id: string;
    title: string;
    excerpt?: string; // Optional because full post might not need it duplicated if unused
    date: string;
    category: string;
    image: string;
    author: string;
    readTime?: string;
    content?: React.ReactNode;
}

export const blogPosts = {
    en: {
        '1': {
            id: '1',
            title: "Why Rest is Rust: The Science of Active Recovery",
            excerpt: "Bed rest is outdated. Discover how controlled movement accelerates tissue repair and reduces downtime after injury.",
            date: "Dec 25, 2025",
            category: "Rehab Science",
            readTime: "6 min read",
            author: "Sofia Lopez",
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
            excerpt: "Stop obsessing over alignment. Your next posture is your best posture. Learn why variability matters more than rigidity.",
            date: "Sep 28, 2024",
            category: "Biomechanics",
            readTime: "5 min read",
            author: "Sarah Jenkins",
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
            excerpt: "You lift heavy, but is your engine holding you back? How low-intensity cardio unlocks higher strength outputs.",
            date: "Sep 15, 2024",
            category: "Performance",
            readTime: "7 min read",
            author: "Mike Ross",
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
            excerpt: "Pain is an output of the brain, designed to protect you. It does not always equal tissue damage.",
            date: "Aug 22, 2024",
            category: "Education",
            readTime: "8 min read",
            author: "Dr. Alex Thorne",
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
            excerpt: "Flexibility is passive range of motion. Mobility is active control over that range.",
            date: "Aug 10, 2024",
            category: "Biomechanics",
            readTime: "4 min read",
            author: "Sarah Jenkins",
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
            excerpt: "Tendons recover slowly due to poor blood supply. Nutrition can give them a nudge.",
            date: "Jul 15, 2024",
            category: "Nutrition",
            readTime: "5 min read",
            author: "Mike Ross",
            image: `${import.meta.env.BASE_URL}images/blog_6.jpg`,
            content: (
                <>
                    <p className="lead text-xl text-white font-light mb-8">
                        Tendons recover slowly due to poor blood supply. Nutrition can give them a nudge.
                    </p>
                </>
            )
        }
    },
    es: {
        '1': {
            id: '1',
            title: "Por qué el Reposo es Óxido: La Ciencia de la Recuperación Activa",
            excerpt: "El reposo en cama es obsoleto. Descubre cómo el movimiento controlado acelera la reparación de tejidos.",
            date: "25 Dec, 2025",
            category: "Ciencia de Rehabilitación",
            readTime: "6 min lectura",
            author: "Sofia Lopez",
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
            excerpt: "Deja de obsesionarte con la alineación. Tu próxima postura es tu mejor postura. Aprende por qué la variabilidad importa más.",
            date: "28 Sep, 2024",
            category: "Biomecánica",
            readTime: "5 min lectura",
            author: "Sarah Jenkins",
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
            excerpt: "Levantas pesado, pero ¿tu motor te limita? Cómo el cardio de baja intensidad desbloquea mayor fuerza.",
            date: "15 Sep, 2024",
            category: "Rendimiento",
            readTime: "7 min lectura",
            author: "Mike Ross",
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
            excerpt: "El dolor es una salida del cerebro, diseñada para protegerte. No siempre es igual a daño tisular.",
            date: "22 Ago, 2024",
            category: "Educación",
            readTime: "8 min lectura",
            author: "Dr. Alex Thorne",
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
            excerpt: "La flexibilidad es rango de movimiento pasivo. La movilidad es control activo sobre ese rango.",
            date: "10 Ago, 2024",
            category: "Biomecánica",
            readTime: "4 min lectura",
            author: "Sarah Jenkins",
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
            excerpt: "Los tendones se recuperan lentamente debido al pobre suministro de sangre. La nutrición puede darles un empujón.",
            date: "15 Jul, 2024",
            category: "Nutrición",
            readTime: "5 min lectura",
            author: "Mike Ross",
            image: `${import.meta.env.BASE_URL}images/blog_6.jpg`,
            content: (
                <>
                    <p className="lead text-xl text-white font-light mb-8">
                        Los tendones se recuperan lentamente debido al pobre suministro de sangre. La nutrición puede darles un empujón.
                    </p>
                </>
            )
        }
    }
};
