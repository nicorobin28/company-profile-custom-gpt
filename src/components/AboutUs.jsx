import React from "react";
import { motion } from "framer-motion";
import about from "../assets/about.png";
import { Tag, Blend } from "lucide-react";

const AboutUs = () => {
  const superiority = [
    {
      id: 1,
      icon: <Blend className="text-[#4300FF]" size={40} />,
      title: "AI yang Bekerja Mengikuti Anda",
      desc: "AI yang Mengikuti Cara Anda Bekerja Bukan Anda yang menyesuaikan diri ke AI, tapi AI yang menyesuaikan diri dengan alur dan kebutuhan Anda.",
    },
    {
      id: 2,
      icon: <Blend className="text-[#4300FF]" size={40} />,
      title: "Langsung Pakai, Langsung Terasa",
      desc: "Dirancang untuk Digunakan, Bukan Dipelajari Tanpa kurva belajar panjang. Pakai dibuat agar langsung terasa manfaatnya sejak awal.",
    },
    {
      id: 3,
      icon: <Blend className="text-[#4300FF]" size={40} />,
      title: "Jawaban dari Hasil Nyata",
      desc: "Membantu Pekerjaan Nyata, Bukan Sekadar Jawaban. Dari menyusun, menganalisa, hingga mengeksekusi tugas—Worker AI fokus pada hasil yang bisa dirasakan.",
    },
    {
      id: 4,
      icon: <Blend className="text-[#4300FF]" size={40} />,
      title: "Satu AI, Banyak Pekerjaan Beres",
      desc: "Mengurangi Beban, Bukan Menambah Alat Satu kecerdasan digital yang bisa menggantikan banyak proses, tanpa harus berpindah-pindah sistem.",
    },
    {
      id: 5,
      icon: <Blend className="text-[#4300FF]" size={40} />,
      title: "Berkembang Seiring Ambisi Anda",
      desc: "Tumbuh Seiring Kebutuhan Anda Saat cara kerja Anda berkembang, Ai bisa ikut disesuaikan tanpa harus mulai dari nol.",
    },
    {
      id: 6,
      icon: <Blend className="text-[#4300FF]" size={40} />,
      title: "Dibangun untuk Masa Depan Anda",
      desc: "Dibangun untuk Jangka Panjang Pakai tidak mengejar tren sesaat, tapi membangun fondasi AI yang tetap relevan di masa depan.",
    },
  ];
  return (
    <section
      id="about"
      className="py-20 relative overflow-hidden flex flex-col gap-30"
    >
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-[100px] z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/30 rounded-full blur-[100px] z-10" />
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-blue-400 text-sm mb-6"
        >
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
            className="w-full md:w-[700px] flex flex-col items-center md:items-start pt-0 md:pt-10"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
              Who Are We
            </h1>
            <p className="text-center md:text-start text-white px-10 md:px-0">
              PAKAI adalah platform untuk membangun kecerdasan digital yang
              bekerja untuk Anda. Hari ini sebagai Worker AI, dan ke depannya
              sebagai fondasi masa depan kerja dan produktivitas manusia. <br />
              Kami tidak sekadar menjual AI. Kami membantu Anda bersiap untuk
              masa depan.
            </p>
          </motion.div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 justify-center py-10">
          <motion.div
            initial={{ scale: 1 }}
            whileInView={{ scale: [1, 1.05, 1] }}
            viewport={{ once: false }}
            className="p-1 bg-gradient-to-tr from-[#666666]/20 from-30% via-[#666666]/60 via-85% to-[#0065F8] to-100% rounded-[20px] mx-5 md:mx-0"
          >
            <div className="bg-gradient-to-tr from-[#000000]/60 from-40% to-[#0065F8]/40 to-100% backdrop-blur-[100px] w-full md:w-[500px] flex flex-col gap-5 items-center justify-center p-10 rounded-[20px] text-justify">
              <h1 className="text-[20px] font-bold">VISI</h1>
              <p>
                Membangun masa depan di mana setiap orang memiliki akses ke
                kecerdasan digital yang bekerja untuk mereka membantu berpikir,
                bekerja, dan mengambil keputusan dengan lebih cepat dan lebih
                cerdas. <br />
                Kami percaya masa depan bukan tentang menggantikan manusia
                dengan AI, tetapi tentang memberdayakan manusia dengan AI.{" "}
                <br />
                PAKAI hadir untuk menjembatani hari ini dan masa depan itu.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 1 }}
            whileInView={{ scale: [1, 1.05, 1] }}
            viewport={{ once: false }}
            className="p-1 bg-gradient-to-tr from-[#666666]/20 from-30% via-[#666666]/60 via-85% to-[#0065F8] to-100% rounded-[20px] mx-5 md:mx-0"
          >
            <div className="bg-gradient-to-tr text-justify from-[#000000]/60 from-40% to-[#0065F8]/40 to-100% backdrop-blur-[100px] w-full md:w-[500px] flex flex-col gap-5 items-center justify-center p-10 rounded-[20px]">
              <h1 className="text-[20px] font-bold">MISI</h1>
              <p>
                Menyederhanakan cara manusia mengakses dan menggunakan
                kecerdasan buatan dengan menghadirkan Worker AI yang bisa
                dilatih, dimiliki, dan digunakan sesuai kebutuhan masing-masing
                individu. <br />
                Hari ini kami membantu pekerjaan. Besok kami membantu cara
                berpikir. Dan ke depannya, kami membangun sistem AI yang tumbuh
                bersama penggunanya. <br />
                PAKAI bukan sekadar produk. Ini adalah langkah pertama menuju
                masa depan yang baru.
              </p>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="w-full flex flex-col gap-3 text-start px-5 md:px-0 mx-0 md:mx-40"
        >
          <h1 className="text-3xl md:text-5xl">Why Should Us?</h1>
          <p>
            Karena di era AI, masalahnya bukan lagi apakah Anda akan menggunakan
            AI, tetapi apakah AI tersebut benar-benar bekerja untuk Anda.
            <br />
            PAKAI dirancang untuk mereka yang ingin lebih siap, lebih efisien,
            dan lebih relevan di masa depan tanpa bergantung pada sistem yang
            tidak efisien dan mahal.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-8 md:mx-0 md:mx-35 py-15">
          {superiority.map((items) => (
            <motion.div
              initial={{ scale: 1 }}
              whileInView={{ scale: [1, 1.05, 1] }}
              viewport={{ once: false }}
              key={items.id}
              className="flex flex-col gap-2 text-start"
            >
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
