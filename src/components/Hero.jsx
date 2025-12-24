import React from "react";
import { motion } from "framer-motion";
import { Play, TrendingUp } from "lucide-react";
import heroImage from "../assets/robot.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 overflow-hidden flex flex-col items-center"
    >
      <div className="absolute top-0 -left-24 -rotate-25 w-24 h-72 bg-white/20 blur-[50px] pointer-events-none"></div>
      <div className="absolute top-0 left-1/8 -rotate-25 w-24 h-72 bg-white/20 blur-[50px] pointer-events-none"></div>
      <div className="absolute top-0 left-1/3 -rotate-25 w-24 h-96 bg-white/50 blur-[50px] z-10 pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[600px] bg-blue-600/20 rounded-full blur-[120px] z-10 pointer-events-none" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] z-10 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-64 md:w-80 lg:w-[400px] aspect-square"
      >
        <img
          src={heroImage}
          alt="AI Robot"
          className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(56,189,248,0.4)]"
        />
        <div className="absolute inset-0 bg-blue-500/30 blur-3xl -z-10 rounded-full" />
      </motion.div>

      <div className="text-center z-10 px-4 max-w-5xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-4"
        >
          <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
            REKRUT
          </span>{" "}
          WORKER AI UNTUK <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-white via-white to-[#8F8F8F] text-transparent bg-clip-text inline-block">
            KEBUTUHAN ANDA.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          Bukan AI generik. Ini worker Ai yang sudah dilatih untuk{" "}
          <br className="hidden md:block" />
          anda untuk membantu pekerjaan anda sehari-hari.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center justify-center gap-4 mb-20"
        >
          <div className="h-px w-16 md:w-64 bg-gradient-to-r from-transparent to-gray-600" />

          <button className="group relative bg-gradient-to-b from-gray-100 to-gray-300 text-slate-900 px-8 py-3 rounded-full font-bold flex items-center gap-3 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all hover:-translate-y-1">
            Start Now
            <Play
              size={18}
              fill="currentColor"
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>

          <div className="h-px w-16 md:w-64 bg-gradient-to-l from-transparent to-gray-600" />
        </motion.div>
      </div>

      <div className="w-full h-full">
        <div className="relative">
          <div className="absolute -top-12 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-blue-600/30 rounded-full blur-[100px] z-10" />
          <div className="absolute -top-12 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-indigo-600/30 rounded-full blur-[100px] z-10" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="w-full  px-4 z-20 relative"
        >
          <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-slate-900/50 backdrop-blur-sm group">
            <div className="relative aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Sdei_uXo91M?si=GzZd52vB2J8jWqM_" // Example AI video
                title="Company Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.5)] rounded-[2rem]" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
