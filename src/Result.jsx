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
          <p className="kanit-semibold text-end pr-5">
            {(inputData.author && `~ ${inputData.author}`) ||
              "who wrote this ?"}
          </p>
          <div className="flex justify-between items-end w-full">
            <p className="kanit-semibold md:text-lg text-sm  break-words whitespace-pre-wrap overflow-hidden text-start">
              {`${inputData.insta_handle && `@${inputData.insta_handle}`}` ||
                "can I get your insta ?"}
            </p>
            <p className="kanit-bold md:text-lg text-sm  break-words whitespace-pre-wrap overflow-hidden text-end">
              Engrave
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
