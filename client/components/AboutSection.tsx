import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";
import { motion } from "framer-motion";
const socialLinks = [
  { name: "Youtube", icon: FaYoutube, url: "https://youtube.com" },
  { name: "Instagram", icon: FaInstagram, url: "https://instagram.com" },
  { name: "Tiktok", icon: FaTiktok, url: "https://tiktok.com" },
];

const AboutSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-24"
    >
      <div className="max-w-[1200px] mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold tracking-tight mb-16 text-left"
        >
          <span className="text-gray-500">A modern renaissance approach</span>
          <br />
          to visual storytelling.
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-start justify-between">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center lg:items-start order-last lg:order-first lg:w-auto"
          >
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-lg">
                <Image
                  src="/ava.avif"
                  alt="Portrait of vsn Lange"
                  width={500}
                  height={600}
                  className="w-auto h-auto object-cover"
                />

                <div className="absolute bottom-4 right-4 bg-black/40 backdrop-blur-sm p-2 rounded-full">
                  <div className="flex items-center gap-4 px-2">
                    {socialLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/80 hover:text-white transition-colors"
                        aria-label={link.name}
                      >
                        <link.icon className="text-xl" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 text-left">
                <h3 className="text-2xl font-bold">vsn lange</h3>
                <p className="text-gray-500">
                  photographer, filmmaker, creative
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-6 text-lg text-gray-800 order-first lg:order-last lg:w-1/2"
          >
            <p>
              I picked up a camera over a decade ago — and never looked back.
            </p>
            <p>
              What started with film stills for the feeling grew into cinematic
              videos, campaigns, and branded storytelling. I move between
              photography, filmmaking, and creative direction—always chasing the
              best way to tell each story.
            </p>
            <p>
              Being a modern renaissance creator means pushing creative
              boundaries.
            </p>
            <p>
              From cinematic portraits to punchy reels and full campaigns, I aim
              to build work that feels distinct—something that breaks the scroll
              and makes you pause.
            </p>
            <p>Details matter because they carry intention.</p>
            <p>
              Every frame, every edit, every beat has to serve the story. If it
              doesn't, it doesn't stay.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
