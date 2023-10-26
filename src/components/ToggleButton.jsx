import React, { useState } from 'react';
import { useTheme } from '../styles/ThemeProvider';
import styled from 'styled-components';

const ToggleWrapper = styled.div`
  width: ${(props) => (props.vertical ? '5px' : '30px')};
  height: ${(props) => (props.vertical ? '30px' : '5px')};
  border-radius: 15px;
  border: 1px solid ${(props) => props.theme.neutralGray};
  background-color: ${(props) => props.theme.neutralGray};
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: ${(props) => (props.vertical ? 'column' : 'row')};
  align-items: center;
  justify-content: center;
`;

const ToggleSlider = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 15px;
  background-color: ${(props) => props.theme.primaryColor};
  position: absolute;
  ${(props) => (props.vertical ? 'top' : 'left')}: ${(props) =>
    props.toggled ? '15px' : '-2px'};
  transition: ${(props) => (props.vertical ? 'top' : 'left')} 0.3s ease;
`;

const ToggleButton = ({ vertical = false }) => {
  // Default prop value set to false for horizontal orientation
  const { theme, toggleTheme } = useTheme();
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleToggle = () => {
    toggleTheme();
    setIsDarkTheme((prevIsDarkTheme) => !prevIsDarkTheme);
  };

  return (
    <ToggleWrapper
      onClick={handleToggle}
      aria-pressed={isDarkTheme ? 'true' : 'false'}
      theme={theme}
      vertical={vertical}
    >
      <ToggleSlider toggled={isDarkTheme} theme={theme} vertical={vertical} />
    </ToggleWrapper>
  );
};

export default ToggleButton;
