"use client";
import { motion } from "framer-motion";
import ContactSection from "@/components/ContactSection";
import ProjectCard from "@/components/ProjectCard";
import React from "react";
import { categories } from "@/data/category";

const Work = () => {
  return (
    <>
      <main className="mt-10">
        <section className="bg-white py-24">
          <div className="max-w-[1200px] mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-6xl md:text-[65px] font-bold tracking-tighter leading-[45px]">
                RECENT WORK
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Projects from recent years captured across the global✨
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-8"
            >
              {categories.map((project, index) => (
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
        {/* <ContactSection /> */}
      </main>
    </>
  );
};

export default Work;
