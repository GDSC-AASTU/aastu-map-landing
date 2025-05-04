"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export function CommunitySection() {
  const avatarsContainerRef = useRef<HTMLDivElement>(null);
  
  const contributors = [
    { imageUrl: "https://avatars.githubusercontent.com/u/44440394?s=96&v=4", href: "https://github.com/chisa-dev" },
    { imageUrl: "https://avatars.githubusercontent.com/u/101246148?s=96&v=4", href: "https://github.com/DagmMesfin" },
    { imageUrl: "https://avatars.githubusercontent.com/u/102969913?s=64&v=4", href: "https://github.com/mihretgold" },
    { imageUrl: "https://avatars.githubusercontent.com/u/112767747?s=64&v=4", href: "https://github.com/enkutatash" },
    { imageUrl: "https://avatars.githubusercontent.com/u/112767747?s=64&v=4", href: "#" },
    { imageUrl: "https://avatars.githubusercontent.com/u/122722078?s=64&v=4", href: "https://github.com/resourceful-nebil" },
    { imageUrl: "https://avatars.githubusercontent.com/u/111576904?s=64&v=4", href: "https://github.com/Young19ermi" },
    { imageUrl: "https://avatars.githubusercontent.com/u/105711954?s=64&v=4", href: "https://github.com/Fasikagebrehana" },
    { imageUrl: "https://avatars.githubusercontent.com/u/93379520?s=64&v=4", href: "https://github.com/natiyeshi" },
    { imageUrl: "https://avatars.githubusercontent.com/u/130300957?s=96&v=4", href: "https://github.com/Sefukamil20R" },
    { imageUrl: "https://avatars.githubusercontent.com/u/115806991?s=64&v=4", href: "https://github.com/Mihretthe" },
  ];

  return (
    <section className="py-12 relative overflow-hidden   dark:from-gray-900 dark:to-gray-950">
      <div className="container px-4 sm:px-12 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-3">Built by Community</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Built by community of Google Developer Group at Addis Ababa Science and Technology University
          </p>
        </motion.div>

        <div className="relative mt-10">
          {/* Gradient overlay on left */}
          <div className="absolute left-0 w-24 h-full bg-gradient-to-r from-gray-100 to-transparent dark:from-gray-900 dark:to-transparent z-10"></div>
          
          {/* Gradient overlay on right */}
          <div className="absolute right-0 w-24 h-full bg-gradient-to-l from-gray-100 to-transparent dark:from-gray-900 dark:to-transparent z-10"></div>
          
          <div 
            ref={avatarsContainerRef}
            className="flex justify-center items-center gap-6 py-4 overflow-x-auto px-24 scrollbar-hide"
          >
            {contributors.map((contributor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex-shrink-0"
              >
                <a 
                  href={contributor.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-full"
                >
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-500/30 shadow-lg">
                    <Image
                      src={contributor.imageUrl}
                      alt="Community member"
                      width={60}
                      height={60}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 