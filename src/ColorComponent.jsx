import React from "react";

const ColorComponent = ({ onSelectBackground }) => {
  const gradients = [
    "bg-white text-black",
    "bg-gradient-to-r from-blue-500 to-purple-500 text-white",
    "bg-gradient-to-r from-green-400 to-blue-500 text-white",
    "bg-gradient-to-r from-yellow-400 to-red-500 text-white",
    "bg-gradient-to-r from-pink-500 to-purple-500 text-white",
    "bg-gradient-to-r from-indigo-500 to-blue-500 text-white",
  ];

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center mx-auto lg:p-4 p-2 mt-4">
      {gradients.map((gradient, index) => (
        <button
          key={index}
          className={`md:w-16 md:h-16 min-w-10 min-h-10 rounded-lg shadow-md ${gradient}`}
          onClick={() => onSelectBackground(gradient)}
          aria-label={`Select gradient ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default ColorComponent;
