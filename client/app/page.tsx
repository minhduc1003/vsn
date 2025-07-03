"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import { useModal } from "@/context/ModalContext";

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
export default function Home() {
  const logos = [
    { name: "DJI", path: "/next.svg" },
    { name: "H&M", path: "/next.svg" },
    { name: "Zara", path: "/next.svg" },
    { name: "Ferrari", path: "/next.svg" },
    { name: "Reebok", path: "/next.svg" },
    { name: "Reebok", path: "/next.svg" },
    { name: "Reebok", path: "/next.svg" },
    { name: "Reebok", path: "/next.svg" },
    { name: "Reebok", path: "/next.svg" },
    { name: "Reebok", path: "/next.svg" },
  ];
  const [scroll, setScroll] = useState<number>(0);
  const [scrollYProgress, setScrollYProgress] = useState<any>(0);
  const projectRef = useRef<HTMLDivElement>(null);
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const { openModal } = useModal();
  const handleScroll = () => {
    setScroll(window.scrollY);
    if (projectRef.current) {
      const scrollPercentage = Math.min(Math.max((scroll - 300) / 300, 0), 1);

      setScrollYProgress(scrollPercentage);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    () => {
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
    <>
      <main className="pt-24">
        <section className="container mx-auto px-4 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="flex flex-col gap-6 sm:gap-8">
              <div className="inline-flex items-center gap-2 border border-gray-200 rounded-full px-3 py-1 text-sm w-fit">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                Available for inquiries
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
                <span className="text-g</span>ray-600">Modern</span>
                <br />
                renaissance
              </h1>

              <div className="space-y-4">
                <p className="text-xs font-mono uppercase tracking-widest text-gray-500">
                  PERHAPS TODAY ✨
                </p>
                <p className="text-base sm:text-lg text-gray-700 max-w-md">
                  hello, I'm{" "}
                  <strong className="font-bold text-black">Vsn</strong> - a
                  mixed-media specialist based out of{" "}
                  <strong className="font-bold text-black">
                    Tokyo, Japan.
                  </strong>
                </p>
                <p className="text-base sm:text-lg text-gray-700 max-w-md">
                  I execute photo, video, and design projects.
                </p>
              </div>

              <div
                onClick={() => openModal()}
                className="w-fit inline-flex items-center gap-3 bg-black text-white font-medium rounded-full px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base transition-all duration-300 hover:bg-gray-800 hover:scale-105 active:scale-95"
              >
                <Image
                  src="/ava.avif"
                  alt="Vsn's avatar"
                  width={24}
                  height={24}
                  className="rounded-full border-2 border-gray-600 sm:w-[28px] sm:h-[28px]"
                />
                <span>Send me a message</span>
              </div>
            </div>
          </div>
        </section>
        <section className="border-t border-gray-200">
          <div className="container mx-auto px-4 py-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10 ">
              <div>
                <p className="text-gray-500 text-lg w-[200px]">
                  Trusted by{" "}
                  <span className="font-bold text-gray-700 text-3xl">many</span>
                </p>
              </div>
              <div className="overflow-hidden">
                <div className="relative overflow-hidden w-full">
                  <div className="flex overflow-hidden whitespace-nowrap">
                    <motion.div
                      className="flex"
                      animate={{
                        x: ["0%", "-50%"],
                      }}
                      transition={{
                        duration: 10,
                        ease: "linear",
                        repeat: Infinity,
                      }}
                    >
                      <div className="flex">
                        {[...Array(6)].map(() =>
                          logos.map((logo, index) => (
                            <Image
                              key={`first-${
                                logo.name
                              }-${index}-${Math.random()}`}
                              src={logo.path}
                              alt={`${logo.name} logo`}
                              width={100}
                              height={28}
                              className="mx-8 object-contain filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100"
                            />
                          ))
                        )}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-24 border-t border-gray-200" ref={projectRef}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {mockProjects.map((project) => (
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
                            -(550 + screenWidth * 0.14) * (1 - scrollYProgress),
                            0
                          )
                        : -(550 + screenWidth * 0.14)
                      : scroll > 0
                      ? Math.min(
                          -(900 + screenWidth * 0.2) * (1 - scrollYProgress),
                          0
                        )
                      : -(900 + screenWidth * 0.2)
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
                    href={project.projectUrl}
                    className="group block relative overflow-hidden rounded-2xl"
                  >
                    <Image
                      src={project.imageUrl}
                      alt={`Project: ${project.title}`}
                      width={800}
                      height={600}
                      className={`
                  w-full h-full object-cover 
                  transition-transform duration-500 ease-in-out
                   ${scrollYProgress === 1 ? "group-hover:scale-105" : ""}
                  `}
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent  duration-300 ${
                        scrollYProgress === 0 ? "opacity-0" : ""
                      }`}
                    ></div>
                    <div
                      className={`absolute top-4 left-4  duration-300 ${
                        scrollYProgress === 0 ? "opacity-0" : ""
                      }`}
                    >
                      <span className="bg-black/50 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div>
                    <div
                      className={`absolute bottom-0 left-0 right-0 p-5 text-white  duration-300 ${
                        scrollYProgress === 0 ? "opacity-0" : ""
                      }`}
                    >
                      <div className="flex justify-between items-end">
                        <p className="text-sm font-medium">{project.title}</p>
                        <div
                          className={`
                  flex items-center gap-1 text-sm font-semibold 
                  translate-y-2 ${
                    scrollYProgress === 1 ? "group-hover:translate-y-0" : ""
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
                <span className="transition-transform hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </section>
        <ServicesSection />
        <AboutSection />
      </main>
    </>
  );
}
