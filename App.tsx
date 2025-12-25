import React, { useState, useEffect, useLayoutEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Method } from './components/Method';
import { Services } from './components/Services';
import { Dashboard } from './components/Dashboard';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { Contact } from './components/Contact';
import { ComparePlans } from './components/ComparePlans';
import { ServiceDetail } from './components/ServiceDetail';
import { BlogSection } from './components/BlogSection';
import { BlogLibrary } from './components/BlogLibrary';
import { BlogPost } from './components/BlogPost';
import { About } from './components/About';

// Scroll restoration component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Home Page Component
import { useSEO } from './hooks/useSEO';

const HomePage = ({ language, onNavigate }: { language: 'en' | 'es', onNavigate: (path: string) => void }) => {
  useSEO({
    title: language === 'en' ? 'Motion Advanced Rehab | Perform at Your Peak' : 'Motion Advanced Rehab | Rinde al Máximo',
    description: language === 'en'
      ? 'Evidence-based physiotherapy, biomechanics, and performance training in Panama. Bridge the gap between rehab and high performance.'
      : 'Fisioterapia basada en evidencia, biomecánica y entrenamiento de rendimiento en Panamá. Une la brecha entre rehabilitación y alto rendimiento.'
  });

  return (
    <>
      <Hero onNavigate={onNavigate} language={language} />
      <Method language={language} />
      <Services onNavigate={onNavigate} language={language} />
      <Dashboard language={language} />
      <Testimonials language={language} />
      <About language={language} />
      <BlogSection onNavigate={onNavigate} language={language} />
    </>
  );
};

function AppContent() {
  const [language, setLanguage] = useState<'en' | 'es'>('es');
  const navigate = useNavigate();
  const location = useLocation();

  // Helper for components still using the old onNavigate prop
  // We can maintain this signature to avoid refactoring everything at once
  const handleNavigate = (target: string, data?: string) => {
    if (target === 'home') navigate('/');
    else if (target === 'contact') navigate('/contact', { state: { plan: data } });
    else if (target === 'compare') navigate('/compare');
    else if (target === 'service-detail') navigate(`/services/${data || 'rehab'}`);
    else if (target === 'blog-library') navigate('/blog');
    else if (target === 'blog-post') navigate(`/blog/${data}`); // Note: data should be slug or id
    else if (target.startsWith('#')) {
      // Hash navigation
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(target);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.querySelector(target);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    const timer = setTimeout(() => {
      document.querySelectorAll('.reveal-on-scroll, .reveal-zoom').forEach((el) => {
        observer.observe(el);
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [location.pathname, language]);

  return (
    <div className="min-h-screen bg-motion-black text-motion-text selection:bg-motion-accent selection:text-white font-sans">
      <ScrollToTop />
      <Navbar onNavigate={handleNavigate} currentPage={location.pathname === '/' ? 'home' : location.pathname.substring(1)} language={language} setLanguage={setLanguage} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage language={language} onNavigate={handleNavigate} />} />
          <Route path="/contact" element={<Contact onNavigate={handleNavigate} onBack={handleBack} language={language} />} />
          <Route path="/compare" element={<ComparePlans onNavigate={handleNavigate} onBack={handleBack} language={language} />} />
          <Route path="/services/:id" element={<ServiceDetail onNavigate={handleNavigate} onBack={handleBack} language={language} />} />
          <Route path="/blog" element={<BlogLibrary onNavigate={handleNavigate} onBack={handleBack} language={language} />} />
          <Route path="/blog/:id" element={<BlogPost onNavigate={handleNavigate} onBack={handleBack} language={language} />} />
        </Routes>
      </main>
      <Footer onNavigate={handleNavigate} language={language} setLanguage={setLanguage} />

      {/* WhatsApp Floating Icon */}
      <a
        href="https://wa.me/50493343693"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 text-white hover:text-green-400 transition-colors duration-300 drop-shadow-2xl hover:scale-110"
        aria-label="Contact via WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
}

function App() {
  // Use a base path if hosted in a subdirectory (GitHub Pages)
  const basename = import.meta.env.BASE_URL.replace(/\/$/, "");

  return (
    <Router basename={basename}>
      <AppContent />
    </Router>
  );
}

export default App;