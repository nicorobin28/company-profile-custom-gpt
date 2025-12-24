import React, { useState, useMemo, useEffect } from "react";
import { useParams } from "react-router-dom";
import { 
  ArrowRight, 
  CornerRightDown, 
  Check, 
  Sparkles, 
  Zap,
  Box,
  Cpu,
  Monitor
} from "lucide-react";
import { AiOutlineProduct } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import Images from "../assets/imagecard.png";

// Dummy Data Database
const PRODUCTS_DB = {
  1: {
    id: 1,
    title: "Gaming Industry",
    subtitle: "High Performance Gaming Setup",
    description: "Create the ultimate gaming environment with our premium industry-standard equipment designed for professional esports and immersive gameplay.",
    basePrice: 5000000,
    videoUrl: "https://www.youtube.com/embed/Sdei_uXo91M", // Gaming related video
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop",
    customAdds: [
      { id: "c1", label: "RTX 4090 Upgrade", price: 1500000, icon: <Cpu size={18} /> },
      { id: "c2", label: "32GB RAM RGB", price: 800000, icon: <Zap size={18} /> },
      { id: "c3", label: "Liquid Cooling", price: 1200000, icon: <Sparkles size={18} /> },
      { id: "c4", label: "4K 144Hz Monitor", price: 2000000, icon: <Monitor size={18} /> },
      { id: "c5", label: "Mechanical Keyboard", price: 500000, icon: <Box size={18} /> },
      { id: "c6", label: "Pro Gaming Mouse", price: 300000, icon: <Zap size={18} /> },
    ]
  },
  2: {
    id: 2,
    title: "Entertainment Hub",
    subtitle: "Home Cinema Experience",
    description: "Transform your living room into a cinematic paradise with our state-of-the-art entertainment systems.",
    basePrice: 3000000,
    videoUrl: "https://www.youtube.com/embed/Bey4XXJAqS8", // Entertainment related video
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop",
    customAdds: [
      { id: "e1", label: "Dolby Atmos Sound", price: 1500000, icon: <Sparkles size={18} /> },
      { id: "e2", label: "8K Projector", price: 3500000, icon: <Monitor size={18} /> },
      { id: "e3", label: "Smart Lighting", price: 400000, icon: <Zap size={18} /> },
      { id: "e4", label: "Recliner Seat", price: 2000000, icon: <Box size={18} /> },
    ]
  }
};

const Productcard = () => {
  const { id } = useParams();
  const [activeAdds, setActiveAdds] = useState([]);
  
  // Get product data or fallback to first one if not found (for safety)
  const product = PRODUCTS_DB[id] || PRODUCTS_DB[1];

  const toggleAdd = (addId) => {
    setActiveAdds((prev) =>
      prev.includes(addId)
        ? prev.filter((id) => id !== addId)
        : [...prev, addId]
    );
  };

  const handleSelectAll = () => {
    if (activeAdds.length === product.customAdds.length) {
      setActiveAdds([]);
    } else {
      setActiveAdds(product.customAdds.map(add => add.id));
    }
  };

  // Calculations
  const baseTotal = product.basePrice;
  const addsTotal = activeAdds.reduce((sum, addId) => {
    const add = product.customAdds.find(p => p.id === addId);
    return sum + (add ? add.price : 0);
  }, 0);
  
  const isBundle = activeAdds.length === product.customAdds.length && product.customAdds.length > 0;
  const rawTotal = addsTotal;
  
  // Bundle Discount (e.g., 15% off total if all selected)
  const bundleDiscount = isBundle ? rawTotal * 0.5 : 0;
  const finalTotal = rawTotal - bundleDiscount;

  const formatCurrency = (val) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(val);
  };

  const handleWhatsAppRedirect = () => {
    const selectedAddDetails = activeAdds.map(id => {
      const add = product.customAdds.find(p => p.id === id);
      return `- ${add.label} (${formatCurrency(add.price)})`;
    }).join('\n');

    const message = `Halo, saya tertarik dengan produk ini:
*${product.title}*
Base Price: ${formatCurrency(product.basePrice)}

*Custom Add-ons Selected:*
${selectedAddDetails || "- Tidak ada"}

${isBundle ? `*BUNDLE DISCOUNT APPLIED!*` : ""}

*Total Price: ${formatCurrency(finalTotal)}*

Mohon bantuannya untuk pemesanan. Terima kasih!`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6281234567800?text=${encodedMessage}`, '_blank');
  };

  // Reset selection when product changes
  useEffect(() => {
    setActiveAdds([]);
  }, [id]);

  return (
    <section className="relative min-h-screen bg-[#050B1E] py-24 md:py-32 overflow-hidden font-sans">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full mix-blend-screen animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-cyan-500/10 blur-[100px] rounded-full mix-blend-screen" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm text-blue-400 backdrop-blur-md"
          >
            <AiOutlineProduct className="text-lg" />
            <span className="font-semibold tracking-wide uppercase text-xs">Premium Product</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white leading-tight mb-6 tracking-tight"
          >
           {product.title}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            {product.subtitle}
          </motion.p>
        </div>

        {/* Video / Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(59,130,246,0.15)] bg-gray-900/50 backdrop-blur-sm mb-24 group"
        >
          <div className="relative aspect-video w-full">
            <iframe
              src={`${product.videoUrl}?autoplay=0&rel=0&showinfo=0`}
              title={product.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Info Split Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-gray-300 tracking-wider uppercase">
              About The Product
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Crafted for Integration. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Designed for Performance.
              </span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              {product.description}
            </p>

            <div className="flex items-center gap-4 pt-4">
               <div className="flex -space-x-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-[#050B1E] bg-gray-700 flex items-center justify-center text-xs text-white overflow-hidden">
                       <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
                    </div>
                  ))}
               </div>
               <div className="text-sm font-medium text-white">
                 <span className="text-blue-400 font-bold">1k+</span> Happy Users
               </div>
            </div>

            <div className="flex items-center gap-3 text-sm font-semibold text-blue-400 mt-8">
              <span>Explore Customization Below</span>
              <CornerRightDown className="animate-bounce" />
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-3xl blur-2xl -z-10" />
            <img
              src={product.image}
              alt="Preview"
              className="rounded-3xl w-full object-cover shadow-2xl border border-white/10 rotate-2 hover:rotate-0 transition-all duration-500"
            />
          </motion.div>
        </div>

        {/* Configuration Section  */}
        <div id="customize" className="relative rounded-[3rem] border border-white/10 bg-[#081028]/80 backdrop-blur-xl overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="p-8 md:p-12 border-b border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
             <div>
                <h3 className="text-3xl font-bold text-white mb-2">Configure Your Setup</h3>
                <p className="text-gray-400">Select add-ons to enhance your experience.</p>
             </div>
             <div>
                <button 
                  onClick={handleSelectAll}
                  className="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-colors flex items-center gap-2"
                >
                  <Sparkles size={16} className={isBundle ? "text-yellow-400" : "text-gray-400"} />
                  {isBundle ? "Unselect All" : "Select All Bundle"}
                </button>
             </div>
          </div>

          <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.customAdds.map((item) => {
              const isActive = activeAdds.includes(item.id);
              return (
                <motion.div
                  key={item.id}
                  onClick={() => toggleAdd(item.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`
                    relative cursor-pointer p-6 rounded-2xl border transition-all duration-300 group
                    ${isActive 
                      ? "bg-blue-600 text-white border-blue-500 shadow-[0_0_30px_rgba(37,99,235,0.3)]" 
                      : "bg-[#0b1430] text-gray-400 border-white/5 hover:border-blue-500/30 hover:bg-[#0f1b40]"
                    }
                  `}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className={`p-3 rounded-xl ${isActive ? 'bg-white/20' : 'bg-white/5'}`}>
                      {item.icon}
                    </div>
                    {isActive && (
                      <div className="bg-white/20 p-1 rounded-full">
                        <Check size={14} className="text-white" />
                      </div>
                    )}
                  </div>
                  <h4 className={`font-bold text-lg mb-1 ${isActive ? "text-white" : "text-white"}`}>
                    {item.label}
                  </h4>
                  <p className={`text-sm font-medium ${isActive ? "text-blue-100" : "text-gray-500"}`}>
                    + {formatCurrency(item.price)}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Pricing Footer */}
          <div className="bg-[#050B1E]/50 p-8 md:p-12 border-t border-white/5 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
             <div className="space-y-1">
                <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">Estimated Total</p>
                <div className="flex items-center gap-4">
                   <div className="flex flex-col">
                      {isBundle && (
                         <span className="text-lg text-gray-500 line-through font-medium">
                           {formatCurrency(rawTotal)}
                         </span>
                      )}
                      <motion.div 
                        key={finalTotal}
                        initial={{ scale: 0.8, opacity: 0.5 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="text-4xl md:text-5xl font-black text-white"
                      >
                         {formatCurrency(finalTotal)}
                      </motion.div>
                   </div>
                   {isBundle && (
                     <div className="px-3 py-1 bg-red-500/20 border border-red-500/50 text-red-400 text-xs font-bold rounded-lg uppercase">
                       Bundle Discount
                     </div>
                   )}
                </div>
                <p className="text-sm text-gray-500">Includes taxes and service fees.</p>
             </div>

             <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleWhatsAppRedirect}
                className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-lg shadow-xl shadow-blue-500/20 overflow-hidden"
             >
                <span className="relative z-10 flex items-center gap-2">
                  Dapatkan Sekarang <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
             </motion.button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Productcard;
