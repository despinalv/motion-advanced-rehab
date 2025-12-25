import React, { useState, useEffect, useRef } from 'react';

interface CarouselProps<T> {
   items: T[];
   renderItem: (item: T) => React.ReactNode;
   autoPlayInterval?: number;
   className?: string;
}

export const Carousel = <T extends any>({ items, renderItem, autoPlayInterval = 5000, className = '' }: CarouselProps<T>) => {
   const [activeIndex, setActiveIndex] = useState(0); // This tracks the "logical" index (0 to N-1)
   const [progress, setProgress] = useState(0);
   const containerRef = useRef<HTMLDivElement>(null);
   const isPaused = useRef(false);
   const isIntersecting = useRef(false); // Track visibility

   // Create extended items for infinite scroll: [Last, ...Originals, First]
   // Only extend if we have items
   const extendedItems = items.length > 0 ? [items[items.length - 1], ...items, items[0]] : [];

   // We need to track the "scroll" index separate from "active" index to handle the clones
   // Initial position is index 1 (the first real item)
   const scrollIndexRef = useRef(1);

   // Initialize Scroll Position on Mount & when Items change
   useEffect(() => {
      if (containerRef.current && items.length > 0) {
         const width = containerRef.current.offsetWidth;
         // Start at index 1 (First Real Item)
         containerRef.current.scrollLeft = width;
         scrollIndexRef.current = 1;
      }
   }, [items.length]);

   // Intersection Observer to handle start/stop based on visibility
   useEffect(() => {
      const observer = new IntersectionObserver(
         ([entry]) => {
            isIntersecting.current = entry.isIntersecting;
            if (entry.isIntersecting) {
               // Reset progress when entering view? User said: "always starts with the first card".
               // If we just resume, it continues where it left off.
               // To "start with the first card" implies resetting if it was out of view.
               // However, if we scroll lightly up and down, full reset might be annoying.
               // But based on "when I scroll down... it always starts with the first card", 
               // let's ensure we are clean.
               // Actually, the "start with first card" might just mean "don't play while hidden".
               // If we don't play while hidden, it stays on the first card (default state).
               if (!isPaused.current) {
                  // Just ensure we are active
               }
            } else {
               // When leaving view, maybe we should pause or reset? 
               // If we reset, next time it enters it is at 0.
               // Let's NOT force reset the scroll position as that jumps the UI if partially visible.
               // Just stopping the timer is sufficient to satisfy "begins counting only when ... in screen"
               setProgress(0);
            }
         },
         { threshold: 0.6 } // Needs to be 60% visible to count as "in screen"
      );

      if (containerRef.current) {
         observer.observe(containerRef.current);
      }

      return () => observer.disconnect();
   }, []);


   // Auto-play Timer Logic
   useEffect(() => {
      let startTime = Date.now();
      let animationFrameId: number;

      const animate = () => {
         // Only run if visible and not paused by generic interaction
         if (isIntersecting.current && !isPaused.current && items.length > 0) {

            const elapsed = Date.now() - startTime;
            const newProgress = Math.min((elapsed / autoPlayInterval) * 100, 100);

            if (newProgress >= 100) {
               // Time to move next
               handleNext();
               startTime = Date.now();
               setProgress(0);
            } else {
               setProgress(newProgress);
               animationFrameId = requestAnimationFrame(animate);
            }
         } else {
            // Reset time tracking so we don't jump immediately upon resume
            startTime = Date.now();
            // If we are paused, keep progress static or reset? 
            // Usually easier to just hold or reset. User wants it to "begin counting only when in screen".
            if (!isIntersecting.current) {
               setProgress(0);
            }
            animationFrameId = requestAnimationFrame(animate);
         }
      };

      animationFrameId = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrameId);
   }, [autoPlayInterval, items.length]); // Minimize dependencies


   const scrollToRealIndex = (index: number, behavior: ScrollBehavior = 'smooth') => {
      if (containerRef.current) {
         const width = containerRef.current.offsetWidth;
         containerRef.current.scrollTo({ left: index * width, behavior });
         scrollIndexRef.current = index;

         // Update Logical Index for indicators
         if (index === 0) setActiveIndex(items.length - 1);       // Clone Last -> Real Last
         else if (index === items.length + 1) setActiveIndex(0); // Clone First -> Real First
         else setActiveIndex(index - 1);
      }
   };

   const handleNext = () => {
      const nextIndex = scrollIndexRef.current + 1;
      scrollToRealIndex(nextIndex, 'smooth');
   };

   const handleManualScroll = (index: number) => {
      scrollToRealIndex(index + 1, 'smooth'); // +1 because index 0 is at pos 1
   }


   // The "Infinite" Loop Logic handler
   const handleScroll = () => {
      if (containerRef.current) {
         const scrollLeft = containerRef.current.scrollLeft;
         const width = containerRef.current.offsetWidth;

         // Current float index
         const position = scrollLeft / width;
         const roundedIndex = Math.round(position);

         // Update active index for indicators immediately for responsiveness
         if (roundedIndex === 0) setActiveIndex(items.length - 1);
         else if (roundedIndex === items.length + 1) setActiveIndex(0);
         else setActiveIndex(roundedIndex - 1);

         scrollIndexRef.current = roundedIndex;

         // Check for Clones and Jump
         // We use a small tolerance or just check if we are settled close to the clone
         // Creating a "seamless" infinite scroll often requires checking if animation stopped.
         // But simply checking: If we are fully at index 0, jump to N.

         if (Math.abs(position - roundedIndex) < 0.05) { // Pretty close to snapped
            if (roundedIndex === 0) {
               // We are at the Start Clone (Copy of Last). Jump to Real Last.
               // Real Last is at index N (items.length)
               containerRef.current.scrollTo({ left: items.length * width, behavior: 'auto' }); // Instant jump
               scrollIndexRef.current = items.length;
            }
            else if (roundedIndex === items.length + 1) {
               // We are at the End Clone (Copy of First). Jump to Real First.
               // Real First is at index 1
               containerRef.current.scrollTo({ left: width, behavior: 'auto' }); // Instant jump
               scrollIndexRef.current = 1;
            }
         }
      }
   }

   const handlePause = () => { isPaused.current = true; }
   const handleResume = () => { isPaused.current = false; }


   if (items.length === 0) return null;

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
            {extendedItems.map((item, i) => (
               <div key={i} className="min-w-full snap-center px-1">
                  {renderItem(item)}
               </div>
            ))}
         </div>

         {/* Indicators */}
         <div className="flex justify-center gap-2 mt-6">
            {items.map((_, i) => (
               <button
                  key={i}
                  onClick={() => handleManualScroll(i)}
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