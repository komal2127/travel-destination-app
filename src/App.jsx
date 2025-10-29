import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import SearchDestination from "./components/SearchDestination/SearchDestination.jsx";
import StepsTravel from "./components/StepsTravel/StepsTravel.jsx";
import PopularDestinations from "./components/PopularDestinations/PopularDestinations.jsx";
import AdventureBanner from "./components/AdventureBanner/AdventureBanner.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Destinations from "./components/Destinations/Destinations.jsx";
import Favorites from "./components/Favorites/Favorites.jsx";
import { WishlistProvider } from "./components/context/WishlistContext.jsx";
import { SearchProvider } from "./components/context/SearchContext.jsx";
import Booking from "./components/Booking/Booking.jsx";

export default function App() {
  return (
    <WishlistProvider>
      <SearchProvider>
        <Router>
          <Navbar />
          <Routes>
            {/* 🏠 Home Page */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <SearchDestination />
                  <StepsTravel />
                  <PopularDestinations />
                  <AdventureBanner />
                  <Footer />
                </>
              }
            />

            {/* 🌍 All Destinations Page */}
            <Route path="/destinations" element={<Destinations />} />

            {/* ❤️ Favorites Page */}
            <Route path="/favorites" element={<Favorites />} />

            {/* 🧳 Booking Page */}
            <Route path="/booking/:id" element={<Booking />} />

            {/* 🔍 Search Page (if you want a dedicated search page) */}
            <Route path="/search" element={<Destinations />} />
          </Routes>
        </Router>
      </SearchProvider>
    </WishlistProvider>
  );
}