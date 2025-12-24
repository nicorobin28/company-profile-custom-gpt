import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ArrowRight, CornerRightDown } from "lucide-react";
import { AiOutlineProduct } from "react-icons/ai";
import Images from "../assets/imagecard.png";

const Productcard = () => {
  const { id } = useParams();

  const customAdds = [
    { id: 1, label: "Lorem Ipsum" },
    { id: 2, label: "Lorem Ipsum" },
    { id: 3, label: "Lorem Ipsum" },
    { id: 4, label: "Lorem Ipsum" },
    { id: 5, label: "Lorem Ipsum" },
    { id: 6, label: "Lorem Ipsum" },
  ];

  const [activeAdds, setActiveAdds] = useState([]);

  const toggleAdd = (addId) => {
    setActiveAdds((prev) =>
      prev.includes(addId)
        ? prev.filter((id) => id !== addId)
        : [...prev, addId]
    );
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#050B1E] via-[#070F2E] to-[#050B1E] py-20 md:py-24 lg:py-28 overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] md:w-[900px] h-[600px] md:h-[900px] bg-blue-600/10 blur-[160px] rounded-full -z-10" />

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <span className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-blue-400 backdrop-blur">
            <AiOutlineProduct className="text-base" />
            <span className="font-medium tracking-wide">Product</span>
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit
          </h1>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-blue-600 hover:bg-blue-500 transition text-white font-medium shadow-lg">
              Dapatkan Sekarang
              <ArrowRight size={18} />
            </button>

            <button className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition text-white font-medium backdrop-blur">
              Lihat FAQ
            </button>
          </div>
        </div>

        <div className="relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.55)] bg-slate-900/50 backdrop-blur-sm mb-20 md:mb-24">
          <div className="relative aspect-video">
            <iframe
              src="https://www.youtube.com/embed/Sdei_uXo91M"
              title="Product Demo"
              frameBorder="0"
              allowFullScreen
              className="w-full h-full"
            />
          </div>

          <div className="absolute bottom-3 right-3 md:bottom-6 md:right-6">
            <button className="flex items-center gap-2 px-5 py-3 rounded-full bg-blue-600 hover:bg-blue-500 transition text-white text-sm font-medium shadow-lg">
              Tonton Video Demo
            </button>
          </div>
        </div>

        <div className="mb-24 md:mb-28">
          <div className="text-center mb-12 md:mb-14">
            <span className="inline-flex px-5 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 backdrop-blur mb-6">
              Kenali Produk
            </span>

            <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h2>

            <div className="w-20 h-[3px] bg-blue-500 mx-auto rounded-full" />
          </div>

          <div className="relative rounded-4xl border border-white/10 bg-gradient-to-br from-[#08163A] to-[#050B1E] p-6 sm:p-10 md:p-14 flex flex-col-reverse md:flex-row gap-12 items-center shadow-[0_0_80px_rgba(0,0,0,0.55)]">
            <div className="flex-1">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-4">
                Lorem Ipsum
              </h3>

              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <div className="flex items-center gap-4 text-white font-semibold">
                <span>Lihat Custom di bawah</span>
                <CornerRightDown
                  size={32}
                  className="text-blue-400 animate-bounce mt-2"
                />
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src={Images}
                alt="Product Preview"
                className="rounded-2xl max-w-xs sm:max-w-sm md:max-w-md w-full object-cover shadow-lg"
              />
            </div>
          </div>
        </div>

        <div className="text-center mb-12 md:mb-14">
          <span className="inline-flex px-5 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 backdrop-blur mb-6">
            Price
          </span>

          <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </h2>

          <div className="w-20 h-[3px] bg-blue-500 mx-auto rounded-full" />
        </div>

        <div className="relative rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-[#08163A]/80 to-[#050B1E]/80 backdrop-blur-xl max-w-5xl mx-auto overflow-hidden">
          <div className="p-6 sm:p-8 md:p-10">
            <h3 className="text-xl font-semibold text-white mb-8">
              Custom add :
            </h3>

            <div className="flex flex-wrap gap-4">
              {customAdds.map((item) => {
                const isActive = activeAdds.includes(item.id);

                return (
                  <span
                    key={item.id}
                    onClick={() => toggleAdd(item.id)}
                    className={`cursor-pointer px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border text-sm font-medium transition-all active:scale-95
                      ${
                        isActive
                          ? "bg-[#1759FF] text-white border-[#1759FF]"
                          : "bg-blue-500/10 text-blue-300 border-blue-500/20 hover:bg-blue-500/20"
                      }
                    `}
                  >
                    {item.label}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="w-full h-px bg-white/10" />
          <div className="p-6 sm:p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
                Rp 200.000
              </p>
              <p className="text-gray-400">Penawaran terbatas!</p>
            </div>

            <button className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 rounded-full bg-blue-600 hover:bg-blue-500 transition text-white font-medium shadow-lg">
              Dapatkan Sekarang
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Productcard;
