import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white relative ">
      <div className="text-gray-500 text-[11.4vw] leading-[0.8] font-extrabold opacity-20 whitespace-nowrap overflow-hidden py-10">
        artschool REJECT
      </div>
      <div className="px-2 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-8 items-center ">
          <div className="md:col-span-1 ">
            <h3 className="text-sm tracking-widest text-gray-500 ">EMAIL</h3>
            <a href="mailto:artschoolreject.asr@gmail.com" className="text-lg ">
              artschoolreject.asr@gmail.com
            </a>
            <div className="mt-6 md:mt-12">
              <p className="text-sm">Base in VietNam, Singapore</p>
            </div>
          </div>
          <div
            className="hidden md:block absolute left-[2vw] right-[17vw] top-[80%] h-px bg-gray-700"
            aria-hidden="true"
          ></div>
          <div className="hidden absolute top-[63%] right-[45%] bg-black w-[200px] md:flex items-center justify-center ">
            <div className="z-10 w-40 h-40 border-8 border-gray-500 opacity-50 rounded-full flex items-center justify-center bg-black aspect-square">
              <span className="text-6xl font-bold text-gray-500">asr</span>
            </div>
            {/* <div className="mt-8">
              <h3 className="text-sm tracking-widest">SOCIAL</h3>
            </div> */}
          </div>

          <div className="md:col-span-1 text-right hidden md:block">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Reject
              <br />
              <span className="text-gray-500">the rules.</span>
              <br />
              Rewrite
              <br />
              <span className="text-gray-500">the vision.</span>
            </h2>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
