import React, { useState } from "react";
import { CircleHelp, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elits.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="question"
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#050B1E] via-[#070F2E] to-[#050B1E]"
    >
      <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/20 blur-[160px]" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 pt-24 pb-[360px] md:pb-[280px] text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm mb-6 backdrop-blur-md text-blue-400">
          <CircleHelp className="w-4 h-4" />
          <span>Questions</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4 text-left">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                onClick={() => toggleFaq(index)}
                className="cursor-pointer px-6 py-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl text-white hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="font-medium">{item.question}</p>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10"
                  >
                    <ChevronDown className="w-4 h-4 text-gray-300" />
                  </motion.div>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.45, ease: "easeInOut" },
                        opacity: { duration: 0.3 },
                      }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm text-gray-400 leading-relaxed mt-3">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-5 md:bottom-5 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl rounded-3xl bg-white/3 border border-white/10 backdrop-blur-2xl px-8 py-6 text-gray-300 z-20">
        <div className="flex flex-col md:flex-row justify-between gap-10 text-sm">
          <div className="text-left">
            <p className="text-white font-semibold text-lg mb-3">Logo</p>
            <p>Nama Company</p>
            <p className="text-xs mt-3 text-gray-400">
              © 2025 Company. All Rights Reserved.
            </p>
          </div>

          <div className="flex gap-10 md:gap-14">
            <div className="text-left">
              <p className="text-white font-semibold mb-3">Menu</p>
              <ul className="space-y-2">
                <li className="hover:text-white cursor-pointer">Home</li>
                <li className="hover:text-white cursor-pointer">About</li>
                <li className="hover:text-white cursor-pointer">Product</li>
                <li className="hover:text-white cursor-pointer">Testimonial</li>
              </ul>
            </div>

            <div className="text-left">
              <p className="text-white font-semibold mb-3">Legal</p>
              <ul className="space-y-2">
                <li className="hover:text-white cursor-pointer">Terms</li>
                <li className="hover:text-white cursor-pointer">Privacy</li>
                <li className="hover:text-white cursor-pointer">Cookies</li>
                <li className="hover:text-white cursor-pointer">License</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
