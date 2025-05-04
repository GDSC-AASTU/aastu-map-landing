"use client";

import { motion } from "framer-motion";
import { FeatureCard } from "./feature-card";
import { Map, Users, Building, Compass, Search, Bell } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      title: "Interactive Campus Navigation",
      description: "Detailed, interactive maps of the entire AASTU campus with real-time location tracking and pathfinding.",
      icon: <Map className="h-6 w-6" />,
    },
    {
      title: "Smart Discovery System",
      description: "Intelligent search functionality for places and facilities with categorized exploration of campus locations.",
      icon: <Search className="h-6 w-6" />,
    },
    {
      title: "Community Integration",
      description: "Campus clubs and communities directory with member management and engagement features.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Building Directory",
      description: "Comprehensive information about every building and facility on campus with detailed floor plans.",
      icon: <Building className="h-6 w-6" />,
    },
    {
      title: "Wayfinding System",
      description: "Turn-by-turn directions to any location on campus with estimated arrival times.",
      icon: <Compass className="h-6 w-6" />,
    },
    {
      title: "Real-time Updates",
      description: "Get instant notifications about campus events, emergencies, and important announcements.",
      icon: <Bell className="h-6 w-6" />,
    },
  ];

  return (
    <section className="py-24">
      <div className="container px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Core Features</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            AASTU Map transforms the way you navigate and interact with the university campus,
            providing a comprehensive digital companion for your academic journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 