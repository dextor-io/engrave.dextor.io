import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const ColorComponent = ({ onSelectBackground, selectedBackground }) => {
  const gradients = [
    { class: "bg-white", name: "Classic White" },
    { class: "bg-gradient-to-r from-indigo-500 to-purple-500", name: "Ocean Dream" },
    { class: "bg-gradient-to-r from-green-400 to-blue-500", name: "Forest Breeze" },
    { class: "bg-gradient-to-r from-yellow-400 to-red-500", name: "Sunset Glow" },
    { class: "bg-gradient-to-r from-pink-500 to-purple-500", name: "Berry Fusion" },
    { class: "bg-gradient-to-r from-indigo-500 to-blue-500", name: "Midnight Sky" },
  ];

  return (
    <div className="w-full p-6 bg-white shadow-sm rounded-3xl">
      <h3 className="mb-6 text-xl font-semibold text-gray-900">Choose Background</h3>
      <div className="flex flex-wrap items-center justify-start gap-4">
        {gradients.map((gradient, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`
              relative w-14 h-14 rounded-2xl shadow-sm
              transition-all duration-300 ease-in-out
              ${gradient.class}
              ${selectedBackground === gradient.class 
                ? 'ring-2 ring-blue-500 ring-offset-2' 
                : 'hover:ring-2 hover:ring-gray-200 hover:ring-offset-1'
              }
            `}
            onClick={() => onSelectBackground(gradient.class)}
            aria-label={`Select ${gradient.name} background`}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorComponent;