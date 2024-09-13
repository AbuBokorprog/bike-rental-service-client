import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
const HowToRent: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="overscroll-x-none"
    >
      <div className=" my-5 lg:my-16 text-center">
        <h3 className="text-xl lg:text-3xl font-semibold uppercase text-center">
          Make 4 Simple Steps to Rent a Bike!
        </h3>
        <p className="my-2">Your bike is already waiting for you!</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-center justify-between mx-auto">
        <motion.div
          whileHover={{ backgroundColor: '#fb7185' }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center justify-center text-center bg-primary-100 w-64 h-64 rounded-full mx-auto relative"
        >
          <img src="/src/assets/images/login.png" alt="" className="w-10" />
          <h4 className="text-xl font-semibold">Register and Login</h4>
          <p className="font-medium">
            Hop in, it's faster than standing in line!
          </p>
          <div className="absolute left-0 top-10">
            <p className="px-4 py-2 bg-yellow-400 text-white rounded-full">1</p>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ backgroundColor: '#fb7185' }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center justify-center text-center bg-primary-100 w-64 h-64 rounded-full mx-auto relative"
        >
          <img src="/src/assets/images/two.png" alt="" className="w-10" />
          <h4 className="text-xl font-semibold">Choose a Bike</h4>
          <p className="font-medium">
            Find your perfect ride—because every adventure needs the right
            wheels.
          </p>
          <div className="absolute left-0 top-10">
            <p className="px-4 py-2 bg-yellow-400 text-white rounded-full">2</p>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ backgroundColor: '#fb7185' }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center justify-center text-center bg-primary-100 w-64 h-64 rounded-full mx-auto relative"
        >
          <img
            src="/src/assets/images/work-tools.png"
            alt=""
            className="w-10"
          />
          <h4 className="text-xl font-semibold">Enjoy Your Ride</h4>
          <p className="font-medium">
            Feel the wind, forget the grind—your adventure starts now!
          </p>
          <div className="absolute left-0 top-10">
            <p className="px-4 py-2 bg-yellow-400 text-white rounded-full">3</p>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ backgroundColor: '#fb7185' }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center justify-center text-center bg-primary-100 w-64 h-64 rounded-full mx-auto relative"
        >
          <img
            src="/src/assets/images/placeholder.png"
            alt=""
            className="w-10"
          />
          <h4 className="text-xl font-semibold">Return the Bike</h4>
          <p className="font-medium">
            Goodbyes are hard, but we’ll see you for the next ride!
          </p>
          <div className="absolute left-0 top-10">
            <p className="px-4 py-2 bg-yellow-400 text-white rounded-full">4</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HowToRent;
