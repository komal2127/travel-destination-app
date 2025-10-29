import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaBars, FaHeart, FaTimes } from "react-icons/fa";
import { useWishlist } from "../context/WishlistContext.jsx";
import { useSearch } from "../context/SearchContext.jsx";

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const { wishlist } = useWishlist();
  const { updateFilters } = useSearch();

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    updateFilters({ searchTerm });
    setSearchOpen(false);
    setSearchTerm("");
    navigate("/destinations");
  };

  const handleQuickSearch = (term) => {
    updateFilters({ searchTerm: term });
    setSearchOpen(false);
    setSearchTerm("");
    navigate("/destinations");
  };

  const popularSearches = ["Paris", "Maldives", "Tokyo", "Bali", "Beach", "Mountain", "Adventure"];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* 🔍 Search Overlay */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-center items-start bg-black/40 backdrop-blur-sm p-4"
          onClick={() => setSearchOpen(false)}
        >
          <div
            className="relative w-full max-w-3xl h-[70vh] bg-white rounded-3xl shadow-xl flex flex-col justify-center items-center p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-3xl font-semibold mb-6 text-center text-[#85D200]">
              Search Destinations
            </h2>
            
            {/* Search Form */}
            <form onSubmit={handleSearch} className="w-full mb-8">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search destinations, activities, locations..."
                  className="w-full text-lg outline-none px-6 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#85D200] mb-4 transition"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  autoFocus
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 bg-[#85D200] text-white p-2 rounded-lg hover:bg-[#6cb500] transition"
                >
                  <FaSearch className="text-lg" />
                </button>
              </div>
            </form>

            {/* Popular Searches */}
            <div className="w-full">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Popular Searches</h3>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((term) => (
                  <button
                    key={term}
                    onClick={() => handleQuickSearch(term)}
                    className="bg-gray-100 hover:bg-[#85D200] hover:text-white text-gray-700 px-4 py-2 rounded-full transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => setSearchOpen(false)}
              className="mt-6 w-full md:w-auto bg-gray-200 text-gray-800 px-6 py-3 rounded-xl hover:bg-gray-300 transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* 🧭 Navbar Section */}
      <nav className="bg-white border-b border-gray-200 mt-6 max-w-[1300px] py-3 w-full text-[#1E3A8A] px-4 flex items-center justify-between rounded-xl mx-auto">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            src="https://travlla.dexignzone.com/tailwind/demo/assets/images/logo-light.png"
            alt="Travel Explorer Logo"
            className="h-12 w-32 md:h-15 md:w-40"
          />
        </Link>

        {/* Desktop Nav Links - Hidden on mobile */}
        <ul className="hidden lg:flex gap-6 text-lg font-medium">
          <li><Link to="/" className="hover:text-[#85D200] transition-colors">Home</Link></li>
          <li><Link to="/about" className="hover:text-[#85D200] transition-colors">About</Link></li>
          <li><Link to="/pages" className="hover:text-[#85D200] transition-colors">Pages</Link></li>
          <li><Link to="/destinations" className="hover:text-[#85D200] transition-colors">Destinations</Link></li>
          <li><Link to="/tours" className="hover:text-[#85D200] transition-colors">Tours</Link></li>
          <li><Link to="/blogs" className="hover:text-[#85D200] transition-colors">Blogs</Link></li>
          <li><Link to="/contact" className="hover:text-[#85D200] transition-colors">Contact</Link></li>
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-4 md:gap-6 lg:gap-10">
          {/* Search Icon */}
          <button 
            onClick={() => setSearchOpen(true)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <FaSearch className="text-xl md:text-2xl hover:text-[#85D200]" />
          </button>

          {/* ❤️ Wishlist Icon */}
          <button 
            onClick={() => navigate("/favorites")} 
            className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <FaHeart className="text-xl md:text-2xl hover:text-[#85D200]" />
            {wishlist.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#85D200] text-white text-xs px-1.5 rounded-full min-w-[18px] h-[18px] flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            {mobileMenuOpen ? (
              <FaTimes className="text-xl md:text-2xl hover:text-[#85D200]" />
            ) : (
              <FaBars className="text-xl md:text-2xl hover:text-[#85D200]" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Slides down from top */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 shadow-lg">
          <div className="max-w-[1300px] mx-auto px-4 py-4">
            <ul className="flex flex-col gap-4 text-lg font-medium">
              <li>
                <Link 
                  to="/" 
                  className="block py-2 hover:text-[#85D200] transition-colors border-b border-gray-100"
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="block py-2 hover:text-[#85D200] transition-colors border-b border-gray-100"
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/pages" 
                  className="block py-2 hover:text-[#85D200] transition-colors border-b border-gray-100"
                  onClick={closeMobileMenu}
                >
                  Pages
                </Link>
              </li>
              <li>
                <Link 
                  to="/destinations" 
                  className="block py-2 hover:text-[#85D200] transition-colors border-b border-gray-100"
                  onClick={closeMobileMenu}
                >
                  Destinations
                </Link>
              </li>
              <li>
                <Link 
                  to="/tours" 
                  className="block py-2 hover:text-[#85D200] transition-colors border-b border-gray-100"
                  onClick={closeMobileMenu}
                >
                  Tours
                </Link>
              </li>
              <li>
                <Link 
                  to="/blogs" 
                  className="block py-2 hover:text-[#85D200] transition-colors border-b border-gray-100"
                  onClick={closeMobileMenu}
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="block py-2 hover:text-[#85D200] transition-colors"
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;