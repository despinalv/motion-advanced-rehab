import React, { useState } from 'react';
import { Globe, Check } from 'lucide-react';

interface FooterProps {
  onNavigate: (target: string) => void;
  language: 'en' | 'es';
  setLanguage: (lang: 'en' | 'es') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, language, setLanguage }) => {
  const [isLangOpen, setIsLangOpen] = useState(false);

  const handleScrollLink = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    onNavigate(target);
  };

  const translations = {
    en: {
      tagline: 'Bridging the gap between rehabilitation and high performance.',
      explore: 'Explore',
      connect: 'Connect',
      about: 'About Us',
      method: 'Method',
      services: 'Services',
      blog: 'The Motion Blog',
      contact: 'Contact Us',
      privacy: 'Privacy',
      terms: 'Terms',
      rights: '2025 Motion Advanced Rehab.'
    },
    es: {
      tagline: 'Uniendo la brecha entre rehabilitación y alto rendimiento.',
      explore: 'Explorar',
      connect: 'Conectar',
      about: 'Nosotros',
      method: 'Método',
      services: 'Servicios',
      blog: 'The Motion Blog',
      contact: 'Contáctanos',
      privacy: 'Privacidad',
      terms: 'Términos',
      rights: '2025 Motion Advanced Rehab.'
    }
  };

  const t = translations[language];

  return (
    <footer className="bg-black py-20 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">

          <div className="max-w-xs relative">
            {/* Logo */}
            <a href="#" onClick={(e) => handleScrollLink(e, 'home')} className="block mb-6">
              <img src={`${import.meta.env.BASE_URL}images/logo_white.png`} alt="Motion" className="w-64 h-auto opacity-80 hover:opacity-100 transition-opacity" />
            </a>
            <p className="text-motion-muted text-sm leading-relaxed">
              {t.tagline}
            </p>

            <div className="mt-6 relative inline-block">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 text-xs font-medium text-motion-muted hover:text-white transition-colors focus:outline-none"
              >
                <Globe size={14} />
                <span>{language === 'en' ? 'English' : 'Español'}</span>
              </button>

              {isLangOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setIsLangOpen(false)}></div>
                  <div className="absolute bottom-full left-0 mb-2 w-32 bg-motion-surface border border-white/10 rounded-xl shadow-2xl py-1 z-20 flex flex-col overflow-hidden">
                    <button
                      onClick={() => { setLanguage('en'); setIsLangOpen(false); }}
                      className="flex items-center justify-between px-4 py-3 text-xs text-left text-white hover:bg-white/5 transition-colors"
                    >
                      English
                      {language === 'en' && <Check size={12} className="text-motion-accent" />}
                    </button>
                    <button
                      onClick={() => { setLanguage('es'); setIsLangOpen(false); }}
                      className="flex items-center justify-between px-4 py-3 text-xs text-left text-white hover:bg-white/5 transition-colors"
                    >
                      Español
                      {language === 'es' && <Check size={12} className="text-motion-accent" />}
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="flex gap-24">
            <div>
              <h5 className="text-white text-xs font-semibold uppercase tracking-widest mb-6">{t.explore}</h5>
              <ul className="space-y-4 text-sm text-motion-muted">
                <li><a href="#about" onClick={(e) => handleScrollLink(e, '#about')} className="hover:text-motion-accent transition-colors text-left">{t.about}</a></li>
                <li><a href="#method" onClick={(e) => handleScrollLink(e, '#method')} className="hover:text-motion-accent transition-colors">{t.method}</a></li>
                <li><a href="#services" onClick={(e) => handleScrollLink(e, '#services')} className="hover:text-motion-accent transition-colors">{t.services}</a></li>
                <li><a href="#blog" onClick={(e) => handleScrollLink(e, '#blog')} className="hover:text-motion-accent transition-colors">{t.blog}</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-white text-xs font-semibold uppercase tracking-widest mb-6">{t.connect}</h5>
              <ul className="space-y-4 text-sm text-motion-muted">
                <li>
                  <button onClick={() => onNavigate('contact')} className="hover:text-motion-accent transition-colors text-left">
                    {t.contact}
                  </button>
                </li>
                <li>
                  <a href="https://www.instagram.com/motionarehab/" target="_blank" rel="noopener noreferrer" className="hover:text-motion-accent transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.tiktok.com/@motionarehab" target="_blank" rel="noopener noreferrer" className="hover:text-motion-accent transition-colors">
                    TikTok
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between text-xs text-motion-muted">
          <p>&copy; {t.rights}</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">{t.privacy}</a>
            <a href="#" className="hover:text-white">{t.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};