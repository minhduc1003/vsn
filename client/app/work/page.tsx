"use client";
import { motion } from "framer-motion";
import ContactSection from "@/components/ContactSection";
import ProjectCard, { Project } from "@/components/ProjectCard";
import React from "react";
const allProjects: Project[] = [
  {
    id: 1,
    title: "airasia / american tourister",
    category: "Photo/Video",
    imageUrl: "/anh.avif",
    projectUrl: "/work/airasia",
  },
  {
    id: 2,
    title: "aape",
    category: "Photo/Video",
    imageUrl: "/anh.avif",
    projectUrl: "/work/aape",
  },
  {
    id: 3,
    title: "salomon / brand campaign",
    category: "Photo/Video",
    imageUrl: "/anh.avif",
    projectUrl: "/work/salomon",
  },
  {
    id: 4,
    title: "ferrari",
    category: "Photo/Video",
    imageUrl: "/anh.avif",
    projectUrl: "/work/ferrari",
  },
];

const Work = () => {
  return (
    <>
      <main>
        <section className="bg-white py-24">
          <div className="max-w-[1200px] mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4">
                My most recent work
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Vibrant visuals that tell powerful stories ✨<br />
                Projects from recent years captured across the globe.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-8"
            >
              {allProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 * (index + 1) }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        <ContactSection />
      </main>
    </>
  );
};

export default Work;
