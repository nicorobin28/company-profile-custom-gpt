import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import notFoundImage from '../assets/404.png';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center text-white relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px] -z-10" />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center z-10"
      >
        <div className='flex items-center justify-center'>
          <div className='w-1/4'>
            <img src={notFoundImage} alt="" />
          </div>
          <div>
            <h1 className="text-[150px] font-bold leading-none bg-gradient-to-br from-white to-gray-600 bg-clip-text text-transparent">
                404
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-light text-gray-300 mb-8"
            >
                Page Not Found
            </motion.p>
            
          </div>
        </div>
          <Link to="/">
              <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-background px-8 py-3 rounded-full font-bold hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all"
              >
                  Back to Home
              </motion.button>
          </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
