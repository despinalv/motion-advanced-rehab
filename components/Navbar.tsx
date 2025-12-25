import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Check } from 'lucide-react';
import { Button } from './ui/Button';

interface NavbarProps {
  onNavigate: (target: string) => void;
  currentPage: string;
  language: 'en' | 'es';
  setLanguage: (lang: 'en' | 'es') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage, language, setLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const translations = {
    en: {
      about: 'About Us',
      method: 'Method',
      services: 'Services',
      app: 'Motion App',
      blog: 'The Motion Blog',
      cta: 'Start Journey'
    },
    es: {
      about: 'Nosotros',
      method: 'Método',
      services: 'Servicios',
      app: 'Motion App',
      blog: 'The Motion Blog',
      cta: 'Empezar'
    }
  };

  const t = translations[language];

  // Reordered: About Us is now last, and href is an anchor tag
  const navLinks = [
    { name: t.method, href: '#method' },
    { name: t.services, href: '#services' },
    { name: t.app, href: '#dashboard' },
    { name: t.blog, href: '#blog' },
    { name: t.about, href: '#about' },
  ];

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    onNavigate(href);
  };

  const selectLanguage = (lang: 'en' | 'es') => {
    setLanguage(lang);
    setIsLangOpen(false);
    setIsOpen(false); // Close mobile menu if open
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-motion-black/70 backdrop-blur-2xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 max-w-7xl flex justify-between items-center">
        {/* Logo */}
        <button onClick={() => onNavigate('home')} className="flex items-center gap-2 group focus:outline-none">
          <img src={`${import.meta.env.BASE_URL}images/logo_white.png`} alt="Motion" className="h-8 md:h-10 w-auto opacity-90 group-hover:opacity-100 transition-opacity" />
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-xs font-medium text-motion-text/80 hover:text-white transition-colors tracking-wide"
            >
              {link.name}
            </a>
          ))}

          {/* Language Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="text-xs font-medium text-motion-text/80 hover:text-white transition-colors flex items-center gap-1 focus:outline-none"
            >
              <Globe size={14} />
              {language === 'en' ? 'EN' : 'ES'}
            </button>

            {isLangOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setIsLangOpen(false)}></div>
                <div className="absolute top-full right-0 mt-3 w-32 bg-motion-surface border border-white/10 rounded-xl shadow-2xl py-1 z-20 flex flex-col overflow-hidden">
                  <button
                    onClick={() => selectLanguage('en')}
                    className="flex items-center justify-between px-4 py-3 text-xs text-left text-white hover:bg-white/5 transition-colors"
                  >
                    English
                    {language === 'en' && <Check size={12} className="text-motion-accent" />}
                  </button>
                  <button
                    onClick={() => selectLanguage('es')}
                    className="flex items-center justify-between px-4 py-3 text-xs text-left text-white hover:bg-white/5 transition-colors"
                  >
                    Español
                    {language === 'es' && <Check size={12} className="text-motion-accent" />}
                  </button>
                </div>
              </>
            )}
          </div>

          <Button
            variant="primary"
            className="py-2 px-6 text-xs font-semibold"
            onClick={() => onNavigate('contact')}
          >
            {t.cta}
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setIsLangOpen(!isLangOpen)}
            className="text-xs font-bold text-white transition-colors flex items-center gap-1"
          >
            {language === 'en' ? 'EN' : 'ES'}
          </button>
          {/* Mobile Language Dropdown */}
          {isLangOpen && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setIsLangOpen(false)}></div>
              <div className="absolute top-16 right-4 w-32 bg-motion-surface border border-white/10 rounded-xl shadow-2xl py-1 z-50 flex flex-col overflow-hidden animate-fade-in-up">
                <button
                  onClick={() => selectLanguage('en')}
                  className="flex items-center justify-between px-4 py-3 text-xs text-left text-white hover:bg-white/5 transition-colors"
                >
                  English
                  {language === 'en' && <Check size={12} className="text-motion-accent" />}
                </button>
                <button
                  onClick={() => selectLanguage('es')}
                  className="flex items-center justify-between px-4 py-3 text-xs text-left text-white hover:bg-white/5 transition-colors"
                >
                  Español
                  {language === 'es' && <Check size={12} className="text-motion-accent" />}
                </button>
              </div>
            </>
          )}

          <button
            className="text-white hover:text-motion-accent transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-xl z-40 flex flex-col justify-center items-center space-y-8 animate-fade-in-up">
          <button
            className="absolute top-6 right-6 text-white"
            onClick={() => setIsOpen(false)}
          >
            <X size={32} />
          </button>

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-3xl font-semibold text-white tracking-tight hover:text-motion-accent transition-colors"
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          <div className="mt-8 flex flex-col gap-6 items-center">
            <Button onClick={() => { setIsOpen(false); onNavigate('contact'); }}>{t.cta}</Button>
          </div>
        </div>
      )}
    </header>
  );
};