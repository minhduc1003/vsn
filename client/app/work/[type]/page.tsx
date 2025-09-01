"use client";
import { motion } from "framer-motion";
import ContactSection from "@/components/ContactSection";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ShowDetailModal from "@/components/ShowDetailModal";
import { projectData } from "@/data/projectData";
import { useParams } from "next/navigation";
import { categories } from "@/data/category";

const ProjectDetail = () => {
  const params = useParams();
  const [details, setDetails] = React.useState<any>(null);
  const type = params.type as string;
  console.log(type);
  if (!["campaign", "press", "video", "lookbook"].includes(type)) {
    return <div>404 - Not Found</div>;
  }

  const projectDetail = categories.find(
    (category) => category.name.toLowerCase() === type
  );
  return (
    <>
      <main>
        {details && (
          <ShowDetailModal
            id={details}
            onClose={(val: any) => {
              setDetails(val);
            }}
          />
        )}
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
                {projectDetail?.name.split(" / ").map((part, index) => (
                  <span key={index} className="block">
                    {part}
                  </span>
                ))}
              </motion.h1>

              {/* <motion.div
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
              </motion.div> */}

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-xl text-gray-800 max-w-prose"
              >
                {projectDetail?.description}
              </motion.p>
              {/* 
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
              </motion.div> */}
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="max-w-[1200px] mx-auto px-4 pb-24 flex justify-center items-center"
        >
          {type === "video" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-6xl">
              {projectData
                .filter((project) => project.category.toLowerCase() === type)[0]
                .link.map((video, index) => (
                  <div key={index} className="w-full">
                    <iframe
                      width="100%"
                      height="315"
                      src={`https://www.youtube.com/embed/${video?.url}`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full rounded-lg shadow-lg aspect-video"
                    />
                  </div>
                ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 max-w-full">
              {projectData
                .filter((project) => project.category.toLowerCase() === type)
                .map((a, index) => (
                  <div
                    key={index}
                    className="aspect-square overflow-hidden relative group"
                    onClick={() => setDetails(a.id)}
                  >
                    <Image
                      src={a.firstImage}
                      alt={`Project gallery image ${index + 1}`}
                      width={1200}
                      height={1200}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 next-image"
                      priority={index < 6}
                      quality={90}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                    {/* Add overlay div */}
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="flex justify-between items-end">
                        <div className="flex items-center gap-2 text-base font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                          <span>View Project</span>
                          <span className="text-xl">▸</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </motion.section>

        {/* <motion.section
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
              {categories.map((project) => (
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
        </motion.section> */}
        <ContactSection />
      </main>
    </>
  );
};

export default ProjectDetail;
