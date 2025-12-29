import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { Mail, MapPin, ArrowRight, ArrowLeft, Loader2, CheckCircle } from 'lucide-react';

interface ContactProps {
    onNavigate: (target: string) => void;
    initialPlan?: string;
    onBack: () => void;
    language: 'en' | 'es';
}

export const Contact: React.FC<ContactProps> = ({ onNavigate, initialPlan, onBack, language }) => {
    const [goal, setGoal] = useState('Athlete Rehab');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [emailRequired, setEmailRequired] = useState(true);
    const [phoneRequired, setPhoneRequired] = useState(true);

    useEffect(() => {
        if (initialPlan) {
            setGoal(initialPlan);
        }
    }, [initialPlan]);

    const translations = {
        en: {
            back: 'Back',
            title: 'Begin Your Protocol.',
            desc: 'Whether you are rehabbing an injury or chasing peak performance, we build the roadmap. Fill out the form below to apply for coaching or book an in-person assessment.',
            info: 'Contact Info',
            faq: 'FAQ',
            q1: 'Do you accept insurance?',
            a1: 'We are an out-of-network provider. We provide superbills for you to submit for reimbursement.',
            q2: 'Is this traditional physical therapy?',
            a2: 'No. We combine manual therapy with high-performance strength and conditioning.',
            q3: 'Do I need a referral?',
            a3: 'No referral is needed. We are a direct access provider, meaning we can assess and treat you immediately.',
            q4: 'What is your methodology?',
            a4: 'We use the Joint-by-Joint approach to identify the root cause of pain and active loading to build tissue resilience.',
            q5: 'How long are the sessions?',
            a5: 'Evaluations are 60 mins. Follow-up sessions are 45-60 mins depending on your protocol.',
            fname: 'First Name',
            lname: 'Last Name',
            email: 'Email',
            goal: 'Goal',
            msg: 'Message',
            submit: 'Submit Application',
            sending: 'Sending...',
            successTitle: 'Application Received',
            successMsg: 'We have received your details. Our team will review your application and contact you shortly to schedule your assessment.',
            errorMsg: 'Something went wrong. Please try again or email us directly.',
            placeholderMsg: 'Tell us about your injury or goals...',
            options: ['Athlete Rehab', 'Return to Run', 'Online Coaching', 'Performance Training', 'Other'],
            phone: 'Phone Number',
            or: 'or'
        },
        es: {
            back: 'Volver',
            title: 'Comienza Tu Protocolo.',
            desc: 'Ya sea que te estés rehabilitando de una lesión o persiguiendo el máximo rendimiento, construimos el mapa. Completa el formulario para aplicar o reservar una evaluación presencial.',
            info: 'Información de Contacto',
            faq: 'Preguntas Frecuentes',
            q1: '¿Aceptan seguro?',
            a1: 'Somos un proveedor fuera de la red. Proporcionamos facturas detalladas para que solicites el reembolso.',
            q2: '¿Es esto fisioterapia tradicional?',
            a2: 'No. Combinamos terapia manual con fuerza y acondicionamiento de alto rendimiento.',
            q3: '¿Necesito referencia médica?',
            a3: 'No se necesita referencia. Somos proveedores de acceso directo, podemos evaluarte y tratarte inmediatamente.',
            q4: '¿Cuál es su metodología?',
            a4: 'Utilizamos el enfoque Articulación-por-Articulación para identificar la causa raíz y carga activa para desarrollar resiliencia.',
            q5: '¿Cuánto duran las sesiones?',
            a5: 'Las evaluaciones duran 60 min. Las sesiones de seguimiento son de 45-60 min según tu protocolo.',
            fname: 'Nombre',
            lname: 'Apellido',
            email: 'Email',
            goal: 'Objetivo',
            msg: 'Mensaje',
            submit: 'Enviar Aplicación',
            sending: 'Enviando...',
            successTitle: 'Aplicación Recibida',
            successMsg: 'Hemos recibido tus detalles. Nuestro equipo revisará tu aplicación y te contactará en breve para agendar tu evaluación.',
            errorMsg: 'Algo salió mal. Por favor intenta de nuevo o envíanos un email directo.',
            placeholderMsg: 'Cuéntanos sobre tu lesión u objetivos...',
            options: ['Rehabilitación de Atletas', 'Retorno a Correr', 'Coaching Online', 'Entrenamiento Rendimiento', 'Otro'],
            phone: 'Número de Teléfono',
            or: 'o'
        }
    };

    const t = translations[language];

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage('');

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch('https://formspree.io/f/mkonklqp', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setIsSuccess(true);
                form.reset();
            } else {
                const data = await response.json();
                if (Object.hasOwn(data, 'errors')) {
                    setErrorMessage(data["errors"].map((error: any) => error["message"]).join(", "));
                } else {
                    setErrorMessage(t.errorMsg);
                }
            }
        } catch (error) {
            setErrorMessage(t.errorMsg);
        } finally {
            setIsSubmitting(false);
        }
    };

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
                <div className="max-w-3xl mb-16">
                    <h1 className="text-5xl md:text-6xl font-semibold text-white tracking-tighter mb-6" dangerouslySetInnerHTML={{
                        __html: language === 'en'
                            ? t.title.replace('Protocol', '<span class="text-motion-accent">Protocol</span>')
                            : t.title.replace('Protocolo', '<span class="text-motion-accent">Protocolo</span>')
                    }}>
                    </h1>
                    <p className="text-lg text-motion-muted leading-relaxed">
                        {t.desc}
                    </p>
                </div>

                <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Info Column (Appears Second on Mobile due to flex-col-reverse) */}
                    <div className="space-y-8 animate-[fadeInUp_0.5s_ease-out_0.2s_forwards] opacity-0">

                        <div className="bg-motion-surface p-8 rounded-2xl border border-white/5">
                            <h3 className="text-white text-xl font-medium mb-6">{t.info}</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <MapPin className="text-motion-accent mt-1" size={20} />
                                    <div>
                                        <a
                                            href="https://www.google.com/maps/place/MOTION+Advanced+Rehab/@15.4990091,-88.0284667,17z/data=!3m1!4b1!4m6!3m5!1s0x8f665b007af867ff:0x482e180d102c7aba!8m2!3d15.4990091!4d-88.0284667!16s%2Fg%2F11yhw_z6_0?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white font-medium hover:text-motion-accent transition-colors"
                                        >
                                            Motion Advanced Rehab
                                        </a>
                                        <p className="text-motion-muted text-sm mt-1">Barrio Lempira, 8 y 9 Calle S.O, 7 Avenida S<br />San Pedro Sula, Cortés</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Mail className="text-motion-accent" size={20} />
                                    <a href="mailto:info@motionarehab.com" className="text-motion-muted text-sm hover:text-white transition-colors">info@motionarehab.com</a>
                                </div>
                                <div className="flex items-center gap-4">
                                    {/* Custom WhatsApp Icon */}
                                    <div className="text-motion-accent w-5 h-5 flex items-center justify-center">
                                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="text-motion-accent">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                        </svg>
                                    </div>
                                    <a href="https://wa.me/50493343693" target="_blank" rel="noopener noreferrer" className="text-motion-muted text-sm hover:text-white transition-colors">+504 9334-3693</a>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl overflow-hidden border border-white/5 h-[300px] bg-motion-surface relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.7288756019307!2d-88.0284667!3d15.499009099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f665b007af867ff%3A0x482e180d102c7aba!2sMOTION%20Advanced%20Rehab!5e0!3m2!1ses-419!2shn!4v1766607879527!5m2!1ses-419!2shn"
                                className="w-full h-full border-0"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Motion Advanced Rehab Location"
                            ></iframe>
                        </div>

                        <div>
                            <h3 className="text-white text-xl font-medium mb-4">{t.faq}</h3>
                            <div className="space-y-4">
                                <details className="group border-b border-white/5 pb-4">
                                    <summary className="flex justify-between items-center cursor-pointer list-none text-motion-muted group-hover:text-white transition-colors text-sm">
                                        <span>{t.q1}</span>
                                        <span className="transition group-open:rotate-180">
                                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                        </span>
                                    </summary>
                                    <p className="text-motion-muted text-sm mt-3 leading-relaxed">
                                        {t.a1}
                                    </p>
                                </details>
                                <details className="group border-b border-white/5 pb-4">
                                    <summary className="flex justify-between items-center cursor-pointer list-none text-motion-muted group-hover:text-white transition-colors text-sm">
                                        <span>{t.q2}</span>
                                        <span className="transition group-open:rotate-180">
                                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                        </span>
                                    </summary>
                                    <p className="text-motion-muted text-sm mt-3 leading-relaxed">
                                        {t.a2}
                                    </p>
                                </details>
                                <details className="group border-b border-white/5 pb-4">
                                    <summary className="flex justify-between items-center cursor-pointer list-none text-motion-muted group-hover:text-white transition-colors text-sm">
                                        <span>{t.q3}</span>
                                        <span className="transition group-open:rotate-180">
                                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                        </span>
                                    </summary>
                                    <p className="text-motion-muted text-sm mt-3 leading-relaxed">
                                        {t.a3}
                                    </p>
                                </details>
                                <details className="group border-b border-white/5 pb-4">
                                    <summary className="flex justify-between items-center cursor-pointer list-none text-motion-muted group-hover:text-white transition-colors text-sm">
                                        <span>{t.q4}</span>
                                        <span className="transition group-open:rotate-180">
                                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                        </span>
                                    </summary>
                                    <p className="text-motion-muted text-sm mt-3 leading-relaxed">
                                        {t.a4}
                                    </p>
                                </details>
                                <details className="group border-b border-white/5 pb-4">
                                    <summary className="flex justify-between items-center cursor-pointer list-none text-motion-muted group-hover:text-white transition-colors text-sm">
                                        <span>{t.q5}</span>
                                        <span className="transition group-open:rotate-180">
                                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                        </span>
                                    </summary>
                                    <p className="text-motion-muted text-sm mt-3 leading-relaxed">
                                        {t.a5}
                                    </p>
                                </details>
                            </div>
                        </div>

                    </div>

                    {/* Form Column (Appears First on Mobile due to flex-col-reverse) */}
                    <div className="animate-[fadeInUp_0.5s_ease-out_0.3s_forwards] opacity-0">
                        {isSuccess ? (
                            <div className="bg-motion-surface border border-motion-accent/20 rounded-2xl p-8 text-center flex flex-col items-center justify-center h-full min-h-[400px]">
                                <div className="w-16 h-16 bg-motion-accent/20 rounded-full flex items-center justify-center mb-6 text-motion-accent">
                                    <CheckCircle size={32} />
                                </div>
                                <h3 className="text-2xl text-white font-semibold mb-4">{t.successTitle}</h3>
                                <p className="text-motion-muted mb-8 max-w-sm">{t.successMsg}</p>
                                <Button onClick={() => setIsSuccess(false)} variant="secondary">
                                    {language === 'en' ? 'Send Another Message' : 'Enviar Otro Mensaje'}
                                </Button>
                            </div>
                        ) : (
                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-motion-muted uppercase tracking-widest">{t.fname}</label>
                                        <input type="text" name="firstName" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-motion-accent transition-colors" placeholder="Jane" required disabled={isSubmitting} />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-motion-muted uppercase tracking-widest">{t.lname}</label>
                                        <input type="text" name="lastName" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-motion-accent transition-colors" placeholder="Doe" required disabled={isSubmitting} />
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-motion-muted uppercase tracking-widest">
                                            {t.email} <span className="text-[10px] font-normal lowercase opacity-75">({t.or} {t.phone})</span>
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-motion-accent transition-colors"
                                            placeholder="jane@example.com"
                                            disabled={isSubmitting}
                                            onChange={(e) => {
                                                if (e.target.value.length > 0) {
                                                    setPhoneRequired(false);
                                                } else {
                                                    setPhoneRequired(true);
                                                }
                                            }}
                                            required={emailRequired}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-motion-muted uppercase tracking-widest">
                                            {t.phone} <span className="text-[10px] font-normal lowercase opacity-75">({t.or} {t.email})</span>
                                        </label>
                                        <div className="flex gap-2">
                                            <select
                                                name="countryCode"
                                                className="w-24 bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-motion-accent transition-colors appearance-none cursor-pointer text-center"
                                                defaultValue="+504"
                                                disabled={isSubmitting}
                                            >
                                                <option className="bg-motion-surface" value="+504">🇭🇳 +504</option>
                                                <option className="bg-motion-surface" value="+1">🇺🇸 +1</option>
                                                <option className="bg-motion-surface" value="+34">🇪🇸 +34</option>
                                                <option className="bg-motion-surface" value="+52">🇲🇽 +52</option>
                                            </select>
                                            <input
                                                type="tel"
                                                name="phone"
                                                className="flex-1 bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-motion-accent transition-colors"
                                                placeholder="9999-9999"
                                                disabled={isSubmitting}
                                                onChange={(e) => {
                                                    if (e.target.value.length > 0) {
                                                        setEmailRequired(false);
                                                    } else {
                                                        setEmailRequired(true);
                                                    }
                                                }}
                                                required={phoneRequired}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-motion-muted uppercase tracking-widest">{t.goal}</label>
                                    <select
                                        name="goal"
                                        value={goal}
                                        onChange={(e) => setGoal(e.target.value)}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-motion-accent transition-colors appearance-none cursor-pointer"
                                        disabled={isSubmitting}
                                    >
                                        {t.options.map(opt => <option key={opt} className="bg-motion-surface" value={opt}>{opt}</option>)}
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-motion-muted uppercase tracking-widest">{t.msg}</label>
                                    <textarea name="message" rows={5} className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-motion-accent transition-colors" placeholder={t.placeholderMsg} required disabled={isSubmitting}></textarea>
                                </div>

                                {errorMessage && (
                                    <p className="text-red-400 text-sm bg-red-400/10 p-3 rounded-lg border border-red-400/20">{errorMessage}</p>
                                )}

                                <Button type="submit" variant="primary" fullWidth className="mt-4 group" disabled={isSubmitting}>
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center">
                                            <Loader2 size={16} className="animate-spin mr-2" />
                                            {t.sending}
                                        </span>
                                    ) : (
                                        <span className="flex items-center justify-center">
                                            {t.submit} <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    )}
                                </Button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};