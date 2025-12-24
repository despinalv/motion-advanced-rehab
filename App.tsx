import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
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

interface HistoryState {
  page: string;
  data?: string;
  scroll: number;
}

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [language, setLanguage] = useState<'en' | 'es'>('en');
  const [selectedPlan, setSelectedPlan] = useState('');
  const [selectedServiceId, setSelectedServiceId] = useState('rehab');
  const [selectedPostId, setSelectedPostId] = useState('1');
  
  // Navigation history to support back button with scroll restoration
  const [history, setHistory] = useState<HistoryState[]>([]);
  // Ref to hold the scroll position to restore after a render
  const nextScroll = useRef<number | null>(null);

  // Handle scroll restoration
  useLayoutEffect(() => {
    if (nextScroll.current !== null) {
      window.scrollTo({ top: nextScroll.current, behavior: 'instant' });
      nextScroll.current = null;
    }
  }, [currentPage, selectedPostId, selectedServiceId, selectedPlan]);

  // Handle scroll animations when page changes
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    // Wait for DOM to update
    const timer = setTimeout(() => {
      document.querySelectorAll('.reveal-on-scroll, .reveal-zoom').forEach((el) => {
        observer.observe(el);
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [currentPage, language]);

  const handleNavigate = (target: string, data?: string) => {
    // 1. Update specific state variables based on the target
    if (target === 'contact' && data) {
      setSelectedPlan(data);
    }
    if (target === 'service-detail' && data) {
      setSelectedServiceId(data);
    }
    if (target === 'blog-post' && data) {
      setSelectedPostId(data);
    }
    
    // 2. Logic to determine if we should push to history
    // We push if we are changing pages OR if we are on the same page but changing content (e.g. blog post to blog post)
    const isDifferentPage = currentPage !== target;
    const isDifferentData = 
        (target === 'blog-post' && data !== selectedPostId) ||
        (target === 'service-detail' && data !== selectedServiceId);

    const shouldPushHistory = isDifferentPage || isDifferentData;

    if (['home', 'contact', 'compare', 'service-detail', 'blog-library', 'blog-post'].includes(target)) {
      if (shouldPushHistory) {
        // Save CURRENT page state before navigating away
        setHistory(prev => [...prev, { 
            page: currentPage, 
            data: currentPage === 'blog-post' ? selectedPostId : 
                  currentPage === 'service-detail' ? selectedServiceId : 
                  currentPage === 'contact' ? selectedPlan : undefined,
            scroll: window.scrollY 
        }]);
        
        setCurrentPage(target);
        // Scroll to top for new pages
        nextScroll.current = 0;
      }
    } else if (target.startsWith('#')) {
      // Hash navigation (scrolling within page or home)
      if (currentPage !== 'home') {
        setHistory(prev => [...prev, { page: currentPage, scroll: window.scrollY }]);
        setCurrentPage('home');
        // Delay scrolling to element to allow render
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
    setHistory(prev => {
      const newHistory = [...prev];
      const lastState = newHistory.pop();
      
      if (lastState) {
        // Restore State
        if (lastState.page === 'blog-post' && lastState.data) setSelectedPostId(lastState.data);
        if (lastState.page === 'service-detail' && lastState.data) setSelectedServiceId(lastState.data);
        if (lastState.page === 'contact' && lastState.data) setSelectedPlan(lastState.data);
        
        setCurrentPage(lastState.page);
        
        // Schedule scroll restore
        nextScroll.current = lastState.scroll;
      } else {
        // Fallback
        setCurrentPage('home');
        nextScroll.current = 0;
      }
      return newHistory;
    });
  };

  const renderContent = () => {
    if (currentPage === 'home') {
      return (
        <>
          <Hero onNavigate={handleNavigate} language={language} />
          <Method language={language} />
          <Services onNavigate={handleNavigate} language={language} />
          <Dashboard language={language} />
          <Testimonials language={language} />
          <About language={language} />
          <BlogSection onNavigate={handleNavigate} language={language} />
        </>
      );
    } else if (currentPage === 'contact') {
      return <Contact onNavigate={handleNavigate} initialPlan={selectedPlan} onBack={handleBack} language={language} />;
    } else if (currentPage === 'compare') {
      return <ComparePlans onNavigate={handleNavigate} onBack={handleBack} language={language} />;
    } else if (currentPage === 'service-detail') {
      return <ServiceDetail serviceId={selectedServiceId} onNavigate={handleNavigate} onBack={handleBack} language={language} />;
    } else if (currentPage === 'blog-library') {
      return <BlogLibrary onNavigate={handleNavigate} onBack={handleBack} language={language} />;
    } else if (currentPage === 'blog-post') {
      return <BlogPost postId={selectedPostId} onNavigate={handleNavigate} onBack={handleBack} language={language} />;
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-motion-black text-motion-text selection:bg-motion-accent selection:text-white font-sans">
      <Navbar onNavigate={handleNavigate} currentPage={currentPage} language={language} setLanguage={setLanguage} />
      <main>
        {renderContent()}
      </main>
      <Footer onNavigate={handleNavigate} language={language} setLanguage={setLanguage} />

      {/* WhatsApp Floating Icon - Smaller, Bottom Right */}
      <a
        href="https://wa.me/50493343693"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 text-white hover:text-green-400 transition-colors duration-300 drop-shadow-2xl hover:scale-110"
        aria-label="Contact via WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}

export default App;