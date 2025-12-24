import React from "react";
import { motion } from "framer-motion";
import about from "../assets/about.png";
import { Tag, Blend } from "lucide-react";

const AboutUs = () => {
  const superiority = [
    {
      id: 1,
      icon: <Blend className="text-[#4300FF]" size={40} />,
      title: "LOREM IPSUM",
      desc: "Lorem ipsum dolor sit amet, elit. Sed do eiusmod tempor",
    },
    {
      id: 2,
      icon: <Blend className="text-[#4300FF]" size={40} />,
      title: "LOREM IPSUM",
      desc: "Lorem ipsum dolor sit amet, elit. Sed do eiusmod tempor",
    },
    {
      id: 3,
      icon: <Blend className="text-[#4300FF]" size={40} />,
      title: "LOREM IPSUM",
      desc: "Lorem ipsum dolor sit amet, elit. Sed do eiusmod tempor",
    },
    {
      id: 4,
      icon: <Blend className="text-[#4300FF]" size={40} />,
      title: "LOREM IPSUM",
      desc: "Lorem ipsum dolor sit amet, elit. Sed do eiusmod tempor",
    },
    {
      id: 5,
      icon: <Blend className="text-[#4300FF]" size={40} />,
      title: "LOREM IPSUM",
      desc: "Lorem ipsum dolor sit amet, elit. Sed do eiusmod tempor",
    },
    {
      id: 6,
      icon: <Blend className="text-[#4300FF]" size={40} />,
      title: "LOREM IPSUM",
      desc: "Lorem ipsum dolor sit amet, elit. Sed do eiusmod tempor",
    },
  ];
  return (
    <section
      id="about"
      className="py-20 relative overflow-hidden flex flex-col gap-30">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-[100px] z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/30 rounded-full blur-[100px] z-10" />
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-blue-400 text-sm mb-6">
          <Tag size={14} />
          <span>Description</span>
        </motion.div>
        <div className="flex flex-col items-center md:flex-row gap-5 md:gap-20 md:justify-center">
          <motion.img
            initial={{ scale: 0.9 }}
            whileInView={{ scale: [0.9, 1.1, 1] }}
            viewport={{ once: false }}
            src={about}
            alt=""
            className="w-[100px] h-[100px] md:w-[250px] md:h-[250px]"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
            className="w-full md:w-[700px] flex flex-col items-center md:items-start pt-0 md:pt-10">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
              Who Are We
            </h1>
            <p className="text-center md:text-start text-white px-10 md:px-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </motion.div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 justify-center py-10">
          <motion.div
            initial={{ scale: 1 }}
            whileInView={{ scale: [1, 1.05, 1] }}
            viewport={{ once: false }}
            className="p-1 bg-gradient-to-tr from-[#666666]/20 from-30% via-[#666666]/60 via-85% to-[#0065F8] to-100% rounded-[20px] mx-5 md:mx-0">
            <div className="bg-gradient-to-tr from-[#000000]/60 from-40% to-[#0065F8]/40 to-100% backdrop-blur-[100px] w-full md:w-[500px] flex flex-col gap-5 items-center justify-center p-10 rounded-[20px]">
              <h1 className="text-[20px] font-bold">VISI</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 1 }}
            whileInView={{ scale: [1, 1.05, 1] }}
            viewport={{ once: false }}
            className="p-1 bg-gradient-to-tr from-[#666666]/20 from-30% via-[#666666]/60 via-85% to-[#0065F8] to-100% rounded-[20px] mx-5 md:mx-0">
            <div className="bg-gradient-to-tr from-[#000000]/60 from-40% to-[#0065F8]/40 to-100% backdrop-blur-[100px] w-full md:w-[500px] flex flex-col gap-5 items-center justify-center p-10 rounded-[20px]">
              <h1 className="text-[20px] font-bold">MISI</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="w-full flex flex-col gap-3 text-start px-5 md:px-0 mx-0 md:mx-40">
          <h1 className="text-3xl md:text-5xl">Why Should Us?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-8 md:mx-0 md:mx-35 py-15">
          {superiority.map((items) => (
            <motion.div
              initial={{ scale: 1 }}
              whileInView={{ scale: [1, 1.05, 1] }}
              viewport={{ once: false }}
              key={items.id}
              className="flex flex-col gap-2 text-start">
              <div className="flex gap-3 items-center">
                {items.icon}
                <h1 className="font-bold">{items.title}</h1>
              </div>
              <p>{items.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
