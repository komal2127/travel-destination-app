import React from "react";
import { useNavigate } from "react-router-dom";

const AdventureBanner = () => {
  const navigate = useNavigate();
  
  // ✅ Unsplash background and inside-circle image
  const backgroundImage =
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80"; // Ocean adventure
  const circleImage =
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=300&q=80"; // Traveler photo

  const handleBookingClick = () => {
    navigate("/destinations");
  };

  return (
    <div
      className="relative h-screen bg-cover bg-center text-center flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* --- Rotating Text Circle --- */}
      <div className="relative mb-6 animate-spin-slow">
        <div className="relative w-48 h-48 rounded-full flex items-center justify-center bg-[#0A747C] shadow-xl">
          <img
            src={circleImage}
            alt="Adventure"
            className="w-24 h-24 rounded-full object-cover border-4 border-white"
          />
        </div>

        {/* Circular text animation */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            viewBox="0 0 100 100"
            className="w-48 h-48 text-white font-semibold tracking-[6px]"
          >
            <defs>
              <path
                id="circlePath"
                d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
              />
            </defs>
            <text fontSize="6" fill="white" letterSpacing="2">
              <textPath href="#circlePath">
                • WANT TO SEE OUR TOP DESTINATIONS •
              </textPath>
            </text>
          </svg>
        </div>
      </div>

      {/* --- Text Content --- */}
      <h2 className="font-display text-white text-6xl md:text-8xl font-bold drop-shadow-lg">
        Adventure
      </h2>
      <p className="uppercase tracking-widest text-white text-2xl md:text-3xl mt-4">
        It's Time to Travel
      </p>

      {/* --- Button --- */}
      <button
        onClick={handleBookingClick}
        className="mt-8 inline-block bg-[#FFD700] text-[#0F1F44] px-8 py-3 rounded-full font-semibold text-lg hover:bg-white transition-all shadow-lg hover:scale-105 transform duration-300"
      >
        Booking Now
      </button>

      {/* --- Custom Animation --- */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default AdventureBanner;