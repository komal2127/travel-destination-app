import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// ✅ Image URLs for destinations
const destinations = [
  {
    id: 1,
    name: "Paris",
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
  },
  {
    id: 2,
    name: "Maldives",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
  },
  {
    id: 3,
    name: "Hong Kong",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800",
  },
  {
    id: 4,
    name: "Thailand",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
,
  },
  {
    id: 5,
    name: "Bangkok",
    img: "https://images.unsplash.com/photo-1549693578-d683be217e58?w=800",
  },
  {
    id: 6,
    name: "Tokyo",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"

,
  },
  {
    id: 7,
    name: "Spain",
    img: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 8,
    name: "California",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
  },
];

const PopularDestinations = () => {
  return (
    <div className="relative overflow-hidden py-20 md:py-28 bg-white">
      {/* ✅ Simple fade animation for smooth effect */}
      <style>{`
        @keyframes fade-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fade-up 1s ease-in-out both;
        }
      `}</style>

      {/* TITLE */}
      <div className="text-center max-w-[600px] mx-auto mb-12 animate-fade-up">
        <h2 className="xl:text-[46px] md:text-[40px] text-3xl mb-2.5 font-semibold">
          <span className="text-[#FF6B81]">Popular </span>Destination
        </h2>
        <p className="text-base text-gray-700">
          Destinations worth exploring! Here are a few popular spots.
        </p>
        <div className="w-40 h-[3px] bg-[#FF6B81] mx-auto mt-4 rounded-full"></div>
      </div>

      {/* SWIPER SLIDER */}
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1.2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="!relative !z-10"
      >
        {destinations.map((dest) => (
          <SwiperSlide key={dest.id}>
            <div className="relative group overflow-hidden rounded-3xl shadow-lg">
              <img
                src={dest.img}
                alt={dest.name}
                className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <a
                href="#"
                className="block text-[#0F1F44] bg-white text-center p-4 rounded-3xl absolute left-0 right-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-all duration-500 font-semibold"
              >
                {dest.name}
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularDestinations;
