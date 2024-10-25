import React from "react";

const ColorComponent = ({ onSelectBackground }) => {
  const gradients = [
    "bg-gradient-to-r from-blue-500 to-purple-500",
    "bg-gradient-to-r from-green-400 to-blue-500",
    "bg-gradient-to-r from-yellow-400 to-red-500",
    "bg-gradient-to-r from-pink-500 to-purple-500",
    "bg-gradient-to-r from-indigo-500 to-blue-500",
  ];

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {gradients.map((gradient, index) => (
        <button
          key={index}
          className={`w-16 h-16 rounded-lg shadow-md ${gradient}`}
          onClick={() => onSelectBackground(gradient)}
          aria-label={`Select gradient ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default ColorComponent;
