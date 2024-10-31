import React from "react";

const Content = ({ inputData, handleInputChange }) => {
  const handleTextareaChange = (e) => {
    const { name, value } = e.target;
    handleInputChange({ target: { name, value } });
  };

  return (
    <div className="w-full p-6 bg-white shadow-sm rounded-3xl">
      <div className="space-y-6">
        {/* Textarea for thoughts */}
        <div className="space-y-2">
          <label className="block text-lg font-semibold text-gray-900">
            Your Thoughts
          </label>
          <div className="relative">
            <textarea
              className="w-full h-40 p-4 transition-colors bg-white border-2 border-gray-100 shadow-sm resize-none rounded-2xl focus:outline-none focus:border-gray-200"
              name="thoughts"
              value={inputData.thoughts}
              onChange={handleTextareaChange}
              placeholder="Write your thoughts here..."
              maxLength="300"
            />
            <span className="absolute text-sm text-gray-400 right-4 bottom-4">
              {inputData.thoughts.length}/300 characters
            </span>
          </div>
        </div>

        {/* Author Name Input */}
        <div className="space-y-2">
          <label className="block text-lg font-semibold text-gray-900">
            Author Name
          </label>
          <input
            className="w-full p-4 transition-colors bg-white border-2 border-gray-100 shadow-sm rounded-2xl focus:outline-none focus:border-gray-200"
            type="text"
            name="author"
            value={inputData.author}
            onChange={handleInputChange}
            placeholder="Enter author name"
          />
        </div>

        {/* Instagram Handle Input */}
        <div className="space-y-2">
          <label className="block text-lg font-semibold text-gray-900">
            Instagram Handle
          </label>
          <div className="relative">
            <span className="absolute text-gray-400 -translate-y-1/2 left-4 top-1/2">@</span>
            <input
              className="w-full p-4 pl-8 transition-colors bg-white border-2 border-gray-100 shadow-sm rounded-2xl focus:outline-none focus:border-gray-200"
              type="text"
              name="insta_handle"
              value={inputData.insta_handle}
              onChange={handleInputChange}
              placeholder="your.username"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;