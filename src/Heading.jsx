import React from "react";

const Heading = () => {
  return (
    <div className="relative md:absolute top-0 left-0 right-0 flex flex-col items-center justify-center h-24 ">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Engrave
      </h1>
      <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600">
        Share your thoughts with us
      </p>
    </div>
  );
};

export default Heading;
