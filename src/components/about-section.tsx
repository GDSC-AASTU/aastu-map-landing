"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function AboutSection() {
  const targetAudience = [
    "New and existing AASTU students",
    "University faculty and staff",
    "Campus visitors and guests",
    "Community members and club participants",
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>
      
      <div className="container px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">About AASTU Map</h2>
            <p className="mb-6 text-gray-600 dark:text-gray-400">
              AASTU Map is a sophisticated mobile application developed by the Google Developers Group
              on Campus AASTU at Addis Ababa Science and Technology University (AASTU).
              This innovative digital solution transforms the way students, faculty, and visitors
              navigate and interact with the university campus.
            </p>
            <p className="mb-6 text-gray-600 dark:text-gray-400">
              Developed with a student-first approach, the application continuously evolves through
              community feedback and contributions. The project is open-source, encouraging collaboration
              and innovation from the developer community while maintaining high standards of quality
              and user experience.
            </p>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Target Audience</h3>
              <ul className="space-y-2">
                {targetAudience.map((audience, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center text-gray-600 dark:text-gray-400"
                  >
                    <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                    {audience}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className={cn(
              "absolute -inset-4 rounded-2xl opacity-20",
              "bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-600 dark:to-blue-900",
              "blur-sm"
            )}></div>
            <div className={cn(
              "relative z-10 bg-white dark:bg-gray-900 rounded-xl p-8",
              "border border-gray-100 dark:border-gray-800"
            )}>
              <h3 className="text-2xl font-bold mb-4">Unique Value Proposition</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                AASTU Map stands out as more than just a navigation tool - it's a comprehensive digital companion that enhances the entire campus experience. By combining intelligent navigation with community features and personalized content, it creates a seamless bridge between physical spaces and digital interaction within the university environment.
              </p>
              <h3 className="text-2xl font-bold mb-4">Future Vision</h3>
              <p className="text-gray-600 dark:text-gray-400">
                The application is designed to grow with the university, incorporating new features and improvements based on user needs. Future enhancements include augmented reality navigation, AI-powered recommendations, and expanded community features to further enrich the campus experience.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 