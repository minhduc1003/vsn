"use client";

import React, { useState, FormEvent, useEffect } from "react";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import { FiSend } from "react-icons/fi";

interface ContactModalProps {
  onClose: () => void;
}

const ContactModal = ({ onClose }: ContactModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    alert("Thank you for your message!");
    onClose();
  };

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-2 sm:px-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-xl p-4 sm:p-8 m-2 sm:m-4"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-500 hover:text-black transition-colors"
          aria-label="Close contact form"
        >
          <IoMdClose size={24} />
        </button>

        <div className="mb-4 sm:mb-6">
          <h2 className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">
            Contact
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Fill out the form below.
          </p>
        </div>

        <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <Image
            src="/ava.avif"
            alt="Gakuyen's avatar"
            width={40}
            height={40}
            className="rounded-full sm:w-12 sm:h-12"
          />
          <div>
            <p className="font-semibold text-base sm:text-lg">VSN</p>
            <p className="text-xs sm:text-sm text-gray-500">team@vsn.com</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
          <div>
            <label
              htmlFor="name"
              className="block text-xs sm:text-sm font-semibold mb-1"
            >
              Name (required)
            </label>
            <input
              type="text"
              id="name"
              required
              placeholder="Name"
              className="w-full bg-gray-100 border border-gray-200 rounded-lg p-2 sm:p-3 focus:ring-2 focus:ring-black focus:outline-none text-sm"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-xs sm:text-sm font-semibold mb-1"
            >
              Email (required)
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="Email"
              className="w-full bg-gray-100 border border-gray-200 rounded-lg p-2 sm:p-3 focus:ring-2 focus:ring-black focus:outline-none text-sm"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-xs sm:text-sm font-semibold mb-1"
            >
              Subject (required)
            </label>
            <input
              type="text"
              id="subject"
              required
              placeholder="Subject"
              className="w-full bg-gray-100 border border-gray-200 rounded-lg p-2 sm:p-3 focus:ring-2 focus:ring-black focus:outline-none text-sm"
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-xs sm:text-sm font-semibold mb-1"
            >
              Message (required)
            </label>
            <textarea
              id="message"
              required
              rows={4}
              placeholder="Your message..."
              className="w-full bg-gray-100 border border-gray-200 rounded-lg p-2 sm:p-3 focus:ring-2 focus:ring-black focus:outline-none resize-none text-sm"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white font-semibold rounded-full p-3 sm:p-4 flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors text-sm sm:text-base"
          >
            <FiSend />
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
