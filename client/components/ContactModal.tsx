"use client";

import React, { useState, FormEvent, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { FiSend } from "react-icons/fi";
import { FaEnvelope, FaInstagram } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import emailjs from "emailjs-com";

interface ContactModalProps {
  onClose: () => void;
}

const ContactModal = ({ onClose }: ContactModalProps) => {
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleZaloClick = () => {
    window.open("https://zalo.me/your-zalo-id", "_blank");
  };

  const handleInstagramClick = () => {
    window.open("https://instagram.com/your-instagram", "_blank");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_kglyon7",
        "template_8q0rcbe",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "S2SJvtwSwe4KwnFUL"
      );

      alert("Thank you for your message!");
      setFormData({ name: "", email: "", subject: "", message: "" });
      onClose();
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send message. Please try again.");
    } finally {
    }
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
        >
          <IoMdClose size={24} />
        </button>

        <div className="mb-4 sm:mb-6">
          <h2 className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">
            Contact Us
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Choose your preferred contact method
          </p>
        </div>

        {!showEmailForm ? (
          <div className="grid grid-cols-3 gap-4">
            <button
              onClick={() => setShowEmailForm(true)}
              className="flex flex-col items-center p-4 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <FaEnvelope size={24} />
              <span className="mt-2">Email</span>
            </button>
            <button
              onClick={handleZaloClick}
              className="flex flex-col items-center p-4 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <SiZalo size={24} />
              <span className="mt-2">Zalo</span>
            </button>
            <button
              onClick={handleInstagramClick}
              className="flex flex-col items-center p-4 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <FaInstagram size={24} />
              <span className="mt-2">Instagram</span>
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 sm:gap-5"
          >
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
        )}
      </div>
    </div>
  );
};

export default ContactModal;
