// context/SearchContext.jsx
import React, { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};

export const SearchProvider = ({ children }) => {
  const [searchFilters, setSearchFilters] = useState({
    location: '',
    activity: '',
    date: '',
    travelers: 1,
    searchTerm: ''
  });

  const updateFilters = (newFilters) => {
    setSearchFilters(prev => ({ ...prev, ...newFilters }));
  };

  const clearFilters = () => {
    setSearchFilters({
      location: '',
      activity: '',
      date: '',
      travelers: 1,
      searchTerm: ''
    });
  };

  return (
    <SearchContext.Provider value={{
      searchFilters,
      updateFilters,
      clearFilters
    }}>
      {children}
    </SearchContext.Provider>
  );
};