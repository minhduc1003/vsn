"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface TeamMemberCardMobileProps {
  handle: string;
  fullName: string;
  role: string;
}

const TeamMemberCardMobile: React.FC<TeamMemberCardMobileProps> = ({
  handle,
  fullName,
  role,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-8"
    >
      <Link
        href={`https://www.instagram.com/${handle}/`}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative w-full h-[400px] bg-gray-500 hover:opacity-90 transition-opacity mb-4"
      >
        <Image
          src={`/team/${handle}.jpg`}
          alt={fullName}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
        />
        <div className="absolute bottom-3 left-3 text-white">
          <p className="font-semibold text-base">{handle}</p>
          <p className="text-sm tracking-widest uppercase">{fullName}</p>
          <div className="text-white font-bold text-xl tracking-tighter">
            <motion.p
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
              className="mb-1"
            >
              <span className="text-white">{role}</span>
            </motion.p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const TeamSectionMobile: React.FC = () => {
  const teamMembers = [
    {
      handle: "trstnvsn",
      fullName: "TRISTAN SIM CHONG HAN",
      role: "CREATIVE DIRECTION",
    },
    {
      handle: "eemptyvsn",
      fullName: "NGUYEN TIEN HUY HOANG",
      role: "PHOTOGRAPHER GRAPHIC DESIGNER",
    },
    {
      handle: "_nhaattt",
      fullName: "DO NGUYEN NHAT ANH",
      role: "MANAGER",
    },
    {
      handle: "bopvsn",
      fullName: "LY GIA HUNG",
      role: "DIRECTOR OF PHOTOGRAPHY",
    },
    {
      handle: "bdpa._",
      fullName: "BUI DANG PHUONG ANH",
      role: "PRODUCER",
    },
    {
      handle: "khoinguyeenx",
      fullName: "NGUYEN TRINH MINH KHOI",
      role: "DIRECTOR",
    },
    {
      handle: "henzy.swvg",
      fullName: "DANG DUC HUY",
      role: "PERSONAL ASSISTANT",
    },
  ];

  return (
    <div className="py-12 px-4 sm:px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="font-extrabold text-4xl sm:text-5xl tracking-tighter mb-8 flex flex-col sm:flex-row justify-center items-center text-center mt-20"
      >
        ABOUT{" "}
        <motion.span
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          className="text-[#77787B] mt-2 sm:mt-0 sm:ml-3"
        >
          US
        </motion.span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="space-y-4 text-black text-sm sm:text-base leading-relaxed mb-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-justify"
          >
            ASR stands for ArtSchool Reject and it began with one person:
            Tristan Sim Chong Han, our Creative Director. Tristan didn't get
            into art school not for lack of trying. But with each rejection, one
            truth became clearer: creativity isn't defined by a degree,
            portfolio score, or acceptance letter.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-justify"
          >
            Instead of giving up, he carved his own path fueled by instinct,
            discipline, and a deep love for image-making. He taught himself
            cinematography, editing, photography, and color grading. With a
            secondhand camera and a few friends, he began creating visuals that
            were raw, emotional, and entirely his own.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-justify"
          >
            That journey grew into ASR, a collective of like-minded creators who
            didn't come from traditional systems but shared a commitment to
            craft, emotion, and individuality.
          </motion.p>
        </div>
      </motion.div>

      {/* Team Members Grid */}
      <div className="space-y-6">
        {teamMembers.map((member, index) => (
          <TeamMemberCardMobile
            key={member.handle}
            handle={member.handle}
            fullName={member.fullName}
            role={member.role}
          />
        ))}
      </div>

      {/* About ASR Section */}
    </div>
  );
};

export default TeamSectionMobile;
