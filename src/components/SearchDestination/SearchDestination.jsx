import React, { useState } from "react";
import { FaMapMarkerAlt, FaHiking, FaCalendarAlt, FaUser, FaSearch } from "react-icons/fa";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useSearch } from "../context/SearchContext.jsx";

const SearchDestination = () => {
  const [travelers, setTravelers] = useState(1);
  const [location, setLocation] = useState("");
  const [activity, setActivity] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();
  const { updateFilters } = useSearch();

  const increment = () => setTravelers(prev => prev + 1);
  const decrement = () => setTravelers(prev => (prev > 1 ? prev - 1 : 1));

  const handleSearch = (e) => {
    e.preventDefault();
    updateFilters({
      location,
      activity,
      date,
      travelers,
      searchTerm: location // Use location as search term
    });
    navigate("/destinations");
  };

  const locations = [
    "All Locations",
    "Paris", 
    "Maldives", 
    "Tokyo", 
    "Switzerland", 
    "Bali", 
    "New York",
    "Santorini",
    "Dubai",
    "Barcelona"
  ];

  const activities = [
    "All Activities",
    "Beach", 
    "Mountain", 
    "City", 
    "Adventure", 
    "Relax", 
    "Culture",
    "Historical",
    "Nature",
    "Luxury"
  ];

  return (
    <div className="bg-[#CFF0F5] py-8 md:py-16 px-4 md:px-5">
      <div className="relative md:absolute top-full left-1/2 -translate-x-1/2 md:-translate-y-1/2 max-w-[1000px] w-full p-2 bg-[#A8E0E5] rounded-3xl md:rounded-full z-20 shadow-lg">
        <div className="bg-white rounded-3xl md:rounded-full p-4 md:p-3">
          <form onSubmit={handleSearch}>
            <div className="grid grid-cols-1 md:flex md:flex-wrap items-center gap-4 md:gap-3">

              {/* Location */}
              <div className="flex-1 min-w-full md:min-w-[150px]">
                <label className="flex items-center text-[#1E3A8A] font-lg mb-1 md:pl-3">
                  <FaMapMarkerAlt className="mr-2" /> Location
                </label>
                <select 
                  className="w-full font-bold rounded-xl px-4 py-3 md:py-2 text-[#1E3A8A] outline-none border border-gray-200 md:border-none"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                >
                  {locations.map(loc => (
                    <option key={loc} value={loc === "All Locations" ? "" : loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>

              {/* Activity Type */}
              <div className="flex-1 min-w-full md:min-w-[150px]">
                <label className="flex items-center text-[#1E3A8A] font-lg mb-1">
                  <FaHiking className="mr-2" /> Activity
                </label>
                <select
                  className="w-full border border-gray-200 md:border-none rounded-xl font-bold px-4 py-3 md:py-2 text-[#1E3A8A] outline-none focus:ring-0"
                  value={activity}
                  onChange={(e) => setActivity(e.target.value)}
                >
                  {activities.map(act => (
                    <option key={act} value={act === "All Activities" ? "" : act}>
                      {act}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date */}
              <div className="flex-1 min-w-full md:min-w-[150px]">
                <label className="flex items-center text-[#1E3A8A] font-lg mb-1">
                  <FaCalendarAlt className="mr-2" /> Date
                </label>
                <input
                  type="date"
                  className="w-full border border-gray-200 md:border-none rounded-xl px-4 py-3 md:py-2 text-[#1E3A8A] font-medium outline-none"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>

              {/* Travelers */}
              <div className="flex-1 min-w-full md:min-w-[150px]">
                <label className="flex items-center text-[#1E3A8A] font-lg mb-1">
                  <FaUser className="mr-2" /> Travelers
                </label>
                <div className="flex items-center border border-gray-200 md:border-none rounded-xl px-4 py-3 md:py-2 w-full">
                  <button
                    type="button"
                    onClick={decrement}
                    className="text-[#1E3A8A] mr-2 font-bold p-1"
                  >
                    <AiOutlineMinus />
                  </button>
                  <input
                    type="number"
                    value={travelers}
                    readOnly
                    className="outline-none text-center text-[#1E3A8A] font-bold w-full bg-transparent"
                  />
                  <button
                    type="button"
                    onClick={increment}
                    className="text-[#1E3A8A] ml-2 p-1"
                  >
                    <AiOutlinePlus />
                  </button>
                </div>
              </div>

              {/* Search Button */}
              <div className="min-w-full md:min-w-20 flex items-center justify-center md:justify-start pt-2 md:pt-0">
                <button 
                  type="submit"
                  className="flex items-center justify-center cursor-pointer bg-[#1E3A8A] text-white rounded-full w-16 h-16 hover:bg-[#2f72a8] transition transform hover:scale-105"
                >
                  <FaSearch className="text-2xl" />
                </button>
              </div>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchDestination;