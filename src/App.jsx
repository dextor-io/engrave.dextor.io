import React, { useState } from "react";
import Content from "./Content";
import Result from "./Result";
import ColorComponent from "./ColorComponent";
import Heading from "./Heading";
import ResultBtn from "./ResultBtn";
import packageJson from "../package.json";

function App() {
  const [inputData, setInputData] = useState({
    thoughts: "",
    author: "",
    insta_handle: "",
  });

  const [selectedBackground, setSelectedBackground] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Heading />

      <main className="flex-grow flex flex-col-reverse lg:flex-row w-full px-4 py-6 gap-6 lg:mt-36">
        {/* Content column */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center">
          <div className="glass rounded-lg shadow-lg p-6">
            <Content
              inputData={inputData}
              handleInputChange={handleInputChange}
            />
            <div className="flex flex-col items-center justify-center">
              <ColorComponent onSelectBackground={setSelectedBackground} />
              <div className="mt-6 w-full flex items-center justify-center">
                <ResultBtn aspectRatio={"portrait"} />
              </div>
            </div>
          </div>
        </div>

        {/* Result column */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <Result
            inputData={inputData}
            selectedBackground={selectedBackground}
          />
        </div>
      </main>

      <footer className="w-full py-4 px-6 mt-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="cedarville-cursive-regular text-center text-black text-lg sm:text-xl">
            Made with ❤️ by{" "}
            <a href="https://labs.dextor.io/" className="hover:underline">
              Dextor
            </a>
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/dextor-io/engrave.dextor.io"
              className="hover:opacity-80 transition-opacity"
              aria-label="GitHub Repository"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="text-black"
                className="icon icon-tabler icons-tabler-filled icon-tabler-brand-github"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z" />
              </svg>
            </a>
            <span className=" text-black text-lg font-semibold">
              v{packageJson.version}
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
