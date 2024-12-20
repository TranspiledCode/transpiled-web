import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

// Define the shape of your global context
const GlobalContext = createContext({
  menuOpen: false,
  scrolled: false,
  editable: true,
  toggleMenu: () => {},
  closeMenu: () => {},
  handleScroll: () => {},
});

export const GlobalProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [editable, setEditable] = useState(false);

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

  // Update the editable state
  const handleEditable = () => {
    setEditable(!editable);
  };

  return (
    <GlobalContext.Provider
      value={{
        menuOpen,
        toggleMenu,
        closeMenu,
        scrolled,
        handleScroll,
        editable,
        handleEditable,
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
