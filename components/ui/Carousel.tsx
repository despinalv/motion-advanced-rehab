import React, { useState, useEffect, useRef } from 'react';

interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  autoPlayInterval?: number;
  className?: string;
}

export const Carousel = <T extends any>({ items, renderItem, autoPlayInterval = 5000, className = '' }: CarouselProps<T>) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isPaused = useRef(false);

  useEffect(() => {
    let startTime = Date.now();
    let animationFrameId: number;

    const animate = () => {
      if (!isPaused.current) {
        const elapsed = Date.now() - startTime;
        const newProgress = Math.min((elapsed / autoPlayInterval) * 100, 100);
        
        if (newProgress >= 100) {
           const nextIndex = (activeIndex + 1) % items.length;
           scrollToIndex(nextIndex);
           startTime = Date.now();
           setProgress(0);
        } else {
           setProgress(newProgress);
           animationFrameId = requestAnimationFrame(animate);
        }
      } else {
         startTime = Date.now();
         setProgress(0);
         animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [activeIndex, items.length, autoPlayInterval]);

  const scrollToIndex = (index: number) => {
    if (containerRef.current) {
       const width = containerRef.current.offsetWidth;
       containerRef.current.scrollTo({ left: index * width, behavior: 'smooth' });
       setActiveIndex(index);
    }
  }

  const handleScroll = () => {
     if (containerRef.current) {
         const width = containerRef.current.offsetWidth;
         const scrollLeft = containerRef.current.scrollLeft;
         const newIndex = Math.round(scrollLeft / width);
         if (newIndex !== activeIndex) {
             setActiveIndex(newIndex);
             setProgress(0);
         }
     }
  }
  
  const handlePause = () => { isPaused.current = true; }
  const handleResume = () => { isPaused.current = false; }

  return (
     <div 
        className={`md:hidden relative w-full ${className}`}
        onMouseEnter={handlePause}
        onMouseLeave={handleResume}
     >
        <div 
          ref={containerRef}
          className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar w-full"
          onScroll={handleScroll}
          onTouchStart={handlePause}
          onTouchEnd={handleResume}
        >
           {items.map((item, i) => (
              <div key={i} className="min-w-full snap-center px-1">
                 {renderItem(item)}
              </div>
           ))}
        </div>
        
        {/* Indicators with Timer Animation */}
        <div className="flex justify-center gap-2 mt-6">
           {items.map((_, i) => (
              <button 
                key={i} 
                onClick={() => scrollToIndex(i)}
                className="relative h-1 w-8 rounded-full bg-white/20 overflow-hidden cursor-pointer focus:outline-none hover:bg-white/30 transition-colors"
                aria-label={`Go to slide ${i + 1}`}
              >
                 <div 
                    className={`absolute top-0 left-0 h-full bg-motion-accent transition-all duration-75 ease-linear`}
                    style={{ 
                        width: i === activeIndex ? `${progress}%` : (i < activeIndex ? '100%' : '0%'),
                        opacity: i === activeIndex ? 1 : 0.3
                    }}
                 />
              </button>
           ))}
        </div>
     </div>
  )
}