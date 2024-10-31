import React, { useState } from "react";
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal } from "lucide-react";

const InstagramPost = ({ inputData = {}, selectedBackground }) => {
  const [tiltStyle, setTiltStyle] = useState({});
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  const {
    thoughts = "",
    author = "",
    insta_handle = ""
  } = inputData;

  // Function to determine if background is dark
  const isBackgroundDark = (bgClass) => {
    // Check for gradient backgrounds
    if (bgClass.includes('from-indigo-500') || 
        bgClass.includes('from-pink-500') ||
        (bgClass.includes('from-green-400') && bgClass.includes('to-blue-500'))) {
      return true;
    }
    // Check for sunset gradient (yellow to red) - consider it light
    if (bgClass.includes('from-yellow-400') && bgClass.includes('to-red-500')) {
      return false;
    }
    // Default white background
    return false;
  };

  const handleMouseMove = (e) => {
    const { offsetWidth: width, offsetHeight: height } = e.currentTarget;
    const { offsetX: x, offsetY: y } = e.nativeEvent;

    const rotateX = (y / height - 0.5) * 10;
    const rotateY = (x / width - 0.5) * -10;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0) rotateY(0)',
    });
  };

  const bgColorClass = selectedBackground || "bg-white";
  const isDark = isBackgroundDark(bgColorClass);
  const textColorClass = isDark ? "text-white" : "text-black";
  const watermarkColorClass = isDark ? "text-gray-300" : "text-gray-500";

  return (
    <div className="max-w-xl mx-auto mt-10 overflow-hidden bg-white border border-gray-200 shadow-sm rounded-xl">
      {/* Instagram Post Header */}
      <div className="flex items-center justify-between p-3 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 to-purple-600 p-[2px]">
            <div className="flex items-center justify-center w-full h-full bg-white rounded-full">
              <span className="text-xs font-medium">
                {insta_handle ? insta_handle.charAt(0).toUpperCase() : "-"}
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">
              {insta_handle || "bayt.e.alfaz"}
            </span>
            <span className="text-xs text-gray-500">Original</span>
          </div>
        </div>
        <button className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Main Content / Image Area */}
      <div
        id="result"
        className="relative bg-white aspect-square"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={`w-full h-full ${bgColorClass} flex flex-col justify-center items-center p-8`}
          style={{ 
            ...tiltStyle,
            transition: "transform 0.3s ease-out",
          }}
        >
          {/* Content Container */}
          <div className="flex flex-col items-center justify-center w-full h-full">
            <div className="max-w-md space-y-2 text-center">
              {/* Main Quote */}
              <p className={`text-2xl font-normal leading-relaxed thoughts ${textColorClass}`}
                 style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                {thoughts || "Write your own destiny."}
              </p>
              
              {/* Author Attribution */}
              <p className={`w-full mt-4 text-base text-right ${textColorClass}`}
                 style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                - {author || "Anonymous"}
              </p>
            </div>
          </div>

          {/* Watermarks */}
          <div className={`absolute flex justify-between text-sm ${watermarkColorClass} bottom-4 left-4 right-4`}
               style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
            <span>@{insta_handle || "bayt.e.alfaz"}</span>
            <span>engrave.dextor.io</span>
          </div>
        </div>
      </div>

      {/* Instagram Post Actions */}
      <div className="p-3">
        <div className="flex justify-between mb-2">
          <div className="flex gap-4">
            <button 
              onClick={() => setLiked(!liked)}
              className="transition-opacity hover:opacity-70"
            >
              <Heart 
                className={`w-6 h-6 ${liked ? 'fill-red-500 text-red-500' : 'text-black'}`} 
              />
            </button>
            <button className="transition-opacity hover:opacity-70">
              <MessageCircle className="w-6 h-6 text-black" />
            </button>
            <button className="transition-opacity hover:opacity-70">
              <Share2 className="w-6 h-6 text-black" />
            </button>
          </div>
          <button 
            onClick={() => setSaved(!saved)}
            className="transition-opacity hover:opacity-70"
          >
            <Bookmark 
              className={`w-6 h-6 ${saved ? 'fill-black text-black' : 'text-black'}`} 
            />
          </button>
        </div>

        {/* Likes Count */}
        <div className="space-y-1.5">
          <p className="text-sm font-semibold">
            {liked ? "143 likes" : "142 likes"}
          </p>

          {/* Caption */}
          <div className="text-sm">
            <span className="mr-2 font-semibold">{insta_handle || "friendly.poet"}</span>
            <span>✨ Sharing thoughts that inspire ✨</span>
          </div>

          {/* View Comments Link */}
          <button className="text-sm text-gray-500">
            View all 20 comments
          </button>

          {/* Timestamp */}
          <p className="text-[10px] text-gray-500 uppercase tracking-wide">
            1 HOUR AGO
          </p>
        </div>

        {/* Add Comment Section */}
        <div className="flex items-center gap-2 pt-3 mt-3 border-t border-gray-200">
          <input
            type="text"
            placeholder="Add a comment..."
            className="flex-grow text-sm placeholder-gray-400 bg-transparent focus:outline-none"
          />
          <button className="text-sm font-semibold text-blue-500 opacity-50">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstagramPost;