import React, { createContext, useState, useContext } from "react";

const WishlistContext = createContext();

export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (item) => {
    setWishlist((prev) => {
      const exists = prev.find((w) => w.id === item.id);
      return exists
        ? prev.filter((w) => w.id !== item.id)
        : [...prev, item];
    });
  };

  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, toggleWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
