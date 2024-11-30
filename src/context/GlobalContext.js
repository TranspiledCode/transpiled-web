import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

// Define the shape of your global context
const GlobalContext = createContext({
  menuOpen: false,
  scrolled: false,
  isExpanded: false,
  toggleMenu: () => {},
  closeMenu: () => {},
  handleScroll: () => {},
  setIsExpanded: () => {},
});

export const GlobalProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Function to explicitly close the menu
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Update the scrolled state
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  return (
    <GlobalContext.Provider
      value={{
        menuOpen,
        toggleMenu,
        closeMenu,
        scrolled,
        handleScroll,
        isExpanded,
        setIsExpanded,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalContext;
