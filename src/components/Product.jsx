import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Tag, Gamepad2, ArrowUpRight, Compass } from "lucide-react";

const products = [
  {
    id: 1,
    title: "Gaming Industry",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop",
    tags: ["Marketing", "Marketing"],
  },
  {
    id: 2,
    title: "Entertainment",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop",
    tags: ["Streaming", "Media"],
  },
];

const Product = () => {
  const navigate = useNavigate();

  return (
    <section id="product" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full bg-blue-600/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-blue-400 text-sm mb-6"
          >
            <Tag size={14} />
            <span>Price</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-white via-white to-gray-400 bg-clip-text text-transparent"
          >
            Plans Made for <br /> Teams of All Sizes
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-lg mx-auto"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </motion.p>
        </div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              onClick={() => navigate(`/product/${item.id}`)}
              className="group relative rounded-[2.5rem] bg-[#0c1226] border border-white/5 p-4 md:p-6 overflow-hidden transition-all duration-300 hover:shadow-[0_0_50px_rgba(59,130,246,0.15)] hover:border-blue-500/30 cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-64 md:h-72 rounded-[2rem] overflow-hidden mb-6">
                <div className="absolute top-4 left-4 z-10">
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-sm font-medium text-white hover:bg-white/20 transition-colors group/btn">
                    <span>Explore Detail</span>
                    <Compass
                      size={16}
                      className="group-hover/btn:rotate-45 transition-transform"
                    />
                  </div>
                </div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-[#0c1226] to-transparent opacity-60" />
              </div>

              {/* Content */}
              <div className="px-2">
                {/* Tags */}
                <div className="flex gap-3 mb-6">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-1.5 text-xs font-medium text-blue-300 bg-blue-500/10 px-3 py-1.5 rounded-full border border-blue-500/20"
                    >
                      <ArrowUpRight size={12} />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-2xl bg-white/5 group-hover:bg-blue-500/20 transition-colors">
                    <Gamepad2 size={28} className="text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-[2.5rem] ring-1 ring-inset ring-transparent group-hover:ring-blue-500/20 pointer-events-none transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
