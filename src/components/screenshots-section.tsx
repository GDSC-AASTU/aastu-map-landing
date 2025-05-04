"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

export function ScreenshotsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const screenshots = [
    {
      url: "https://placehold.co/640x1280/1e3a8a/FFFFFF?text=AASTU+Map+1",
      alt: "AASTU Map Screenshot - Home Screen",
    },
    {
      url: "https://placehold.co/640x1280/0ea5e9/FFFFFF?text=AASTU+Map+2",
      alt: "AASTU Map Screenshot - Navigation",
    },
    {
      url: "https://placehold.co/640x1280/2563eb/FFFFFF?text=AASTU+Map+3",
      alt: "AASTU Map Screenshot - Building Details",
    },
    {
      url: "https://placehold.co/640x1280/4f46e5/FFFFFF?text=AASTU+Map+4",
      alt: "AASTU Map Screenshot - Community",
    },
    {
      url: "https://placehold.co/640x1280/2563eb/FFFFFF?text=AASTU+Map+3",
      alt: "AASTU Map Screenshot - Building Details",
    },
    {
      url: "https://placehold.co/640x1280/4f46e5/FFFFFF?text=AASTU+Map+4",
      alt: "AASTU Map Screenshot - Community",
    },
  ];
  
  // Auto-scroll the carousel
  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      if (carouselRef.current && isLoaded) {
        // Get current scroll position
        const scrollPos = carouselRef.current.scrollLeft;
        const itemWidth = 290; // Width + gap
        const totalItems = screenshots.length;
        
        // Calculate next position
        const currentPos = Math.round(scrollPos / itemWidth);
        const nextPos = (currentPos + 1) % totalItems;
        
        // Scroll to next position
        carouselRef.current.scrollTo({
          left: nextPos * itemWidth,
          behavior: 'smooth'
        });
      }
    }, 3000);
    
    return () => clearInterval(interval);
  }, [screenshots.length, isLoaded]);

  return (
    <section ref={sectionRef} className="py-24 overflow-hidden relative">
      {/* Gradient background with transition effect */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900"></div>
      
      <div className="container px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">App Screenshots</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Get a glimpse of the AASTU Map app&apos;s beautiful interface and powerful features.
          </p>
        </motion.div>

        <div className="relative">
          {/* Screenshot gallery with auto-scroll */}
          <div className="relative">
            <div className="absolute left-0 w-16 h-full bg-gradient-to-r from-gray-100 to-transparent dark:from-gray-900 dark:to-transparent z-10"></div>
            <div className="absolute right-0 w-16 h-full bg-gradient-to-l from-gray-100 to-transparent dark:from-gray-900 dark:to-transparent z-10"></div>
            
            <div 
              ref={carouselRef}
              className="flex gap-8 pb-8 overflow-x-auto px-4 snap-x scrollbar-hide"
            >
              {screenshots.map((screenshot, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex-shrink-0 snap-center"
                >
                  <div className="relative w-[250px] h-[500px] overflow-hidden rounded-2xl shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-900/80 dark:to-blue-950/90 z-10"></div>
                    <Image
                      src={screenshot.url}
                      alt={screenshot.alt}
                      width={250}
                      height={500}
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
                    {screenshot.alt}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-gray-100 dark:to-gray-900/30 -z-5"></div>
    </section>
  );
} 