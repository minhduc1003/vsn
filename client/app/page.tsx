"use client";
import Image from "next/image";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import { useModal } from "@/context/ModalContext";
import WorkAnimate from "@/components/WorkAnimate";

export default function Home() {
  const { openModal } = useModal();

  return (
    <>
      <main className="pt-24">
        <section className="container mx-auto px-4 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="flex flex-col gap-6 sm:gap-8">
              <div className="inline-flex items-center gap-2 border border-gray-200 rounded-full px-3 py-1 text-sm w-fit">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                Available for inquiries
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
                <span className="text-gray-600">ASR</span>
                <br />
                ArtSchool Reject
              </h1>

              <div className="space-y-4">
                <p className="text-base sm:text-lg text-gray-700 max-w-md text-justify">
                  <strong className="font-bold text-black ">ASR</strong> is an
                  independent creative studio based in Vietnam and Singapore. We
                  specialize in fashion, editorial, and conceptual photography
                  offering creative direction and visual storytelling that leans
                  into the raw, the bold, and the unexpected.
                </p>
              </div>

              <div
                onClick={() => openModal()}
                className="w-fit inline-flex items-center gap-3 bg-black text-white font-medium rounded-full px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base transition-all duration-300 hover:bg-gray-800 hover:scale-105 active:scale-95"
              >
                <Image
                  src="/ava.avif"
                  alt="Vsn's avatar"
                  width={24}
                  height={24}
                  className="rounded-full border-2 border-gray-600 sm:w-[28px] sm:h-[28px]"
                />
                <span>Send me a message</span>
              </div>
            </div>
          </div>
        </section>
        <WorkAnimate />
        <ServicesSection />
        <AboutSection />
      </main>
    </>
  );
}
