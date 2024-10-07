import React, { createContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

// Create a context
export const GlobalContext = createContext();

// Create a provider component
export const GlobalProvider = ({ children }) => {
  // Define all your global state here
  const [menuOpen, setMenuOpen] = useState(false);
  // Add more state variables as needed

  // Define any functions that modify the state
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Combine the state and functions into a single value using useMemo
  const value = useMemo(
    () => ({
      menuOpen,
      setMenuOpen,
      toggleMenu,
    }),
    [menuOpen, setMenuOpen, toggleMenu]
  );

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

// Define propTypes for GlobalProvider
GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
