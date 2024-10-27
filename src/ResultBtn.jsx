import React from "react";
import * as htmlToImage from "html-to-image";

export default function ResultBtn({ aspectRatio }) {
  const handleDownload = () => {
    const resultElement = document.getElementById("result");

    // Define the dimensions based on the selected aspect ratio
    let width, height;
    if (aspectRatio === "portrait") {
      //default 1:1 ratio
      width = 1080;
      height = 1080;
    } else if (aspectRatio === "landscape") {
      width = 1080;
      height = 608;
    } else {
      width = 1080;
      height = 1350;
    }

    htmlToImage
      .toPng(resultElement, {
        width,
        height,
        canvasWidth: width,
        canvasHeight: height,
        pixelRatio: 1,
        style: {
          width: `${width}px`,
          height: `${height}px`,
          transform: "scale(1)",
          transformOrigin: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "result.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => {
        console.error("Error downloading image:", error);
      });
  };

  return (
    <button
      className="btn btn-primary w-fit text-white flex items-center justify-end"
      onClick={handleDownload}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mr-2 flex"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="7 10 12 15 17 10"></polyline>
        <line x1="12" y1="15" x2="12" y2="3"></line>
      </svg>
      Download
    </button>
  );
}
