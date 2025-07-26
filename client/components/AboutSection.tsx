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
              <div className="relative overflow-hidden rounded-3xl shadow-lg max-w-[500px] max-h-[600px]">
                <Image
                  src="/CLZ-S_S2025/campaign-2.avif"
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
                <h3 className="text-2xl font-bold">ArtSchool Reject</h3>
                {/* <p className="text-gray-500">
                  photographer, filmmaker, creative
                </p> */}
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
              ASR ArtSchool Reject is an independent creative collective of
              young filmmakers, photographers, and designers known for our bold
              aesthetics, conceptual depth, and distinct visual language.
            </p>
            <p>
              With a modern creative mindset and an experimental artistic
              spirit, we produce emotionally resonant works ranging from music
              videos and fashion campaigns to brand content and conceptual art
              projects.
            </p>
            <p>
              Unbound by conventional styles, we approach each project with a
              unique point of view blending technical expertise, visual
              direction, and an understanding of brand context to deliver
              meaningful and memorable visuals.
            </p>
            <p>
              From concept development to post-production, we manage the
              creative process with a strong focus on storytelling, tone, and
              visual impact.
            </p>
            <p>
              ASR is more than a crew; we are emerging visual creatives,
              dedicated to shaping unique, expressive identities for every story
              we help bring to life.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
