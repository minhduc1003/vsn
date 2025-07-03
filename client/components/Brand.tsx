"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { memo } from "react";

const Brand = () => {
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
  return (
    <section className="border-t border-gray-200">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 ">
          <div>
            <p className="text-gray-500 text-lg w-[200px]">
              Trusted by{" "}
              <span className="font-bold text-gray-700 text-3xl">many</span>
            </p>
          </div>
          <div className="w-[90%]">
            <div className="relative w-full overflow-x-hidden">
              <div className="flex whitespace-nowrap">
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
                          key={`first-${logo.name}-${index}`}
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
  );
};

export default memo(Brand);
