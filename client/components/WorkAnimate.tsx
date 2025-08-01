"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import { useModal } from "@/context/ModalContext";
import Brand from "@/components/Brand";
import { categories } from "@/data/category";
interface Project {
  id: number;
  title: string;
  category: "Photo/Video";
  imageUrl: string;
  projectUrl: string;
}

const mockProjects: Project[] = [
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
const WorkAnimate = () => {
  const [scroll, setScroll] = useState<number>(0);
  const [scrollYProgress, setScrollYProgress] = useState<any>(0);
  const projectRef = useRef<HTMLDivElement>(null);
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const handleScroll = () => {
    setScroll(window.scrollY);
    if (projectRef.current) {
      const scrollPercentage = Math.min(Math.max((scroll - 300) / 300, 0), 1);

      setScrollYProgress(scrollPercentage);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <section className="py-10 border-t border-gray-200" ref={projectRef}>
      <div className="container mx-auto px-4">
        <motion.div
          className="flex items-center justify-between mb-12"
          style={{
            opacity: screenWidth < 768 ? 1 : scrollYProgress >= 0.3 ? 1 : 0,
            transform:
              screenWidth < 768
                ? "none"
                : `translateX(${scrollYProgress >= 0.3 ? "0px" : "-100px"})`,
            transition:
              screenWidth < 768 ? "none" : "opacity 0.5s, transform 0.5s",
          }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Latest Projects
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {categories.map((project) => (
            <motion.div
              key={project.id}
              style={{
                transform:
                  screenWidth > 1050
                    ? `
                  translateX(${
                    project.id % 2 === 0
                      ? 0
                      : screenWidth * 0.4 - scrollYProgress * screenWidth * 0.4
                  }px) 
                  translateY(${
                    project.id < 3
                      ? scroll > 0
                        ? Math.min(
                            -(500 + screenWidth * 0.14) * (1 - scrollYProgress),
                            0
                          )
                        : -(500 + screenWidth * 0.14)
                      : scroll > 0
                      ? Math.min(
                          -(850 + screenWidth * 0.2) * (1 - scrollYProgress),
                          0
                        )
                      : -(850 + screenWidth * 0.2)
                  }px) 
                  rotate(${
                    project.id === 1
                      ? 5 - scrollYProgress * 5
                      : project.id === 2
                      ? -10 + scrollYProgress * 10
                      : project.id === 3
                      ? -7 + scrollYProgress * 7
                      : 12 - scrollYProgress * 12
                  }deg) 
                  scale(${0.6 + scrollYProgress * 0.4})
                  `
                    : "none",
                transition: "transform 0.3s ease-out",
              }}
            >
              <Link
                href={
                  screenWidth < 768
                    ? `work/${project.name.toLowerCase()}`
                    : scrollYProgress === 1
                    ? `work/${project.name.toLowerCase()}`
                    : ""
                }
                className="group block relative overflow-hidden rounded-2xl max-w-[800px] max-h-[500px]"
              >
                <Image
                  src={project.imageUrl}
                  alt={`Project: ${project.name}`}
                  width={800}
                  height={500}
                  className={`
                  w-[800px] h-[500px] object-cover 
                  transition-transform duration-500 ease-in-out
                   ${
                     screenWidth < 768
                       ? "group-hover:scale-105"
                       : scrollYProgress === 1
                       ? "group-hover:scale-105"
                       : ""
                   }
                  `}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent  duration-300 ${
                    screenWidth < 768
                      ? ""
                      : scrollYProgress === 0
                      ? "opacity-0"
                      : ""
                  }`}
                ></div>
                <div
                  className={`absolute top-4 left-4  duration-300 ${
                    screenWidth < 768
                      ? ""
                      : scrollYProgress === 0
                      ? "opacity-0"
                      : ""
                  }`}
                >
                  <span className="bg-black/50 text-white text-lg font-semibold px-4 opacity-80 py-1 rounded-full backdrop-blur-sm">
                    {project.name}
                  </span>
                </div>
                <div
                  className={`absolute bottom-0 left-0 right-0 p-5 text-white  duration-300 ${
                    screenWidth < 768
                      ? ""
                      : scrollYProgress === 0
                      ? "opacity-0"
                      : ""
                  }`}
                >
                  <div className="flex justify-between items-end">
                    {/* <p className="text-sm font-medium">{project.title}</p> */}
                    <div
                      className={`
                  flex items-center gap-1 text-sm font-semibold 
                  translate-y-2 ${
                    screenWidth < 768
                      ? "group-hover:translate-y-0"
                      : scrollYProgress === 1
                      ? "group-hover:translate-y-0"
                      : ""
                  }
                  transition-all duration-300
                  `}
                    >
                      <span>View Project</span>
                      <span className="text-lg">▸</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 font-medium hover:text-gray-600 transition-colors"
          >
            View all my projects{" "}
            <span className="transition-transform hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorkAnimate;
