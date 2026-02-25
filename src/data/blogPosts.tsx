import React from 'react';

export interface BlogPostData {
    id: string;
    slug: string;
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
            slug: 'science-of-active-recovery',
            title: "Why Rest is Rust: The Science of Active Recovery",
            excerpt: "Bed rest is outdated. Discover how controlled movement accelerates tissue repair and reduces downtime after injury.",
            date: "Dec 25, 2025",
            category: "Rehab Science",
            readTime: "6 min read",
            author: "Sofia Lopez",
            image: `${import.meta.env.BASE_URL}images/blog_1.webp`,
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
            slug: 'myth-of-perfect-posture',
            title: "The myth of perfect posture",
            excerpt: "Discover why the ideal posture is an illusion and how the fear of movement may be worsening your back pain.",
            date: "2026-02-24",
            category: "Biomechanics",
            readTime: "5 min read",
            author: "Sofia L.",
            image: `${import.meta.env.BASE_URL}images/postura_mito.jpg`,
            content: (
                <>
                    <p className="lead text-xl text-white font-light mb-6">
                        Probably, upon reading the title of this article, you straightened up in your chair, pulled your shoulders back, and tried to adopt that "ideal posture" you were taught since childhood. It is an automatic and very common reaction.
                    </p>
                    <p className="mb-8">
                        For decades, we have been sold the idea that slouching is our spine's number one enemy and that sitting up straight is the ultimate cure. I know how frustrating it is to have spent time and money on ergonomic chairs or posture correctors, only to notice your back still aches at the end of the day.
                    </p>

                    <h3 className="text-2xl text-white font-semibold mt-10 mb-4">The end of the "correct" posture</h3>
                    <p className="mb-4">
                        Current science is very clear: <em>there is no single optimal static posture or perfect alignment that prevents back pain</em>. Recent studies have shown that there is no linear correlation between the static posture we adopt (such as having a pronounced lordosis or sitting slouched) and the pain we feel.
                    </p>
                    <p className="mb-8">
                        We constantly see people in our clinic with "ideal" postures experiencing disabling pain, while others with obvious asymmetries live completely asymptomatic lives. Your body is not a rigid machine that must be perfectly aligned to avoid breaking; it is a complex, dynamic, and highly adaptable biological system.
                    </p>

                    <h3 className="text-2xl text-white font-semibold mt-10 mb-4">Movement variability: The real key</h3>
                    <p className="mb-4">
                        The problem isn't how you sit, but how long you spend in the exact same position. Maintained postural staticity generates an environment of ischemia: a temporary reduction in blood flow to soft tissues that causes an accumulation of metabolic byproducts, thereby activating your body's alarm signals in the form of pain.
                    </p>
                    <p className="mb-8">
                        Instead of seeking static perfection, biomechanics experts today advocate for <em>movement variability</em>. A healthy neuromotor system flows between multiple strategies and postures to distribute mechanical stress, without rigidly stagnating in just one.
                    </p>

                    <h3 className="text-2xl text-white font-semibold mt-10 mb-4">Kinesiophobia: When fear hurts more than posture</h3>
                    <p className="mb-4">
                        What happens when you firmly believe your back is unstable or fragile? You start moving with fear. This phenomenon is known as <em>kinesiophobia</em>: the irrational fear of performing certain movements due to the belief that they will cause more pain or a new injury.
                    </p>
                    <p className="mb-8">
                        Kinesiophobia is a factor that predicts long-term disability much better than the initial physical damage. Out of fear, we overprotect the spine, constantly tense the abdomen to brace it (altering our motor control), and avoid relaxing. This constant vigilance and stiffness not only increases compression forces on your back, but also perpetuates a vicious cycle of fatigue and ischemia. Ultimately, overprotection and fear end up being far more harmful to you than sitting "poorly" in front of the computer.
                    </p>

                    <h3 className="text-2xl text-white font-semibold mt-10 mb-4">3 Practical Tips</h3>
                    <ol className="list-decimal pl-5 mb-8 text-motion-muted space-y-3">
                        <li><strong>Your best posture is your next posture:</strong> Forget about staying tense in the "correct position". Alter your posture frequently, slouch if it is comfortable for a while, and then change. Variety is the key.</li>
                        <li><strong>Lose the fear of bending:</strong> Your spine is an incredibly strong structure designed to flex, rotate, and bear loads. Moving naturally is safe.</li>
                        <li><strong>Take active micro-breaks:</strong> Get up every 30 or 40 minutes. Take a few steps, stretch, or simply shift your body weight. This will reactivate your blood flow and "lubricate" your tissues.</li>
                    </ol>

                    <p className="mb-8 italic border-l-4 border-motion-accent pl-4 py-2 bg-white/5 rounded-r-lg">
                        At <strong>Motion - advanced rehab</strong>, our philosophy is to support you in regaining confidence in yourself. Your body is strong and resilient; don't let fear paralyze you. We invite you to move without restrictions again and discover your true potential!
                    </p>

                    <hr className="border-white/10 my-8" />

                    <h3 className="text-xl text-white font-semibold mb-4">Scientific References & Further Reading</h3>
                    <ul className="list-disc pl-5 mb-6 text-sm text-motion-muted space-y-2">
                        <li><em>The Jersey Sports & Spinal Clinic:</em> <a href="https://scholar.google.com/scholar?q=Back+pain+-+'Bad'+posture+is+not+the+villain" target="_blank" rel="noopener noreferrer" className="text-motion-accent hover:underline">"Back pain - 'Bad' posture is not the villain"</a></li>
                        <li><em>Compass Health Clinic:</em> <a href="https://scholar.google.com/scholar?q=The+Myth+of+Perfect+Posture" target="_blank" rel="noopener noreferrer" className="text-motion-accent hover:underline">"The Myth of Perfect Posture"</a></li>
                        <li><em>Physio Network:</em> <a href="https://scholar.google.com/scholar?q=A+review+of+core+stability+training+in+rehabilitation:+Facts,+fallacies+and+future+directions" target="_blank" rel="noopener noreferrer" className="text-motion-accent hover:underline">"A review of core stability training in rehabilitation: Facts, fallacies and future directions"</a></li>
                        <li><em>ALMohiza et al. (2023):</em> <a href="https://scholar.google.com/scholar?q=The+Mediation+Effect+of+Pain+on+the+Relationship+between+Kinesiophobia+and+Lumbar+Joint+Position+Sense+in+Chronic+Low+Back+Pain+Individuals" target="_blank" rel="noopener noreferrer" className="text-motion-accent hover:underline">"The Mediation Effect of Pain on the Relationship between Kinesiophobia and Lumbar Joint Position Sense in Chronic Low Back Pain Individuals."</a> International Journal of Environmental Research and Public Health.</li>
                        <li><em>Bordeleau et al. (2022):</em> <a href="https://scholar.google.com/scholar?q=Treatments+for+kinesiophobia+in+people+with+chronic+pain:+A+scoping+review" target="_blank" rel="noopener noreferrer" className="text-motion-accent hover:underline">"Treatments for kinesiophobia in people with chronic pain: A scoping review."</a> Frontiers in Behavioral Neuroscience.</li>
                    </ul>
                </>
            )
        },
        '3': {
            id: '3',
            slug: 'zone-2-training-strength',
            title: "Zone 2 Training for Strength Athletes",
            excerpt: "You lift heavy, but is your engine holding you back? How low-intensity cardio unlocks higher strength outputs.",
            date: "Sep 15, 2024",
            category: "Performance",
            readTime: "7 min read",
            author: "Mike Ross",
            image: `${import.meta.env.BASE_URL}images/blog_3.webp`,
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
            slug: 'understanding-pain-science',
            title: "Understanding Pain Science",
            excerpt: "Pain is an output of the brain, designed to protect you. It does not always equal tissue damage.",
            date: "Aug 22, 2024",
            category: "Education",
            readTime: "8 min read",
            author: "Dr. Alex Thorne",
            image: `${import.meta.env.BASE_URL}images/blog_4.webp`,
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
            slug: 'mobility-vs-flexibility',
            title: "Mobility vs. Flexibility",
            excerpt: "Flexibility is passive range of motion. Mobility is active control over that range.",
            date: "Aug 10, 2024",
            category: "Biomechanics",
            readTime: "4 min read",
            author: "Sarah Jenkins",
            image: `${import.meta.env.BASE_URL}images/blog_5.webp`,
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
            slug: 'nutrition-tendon-health',
            title: "Nutrition for Tendon Health",
            excerpt: "Tendons recover slowly due to poor blood supply. Nutrition can give them a nudge.",
            date: "Jul 15, 2024",
            category: "Nutrition",
            readTime: "5 min read",
            author: "Mike Ross",
            image: `${import.meta.env.BASE_URL}images/blog_6.webp`,
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
            slug: 'ciencia-recuperacion-activa',
            title: "Por qué el Reposo es Óxido: La Ciencia de la Recuperación Activa",
            excerpt: "El reposo en cama es obsoleto. Descubre cómo el movimiento controlado acelera la reparación de tejidos.",
            date: "25 Dec, 2025",
            category: "Ciencia de Rehabilitación",
            readTime: "6 min lectura",
            author: "Sofia Lopez",
            image: `${import.meta.env.BASE_URL}images/blog_1.webp`,
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
            slug: 'mito-postura-perfecta',
            title: "El mito de la postura perfecta",
            excerpt: "Descubre por qué la postura ideal es una ilusión y cómo el miedo al movimiento podría estar empeorando tu dolor de espalda.",
            date: "2026-02-24",
            category: "Biomecánica",
            readTime: "5 min lectura",
            author: "Sofia L.",
            image: `${import.meta.env.BASE_URL}images/postura_mito.jpg`,
            content: (
                <>
                    <p className="lead text-xl text-white font-light mb-6">
                        Probablemente, al leer el título de este artículo, te enderezaste en tu silla, echaste los hombros hacia atrás e intentaste adoptar esa "postura ideal" que te enseñaron desde la infancia. Es una reacción automática y muy común.
                    </p>
                    <p className="mb-8">
                        Durante décadas, nos han vendido la idea de que encorvarse es el enemigo número uno de nuestra columna y que sentarse derecho es la cura definitiva. Sé lo frustrante que es haber gastado tiempo y dinero en sillas ergonómicas o correctores de postura, solo para notar que tu espalda sigue doliendo al final del día.
                    </p>

                    <h3 className="text-2xl text-white font-semibold mt-10 mb-4">El fin de la postura "correcta"</h3>
                    <p className="mb-4">
                        La ciencia actual es muy clara: <em>no hay una sola postura estática óptima o alineación perfecta que prevenga el dolor de espalda</em>. Estudios recientes han demostrado que no hay una correlación lineal entre la postura estática que adoptamos (como tener una lordosis pronunciada o sentarse encorvado) y el dolor que sentimos.
                    </p>
                    <p className="mb-8">
                        Constantemente vemos personas en nuestra clínica con posturas "ideales" experimentando dolor incapacitante, mientras que otros con asimetrías obvias viven vidas completamente asintomáticas. Tu cuerpo no es una máquina rígida que deba estar perfectamente alineada para evitar romperse; es un sistema biológico complejo, dinámico y altamente adaptable.
                    </p>

                    <h3 className="text-2xl text-white font-semibold mt-10 mb-4">Variabilidad del movimiento: La verdadera clave</h3>
                    <p className="mb-4">
                        El problema no es cómo te sientas, sino cuánto tiempo pasas exactamente en la misma posición. La estaticidad postural mantenida genera un entorno de isquemia: una reducción temporal del flujo sanguíneo a los tejidos blandos que causa una acumulación de subproductos metabólicos, activando así las señales de alarma de tu cuerpo en forma de dolor.
                    </p>
                    <p className="mb-8">
                        En lugar de buscar la perfección estática, los expertos en biomecánica hoy abogan por la <em>variabilidad del movimiento</em>. Un sistema neuromotor saludable fluye entre múltiples estrategias y posturas para distribuir el estrés mecánico, sin estancarse rígidamente en solo una.
                    </p>

                    <h3 className="text-2xl text-white font-semibold mt-10 mb-4">Kinesiofobia: Cuando el miedo duele más que la postura</h3>
                    <p className="mb-4">
                        ¿Qué sucede cuando crees firmemente que tu espalda es inestable o frágil? Empiezas a moverte con miedo. Este fenómeno se conoce como <em>kinesiofobia</em>: el miedo irracional a realizar ciertos movimientos debido a la creencia de que causarán más dolor o una nueva lesión.
                    </p>
                    <p className="mb-8">
                        La kinesiofobia es un factor que predice la discapacidad a largo plazo mucho mejor que el daño físico inicial. Por miedo, sobreprotegemos la columna, tensamos constantemente el abdomen como refuerzo (alterando nuestro control motor) y evitamos relajarnos. Esta vigilancia constante y rigidez no solo aumenta las fuerzas de compresión en tu espalda, sino que también perpetúa un círculo vicioso de fatiga e isquemia. En última instancia, la sobreprotección y el miedo terminan siendo mucho más dañinos para ti que sentarte "mal" frente a la computadora.
                    </p>

                    <h3 className="text-2xl text-white font-semibold mt-10 mb-4">3 Consejos Prácticos</h3>
                    <ol className="list-decimal pl-5 mb-8 text-motion-muted space-y-3">
                        <li><strong>Tu mejor postura es tu próxima postura:</strong> Olvídate de mantenerte tenso en la "posición correcta". Altera tu postura frecuentemente, encórvate si resulta cómodo por un rato, y luego cambia. La variedad es la clave.</li>
                        <li><strong>Pierde el miedo a agacharte:</strong> Tu columna es una estructura increíblemente fuerte diseñada para flexionarse, rotar y soportar cargas. Moverse naturalmente es seguro.</li>
                        <li><strong>Toma micro-descansos activos:</strong> Levántate cada 30 o 40 minutos. Da unos pasos, estírate, o simplemente cambia el peso de tu cuerpo. Esto reactivará tu flujo sanguíneo y "lubricará" tus tejidos.</li>
                    </ol>

                    <p className="mb-8 italic border-l-4 border-motion-accent pl-4 py-2 bg-white/5 rounded-r-lg">
                        En <strong>Motion - advanced rehab</strong>, nuestra filosofía es apoyarte para que recuperes la confianza en ti mismo. Tu cuerpo es fuerte y resistente; no dejes que el miedo te paralice. ¡Te invitamos a moverte sin restricciones nuevamente y descubrir tu verdadero potencial!
                    </p>

                    <hr className="border-white/10 my-8" />

                    <h3 className="text-xl text-white font-semibold mb-4">Referencias Científicas y Lectura Adicional</h3>
                    <ul className="list-disc pl-5 mb-6 text-sm text-motion-muted space-y-2">
                        <li><em>The Jersey Sports & Spinal Clinic:</em> <a href="https://scholar.google.com/scholar?q=Back+pain+-+'Bad'+posture+is+not+the+villain" target="_blank" rel="noopener noreferrer" className="text-motion-accent hover:underline">"Back pain - 'Bad' posture is not the villain"</a></li>
                        <li><em>Compass Health Clinic:</em> <a href="https://scholar.google.com/scholar?q=The+Myth+of+Perfect+Posture" target="_blank" rel="noopener noreferrer" className="text-motion-accent hover:underline">"The Myth of Perfect Posture"</a></li>
                        <li><em>Physio Network:</em> <a href="https://scholar.google.com/scholar?q=A+review+of+core+stability+training+in+rehabilitation:+Facts,+fallacies+and+future+directions" target="_blank" rel="noopener noreferrer" className="text-motion-accent hover:underline">"A review of core stability training in rehabilitation: Facts, fallacies and future directions"</a></li>
                        <li><em>ALMohiza et al. (2023):</em> <a href="https://scholar.google.com/scholar?q=The+Mediation+Effect+of+Pain+on+the+Relationship+between+Kinesiophobia+and+Lumbar+Joint+Position+Sense+in+Chronic+Low+Back+Pain+Individuals" target="_blank" rel="noopener noreferrer" className="text-motion-accent hover:underline">"The Mediation Effect of Pain on the Relationship between Kinesiophobia and Lumbar Joint Position Sense in Chronic Low Back Pain Individuals."</a> International Journal of Environmental Research and Public Health.</li>
                        <li><em>Bordeleau et al. (2022):</em> <a href="https://scholar.google.com/scholar?q=Treatments+for+kinesiophobia+in+people+with+chronic+pain:+A+scoping+review" target="_blank" rel="noopener noreferrer" className="text-motion-accent hover:underline">"Treatments for kinesiophobia in people with chronic pain: A scoping review."</a> Frontiers in Behavioral Neuroscience.</li>
                    </ul>
                </>
            )
        },
        '3': {
            id: '3',
            slug: 'entrenamiento-zona-2-fuerza',
            title: "Entrenamiento en Zona 2 para Atletas de Fuerza",
            excerpt: "Levantas pesado, pero ¿tu motor te limita? Cómo el cardio de baja intensidad desbloquea mayor fuerza.",
            date: "15 Sep, 2024",
            category: "Rendimiento",
            readTime: "7 min lectura",
            author: "Mike Ross",
            image: `${import.meta.env.BASE_URL}images/blog_3.webp`,
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
            slug: 'entendiendo-ciencia-dolor',
            title: "Entendiendo la Ciencia del Dolor",
            excerpt: "El dolor es una salida del cerebro, diseñada para protegerte. No siempre es igual a daño tisular.",
            date: "22 Ago, 2024",
            category: "Educación",
            readTime: "8 min lectura",
            author: "Dr. Alex Thorne",
            image: `${import.meta.env.BASE_URL}images/blog_4.webp`,
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
            slug: 'movilidad-vs-flexibilidad',
            title: "Movilidad vs. Flexibilidad",
            excerpt: "La flexibilidad es rango de movimiento pasivo. La movilidad es control activo sobre ese rango.",
            date: "10 Ago, 2024",
            category: "Biomecánica",
            readTime: "4 min lectura",
            author: "Sarah Jenkins",
            image: `${import.meta.env.BASE_URL}images/blog_5.webp`,
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
            slug: 'nutricion-salud-tendones',
            title: "Nutrición para la Salud de los Tendones",
            excerpt: "Los tendones se recuperan lentamente debido al pobre suministro de sangre. La nutrición puede darles un empujón.",
            date: "15 Jul, 2024",
            category: "Nutrición",
            readTime: "5 min lectura",
            author: "Mike Ross",
            image: `${import.meta.env.BASE_URL}images/blog_6.webp`,
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
