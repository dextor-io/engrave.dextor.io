import React, { useState } from "react";
import * as htmlToImage from "html-to-image";
import { Download, Loader2 } from "lucide-react";

export default function ResultBtn({ aspectRatio }) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    const resultElement = document.getElementById("result");

    try {
      // Get original dimensions
      const width = resultElement.offsetWidth;
      const height = resultElement.offsetHeight;

      const dataUrl = await htmlToImage.toPng(resultElement, {
        width,
        height,
        canvasWidth: width,
        canvasHeight: height,
        pixelRatio: 3, // Higher quality for better text rendering
        style: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      });

      // Create download link
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = `thought-${new Date().getTime()}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

    } catch (error) {
      console.error("Error downloading image:", error);
      alert("Failed to download image. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="w-full p-6 bg-white shadow-sm rounded-3xl">
      <button
        disabled={isDownloading}
        className={`
          w-full flex items-center justify-center
          px-6 py-4 text-white rounded-2xl
          transition-all duration-300 ease-in-out
          ${isDownloading 
            ? 'bg-gray-500 cursor-not-allowed' 
            : 'bg-black hover:bg-gray-800'
          }
        `}
        onClick={handleDownload}
        aria-label="Download image"
      >
        {isDownloading ? (
          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
        ) : (
          <Download className="w-5 h-5 mr-2" />
        )}
        <span className="font-medium">
          {isDownloading ? 'Processing...' : 'Download'}
        </span>
      </button>
    </div>
  );
}