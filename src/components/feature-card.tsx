"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  delay?: number;
}

export function FeatureCard({ title, description, icon, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div
        className={cn(
          "absolute -inset-px rounded-xl opacity-50 group-hover:opacity-80 transition duration-300",
          "bg-gradient-to-r from-blue-600 via-blue-400 to-blue-500 dark:from-blue-500 dark:via-blue-300 dark:to-blue-600",
          "animate-pulse-slow animate-gradient"
        )}
      />
      <div
        className={cn(
          "relative flex flex-col h-full p-6 rounded-xl",
          "bg-white dark:bg-gray-900/90",
          "shadow-sm"
        )}
      >
        <div className="mb-4 rounded-full w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">
          {icon}
        </div>
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
} 