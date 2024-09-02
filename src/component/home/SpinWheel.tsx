import React, { useState } from "react";
import { motion } from "framer-motion";

const discounts = [
  { label: "10% OFF", value: 10 },
  { label: "15% OFF", value: 15 },
  { label: "20% OFF", value: 20 },
  { label: "Free Ride", value: 0 },
  { label: "5% OFF", value: 5 },
  { label: "25% OFF", value: 25 },
];

const SpinTheWheel = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState(null);

  const handleSpin = () => {
    setIsSpinning(true);
    const randomIndex = Math.floor(Math.random() * discounts.length);
    const degreesPerSegment = 360 / discounts.length;
    const randomDegree = degreesPerSegment * randomIndex + 360 * 3; // Add extra spins for effect

    setTimeout(() => {
      setIsSpinning(false);
      setResult(discounts[randomIndex]);
    }, 3000); // Spin duration

    return randomDegree;
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Spin the Wheel!</h2>
      <div className="relative">
        <motion.div
          className="w-56 h-56 rounded-full border-4 border-gray-300 bg-white flex items-center justify-center"
          animate={{
            rotate: isSpinning ? handleSpin() : 0,
          }}
          transition={{
            duration: 2.5,
            ease: "easeInOut",
          }}
        >
          {discounts.map((discount, index) => (
            <div
              key={index}
              className={`absolute w-full h-full flex items-center justify-center text-center text-lg font-semibold ${
                index % 2 === 0 ? "text-red-600" : "text-blue-600"
              }`}
              style={{
                transform: `rotate(${(360 / discounts.length) * index}deg)`,
              }}
            >
              {discount.label}
            </div>
          ))}
        </motion.div>
        <div className="absolute w-1 h-8 bg-red-500 top-0 left-1/2 transform -translate-x-1/2 rounded-t-lg"></div>
      </div>
      <button
        onClick={handleSpin}
        disabled={isSpinning}
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
      >
        {isSpinning ? "Spinning..." : "Spin Now!"}
      </button>
      {result && (
        <div className="mt-4 text-xl font-bold text-green-600">
          Congratulations! You got {result.label}
        </div>
      )}
    </div>
  );
};

export default SpinTheWheel;
