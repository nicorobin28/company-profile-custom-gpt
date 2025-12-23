import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import { User, Star, Tag } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const testimonials = [
  {
    id: 1,
    name: "Alex Thompson",
    role: "Tech Lead",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stars: 5,
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Product Manager",
    content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    stars: 5,
  },
  {
    id: 3,
    name: "James Wilson",
    role: "Founder",
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    stars: 5,
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Developer",
    content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    stars: 4,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-[100px] z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/30 rounded-full blur-[100px] z-10" />

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
            <span>Performance</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent"
          >
            What They Said<br />About Our Performance
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-lg mx-auto"
          >
            Some reviews about the projects we are working on
          </motion.p>
        </div>

        {/* Swiper Slider */}
        <div className="max-w-6xl mx-auto relative z-20">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={true}
            loopedSlides={2}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="pb-16 py-10"
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {[...testimonials, ...testimonials].map((item, index) => (
              <SwiperSlide key={`${item.id}-${index}`} className="max-w-[350px] md:max-w-[400px]">
                {({ isActive }) => (
                  <motion.div 
                    className={`
                      relative p-8 rounded-3xl border transition-all duration-500
                      ${isActive 
                        ? 'bg-gradient-to-b from-blue-900/40 to-slate-900/40 border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.15)] scale-95 z-10' 
                        : 'glass-card border-white/5 scale-90 opacity-60 hover:opacity-100'}
                    `}
                  >
                    {/* User Icon */}
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 p-[2px]">
                         <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                            <User size={32} className="text-white" />
                         </div>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-1 uppercase tracking-wide">{item.name}</h3>
                      <div className="flex gap-1 mb-6 text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={16} 
                            fill={i < item.stars ? "currentColor" : "none"} 
                            className={i < item.stars ? "" : "text-gray-600"}
                          />
                        ))}
                      </div>

                      <div className="relative">
                        <p className="text-gray-300 leading-relaxed text-sm">
                          {item.content}
                        </p>
                        
                        {/* Decorative Line */}
                        <div className={`mt-6 h-px w-24 mx-auto bg-gradient-to-r from-transparent ${isActive ? 'via-blue-500' : 'via-gray-600'} to-transparent`} />
                      </div>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 rounded-3xl transition-opacity duration-300 opacity-0 hover:opacity-100 bg-blue-500/5 pointer-events-none" />
                  </motion.div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
