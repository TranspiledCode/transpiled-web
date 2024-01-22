import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from '../assets/images/logo-colored.png';
import DropDownMenu from './DropdownMenu';
import Navbar from './Navbar';
import ToggleButton from './ToggleButton';
import { useTheme } from '../styles/ThemeProvider';

const Header = () => {
  const { theme } = useTheme();

  const menuItems = [
    { label: 'Settings', href: '#home' },
    { label: 'Account', href: '#about' },
    { separator: true },
    { label: 'Login', href: '#contact' },
  ];

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Contact Us', href: '#footer' },
  ];

  return (
    <HeaderSection theme={theme}>
      <LeftContainer>
        <LogoImage src={Logo} alt='Company Logo' />
        <CompanyName>Transpiled</CompanyName>
      </LeftContainer>
      <RightContainer>
        <Navbar navLinks={navLinks} />
        <DropDownMenu menuItems={menuItems} />
        <ToggleButton vertical />
      </RightContainer>
    </HeaderSection>
  );
};

// Styles
const HeaderSection = styled.header`
  background-color: transparent;
  padding: 10px 20px;
  font-size: 16px;
  color: ${(props) => props.theme.text};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    jutify-content: flex-end;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  justify-content: flex-start;

  @media (min-width: 769px) {
    margin-bottom: 0;
  }
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
`;

const LogoImage = styled.img`
  height: 30px;
  padding-right: 20px;

  @media (max-width: 769px) {
    padding-right: 10px;
    height: 40px;
  }
`;

const CompanyName = styled.span`
  font-size: 20px;
  margin: 0 20px;

  @media (max-width: 769px) {
    display: none;
  }
`;

export default Header;
