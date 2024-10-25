import React, { useState } from "react";
import ResultBtn from "./ResultBtn";

const Result = ({ inputData, selectedBackground }) => {
  const [isFocused, setIsFocused] = useState(false);
  const bgColorClass = selectedBackground
    ? selectedBackground
    : "bg-white text-black";

  return (
    <div
      className="w-full lg:h-96 h-72 p-4 space-y-6 text-white relative"
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
      tabIndex="0"
    >
      <div
        className={`card w-full h-full shadow-xl ${bgColorClass}`}
        id="result"
      >
        <div className="card-body flex flex-col justify-between">
          <div className="flex-grow flex items-center justify-center overflow-hidden">
            <p className="kanit-semibold kanit-semibold-italic text-lg text-center break-words whitespace-pre-wrap overflow-hidden">
              "{inputData.thoughts || "cook your thoughts here... 😉"}"
            </p>
          </div>
          <div className="flex justify-between items-end w-full">
            <p className="kanit-light text-lg break-words whitespace-pre-wrap overflow-hidden text-start">
              {inputData.author || "who wrote this ?"}
            </p>
            <p className="kanit-bold text-lg break-words whitespace-pre-wrap overflow-hidden text-end">
              ~ {inputData.insta_handle || "can I get your insta ?"}
            </p>
          </div>
        </div>
      </div>

      {/* Button appears in the top-right corner */}
      {isFocused && (
        <div className="absolute top-4 right-10 z-10">
          <ResultBtn
            aspectRatio="portrait"
            className={`${selectedBackground ? "text-white" : "text-black"}`}
          />
        </div>
      )}
    </div>
  );
};

export default Result;
