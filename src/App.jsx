import React, { useState } from "react";
import Content from "./Content";
import InstagramPost from "./InstagramPost";
import ColorComponent from "./ColorComponent";
import Heading from "./Heading";
import ResultBtn from "./ResultBtn";
import packageJson from "../package.json";
import { Github } from "lucide-react";

function App() {
  const [inputData, setInputData] = useState({
    thoughts: "",
    author: "",
    insta_handle: "",
  });
  const [selectedBackground, setSelectedBackground] = useState("bg-white text-black");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col">
      {/* Header */}
      <Heading />

      {/* Main Content */}
      <main className="flex-grow w-full px-4 py-12 mx-auto mt-16 max-w-7xl">
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:gap-12">
          {/* Preview Section - Appears first on mobile */}
          <div className="order-1 lg:order-2 lg:sticky lg:top-8">
            <div className="sticky space-y-4 top-8">
              <div className="transform transition-all duration-200 hover:scale-[1.02]">
                <InstagramPost
                  inputData={inputData}
                  selectedBackground={selectedBackground}
                />
              </div>
            </div>
          </div>

          {/* Input Section - Appears second on mobile */}
          <div className="order-2 mt-8 space-y-6 lg:order-1 lg:mt-10">
            {/* Input Form */}
            <Content
              inputData={inputData}
              handleInputChange={handleInputChange}
            />

            {/* Color Selection */}
            <ColorComponent 
              onSelectBackground={setSelectedBackground}
              selectedBackground={selectedBackground}
            />

            {/* Download Button */}
            <ResultBtn aspectRatio="portrait" />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto bg-white border-t border-gray-200">
        <div className="px-6 py-4 mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-gray-600 cedarville-cursive-regular">
              Made with <span className="text-red-500">❤️</span> by{" "}
              <a 
                href="https://labs.dextor.io/" 
                className="text-gray-900 transition-colors hover:text-gray-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dextor
              </a>
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/dextor-io/engrave.dextor.io"
                className="text-gray-600 transition-colors hover:text-gray-900"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Repository"
              >
                <Github className="w-6 h-6" />
              </a>
              <span className="text-sm text-gray-600">
                v{packageJson.version}
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* Background Decoration */}
      <div className="fixed inset-x-0 top-0 -z-10 h-96 bg-gradient-to-b from-gray-50 to-transparent" />
    </div>
  );
}

export default App;