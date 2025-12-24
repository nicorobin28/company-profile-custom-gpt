import React from "react";
import { motion } from "framer-motion";
import about from "../assets/about.png";
import { 
  Tag, 
  UserCog, 
  Zap, 
  Target, 
  Layers, 
  TrendingUp, 
  ShieldCheck,
  CheckCircle2
} from "lucide-react";

const AboutUs = () => {
  const superiority = [
    {
      id: 1,
      icon: <UserCog className="text-blue-400" size={32} />,
      title: "AI yang Bekerja Mengikuti Anda",
      desc: "Bukan Anda yang menyesuaikan diri ke AI, tapi AI yang menyesuaikan diri dengan alur dan kebutuhan Anda.",
    },
    {
      id: 2,
      icon: <Zap className="text-blue-400" size={32} />,
      title: "Langsung Pakai, Langsung Terasa",
      desc: "Dirancang untuk digunakan, bukan dipelajari. Tanpa kurva belajar panjang, hasil langsung terasa.",
    },
    {
      id: 3,
      icon: <Target className="text-blue-400" size={32} />,
      title: "Jawaban dari Hasil Nyata",
      desc: "Membantu pekerjaan nyata, bukan sekadar jawaban. Dari menyusun hingga mengeksekusi tugas.",
    },
    {
      id: 4,
      icon: <Layers className="text-blue-400" size={32} />,
      title: "Satu AI, Banyak Pekerjaan Beres",
      desc: "Mengurangi beban, bukan menambah alat. Satu kecerdasan digital untuk berbagai proses.",
    },
    {
      id: 5,
      icon: <TrendingUp className="text-blue-400" size={32} />,
      title: "Berkembang Seiring Ambisi Anda",
      desc: "Saat cara kerja Anda berkembang, AI bisa ikut disesuaikan tanpa harus mulai dari nol.",
    },
    {
      id: 6,
      icon: <ShieldCheck className="text-blue-400" size={32} />,
      title: "Dibangun untuk Masa Depan",
      desc: "Tidak mengejar tren sesaat, tapi membangun fondasi AI yang tetap relevan di masa depan.",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      id="about-us"
      className="relative py-24 overflow-hidden"
    >
      {/* Background Elements - Preserved as requested */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-24">
        
        {/* TOP SECTION: Image & Main Text */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image (Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
               <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
               <img 
                 src={about} 
                 alt="About Us" 
                 className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]"
               />
               {/* Orbital Rings - Decorative */}
               <div className="absolute inset-0 border border-blue-500/30 rounded-full scale-110 animate-[spin_10s_linear_infinite]" />
               <div className="absolute inset-0 border border-indigo-500/30 rounded-full scale-125 animate-[spin_15s_linear_infinite_reverse]" />
            </div>
          </motion.div>

          {/* Text Content (Right) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-semibold tracking-wide uppercase mb-6 backdrop-blur-md">
              <Tag size={12} />
              <span>Who Are We</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
              Revolusi <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Produktivitas</span> <br />
              Dengan Kecerdasan AI
            </h2>
            
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              PAKAI adalah platform untuk membangun kecerdasan digital yang bekerja untuk Anda. 
              Hari ini sebagai Worker AI, dan ke depannya sebagai fondasi masa depan kerja manusia.
              Kami tidak sekadar menjual AI. Kami membantu Anda bersiap untuk masa depan.
            </p>
          </motion.div>
        </div>

        {/* MIDDLE SECTION: Visi & Misi Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="relative p-10 rounded-[2.5rem] bg-gradient-to-b from-slate-900 via-slate-900 to-blue-900/20 border border-white/5 overflow-hidden group text-center"
           >
              <div className="absolute inset-0 bg-blue-600/5 group-hover:bg-blue-600/10 transition-colors duration-500" />
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] group-hover:blur-[60px] transition-all" />
              
              <h3 className="relative z-10 text-2xl font-bold text-white mb-6 tracking-wider">VISI</h3>
              <p className="relative z-10 text-slate-300 leading-relaxed">
                "Membangun masa depan di mana setiap orang memiliki akses ke kecerdasan digital yang membantu berpikir dan bekerja lebih cepat. Kami percaya masa depan bukan tentang menggantikan manusia dengan AI, tetapi tentang memberdayakan manusia dengan AI."
              </p>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="relative p-10 rounded-[2.5rem] bg-gradient-to-b from-slate-900 via-slate-900 to-indigo-900/20 border border-white/5 overflow-hidden group text-center"
           >
              <div className="absolute inset-0 bg-indigo-600/5 group-hover:bg-indigo-600/10 transition-colors duration-500" />
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-indigo-500/20 rounded-full blur-[80px] group-hover:blur-[60px] transition-all" />
              
              <h3 className="relative z-10 text-2xl font-bold text-white mb-6 tracking-wider">MISI</h3>
              <p className="relative z-10 text-slate-300 leading-relaxed">
                "Menyederhanakan akses AI. Worker AI yang bisa dilatih, dimiliki, dan digunakan sesuai kebutuhan. Hari ini kami membantu pekerjaan. Besok kami membantu cara berpikir. Dan ke depannya, kami membangun sistem AI yang tumbuh bersama penggunanya."
              </p>
           </motion.div>
        </div>

        {/* BOTTOM SECTION: Why Should Us */}
        <div className="mt-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 max-w-3xl"
          >
             <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
               Kenapa Harus Memilih Kami?
             </h2>
             <p className="text-slate-400 text-lg">
               Karena di era AI, masalahnya bukan lagi apakah Anda akan menggunakan AI, 
               tetapi apakah AI tersebut benar-benar bekerja untuk Anda.
             </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {superiority.map((item, i) => (
              <motion.div
                key={item.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                className="group flex flex-col gap-4"
              >
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.1)] group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                     {React.cloneElement(item.icon, { size: 24, className: "current-color" })}
                   </div>
                   <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                     {item.title}
                   </h3>
                </div>
                <p className="text-slate-400 leading-relaxed pl-16 border-l-2 border-white/5 group-hover:border-blue-500/30 transition-colors">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
