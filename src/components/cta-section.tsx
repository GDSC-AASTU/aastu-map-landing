"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Download } from "lucide-react";
import { useState } from "react";
import { IosWaitlistDialog } from "./ios-waitlist-dialog";

export function CTASection() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Top gradient transition */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-gray-100 to-transparent dark:from-gray-900/30 dark:to-transparent z-10"></div>
    
      {/* Background gradient - no bottom transition */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-gray-950 -z-10"></div>
      
      {/* Location dot pattern overlay */}
      <div className="absolute inset-0 -z-5">
        <div className="absolute w-full h-full">
          {Array.from({ length: 20 }).map((_, i) => (
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
          {Array.from({ length: 15 }).map((_, i) => (
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
      
      <div className="container relative px-12 z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
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
      </div>
      
      {/* No bottom transition - will blend with footer */}
      
      {/* iOS Waitlist Dialog */}
      <IosWaitlistDialog 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />
    </section>
  );
} 