import React, { createContext, useContext, useState } from 'react';

// Create a context for the theme
const ThemeContext = createContext();

// Define your default theme
const defaultTheme = {
  primaryColor: '#013F6A',
  secondaryColor: '#2EBFD4',
  accentColor: '#FF910F',
  neutralGray: '#ACACAC',
  tertiaryColor: '#93CCEA',
  black: '#090909',
  white: '#ffffff',
  text: '#090909',
  background: '#ffffff',
  shadowColor: 'rgba(0, 0, 0, 0.1)',
};

const darkTheme = {
  primaryColor: '#2EBFD4',
  secondaryColor: '#013F6A',
  accentColor: '#FF910F',
  neutralGray: '#757575',
  tertiaryColor: '#1A1A1A',
  black: '#ffffff',
  white: '#090909',
  text: '#ffffff',
  background: '#090909',
  shadowColor: 'rgba(255, 255, 255, 0.1)',
};

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Function to toggle the theme
  const toggleTheme = () => {
    setIsDarkTheme((prevIsDarkTheme) => !prevIsDarkTheme);
    setTheme((prevIsDarkTheme) =>
      prevIsDarkTheme === defaultTheme ? darkTheme : defaultTheme
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
