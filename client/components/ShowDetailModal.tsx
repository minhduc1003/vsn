import { projectData } from "@/data/projectData";
import Image from "next/image";
import React, { useEffect } from "react";

const ShowDetailModal = ({
  id,
  onClose,
}: {
  id: number;
  onClose: (val: any) => void;
}) => {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const project = React.useMemo(
    () => projectData.find((proj) => proj.id === id),
    [id]
  );
  const images = React.useMemo(
    () =>
      project?.link
        .map((item) => (item.type === "image" ? item.url : null))
        .filter((url): url is string => url !== null) || [],
    [project]
  );
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSelectedImage("1");
        setCurrentIndex(0);
      }
    };
    if (window.innerWidth < 768) {
      setSelectedImage("1");
      setCurrentIndex(0);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
        <div className="bg-white rounded-lg w-11/12 md:w-[90%] lg:w-[95%] max-h-[90vh] shadow-xl">
          <div className="relative">
            <h3 className="text-xl font-semibold absolute top-[40px] left-5 max-w-[50px]">
              {project?.name || "Project Details"}
            </h3>

            <button
              className="absolute top-[40px] right-5 p-2 hover:bg-gray-100 rounded-full z-10"
              onClick={() => {
                onClose(null);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div className="p-5 pt-10 relative">
            {selectedImage ? (
              <>
                <button
                  className="absolute left-6 top-1/2 z-10 bg-white/20 backdrop-blur-sm rounded-full p-3 w-12 h-12 shadow-lg hover:bg-white/30 transition-all border border-white/10"
                  onClick={() =>
                    setCurrentIndex(
                      (prev) => (prev - 1 + images.length) % images.length
                    )
                  }
                >
                  &#8592;
                </button>
                <div className="relative h-[75vh]">
                  <img
                    src={images[currentIndex]}
                    alt="Selected"
                    className="w-full h-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <button
                  className="absolute right-6 top-1/2 z-10 bg-white/20 backdrop-blur-sm rounded-full p-3 w-12 h-12 shadow-lg hover:bg-white/30 transition-all border border-white/10"
                  onClick={() =>
                    setCurrentIndex((prev) => (prev + 1) % images.length)
                  }
                >
                  &#8594;
                </button>
              </>
            ) : (
              <div className="relative h-[50vh] flex justify-center items-center">
                <button
                  className="absolute left-0 top-1/2 z-10 bg-white rounded-full p-3 w-12 h-12 shadow-lg hover:bg-gray-100"
                  onClick={() =>
                    setCurrentIndex((prev) => Math.max(0, prev - 4))
                  }
                  disabled={currentIndex === 0}
                >
                  &#8592;
                </button>
                <div className="overflow-hidden w-[90%] mx-auto">
                  <div
                    className="flex gap-4 transition-transform duration-300"
                    style={{
                      transform: `translateX(-${currentIndex * (300 + 16)}px)`,
                    }}
                  >
                    {images.map((image, index) => (
                      <Image
                        key={index}
                        src={image}
                        alt={`Image ${index + 1}`}
                        width={288}
                        height={288}
                        className="object-cover cursor-pointer rounded hover:opacity-90 transition-opacity flex-shrink-0"
                        priority={index < 4}
                        onClick={() => {
                          setSelectedImage(image);
                          setCurrentIndex(index);
                        }}
                      />
                    ))}
                  </div>
                </div>
                <button
                  className="absolute right-0 top-1/2 z-10 bg-white rounded-full p-3 w-12 h-12 shadow-lg hover:bg-gray-100"
                  onClick={() =>
                    setCurrentIndex((prev) =>
                      Math.min(images.length - 4, prev + 4)
                    )
                  }
                  disabled={currentIndex >= images.length - 4}
                >
                  &#8594;
                </button>
              </div>
            )}
          </div>
          <div className="relative">
            <img
              src="/logo.png"
              alt="Logo"
              className="absolute top-[-70px] left-5 w-16 h-16"
              loading="lazy"
            />
            <h3 className="text-xl font-semibold absolute top-[-60px] right-5 max-w-[50px]">
              2025
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowDetailModal;
