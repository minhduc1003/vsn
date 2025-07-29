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
    <section className="bg-white py-16 md:py-24 border-t border-gray-200">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 items-start">
          <div className="relative order-2 sm:order-1 lg:col-span-2">
            <div className="absolute top-20  right-0 bg-white w-[70%]">
              <div className="mt-4 text-base md:text-lg text-gray-800 leading-relaxed">
                <span
                  className="font-bold text-7xl float-left mr-3"
                  style={{ lineHeight: "0.8" }}
                >
                  A
                </span>
                <p>SR</p>
                rtSchool Reject is an independent creative collective of young
                filmmakers, photographers, and designers known for our bold
                aesthetics, conceptual depth, and distinct visual language.
              </div>
              <p className="mt-6 text-base md:text-lg text-gray-800 leading-relaxed clear-left">
                With a modern creative mindset and an experimental artistic
                spirit, we produce emotionally resonant works ranging from music
                videos and fashion campaigns to brand content and conceptual art
                projects.
              </p>
            </div>
            <div className="mt-10">
              <Image
                src="/about.avif"
                alt="Art School Reject - Behind the scenes"
                width={700}
                height={400}
                className="w-full h-[550px] object-cover"
              />
              <p className="mt-3 font-bold text-sm tracking-widest">
                artschool REJECT
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:mt-12 order-1 sm:order-2"
          >
            <h2 className="text-5xl flex flex-col md:text-5xl font-bold">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Reject
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-gray-500"
              >
                the rules.
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="mt-2"
              >
                Rewrite
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
                className="text-gray-500"
              >
                the vision.
              </motion.div>
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
              className="mt-10 space-y-2 text-lg text-justify text-gray-700 leading-relaxed"
            >
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
                dedicated to shaping unique, expressive identities for every
                story we help bring to life.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
