import React from "react";

function TitleBanner({ title, backgroundImage }) {
  return (
    <div
      className="w-full h-[64vh] flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Dark overlay to dim the background */}
      <div className="absolute inset-0 bg-black/35"></div>

      <h1 className="relative z-10 text-white text-center text-6xl sm:text-[5rem] uppercase tracking-tight leading-snug font-PlayfairDisplay">
        {title}
      </h1>
    </div>
  );
}

export default TitleBanner;
