import React from "react";
import * as htmlToImage from "html-to-image";

export default function ResultBtn({ aspectRatio, className }) {
  const handleDownload = () => {
    const resultElement = document.getElementById("result");

    // Define the dimensions based on the selected aspect ratio
    let width, height;
    if (aspectRatio === "portrait") {
      width = 1080;
      height = 1350;
    } else if (aspectRatio === "landscape") {
      width = 1080;
      height = 566;
    } else {
      // default to square
      width = 1080;
      height = 1080;
    }

    // Create a temporary canvas
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;

    // Use html-to-image to create a PNG image
    htmlToImage
      .toPng(resultElement, { canvas: canvas })
      .then(function (dataUrl) {
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "result.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch(function (error) {
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
        className={`mr-2 flex`}
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="7 10 12 15 17 10"></polyline>
        <line x1="12" y1="15" x2="12" y2="3"></line>
      </svg>
      Download
    </button>
  );
}
