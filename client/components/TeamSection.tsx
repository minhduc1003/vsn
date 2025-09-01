"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface TeamMemberCardProps {
  handle: string;
  fullName: string;
  role: string[];
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  handle,
  fullName,
  role,
}) => {
  return (
    <div className={`flex items-start gap-4`}>
      <Link
        href={`https://www.instagram.com/${handle}/`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-full h-[300px] bg-gray-500 flex-shrink-0 hover:opacity-90 transition-opacity z-10"
      >
        <Image
          src={`/team/${handle}.jpg`}
          alt={fullName}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 300px"
        />
        <div className="absolute bottom-2 left-2 text-white">
          <p className="font-semibold text-sm">{handle}</p>
          <p className="text-xs tracking-widest uppercase">{fullName}</p>
        </div>
      </Link>
      <div className="text-[#77787B] font-extrabold text-2xl tracking-tighter w-48">
        {role.map((line, index) => (
          <motion.p
            key={index}
            initial={{ x: -150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: index * 0.4,
              ease: "easeOut",
            }}
            className="w-[500px]"
          >
            {index === 0 ? (
              <span className="text-black">{line}</span>
            ) : (
              <span>{line}</span>
            )}
          </motion.p>
        ))}
      </div>
    </div>
  );
};

const TeamSection: React.FC = () => {
  return (
    <div className="py-20 px-4 sm:px-8 md:px-12 lg:px-20 mt-5">
      <div className="font-extrabold text-7xl tracking-tighter mb-6 flex justify-center items-center">
        ABOUT{" "}
        <motion.span
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="text-[#77787B] m-3"
        >
          US
        </motion.span>
      </div>
      <div className="relative max-w-7xl mx-auto min-h-[1600px] lg:min-h-[1000px]">
        <div className="grid grid-cols-5 gap-y-5 w-full">
          {/* Row 1 */}
          <TeamMemberCard
            handle="trstnvsn"
            fullName="TRISTAN SIM CHONG HAN"
            role={["CREATIVE", "DIRECTION"]}
          />
          <div></div>
          <TeamMemberCard
            handle="eemptyvsn"
            fullName="NGUYEN TIEN HUY HOANG"
            role={["PHOTOGRAPHER", "GRAPHIC DESIGNER"]}
          />
          <div></div>
          <div></div>

          {/* Row 2 */}
          <div></div>
          <TeamMemberCard
            handle="_nhaattt"
            fullName="DO NGUYEN NHAT ANH"
            role={["MANAGER"]}
          />
          <div></div>
          <TeamMemberCard
            handle="bopvsn"
            fullName="LY GIA HUNG"
            role={["DIRECTOR", "OF PHOTOGRAPHY"]}
          />
          <div></div>

          {/* Row 3 */}
          <div></div>
          <div></div>
          <TeamMemberCard
            handle="bdpa._"
            fullName="BUI DANG PHUONG ANH"
            role={["PRODUCER"]}
          />
          <div></div>
          <div></div>

          {/* Row 4 */}
          <div></div>
          <TeamMemberCard
            handle="khoinguyeenx"
            fullName="NGUYEN TRINH MINH KHOI"
            role={["DIRECTOR"]}
          />
          <div></div>
          <div></div>
          <div></div>

          {/* Row 5 */}
          <TeamMemberCard
            handle="henzy.swvg"
            fullName="DANG DUC HUY"
            role={["PERSONAL", "ASSISTANT"]}
          />
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* --- KHỐI ABOUT ASR --- */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute top-[1100px]  w-full lg:w-[450px] right-0 text-right"
        >
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-extrabold text-5xl  mb-6 tracking-[-6px]"
          >
            ABOUT ASR
          </motion.h2>
          <div className="space-y-4 text-black text-base leading-relaxed text-justify">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              ASR stands for ArtSchool Reject and it began with one person:
              Tristan Sim Chong Han, our Creative Director. Tristan didn't get
              into art school not for lack of trying. But with each rejection,
              one truth became clearer: creativity isn't defined by a degree,
              portfolio score, or acceptance letter.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Instead of giving up, he carved his own path fueled by instinct,
              discipline, and a deep love for image-making. He taught himself
              cinematography, editing, photography, and color grading. With a
              secondhand camera and a few friends, he began creating visuals
              that were raw, emotional, and entirely his own.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              That journey grew into ASR, a collective of like-minded creators
              who didn't come from traditional systems but shared a commitment
              to craft, emotion, and individuality.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TeamSection;
