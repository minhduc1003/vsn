"use client";
import { motion } from "framer-motion";
import ContactSection from "@/components/ContactSection";
import ProjectCard, { Project } from "@/components/ProjectCard";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectDetail = () => {
  const projectDetail = {
    title: "airasia / american tourister",
    client: "American Tourister",
    year: "2023",
    description:
      "A vibrant campaign showcasing the latest collection of American Tourister luggage.",
    scope: ["Photography", "Video Production", "Creative Direction"],
  };
  const images = [
    "/anh.avif",
    "/anh.avif",
    "/anh.avif",
    "/anh.avif",
    "/anh.avif",
    "/anh.avif",
  ];
  const project2: Project[] = [
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
  ];
  return (
    <>
      <main>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-24 max-w-[1200px] mx-auto mt-20"
        >
          <div className="px-4">
            <div className="flex flex-col gap-10">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight"
              >
                {projectDetail.title.split(" / ").map((part, index) => (
                  <span key={index} className="block">
                    {part}
                  </span>
                ))}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-x-12 gap-y-4"
              >
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">
                    Client
                  </p>
                  <p className="text-lg font-semibold">
                    {projectDetail.client}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">
                    Year
                  </p>
                  <p className="text-lg font-semibold">{projectDetail.year}</p>
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-xl text-gray-800 max-w-prose"
              >
                {projectDetail.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-3">
                  Scope of Work
                </p>
                <div className="flex flex-wrap gap-3">
                  {projectDetail.scope.map((tag) => (
                    <div
                      key={tag}
                      className="bg-white border border-gray-300 rounded-full px-4 py-1.5 text-sm"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="max-w-[1200px] mx-auto px-4 pb-24"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {images.map((imageUrl, index) => {
              const positionInPattern = index % 9;
              const isWide =
                positionInPattern === 2 ||
                positionInPattern === 5 ||
                positionInPattern === 8 ||
                (index === images.length - 1 && images.length % 2 !== 0);

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  className={`
                    overflow-hidden rounded-2xl
                    ${isWide ? "sm:col-span-2" : ""} 
                  `}
                >
                  <Image
                    src={imageUrl}
                    alt={`Project gallery image ${index + 1}`}
                    width={isWide ? 1600 : 800}
                    height={1000}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    priority={index < 3}
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="py-10"
        >
          <div className="max-w-[1200px] mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">
              More Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {project2.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 font-medium hover:text-gray-600 transition-colors"
              >
                View all my projects{" "}
                <span className="transition-transform hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </motion.section>
        <ContactSection />
      </main>
    </>
  );
};

export default ProjectDetail;
