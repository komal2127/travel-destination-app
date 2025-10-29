import React, { useState, useEffect } from "react";
import { FaHeart, FaPlaneDeparture, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";

const Favorites = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const [hovered, setHovered] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    let interval;
    if (hovered !== null && wishlist[hovered]?.images?.length > 1) {
      interval = setInterval(() => {
        setImageIndex(
          (prev) => (prev + 1) % wishlist[hovered].images.length
        );
      }, 1500);
    } else {
      setImageIndex(0);
    }
    return () => clearInterval(interval);
  }, [hovered, wishlist]);

  return (
    <div className="pt-32 pb-16 bg-[#EAF6FF] min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-gray-900 mb-3">
          Your <span className="text-[#85D200]">Favorite</span> Destinations 💚
        </h1>
        <p className="text-gray-600">
          Explore your saved dream locations and plan your next trip!
        </p>
        <div className="w-32 h-1 bg-[#85D200] mx-auto mt-4 rounded-full"></div>
      </div>

      {wishlist.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          You haven’t added any favorites yet.
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
          {wishlist.map((dest, index) => (
            <div
              key={dest.id}
              className="relative group rounded-3xl overflow-hidden shadow-lg cursor-pointer transition-transform duration-500 hover:scale-[1.03]"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <img
                src={hovered === index ? dest.images[imageIndex] : dest.images[0]}
                alt={dest.name}
                className="w-full h-[460px] object-cover transition-all duration-700 ease-in-out transform group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                <h3 className="text-2xl font-semibold mb-2">{dest.name}</h3>
                <p className="text-sm text-gray-200 mb-4">{dest.description}</p>

                <div className="flex justify-between items-center">
                  <Link
                    to="/book"
                    className="bg-[#85D200] hover:bg-[#6cb500] text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition"
                  >
                    <FaPlaneDeparture /> Book Now
                  </Link>

                  <button
                    onClick={() => removeFromWishlist(dest.id)}
                    className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition"
                  >
                    <FaTrash className="text-xl text-[#FF6B81] hover:text-red-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
