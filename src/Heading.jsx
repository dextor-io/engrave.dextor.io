import React from "react";

const Heading = () => {
  return (
    <div className="relative md:absolute top-0 left-0 right-0 flex flex-col items-center justify-center h-24 mt-4">
      <h1 className="archivo-black-regular text-4xl sm:text-5xl lg:text-6xl font-bold relative">
        <span className="bg-wooden-texture bg-clip-text text-transparent">
          Engrave
        </span>
      </h1>
      <p className="cedarville-cursive-regular text-xl sm:text-2xl lg:text-3xl text-gray-600 text-white pt-2">
        Share your thoughts with the world 🌱
      </p>
    </div>
  );
};

export default Heading;
