import React from "react";
import { motion } from "framer-motion";
import {
  SiAdobepremierepro,
  SiAdobeaftereffects,
  SiAdobephotoshop,
  SiAdobelightroom,
  SiAdobeindesign,
  SiNotion,
  SiDavinciresolve,
} from "react-icons/si";
import { BsCameraReels, BsDisc } from "react-icons/bs";
import { FiMonitor, FiCamera, FiLayout } from "react-icons/fi";
import { TbColorPicker, TbWand } from "react-icons/tb";

interface Tool {
  name: string;
  icon: React.ElementType;
}

interface Service {
  name: string;
  icon: React.ElementType;
}

const toolboxIcons: Tool[] = [
  { name: "Premiere Pro", icon: SiAdobepremierepro },
  { name: "After Effects", icon: SiAdobeaftereffects },
  { name: "Photoshop", icon: SiAdobephotoshop },
  { name: "DaVinci Resolve", icon: SiDavinciresolve },
  { name: "Lightroom", icon: SiAdobelightroom },
  { name: "InDesign", icon: SiAdobeindesign },
];

const servicesList: Service[] = [
  { name: "Cinematography / Directing", icon: BsCameraReels },
  { name: "Creative Direction & Shot Planning", icon: TbWand },
  { name: "Video Editing & Motion Design", icon: FiMonitor },
  { name: "Color Grading & Lookbuilding", icon: TbColorPicker },
  { name: "Photography & Retouching", icon: FiCamera },
  { name: "Design & Layout for Print/Digital", icon: FiLayout },
];

const ToolIcon = ({ icon: Icon }: { icon: React.ElementType }) => (
  <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200/80">
    <Icon className="text-3xl text-black" />
  </div>
);

const ServiceItem = ({ service }: { service: Service }) => (
  <div className="flex items-center gap-4">
    <div className="bg-black p-3 rounded-full shadow-lg">
      <service.icon className="text-white text-2xl" />
    </div>
    <span className="font-medium text-lg">{service.name}</span>
  </div>
);

const ServicesSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[150px] items-start">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col gap-10 lg:sticky lg:top-24"
          >
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-gray-500"
              >
                Services that
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                shape your story.
              </motion.span>
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="text-lg font-semibold mb-4">
                My creative toolbox
              </h3>
              <div className="flex flex-wrap gap-3">
                {toolboxIcons.slice(0, 7).map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <ToolIcon icon={tool.icon} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <div className="flex flex-col gap-8">
            {servicesList.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ServiceItem service={service} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
