"use client";
import { useModal } from "@/context/ModalContext";
import React from "react";
import { HiOutlineMail } from "react-icons/hi";

const ContactSection = () => {
  const { openModal } = useModal();
  return (
    <section className="py-16 px-4">
      <div className=" max-w-[1200px] mx-auto bg-white rounded-3xl p-12 sm:p-20 text-center shadow-lg border border-gray-100">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
          <span className="block text-gray-500">Like what you see?</span>
          <span className="block text-black">Let's connect ✨</span>
        </h2>

        <div className="flex justify-center">
          <div
            onClick={openModal}
            className="
              inline-flex items-center gap-3 bg-black text-white
              font-semibold rounded-full px-6 py-3 shadow-lg
              hover:bg-gray-800 hover:scale-105 active:scale-100
              transition-all duration-300 cursor-pointer
            "
          >
            <HiOutlineMail className="text-xl" />
            <span>Send me a message</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
