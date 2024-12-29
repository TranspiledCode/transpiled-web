import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

// Define the shape of your global context
const GlobalContext = createContext({
  menuOpen: false,
  profileMenuOpen: false,
  scrolled: false,
  isExpanded: false,
  toggleMenu: () => {},
  closeMenu: () => {},
  toggleProfileMenu: () => {},
  closeProfileMenu: () => {},
  handleScroll: () => {},
  setIsExpanded: () => {},
});

export const GlobalProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Function to toggle the profile menu state
  const toggleProfileMenu = () => {
    setProfileMenuOpen((prev) => !prev);
  };

  // Function to explicitly close the menu
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Function to explicitly close the profile menu
  const closeProfileMenu = () => {
    setProfileMenuOpen(false);
  };

  // Update the scrolled state
  const handleScroll = () => {
    setScrolled(window.scrollY > 0);
  };

  return (
    <GlobalContext.Provider
      value={{
        menuOpen,
        toggleMenu,
        closeMenu,
        profileMenuOpen,
        toggleProfileMenu,
        closeProfileMenu,
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
