import React from "react";

const Content = ({ inputData, handleInputChange }) => {
  const handleTextareaChange = (e) => {
    const { name, value } = e.target;
    let txt = value;
    let text = txt.split(".");
    let str = text.join(".</br>");
    str = value;
    handleInputChange({ target: { name, value } });
  };

  return (
    <section className="max-w-xl mx-4 p-4 space-y-6 sm:max-w-lg lg:max-w-xl flex flex-col items-center">
      {/* Textarea for longer text input */}

      <textarea
        className="textarea textarea-bordered w-full max-w-md h-40 bg-white text-black border-2 border-gray-300 rounded-lg shadow-sm focus:border-gray-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-300 ease-in-out text-lg lg:text-xl"
        name="thoughts"
        value={inputData.thoughts}
        onChange={handleTextareaChange}
        placeholder="write your thoughts here..."
        rows={4}
        cols={4}
        maxLength="300"
      />

      {/* First input field */}
      <input
        className="input input-bordered w-full max-w-md bg-white text-black border-2 border-gray-300 rounded-lg shadow-sm focus:border-gray-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-300 ease-in-out text-lg lg:text-xl"
        type="text"
        name="author"
        value={inputData.author}
        onChange={handleInputChange}
        placeholder="name of the Author"
      />

      {/* Second input field */}
      <input
        className="input input-bordered w-full max-w-md bg-white text-black border-2 border-gray-300 rounded-lg shadow-sm focus:border-gray-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-300 ease-in-out text-lg lg:text-xl"
        type="text"
        name="insta_handle"
        value={inputData.insta_handle}
        onChange={handleInputChange}
        placeholder="instagram handle"
      />
    </section>
  );
};

export default Content;
