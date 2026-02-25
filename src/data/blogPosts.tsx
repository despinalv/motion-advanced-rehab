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
            image: `${import.meta.env.BASE_URL}images/blog_2.webp`,
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
                        <li><em>The Jersey Sports & Spinal Clinic:</em> <a href="https://www.physiojersey.com/back-pain-bad-posture-is-not-the-villain/" target="_blank" rel="noopener noreferrer" className="text-motion-accent hover:underline">"Back pain - 'Bad' posture is not the villain"</a></li>
                        <li><em>Compass Health Clinic:</em> <a href="https://www.compasshealthclinic.co.uk/the-myth-of-perfect-posture" target="_blank" rel="noopener noreferrer" className="text-motion-accent hover:underline">"The Myth of Perfect Posture"</a></li>
                        <li><em>Physio Network:</em> <a href="https://www.physio-network.com/blog/core-stability-training-in-rehabilitation/" target="_blank" rel="noopener noreferrer" className="text-motion-accent hover:underline">"A review of core stability training in rehabilitation: Facts, fallacies and future directions"</a></li>
                        <li><em>ALMohiza et al. (2023):</em> <a href="https://pubmed.ncbi.nlm.nih.gov/36982105/" target="_blank" rel="noopener noreferrer" className="text-motion-accent hover:underline">"The Mediation Effect of Pain on the Relationship between Kinesiophobia and Lumbar Joint Position Sense in Chronic Low Back Pain Individuals."</a> International Journal of Environmental Research and Public Health.</li>
                        <li><em>Bordeleau et al. (2022):</em> <a href="https://www.frontiersin.org/articles/10.3389/fnbeh.2022.933483/full" target="_blank" rel="noopener noreferrer" className="text-motion-accent hover:underline">"Treatments for kinesiophobia in people with chronic pain: A scoping review."</a> Frontiers in Behavioral Neuroscience.</li>
                    </ul>
                </>
            )
        },
        '3': {
            id: '3',
            slug: 'understanding-pain-science',
            title: "Understanding pain science",
            excerpt: "Discover why intense pain doesn't always mean serious damage and how your emotions, stress, and fear may be amplifying what you feel.",
            date: "2026-02-24",
            category: "Neuroscience",
            readTime: "5 min read",
            author: "Sofia L.",
            image: `${import.meta.env.BASE_URL}images/blog_3.webp`,
            content: (
                <>
                    <p className="lead text-xl text-white font-light mb-6">
                        Have you ever gotten an MRI for severe, crippling pain, only for the specialist to tell you: "your structure is perfect, nothing is broken"? It's a strange mix of relief and deep frustration. If there's no structural damage, why does it hurt so much?
                    </p>
                    <p className="mb-8">
                        For a long time, medicine believed in Descartes' model: the body is a machine, and if there is pain, there must be a broken part. Today we know this is far from reality. Pain is an experience naturally produced 100% by the brain, and its goal is not to measure damage, but to protect you.
                    </p>

                    <h3 className="text-2xl text-white font-semibold mt-10 mb-4">The hypersensitive alarm system</h3>
                    <p className="mb-4">
                        Imagine the nervous system as your home's fire alarm. Its function is to sound loudly when there is a fire (a real injury). However, when we experience persistent pain, this alarm gets uncalibrated. Suddenly, you no longer need a fire for it to go off; the simple smoke from burnt toast (a harmless movement) triggers the siren at full volume.
                    </p>
                    <p className="mb-8">
                        This neurological phenomenon is known as <em>central sensitization</em>. Your nervous system becomes hyper-vigilant, and pain pathways become so efficient that they begin to send danger signals to normal stimuli, like bending down to pick up a pencil or walking. The pain is very real, but the physical tissue is no longer in danger.
                    </p>

                    <h3 className="text-2xl text-white font-semibold mt-10 mb-4">The psychological amplifier: Fear and Frustration</h3>
                    <p className="mb-4">
                        This is where the science gets fascinating (and crucial for your recovery). Pain is not only physical; it is a biopsychosocial experience. The areas of your brain that process physical pain share direct pathways with the areas that process fear, anxiety, stress, and frustration.
                    </p>
                    <p className="mb-8">
                        If you believe your pain means your body is destroying itself, your brain perceives a massive threat and, in response, "turns up the volume" of the pain to force you to stop. Chronic work stress, lack of sleep, depression, and the frustration of not being able to do your daily activities act like gasoline for the nervous system's fire. You are not imagining it: psychology and emotions literally alter the neurochemistry of your pain.
                    </p>

                    <h3 className="text-2xl text-white font-semibold mt-10 mb-4">Graded Exposure: Recalibrating the brain</h3>
                    <p className="mb-4">
                        If complete rest and avoiding movement do not heal persistent pain (and even make it worse by deconditioning the muscles), what is the solution? The answer lies in showing your brain that movement is safe through <em>graded exposure</em>.
                    </p>
                    <p className="mb-8">
                        Graded exposure involves slowly reintroducing the movements you fear, in tolerable doses. By moving without suffering catastrophic damage, you send your brain new safety information. Gradually, the alarm begins to turn off, confidence returns, and the pain volume decreases.
                    </p>

                    <h3 className="text-2xl text-white font-semibold mt-10 mb-4">3 Practical steps to get started</h3>
                    <ol className="list-decimal pl-5 mb-8 text-motion-muted space-y-3">
                        <li><strong>Recognize that pain does not equal damage:</strong> Feeling discomfort when doing a new exercise or resuming an activity does not mean you are injuring yourself. Often, it is just your nervous system being overprotective.</li>
                        <li><strong>Identify your amplifiers:</strong> Observe what happens to your pain on the days you are more stressed, anxious, or sleep poorly. Stress management is a pain treatment in itself.</li>
                        <li><strong>Apply the traffic light rule:</strong> When moving, mild pain (green light) or moderate pain that disappears quickly (yellow light) is acceptable and safe. You should only stop if the pain is sharp, disabling, and long-lasting (red light).</li>
                    </ol>

                    <p className="mb-8 italic border-l-4 border-motion-accent pl-4 py-2 bg-white/5 rounded-r-lg">
                        At <strong>Motion - advanced rehab</strong>, we know chronic pain can be lonely and frustrating. Our goal is not just to treat your tissues, but to teach you to understand your pain so it stops controlling you. Through education and guided movement, we help you recalibrate your system so you can return to doing what you love.
                    </p>

                    <hr className="border-white/10 my-8" />

                    <h3 className="text-xl text-white font-semibold mb-4">Scientific References & Further Reading</h3>
                    <ul className="list-disc pl-5 mb-6 text-sm text-motion-muted space-y-2">
                        <li><em>Moseley, G. L. (2007):</em> <a href="https://pubmed.ncbi.nlm.nih.gov/17697365/" target="_blank" rel="noopener noreferrer" className="text-motion-accent hover:underline">"Reconceptualising pain according to modern pain science."</a> Physical Therapy Reviews.</li>
                        <li><em>Louw, A., et al. (2016):</em> <a href="https://pubmed.ncbi.nlm.nih.gov/27351903/" target="_blank" rel="noopener noreferrer" className="text-motion-accent hover:underline">"The efficacy of pain neuroscience education on musculoskeletal pain: A systematic review of the literature."</a> Physiotherapy Theory and Practice.</li>
                        <li><em>Nijs, J., et al. (2013):</em> <a href="https://pubmed.ncbi.nlm.nih.gov/23273516/" target="_blank" rel="noopener noreferrer" className="text-motion-accent hover:underline">"Thinking beyond muscles and joints: therapists' and patients' attitudes and beliefs regarding chronic musculoskeletal pain are key to applying effective treatment."</a> Manual Therapy.</li>
                        <li><em>Malfliet, A., et al. (2018):</em> <a href="https://pubmed.ncbi.nlm.nih.gov/29710099/" target="_blank" rel="noopener noreferrer" className="text-motion-accent hover:underline">"Effect of Pain Neuroscience Education Combined With Cognition-Targeted Motor Control Training on Chronic Spinal Pain: A Randomized Clinical Trial."</a> JAMA Neurology.</li>
                        <li><em>Vlaeyen, J. W., & Linton, S. J. (2000):</em> <a href="https://pubmed.ncbi.nlm.nih.gov/10781906/" target="_blank" rel="noopener noreferrer" className="text-motion-accent hover:underline">"Fear-avoidance and its consequences in chronic musculoskeletal pain: a state of the art."</a> Pain.</li>
                    </ul>
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
            title: "Mobility vs Flexibility: Why stretching isn't always the answer",
            excerpt: "Discover the difference between flexibility and mobility, and why your body doesn't need to be stretched constantly, but rather challenged with active movement and motor control.",
            date: "2026-02-24",
            category: "Movement",
            readTime: "6 min read",
            author: "Sofia L.",
            image: `${import.meta.env.BASE_URL}images/blog_5.webp`,
            content: (
                <>
                    <p className="lead text-xl text-white font-light mb-6">
                        You wake up on a Monday morning and, as you reach down to grab your socks from the floor, you feel that sharp tug in the back of your thigh. Your immediate reaction is what everyone thinks: "I'm not flexible enough." You spend the next five minutes stretching hard, suffering a little, hoping that muscle will finally give in and lengthen. You feel a relief that lasts exactly as long as it takes to get to the kitchen for coffee, and then, the stiffness returns.
                    </p>
                    <p className="mb-8">
                        It is a constant frustration. Many patients come to Motion - advanced rehab with the idea that their body is a rigid structure, almost like glass that is about to break if it isn't stretched daily. But I want to tell you something important: your body is not fragile. It is an incredibly strong and adaptable structure that, sometimes, just needs a different strategy.
                    </p>

                    <h3 className="text-2xl text-white font-semibold mt-10 mb-4">The difference between reaching and controlling</h3>
                    <p className="mb-4">
                        We often use these words as if they were the same, but in the world of physiotherapy, we distinguish them clearly because the approach changes completely.
                    </p>
                    <p className="mb-4">
                        <strong>Flexibility</strong> is the passive range. In other words, how far your muscle goes when something external pushes it. If I lay you on the table and lift your leg, that is flexibility. It is simply the ability of your tissues to stretch.
                    </p>
                    <p className="mb-4">
                        <strong>Mobility</strong> is something much more interesting. It is the active range. It is about how far you can move a joint on your own, using your own strength and control. This is where motor control comes in, which is nothing more than your brain's ability to organize your muscles and move safely.
                    </p>
                    <p className="mb-8">
                        If you have a lot of flexibility but little mobility, you have a control problem. Your brain detects that you are not able to manage the joint at extreme angles and, to protect you, it "tightens" the muscle. That stiffness you feel isn't because the muscle is short; it's your nervous system pulling the handbrake.
                    </p>

                    <h3 className="text-2xl text-white font-semibold mt-10 mb-4">Your body doesn't need to be fixed, it needs to be challenged</h3>
                    <p className="mb-4">
                        There is a myth that we are "misaligned" or that we need someone to "put us back in place." The reality is that the body responds to tissue load. This technical term simply refers to the amount of stress your muscles and tendons can handle.
                    </p>
                    <p className="mb-8">
                        When you increase your mobility, you are teaching your nervous system that those ranges of motion are safe. We aren't looking for you to be made of rubber; we want you to be able to move in many different directions. Movement variability is our best tool against pain: the more varied the way you move, the more resilient your body becomes.
                    </p>

                    <h3 className="text-2xl text-white font-semibold mt-10 mb-4">3 Practical Tips</h3>
                    <p className="mb-4">
                        If you want to stop feeling "stuck" and start moving fluidly, try changing your approach with these three steps:
                    </p>
                    <ol className="list-decimal pl-5 mb-8 text-motion-muted space-y-3">
                        <li><strong>Prioritize active movement over classic stretching:</strong> Instead of staying still pulling on a foot for a minute, try slow and controlled movements that take the joint to its limit. For example, a very deep and paused squat works your mobility much better than any floor stretch.</li>
                        <li><strong>Add strength in long positions:</strong> Muscles feel safe when they are strong. Doing strength exercises while the muscle is stretched helps the brain release that "handbrake" I mentioned earlier.</li>
                        <li><strong>Do not be afraid of movement:</strong> Sometimes we avoid moving because something bothers us, and that only increases stiffness. Look for movements that do not cause you pain but take you out of your usual comfort zone.</li>
                    </ol>

                    <h3 className="text-2xl text-white font-semibold mt-10 mb-4">The path to confidence</h3>
                    <p className="mb-8 italic border-l-4 border-motion-accent pl-4 py-2 bg-white/5 rounded-r-lg">
                        At <strong>Motion - advanced rehab</strong>, we work under a very clear philosophy: we want you to regain confidence in yourself. You are not broken and you do not need temporary solutions. The goal is for you to understand how your body works so that you can move without fear, without restrictions, and with the security that you are capable of facing any physical challenge.
                    </p>
                    <p className="mb-8">
                        If you feel like you've tried every stretch in the world and you're still the same, maybe it's time to look beyond flexibility.
                    </p>
                    <p className="mb-8 font-semibold text-motion-accent hover:underline cursor-pointer">
                        Book an Evaluation
                    </p>

                    <hr className="border-white/10 my-8" />

                    <h3 className="text-xl text-white font-semibold mb-4">Scientific References & Further Reading</h3>
                    <ul className="list-disc pl-5 mb-6 text-sm text-motion-muted space-y-2">
                        <li><em>Behm, D. G., et al. (2016):</em> <a href="https://scholar.google.com/scholar?q=Acute+effects+of+muscle+stretching+on+physical+performance,+range+of+motion,+and+injury+incidence+in+healthy+active+individuals:+a+systematic+review" target="_blank" rel="noopener noreferrer" className="text-motion-accent hover:underline">"Acute effects of muscle stretching on physical performance, range of motion, and injury incidence in healthy active individuals: a systematic review."</a> Applied Physiology, Nutrition, and Metabolism.</li>
                        <li><em>Nuzzo, J. L. (2020):</em> <a href="https://scholar.google.com/scholar?q=The+Case+for+Retiring+Flexibility+as+a+Major+Component+of+Physical+Fitness" target="_blank" rel="noopener noreferrer" className="text-motion-accent hover:underline">"The Case for Retiring Flexibility as a Major Component of Physical Fitness."</a> Sports Medicine.</li>
                        <li><em>Afonso, J., et al. (2021):</em> <a href="https://scholar.google.com/scholar?q=The+Effectiveness+of+Joint+Mobilization+Techniques+in+Improving+Range+of+Motion:+A+Systematic+Review" target="_blank" rel="noopener noreferrer" className="text-motion-accent hover:underline">"The Effectiveness of Joint Mobilization Techniques in Improving Range of Motion: A Systematic Review."</a> Journal of Clinical Medicine.</li>
                    </ul>
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
            image: `${import.meta.env.BASE_URL}images/blog_2.webp`,
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
                        <li><em>The Jersey Sports & Spinal Clinic:</em> <a href="https://www.physiojersey.com/back-pain-bad-posture-is-not-the-villain/" target="_blank" rel="noopener noreferrer" className="text-motion-accent hover:underline">"Back pain - 'Bad' posture is not the villain"</a></li>
                        <li><em>Compass Health Clinic:</em> <a href="https://www.compasshealthclinic.co.uk/the-myth-of-perfect-posture" target="_blank" rel="noopener noreferrer" className="text-motion-accent hover:underline">"The Myth of Perfect Posture"</a></li>
                        <li><em>Physio Network:</em> <a href="https://www.physio-network.com/blog/core-stability-training-in-rehabilitation/" target="_blank" rel="noopener noreferrer" className="text-motion-accent hover:underline">"A review of core stability training in rehabilitation: Facts, fallacies and future directions"</a></li>
                        <li><em>ALMohiza et al. (2023):</em> <a href="https://pubmed.ncbi.nlm.nih.gov/36982105/" target="_blank" rel="noopener noreferrer" className="text-motion-accent hover:underline">"The Mediation Effect of Pain on the Relationship between Kinesiophobia and Lumbar Joint Position Sense in Chronic Low Back Pain Individuals."</a> International Journal of Environmental Research and Public Health.</li>
                        <li><em>Bordeleau et al. (2022):</em> <a href="https://www.frontiersin.org/articles/10.3389/fnbeh.2022.933483/full" target="_blank" rel="noopener noreferrer" className="text-motion-accent hover:underline">"Treatments for kinesiophobia in people with chronic pain: A scoping review."</a> Frontiers in Behavioral Neuroscience.</li>
                    </ul>
                </>
            )
        },
        '3': {
            id: '3',
            slug: 'entendiendo-ciencia-dolor',
            title: "Entendiendo la ciencia del dolor",
            excerpt: "Descubre por qué el dolor intenso no siempre significa un daño grave y cómo tus emociones, el estrés y el miedo pueden estar amplificando lo que sientes.",
            date: "2026-02-24",
            category: "Neurociencia",
            readTime: "5 min lectura",
            author: "Sofia L.",
            image: `${import.meta.env.BASE_URL}images/blog_3.webp`,
            content: (
                <>
                    <p className="lead text-xl text-white font-light mb-6">
                        ¿Alguna vez te has hecho una resonancia magnética por un dolor intenso y paralizante, solo para que el especialista te diga: "tu estructura está perfecta, no tienes nada roto"? Es una mezcla extraña de alivio y frustración profunda. Si no hay daño estructural, ¿por qué duele tanto?
                    </p>
                    <p className="mb-8">
                        Durante mucho tiempo, la medicina creyó en el modelo de Descartes: el cuerpo es una máquina, y si hay dolor, debe haber una pieza rota. Hoy sabemos que esto está muy lejos de la realidad. El dolor es una experiencia 100% producida por el cerebro, y su objetivo no es medir el daño, sino protegerte.
                    </p>

                    <h3 className="text-2xl text-white font-semibold mt-10 mb-4">El sistema de alarma hipersensible</h3>
                    <p className="mb-4">
                        Imagina que el sistema nervioso es como la alarma de incendios de tu casa. Su función es sonar fuerte cuando hay fuego (una lesión real). Sin embargo, cuando experimentamos dolor persistente, esta alarma se descalibra. De repente, ya no necesitas un incendio para que suene; el simple humo de una tostada quemada (un movimiento inofensivo) activa la sirena a todo volumen.
                    </p>
                    <p className="mb-8">
                        A este fenómeno neurológico se le conoce como <em>sensibilización central</em>. Tu sistema nervioso se vuelve hipervigilante y las vías del dolor se vuelven tan eficientes que comienzan a enviar señales de peligro ante estímulos normales, como agacharse a recoger un lápiz o caminar. El dolor es muy real, pero el tejido físico ya no está en peligro.
                    </p>

                    <h3 className="text-2xl text-white font-semibold mt-10 mb-4">El amplificador psicológico: Miedo y Frustración</h3>
                    <p className="mb-4">
                        Aquí es donde la ciencia se vuelve fascinante (y crucial para tu recuperación). El dolor no solo es físico; es una experiencia biopsicosocial. Las áreas de tu cerebro que procesan el dolor físico comparten vías directas con las áreas que procesan el miedo, la ansiedad, el estrés y la frustración.
                    </p>
                    <p className="mb-8">
                        Si crees que tu dolor significa que tu cuerpo se está destruyendo, tu cerebro percibe una amenaza masiva y, en respuesta, "sube el volumen" del dolor para obligarte a parar. El estrés laboral crónico, la falta de sueño, la depresión y la frustración de no poder hacer tus actividades diarias actúan como gasolina para el fuego del sistema nervioso. No te lo estás imaginando: la psicología y las emociones alteran literalmente la neuroquímica de tu dolor.
                    </p>

                    <h3 className="text-2xl text-white font-semibold mt-10 mb-4">Exposición Gradual: Recalibrando el cerebro</h3>
                    <p className="mb-4">
                        Si el reposo absoluto y evitar el movimiento no curan el dolor persistente (e incluso lo empeoran al desacondicionar los músculos), ¿cuál es la solución? La respuesta está en demostrarle a tu cerebro que el movimiento es seguro a través de la <em>exposición gradual</em>.
                    </p>
                    <p className="mb-8">
                        La exposición gradual consiste en reintroducir lentamente los movimientos que temes, en dosis tolerables. Al moverte sin sufrir un daño catastrófico, le envías a tu cerebro nueva información de seguridad. Poco a poco, la alarma comienza a apagarse, la confianza regresa y el volumen del dolor disminuye.
                    </p>

                    <h3 className="text-2xl text-white font-semibold mt-10 mb-4">3 Pasos Prácticos para empezar</h3>
                    <ol className="list-decimal pl-5 mb-8 text-motion-muted space-y-3">
                        <li><strong>Reconoce que dolor no equivale a daño:</strong> Sentir molestias al hacer un ejercicio nuevo o al retomar una actividad no significa que te estés lesionando. A menudo, es solo tu sistema nervioso siendo sobreprotector.</li>
                        <li><strong>Identifica tus amplificadores:</strong> Observa qué sucede con tu dolor los días que estás más estresado, ansioso o duermes mal. Gestionar el estrés es un tratamiento para el dolor en sí mismo.</li>
                        <li><strong>Aplica la regla del semáforo:</strong> Al moverte, un dolor leve (luz verde) o moderado que desaparece rápido (luz amarilla) es aceptable y seguro. Solo debes detenerte si el dolor es agudo, incapacitante y duradero (luz roja).</li>
                    </ol>

                    <p className="mb-8 italic border-l-4 border-motion-accent pl-4 py-2 bg-white/5 rounded-r-lg">
                        En <strong>Motion - advanced rehab</strong>, sabemos que el dolor crónico puede ser solitario y frustrante. Nuestro objetivo no es solo tratar tus tejidos, sino enseñarte a entender tu dolor para que deje de controlarte. A través de la educación y el movimiento guiado, te ayudamos a recalibrar tu sistema para que vuelvas a hacer lo que amas.
                    </p>

                    <hr className="border-white/10 my-8" />

                    <h3 className="text-xl text-white font-semibold mb-4">Referencias Científicas y Lectura Adicional</h3>
                    <ul className="list-disc pl-5 mb-6 text-sm text-motion-muted space-y-2">
                        <li><em>Moseley, G. L. (2007):</em> <a href="https://pubmed.ncbi.nlm.nih.gov/17697365/" target="_blank" rel="noopener noreferrer" className="text-motion-accent hover:underline">"Reconceptualising pain according to modern pain science."</a> Physical Therapy Reviews.</li>
                        <li><em>Louw, A., et al. (2016):</em> <a href="https://pubmed.ncbi.nlm.nih.gov/27351903/" target="_blank" rel="noopener noreferrer" className="text-motion-accent hover:underline">"The efficacy of pain neuroscience education on musculoskeletal pain: A systematic review of the literature."</a> Physiotherapy Theory and Practice.</li>
                        <li><em>Nijs, J., et al. (2013):</em> <a href="https://pubmed.ncbi.nlm.nih.gov/23273516/" target="_blank" rel="noopener noreferrer" className="text-motion-accent hover:underline">"Thinking beyond muscles and joints: therapists' and patients' attitudes and beliefs regarding chronic musculoskeletal pain are key to applying effective treatment."</a> Manual Therapy.</li>
                        <li><em>Malfliet, A., et al. (2018):</em> <a href="https://pubmed.ncbi.nlm.nih.gov/29710099/" target="_blank" rel="noopener noreferrer" className="text-motion-accent hover:underline">"Effect of Pain Neuroscience Education Combined With Cognition-Targeted Motor Control Training on Chronic Spinal Pain: A Randomized Clinical Trial."</a> JAMA Neurology.</li>
                        <li><em>Vlaeyen, J. W., & Linton, S. J. (2000):</em> <a href="https://pubmed.ncbi.nlm.nih.gov/10781906/" target="_blank" rel="noopener noreferrer" className="text-motion-accent hover:underline">"Fear-avoidance and its consequences in chronic musculoskeletal pain: a state of the art."</a> Pain.</li>
                    </ul>
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
            title: "Movilidad vs Flexibilidad: ¿Por qué estirar no siempre es la solución?",
            excerpt: "Descubre la diferencia entre flexibilidad y movilidad, y por qué tu cuerpo no necesita que lo estiren constantemente, sino que lo desafíen con movimiento activo y control motor.",
            date: "2026-02-24",
            category: "Movimiento",
            readTime: "6 min lectura",
            author: "Sofia L.",
            image: `${import.meta.env.BASE_URL}images/blog_5.webp`,
            content: (
                <>
                    <p className="lead text-xl text-white font-light mb-6">
                        Te despiertas un lunes por la mañana y, al intentar agacharte para recoger los calcetines del suelo, notas ese tirón seco en la parte de atrás del muslo. Tu reacción inmediata es la de casi todo el mundo: "Me falta flexibilidad". Te pasas los siguientes cinco minutos estirando con fuerza, sufriendo un poco, esperando que ese músculo se rinda y se alargue. Sientes un alivio que dura exactamente lo que tardas en llegar a la cocina a por café, y luego, la rigidez vuelve.
                    </p>
                    <p className="mb-8">
                        Es una frustración constante. Muchos pacientes llegan a Motion - advanced rehab con la idea de que su cuerpo es una estructura rígida, casi como un cristal que está a punto de romperse si no se estira a diario. Pero quiero decirte algo importante: tu cuerpo no es frágil. Es una estructura increíblemente fuerte y adaptable que, a veces, simplemente necesita una estrategia distinta.
                    </p>

                    <h3 className="text-2xl text-white font-semibold mt-10 mb-4">La diferencia entre llegar y controlar</h3>
                    <p className="mb-4">
                        Solemos usar estas palabras como si fueran lo mismo, pero en el mundo de la fisioterapia las distinguimos con mucha claridad porque el tratamiento cambia por completo.
                    </p>
                    <p className="mb-4">
                        La <strong>flexibilidad</strong> es el rango pasivo. Es decir, hasta dónde llega tu músculo cuando algo externo lo empuja. Si yo te tumbo en la camilla y subo tu pierna, eso es flexibilidad. Es simplemente la capacidad de tus tejidos para estirarse.
                    </p>
                    <p className="mb-4">
                        La <strong>movilidad</strong> es algo mucho más interesante. Es el rango activo. Se trata de hasta dónde puedes mover una articulación tú solo, usando tu propia fuerza y control. Aquí es donde entra el control motor, que no es más que la capacidad de tu cerebro para organizar tus músculos y moverte con seguridad.
                    </p>
                    <p className="mb-8">
                        Si tienes mucha flexibilidad pero poca movilidad, tienes un problema de control. Tu cerebro detecta que no eres capaz de manejar la articulación en ángulos extremos y, para protegerte, "aprieta" el músculo. Esa rigidez que sientes no es que el músculo sea corto, es tu sistema nervioso echando el freno de mano.
                    </p>

                    <h3 className="text-2xl text-white font-semibold mt-10 mb-4">Tu cuerpo no necesita que lo reparen, necesita que lo desafíen</h3>
                    <p className="mb-4">
                        Existe el mito de que estamos "desalineados" o que necesitamos que alguien nos "coloque". La realidad es que el cuerpo responde a la carga de tejido. Este término técnico se refiere simplemente a la cantidad de esfuerzo que tus músculos y tendones pueden soportar.
                    </p>
                    <p className="mb-8">
                        Cuando aumentas tu movilidad, le estás enseñando a tu sistema nervioso que esos rangos de movimiento son seguros. No buscamos que seas de goma, buscamos que seas capaz de moverte en muchas direcciones distintas. La variabilidad de movimiento es nuestra mejor herramienta contra el dolor: cuanto más variada sea la forma en que te mueves, más resiliente será tu cuerpo.
                    </p>

                    <h3 className="text-2xl text-white font-semibold mt-10 mb-4">3 Consejos Prácticos</h3>
                    <p className="mb-4">
                        Si quieres dejar de sentirte "trabado" y empezar a moverte con fluidez, prueba a cambiar tu enfoque con estos tres pasos:
                    </p>
                    <ol className="list-decimal pl-5 mb-8 text-motion-muted space-y-3">
                        <li><strong>Prioriza el movimiento activo sobre el estiramiento clásico:</strong> En lugar de quedarte quieto tirando de un pie durante un minuto, intenta hacer movimientos lentos y controlados que lleven a la articulación a su límite. Por ejemplo, una sentadilla muy profunda y pausada trabaja mucho mejor tu movilidad que cualquier estiramiento de suelo.</li>
                        <li><strong>Añade fuerza en posiciones largas:</strong> Los músculos se sienten seguros cuando son fuertes. Hacer ejercicios de fuerza cuando el músculo está estirado ayuda a que el cerebro suelte ese "freno de mano" que mencionaba antes.</li>
                        <li><strong>No le tengas miedo al movimiento:</strong> A veces evitamos movernos porque algo nos molesta, y eso solo aumenta la rigidez. Busca movimientos que no te causen dolor pero que te saquen de tu zona de confort habitual.</li>
                    </ol>

                    <h3 className="text-2xl text-white font-semibold mt-10 mb-4">El camino hacia la confianza</h3>
                    <p className="mb-8 italic border-l-4 border-motion-accent pl-4 py-2 bg-white/5 rounded-r-lg">
                        En <strong>Motion - advanced rehab</strong> trabajamos bajo una filosofía muy clara: queremos que recuperes la confianza en ti mismo. No estás roto y no necesitas soluciones temporales. El objetivo es que entiendas cómo funciona tu cuerpo para que puedas moverte sin miedo, sin restricciones y con la seguridad de que eres capaz de afrontar cualquier reto físico.
                    </p>
                    <p className="mb-8">
                        Si sientes que has probado todos los estiramientos del mundo y sigues igual, quizá es momento de mirar más allá de la flexibilidad.
                    </p>
                    <p className="mb-8 font-semibold text-motion-accent hover:underline cursor-pointer">
                        Reservar Evaluación
                    </p>

                    <hr className="border-white/10 my-8" />

                    <h3 className="text-xl text-white font-semibold mb-4">Referencias Científicas y Lectura Adicional</h3>
                    <ul className="list-disc pl-5 mb-6 text-sm text-motion-muted space-y-2">
                        <li><em>Behm, D. G., et al. (2016):</em> <a href="https://scholar.google.com/scholar?q=Acute+effects+of+muscle+stretching+on+physical+performance,+range+of+motion,+and+injury+incidence+in+healthy+active+individuals:+a+systematic+review" target="_blank" rel="noopener noreferrer" className="text-motion-accent hover:underline">"Acute effects of muscle stretching on physical performance, range of motion, and injury incidence in healthy active individuals: a systematic review."</a> Applied Physiology, Nutrition, and Metabolism.</li>
                        <li><em>Nuzzo, J. L. (2020):</em> <a href="https://scholar.google.com/scholar?q=The+Case+for+Retiring+Flexibility+as+a+Major+Component+of+Physical+Fitness" target="_blank" rel="noopener noreferrer" className="text-motion-accent hover:underline">"The Case for Retiring Flexibility as a Major Component of Physical Fitness."</a> Sports Medicine.</li>
                        <li><em>Afonso, J., et al. (2021):</em> <a href="https://scholar.google.com/scholar?q=The+Effectiveness+of+Joint+Mobilization+Techniques+in+Improving+Range+of+Motion:+A+Systematic+Review" target="_blank" rel="noopener noreferrer" className="text-motion-accent hover:underline">"The Effectiveness of Joint Mobilization Techniques in Improving Range of Motion: A Systematic Review."</a> Journal of Clinical Medicine.</li>
                    </ul>
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
