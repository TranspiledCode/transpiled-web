// GlobalContext.js
import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

// Define the shape of your global context
const GlobalContext = createContext({
  menuOpen: false,
  toggleMenu: () => {},
  closeMenu: () => {},
});

export const GlobalProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Function to explicitly close the menu
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <GlobalContext.Provider value={{ menuOpen, toggleMenu, closeMenu }}>
      {children}
    </GlobalContext.Provider>
  );
};

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalContext;
