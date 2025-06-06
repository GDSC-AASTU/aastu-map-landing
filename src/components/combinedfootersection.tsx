"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Download, Github, Twitter, Instagram } from "lucide-react";
import { Logo } from "./logo";
import { useEffect, useState } from "react";
import { IosWaitlistDialog } from "./ios-waitlist-dialog";

export function CombinedFooterSection() {
  const currentYear = new Date().getFullYear();
  const [dotsPositions, setDotsPositions] = useState<Array<{top: string, left: string}>>([]);
  const [smallDotsPositions, setSmallDotsPositions] = useState<Array<{top: string, left: string}>>([]);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  
  useEffect(() => {
    // Generate positions only on the client side
    const largeDots = Array.from({ length: 30 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`
    }));
    
    const smallDots = Array.from({ length: 20 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`
    }));
    
    setDotsPositions(largeDots);
    setSmallDotsPositions(smallDots);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Top gradient transition */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-gray-100 to-transparent dark:from-gray-900/30 dark:to-transparent z-10"></div>
    
      {/* Background gradient for the entire section */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-gray-950 -z-10"></div>
      
      {/* Location dot pattern overlay - Only rendered after client-side hydration */}
      <div className="absolute inset-0 -z-5">
        <div className="absolute w-full h-full">
          {dotsPositions.map((position, i) => (
            <div 
              key={`large-dot-${i}`}
              className="absolute w-2 h-2 rounded-full bg-blue-400/20 dark:bg-blue-400/10"
              style={{
                top: position.top,
                left: position.left,
                transform: 'translate(-50%, -50%)'
              }}
            ></div>
          ))}
          {smallDotsPositions.map((position, i) => (
            <div 
              key={`small-dot-${i}`}
              className="absolute w-1 h-1 rounded-full bg-blue-500/30 dark:bg-blue-500/20"
              style={{
                top: position.top,
                left: position.left,
                transform: 'translate(-50%, -50%)'
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="container px-12">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-24"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
            <span className="block mb-2">Ready to Transform Your Campus Experience?</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 dark:from-blue-400 dark:via-blue-300 dark:to-blue-500">
              Download AASTU Map Today
            </span>
          </h2>
          <p className="mb-8 text-lg text-gray-700 dark:text-gray-300">
            Join thousands of students, faculty, and visitors who have already enhanced their campus
            experience with AASTU Map. Get started for free and see the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://drive.google.com/file/d/1tC-24sqO_GslKx3Vkys57cLM3qapTjKl/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center gap-2 rounded-lg px-6 py-3 text-md font-medium",
                "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800"
              )}
            >
              <Download className="h-5 w-5" />
              <span>Download for Android</span>
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsWaitlistOpen(true)}
              className={cn(
                "inline-flex items-center gap-2 rounded-lg px-6 py-3 text-md font-medium",
                "bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
              )}
            >
              <Download className="h-5 w-5" />
              <span>Download for iOS</span>
            </motion.button>
          </div>
          <p className="mt-6 text-sm text-gray-600 dark:text-gray-400">
            Available for free on Android and iOS devices.
          </p>
        </motion.div>
        
        {/* Subtle separator - just a bit of margin, no visual line */}
        <div className="pt-6"></div>
        
        {/* Footer Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Logo />
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Your intelligent campus navigation companion
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://github.com/GDSC-AASTU/aastu-map-opensource" 
                target="_blank" 
                rel="noopener noreferrer"
                className={cn(
                  "p-2 rounded-full text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400",
                  "transition-colors"
                )}
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className={cn(
                  "p-2 rounded-full text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400",
                  "transition-colors"
                )}
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className={cn(
                  "p-2 rounded-full text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400",
                  "transition-colors"
                )}
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} AASTU Map. Developed by Google Developers Group on Campus AASTU.
            </p>
          </div>
        </div>
      </div>

      {/* iOS Waitlist Dialog */}
      <IosWaitlistDialog 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />
    </section>
  );
} 