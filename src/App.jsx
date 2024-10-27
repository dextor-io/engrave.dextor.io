import React, { useState } from "react";
import Content from "./Content";
import Result from "./Result";
import ColorComponent from "./ColorComponent";
import Heading from "./Heading";
import ResultBtn from "./ResultBtn";

function App() {
  const [inputData, setInputData] = useState({
    thoughts: "",
    author: "",
    insta_handle: "",
  });

  const [selectedBackground, setSelectedBackground] = useState(""); // State to track selected background

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <Heading />
      <div className="min-h-screen w-full flex">
        {/* Full width and height */}
        <div className="flex flex-col lg:flex-row w-full">
          {/* Content column */}
          <div className="w-full lg:w-1/2 p-4 flex flex-col justify-center">
            <Content
              inputData={inputData}
              handleInputChange={handleInputChange}
            />
          </div>
          {/* Result column (on top for mobile) */}
          <div className="w-full lg:w-1/2 p-4 flex flex-col justify-center order-first lg:order-last">
            <Result
              inputData={inputData}
              selectedBackground={selectedBackground}
            />
            <ColorComponent onSelectBackground={setSelectedBackground} />
            <div className="mt-5 w-full flex items-center justify-center">
              <ResultBtn aspectRatio="portrait" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
