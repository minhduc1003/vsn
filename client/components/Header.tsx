"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useModal } from "@/context/ModalContext";

const Header = () => {
  const pathname = usePathname();
  const { openModal } = useModal();
  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center bg-white/70 backdrop-blur-md rounded-full px-3 py-2 shadow-lg border border-gray-200/80">
        <Link href="/" className="flex items-center space-x-2.5 mr-4">
          <Image
            src="/ava.avif"
            alt="Vsnyen Logo"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="font-bold text-gray-800 hidden sm:inline">vsn</span>
        </Link>

        <nav className="flex items-center space-x-5">
          <Link
            href="/work"
            className={`text-sm font-medium text-gray-600 hover:text-black transition-colors ${
              pathname === "/work" ? "border-b-2 border-black" : ""
            }`}
          >
            Work
          </Link>

          <div
            className={`text-sm bg-white text-black px-4 py-1.5 rounded-full shadow-sm border border-gray-200 hover:bg-gray-100 transition-all font-bold `}
            onClick={openModal}
          >
            Contact
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
