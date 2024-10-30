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
      <div className="min-h-screen w-full flex overflow-auto min-h-screen relative">
        {/* Full width and height */}

        <div className="flex flex-col lg:flex-row w-full">
          {/* Content column */}
          <div className="w-full lg:w-1/2 p-4 flex flex-col justify-center items-center">
            <div className="glass pb-5">
              <Content
                inputData={inputData}
                handleInputChange={handleInputChange}
              />
              <div className=" flex flex-col items-center justify-center">
                <ColorComponent onSelectBackground={setSelectedBackground} />
                <div className="mt-5 w-full flex items-center justify-center pb-10 lg:pb-0">
                  <ResultBtn aspectRatio={"portrait"} />
                </div>
              </div>
            </div>
          </div>
          {/* Result column (on top for mobile) */}
          <div className="w-full lg:w-1/2 px-4 flex flex-col justify-center order-first lg:order-last">
            <Result
              inputData={inputData}
              selectedBackground={selectedBackground}
            />
          </div>
        </div>
        <footer className=" absolute bottom-0 left-0 right-0 py-2">
          <p className="cedarville-cursive-regular text-center text-black lg:text-xl text-lg">
            Made with ❤️ by{" "}
            <a href="#" className="hover:underline">
              Dextor
            </a>
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
