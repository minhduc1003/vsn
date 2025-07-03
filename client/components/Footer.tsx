import React from "react";
import Link from "next/link";
import { FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";

const socialLinks = [
  { name: "Youtube", icon: FaYoutube, url: "https://youtube.com" },
  { name: "Instagram", icon: FaInstagram, url: "https://instagram.com" },
  { name: "Tiktok", icon: FaTiktok, url: "https://tiktok.com" },
];

const Footer = () => {
  return (
    <footer className="bg-black text-white relative overflow-hidden">
      <div
        className="
          absolute inset-0 flex items-center justify-center 
          z-0 text-[30vw] font-black text-white/5 
          select-none pointer-events-none blur-sm
        "
        aria-hidden="true"
      >
        VNS
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 py-20">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-16">
          Let's <span className="text-gray-400">create</span>
          <br />
          <span className="text-gray-400">incredible</span> work{" "}
          <span className="text-gray-400">together.</span>
        </h2>

        <div className="flex justify-between items-start flex-wrap gap-8">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">
              Email
            </p>
            <a
              href="mailto:team@vsnyen.com"
              className="text-xl hover:underline"
            >
              team@vsnyen.com
            </a>
          </div>
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">
              Social
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="bg-white text-black rounded-full p-2 hover:bg-gray-200 transition-colors"
                >
                  <link.icon className="text-lg" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <hr className="my-12 border-gray-700" />

        <div className="flex justify-between items-center flex-wrap gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-x-4">
            <span>Based in Tokyo, Japan</span>
            <Link href="/terms" className="hover:text-white">
              Terms of service
            </Link>
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
          </div>
          <p>© {new Date().getFullYear()} Vsn</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
