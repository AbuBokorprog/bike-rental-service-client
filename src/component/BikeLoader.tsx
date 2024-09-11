import React from 'react';
import { motion } from 'framer-motion';

const BikeLoader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="relative w-full h-40 overflow-hidden">
        {/* Road */}
        <div className="absolute bottom-0 w-full h-10 bg-gray-700"></div>
        <div className="absolute bottom-0 w-full h-3 bg-yellow-400"></div>

        {/* Bike */}
        <motion.div
          className="absolute bottom-8 w-16 h-16"
          animate={{ x: [0, 300, 600, 900, 1200] }}
          transition={{ repeat: Infinity, duration: 4 }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/128/3600/3600996.png" // Replace with actual motorbike image URL or an SVG
            alt="Motorbike"
            className="w-full h-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default BikeLoader;
