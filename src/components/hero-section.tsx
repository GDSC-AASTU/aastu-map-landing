"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Download } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Gradient background inspired by FlutterFlow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 via-white to-gray-100 dark:from-blue-950/50 dark:via-gray-900 dark:to-gray-900"></div>
        
        {/* Radial gradient overlay */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[600px] bg-blue-400/10 dark:bg-blue-500/20 rounded-full blur-[120px] opacity-70"></div>
      </div>

      <div className="container px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 dark:from-blue-400 dark:via-blue-300 dark:to-blue-500">
              AASTU Map
            </span>
            <span className="block mt-6 text-gray-900 dark:text-white">
              Your Intelligent Campus Navigator
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-700 dark:text-gray-300">
            Transform your campus experience with our sophisticated mobile application, 
            designed to help you navigate and interact with Addis Ababa Science and Technology University.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className={cn(
                "inline-flex items-center gap-2 rounded-lg px-6 py-3 text-md font-medium",
                "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800"
              )}
            >
              <Download className="h-5 w-5" />
              <span>Download for Android</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className={cn(
                "inline-flex items-center gap-2 rounded-lg px-6 py-3 text-md font-medium",
                "bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
              )}
            >
              <Download className="h-5 w-5" />
              <span>Download for iOS</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
      
      {/* Bottom gradient transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white dark:to-gray-900 -z-5"></div>
    </section>
  );
} 