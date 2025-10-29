import React, { useState, useEffect } from "react";
import { FaHeart, FaPlaneDeparture, FaStar, FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";

const allDestinations = [
  {
    id: 1,
    name: "Paris",
    images: [
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
      "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=800",
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800",
    ],
    description: "The city of lights and love, filled with art and history.",
  },
  {
    id: 2,
    name: "Maldives",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
      "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?w=800",
    ],
    description: "Crystal clear waters and serene beaches await you.",
  },
  {
    id: 3,
    name: "Tokyo",
    images: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800",
      "https://images.unsplash.com/photo-1549693578-d683be217e58?w=800",
      "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=800",
    ],
    description: "A futuristic city blending tradition with technology.",
  },
  {
    id: 4,
    name: "Switzerland",
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=800",
      "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800",
    ],
    description: "Majestic Alps, pristine lakes, and charming villages.",
  },
  {
    id: 5,
    name: "Bali",
    images: [
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800",
      "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800",
      "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=800",
    ],
    description: "Tropical paradise with rich culture and stunning beaches.",
  },
  {
    id: 6,
    name: "New York",
    images: [
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800",
      "https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?w=800",
      "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800",
    ],
    description: "The city that never sleeps, full of energy and diversity.",
  },
  {
    id: 7,
    name: "Santorini",
    images: [
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800",
      "https://images.unsplash.com/photo-1533090368676-1fd25485db88?w=800",
      "https://images.unsplash.com/photo-1502741338007-0d67ce0c6e9c?w=800",
    ],
    description: "Stunning white buildings and breathtaking sunset views.",
  },
  {
    id: 8,
    name: "Dubai",
    images: [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
      "https://images.unsplash.com/photo-1520250497596-4c4eac0b5a76?w=800",
      "https://images.unsplash.com/photo-1542259009471-38a0ac901b1d?w=800",
    ],
    description: "Ultra-modern architecture and luxurious desert experiences.",
  },
  {
    id: 9,
    name: "Barcelona",
    images: [
      "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800",
      "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800",
      "https://images.unsplash.com/photo-1562883677-d5f2f10b4e0e?w=800",
    ],
    description: "Vibrant culture, Gaudí architecture, and Mediterranean charm.",
  }
];

const Destinations = () => {
  const [hovered, setHovered] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const { wishlist, toggleWishlist } = useWishlist();
  const navigate = useNavigate();

  // Show only first 6 destinations initially, then all when showAll is true
  const displayedDestinations = showAll ? allDestinations : allDestinations.slice(0, 6);

  useEffect(() => {
    let interval;
    if (hovered !== null) {
      interval = setInterval(() => {
        setImageIndex((prev) => (prev + 1) % displayedDestinations[hovered].images.length);
      }, 1500);
    } else {
      setImageIndex(0);
    }
    return () => clearInterval(interval);
  }, [hovered, displayedDestinations]);

  // Function to handle booking - navigates to booking page
  const handleBookNow = (destinationId) => {
    navigate(`/booking/${destinationId}`);
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="py-16 bg-[#EAF6FF] min-h-screen">
      {/* Section Title */}
      <div className="text-center mt-19 mb-12">
        <h2 className="text-4xl font-semibold text-gray-900 mb-3">
          <span className="text-[#85D200]">Beautiful </span>Destinations
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Discover breathtaking places around the world and make memories that last forever. 
          {!showAll ? " Showing our top destinations." : " Explore all our amazing destinations."}
        </p>
        <div className="w-32 h-1 bg-[#85D200] mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
        {displayedDestinations.map((dest, index) => {
          const isWishlisted = wishlist.some((item) => item.id === dest.id);

          return (
            <div
              key={dest.id}
              className="relative group rounded-3xl overflow-hidden shadow-lg cursor-pointer transition-all duration-500 hover:scale-[1.03] hover:shadow-xl"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <img
                src={hovered === index ? dest.images[imageIndex] : dest.images[0]}
                alt={dest.name}
                className="w-full h-[460px] object-cover transition-all duration-700 ease-in-out transform group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                <h3 className="text-2xl font-bold mb-2">{dest.name}</h3>
                <p className="text-sm text-gray-200 mb-4 leading-relaxed">{dest.description}</p>

                <div className="flex justify-between items-center">
                  <button
                    onClick={() => handleBookNow(dest.id)}
                    className="bg-[#85D200] hover:bg-[#6cb500] text-white px-5 py-3 rounded-full text-sm font-semibold flex items-center gap-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  >
                    <FaPlaneDeparture className="text-lg" /> Book Now
                  </button>

                  <button
                    onClick={() => toggleWishlist(dest)}
                    className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg backdrop-blur-sm"
                  >
                    <FaHeart
                      className={`text-xl transition-all duration-300 ${
                        isWishlisted 
                          ? "text-[#85D200] animate-pulse" 
                          : "text-gray-300 hover:text-white"
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-3xl transition-all duration-500"></div>
            </div>
          );
        })}
      </div>

      {/* Load More / Show Less Button */}
      <div className="text-center mt-16">
        <button 
          onClick={toggleShowAll}
          className="bg-gradient-to-r from-[#85D200] to-[#6cb500] text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3 mx-auto"
        >
          {showAll ? "Show Less Destinations" : "Explore All Destinations"}
          <FaChevronDown className={`transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} />
        </button>
        
        <p className="text-gray-500 mt-4 text-sm">
          {!showAll 
            ? `Showing ${displayedDestinations.length} of ${allDestinations.length} amazing destinations` 
            : `Showing all ${displayedDestinations.length} amazing destinations`
          }
        </p>
      </div>

      {/* Additional Info Section */}
      {showAll && (
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Discover Your Perfect Getaway
            </h3>
            <p className="text-gray-600 mb-6">
              From tropical beaches to bustling cities, we offer carefully curated experiences 
              in the world's most breathtaking destinations. Each location is handpicked to 
              ensure unforgettable memories and seamless travel experiences.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#85D200] rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaStar className="text-white text-xl" />
                </div>
                <p className="font-semibold text-gray-900">Premium Quality</p>
                <p className="text-gray-600">Handpicked destinations</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#85D200] rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaHeart className="text-white text-xl" />
                </div>
                <p className="font-semibold text-gray-900">Best Value</p>
                <p className="text-gray-600">Competitive pricing</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#85D200] rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaPlaneDeparture className="text-white text-xl" />
                </div>
                <p className="font-semibold text-gray-900">Easy Booking</p>
                <p className="text-gray-600">Simple and fast</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Destinations;