import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@transpiled/ui';

import Logo from '../assets/images/logo-colored.png';
import DropDownMenu from './DropdownMenu';
import Navbar from './Navbar';
import ToggleSwitch from './ToggleSwitch';

const Header = () => {
  const { toggleTheme } = useTheme();

  const menuItems = [
    { label: 'Settings', href: '#home' },
    { label: 'Account', href: '#about' },
    { separator: true },
    { label: 'Login', href: '#contact' },
  ];

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Tutorials', href: '#bytes' },
    { label: 'About Us', href: '#about' },
    { label: 'Articles', href: '#articles' },
    { label: 'Contact Us', href: '#footer' },
  ];

  return (
    <HeaderSection>
      <LeftContainer>
        <LogoImage src={Logo} alt='Company Logo' />
        <CompanyName>Transpiled</CompanyName>
      </LeftContainer>
      <RightContainer>
        <Navbar navLinks={navLinks} />
        <DropDownMenu menuItems={menuItems} />
        <ToggleSwitch rotation='270' onToggle={toggleTheme} />
      </RightContainer>
    </HeaderSection>
  );
};

// Styles
const HeaderSection = styled.header`
  background-color: transparent;
  font-size: 2rem;
  color: ${(props) => props.theme.text};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    padding: 10px 20px;
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
  height: 40px;

  @media (min-width: 769px) {
    height: 110px;
  }
`;

const CompanyName = styled.span`
  font-size: 1.8rem;
  margin-left: 20px;

  @media (min-width: 769px) {
    display: none;
  }
`;

export default Header;
