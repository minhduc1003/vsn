"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useModal } from "@/context/ModalContext";

const Header = () => {
  const pathname = usePathname();
  const { openModal } = useModal();
  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] lg:w-auto">
      <div className="flex items-center justify-center bg-white/70 backdrop-blur-md rounded-full px-6 py-3 shadow-lg border border-gray-200/80">
        <Link href="/" className="flex items-center space-x-3 mr-6">
          <Image
            src="/logo.png"
            alt="Vsnyen Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
        </Link>

        <nav className="flex items-center space-x-8">
          <Link
            href="/work"
            className={`text-sm  font-medium text-gray-600 hover:text-black transition-colors ${
              pathname === "/work" ? "border-b-2 border-black" : ""
            }`}
          >
            Work
          </Link>
          <Link
            href="/aboutUs"
            className={`text-sm  font-medium text-gray-600 hover:text-black transition-colors ${
              pathname === "/aboutUs" ? "border-b-2 border-black" : ""
            }`}
          >
            About Us
          </Link>
          <div
            className={`text-sm  bg-white text-black px-6 py-2 rounded-full shadow-sm border border-gray-200 hover:bg-gray-100 transition-all font-bold `}
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
