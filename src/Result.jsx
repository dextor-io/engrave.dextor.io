import React, { useState } from "react";

const Result = ({ inputData, selectedBackground }) => {
  const [tiltStyle, setTiltStyle] = useState({});

  const handleMouseMove = (e) => {
    const { offsetWidth: width, offsetHeight: height } = e.currentTarget;
    const { offsetX: x, offsetY: y } = e.nativeEvent;

    const rotateX = (y / height - 0.5) * 20; // Adjust multiplier for tilt intensity
    const rotateY = (x / width - 0.5) * -20;

    setTiltStyle({
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({ transform: "rotateX(0) rotateY(0)" });
  };

  const bgColorClass = selectedBackground
    ? selectedBackground
    : "bg-white text-black";

  return (
    <div
      className="tilt-container w-full lg:h-96 h-72 p-4 space-y-6 text-white relative"
      tabIndex="0"
    >
      <div
        className={`card w-full h-full shadow-lg ${bgColorClass}`}
        id="result"
        style={{ ...tiltStyle, transition: "transform 0.1s ease" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="card-body flex flex-col justify-between">
          <div className="flex-grow flex items-center justify-center overflow-scroll">
            <p className="thoughts kanit-semibold-italic text-lg text-center break-words whitespace-pre-wrap overflow-hidden leading-normal">
              "{inputData.thoughts || "Your thought ✍🏻"}"
            </p>
          </div>
          <p className="kanit-semibold text-end pr-16">
            {(inputData.author && `~ ${inputData.author}`) || "author name ?"}
          </p>
          <div className="flex justify-between items-end w-full">
            <p className="kanit-semibold md:text-lg text-sm break-words whitespace-pre-wrap text-start">
              {`${inputData.insta_handle && `@${inputData.insta_handle}`}` ||
                "insta handle"}
            </p>
            <p className="kanit-bold md:text-lg text-sm break-words whitespace-pre-wrap text-end">
              @engrave.io
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
