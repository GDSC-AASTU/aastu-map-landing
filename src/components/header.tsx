"use client";

import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";
import { Download, Github } from "lucide-react";
import { useEffect, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [scrollDirection, setScrollDirection] = useState("none");
  const [lastScrollY, setLastScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if we're at the top
      if (currentScrollY <= 0) {
        setAtTop(true);
      } else {
        setAtTop(false);
      }
      
      // Determine scroll direction
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      
      // Set scrolled state for styling
      if (currentScrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // Determine if header should be visible
  const isHeaderVisible = scrolled || !atTop || scrollDirection === "up";
  
  return (
    <header className={cn(
      "fixed top-0 z-40 w-full transition-all duration-300",
      scrolled 
        ? "border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur" 
        : "bg-transparent border-transparent",
      atTop && scrollDirection === "down" ? "opacity-0 -translate-y-full" : "opacity-100 translate-y-0"
    )}>
      <div className="container flex h-16 items-center justify-between px-12">
        <Logo />
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <div className="hidden md:flex gap-2">
            <a
              href="#"
              className={cn(
                "inline-flex items-center gap-1 rounded-md px-4 py-2 text-sm font-medium transition-colors",
                scrolled
                  ? "bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900/50 dark:text-blue-200 dark:hover:bg-blue-900"
                  : "bg-blue-100/80 text-blue-700 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-200 dark:hover:bg-blue-900/40"
              )}
            >
              <Download className="h-4 w-4" />
              <span>Download APK</span>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center gap-1 rounded-md px-4 py-2 text-sm font-medium transition-colors",
                scrolled
                  ? "bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
                  : "bg-gray-200/80 text-gray-900 hover:bg-gray-200 dark:bg-gray-800/30 dark:text-gray-100 dark:hover:bg-gray-800/40"
              )}
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
} 