import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@transpiled/ui';

import Logo from '../assets/images/logo-colored.png';
import DropDownMenu from './DropdownMenu';
import Navbar from './Navbar';
import ToggleSwitch from './ToggleSwitch';

const Header = () => {
  const { toggleTheme } = useTheme();

  const menuItems = [
    { id: 1, label: 'Settings', href: '#home' },
    { id: 2, label: 'Account', href: '#about' },
    { id: 3, separator: true },
    { id: 4, label: 'Login', href: '#contact' },
  ];

  const navLinks = [
    { id: 1, label: 'Home', link: '#home' },
    { id: 2, label: 'Services', link: '#services' },
    { id: 3, label: 'Tutorials', link: '#bytes' },
    { id: 4, label: 'About Us', link: '#about' },
    { id: 5, label: 'Articles', link: '#articles' },
    { id: 6, label: 'Contact Us', link: '#footer' },
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
