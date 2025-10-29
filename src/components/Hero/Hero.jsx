import React from "react";
import Navbar from "../Navbar/Navbar.jsx";

const Hero = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://travlla.dexignzone.com/tailwind/demo/assets/images/main-slider/slider3/slider-bg.jpg')",
      }}
    >
      {/* Navbar on top */}
      <Navbar />

      {/* Dark overlay on image - reduced opacity for vibrancy */}
      <div className="absolute inset-0 bg-black/10 z-0"></div>

      {/* Apply filter for more vibrant image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://travlla.dexignzone.com/tailwind/demo/assets/images/main-slider/slider3/slider-bg.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover brightness-90 saturate-125"
        />
      </div>

      {/* Text container */}
      <div className="relative z-10 flex flex-col items-center">
        {/* "Explore the" slightly down */}
        <p className="text-[#85D200] text-xl sm:text-2xl md:text-3xl font-extrabold italic tracking-wide mt-30 sm:mt-40 md:mt-45 mb-1 animate-slideUp">
          Explore the
        </p>

        {/* "Mountains" slightly up */}
        <h1
          className="text-6xl sm:text-4xl md:text-[160px] -mt-4 sm:-mt-5 md:-mt-7 flex justify-center items-center font-black uppercase select-none animate-slideSide
                     bg-gradient-to-b from-white to-zinc-300 bg-clip-text text-transparent"
        >
          Mountains
        </h1>
      </div>

      {/* Overlay image centered - Hidden on small screens, shown on md and above */}
      <div className="absolute inset-0 hidden md:block z-20 mt-[280px] mx-auto rounded-lg">
        <img
          src="https://travlla.dexignzone.com/tailwind/demo/assets/images/main-slider/slider3/over-pic.png"
          alt="Overlay Mountains"
          className="w-full h-auto"
          loading="lazy"
        />
      </div>

      {/* Animations */}
      <style>{`
        @keyframes slideSide {
          0% { transform: translateX(0); }
          25% { transform: translateX(10px); }
          50% { transform: translateX(0); }
          75% { transform: translateX(-10px); }
          100% { transform: translateX(0); }
        }
        .animate-slideSide {
          animation: slideSide 10s ease-in-out infinite;
        }

        @keyframes slideUp {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-slideUp {
          animation: slideUp 2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Hero;