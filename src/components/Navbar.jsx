import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const logoUrl = new URL(import.meta.env.VITE_URL_LOGO, import.meta.url).href;
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = ["Home", "Product", "About Us", "Testimonials"];

  const menuContainerVariants = {
    hidden: {
      scaleY: 0,
      opacity: 0,
    },
    visible: {
      scaleY: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      scaleY: 0,
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const menuItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const handleNavClick = (sectionId) => {
    setIsOpen(false);

    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-md py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="font-bold tracking-tight z-50 relative w-24">
            <img src={logoUrl} alt="" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1 p-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            {navLinks.map((item) => (
              <a
                key={item}
                onClick={() =>
                  handleNavClick(item.toLowerCase().replace(" ", "-"))
                }
                className="px-5 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all cursor-pointer"
              >
                {item}
              </a>
            ))}
          </div>

          <button onClick={() => { 
            const encodedMessage = encodeURIComponent("Halo, saya ingin mengetahui lebih detail PAKAI.");
            window.open(`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=${encodedMessage}`, "_blank");
           }} className="hidden md:block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all transform hover:scale-105">
            Connect
          </button>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 z-50 relative hover:bg-white/10 rounded-full transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuContainerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden fixed inset-0 bg-background/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center origin-center"
            style={{ position: "fixed" }}
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((item) => (
                <motion.a
                  key={item}
                  variants={menuItemVariants}
                  onClick={() =>
                    handleNavClick(item.toLowerCase().replace(" ", "-"))
                  }
                  className="text-2xl font-medium text-gray-200 hover:text-white transition-colors hover:scale-110 transform cursor-pointer"
                >
                  {item}
                </motion.a>
              ))}

              <motion.button
                variants={menuItemVariants}
                className="mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-full text-lg font-medium shadow-[0_0_20px_rgba(79,70,229,0.4)]"
                onClick={() => scrollToSection("connect")}
              >
                Connect
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
