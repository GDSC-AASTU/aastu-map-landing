"use client";

import { Logo } from "./logo";
import { cn } from "@/lib/utils";
import { Github, Twitter, Instagram } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 relative">
      {/* Same background as CTA section, no top transition */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-gray-950 -z-10"></div>
      
      {/* Location dot pattern overlay - continuing from CTA section */}
      <div className="absolute inset-0 -z-5">
        <div className="absolute w-full h-full">
          {Array.from({ length: 10 }).map((_, i) => (
            <div 
              key={i}
              className="absolute w-2 h-2 rounded-full bg-blue-400/20 dark:bg-blue-400/10"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: 'translate(-50%, -50%)'
              }}
            ></div>
          ))}
          {Array.from({ length: 8 }).map((_, i) => (
            <div 
              key={i}
              className="absolute w-1 h-1 rounded-full bg-blue-500/30 dark:bg-blue-500/20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: 'translate(-50%, -50%)'
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="container px-12">
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
    </footer>
  );
} 