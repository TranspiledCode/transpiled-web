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
        <StyledMenu>
          <DropDownMenu menuItems={menuItems} />
        </StyledMenu>
        <ToggleSwitch rotation='270' onToggle={toggleTheme} />
      </RightContainer>
    </HeaderSection>
  );
};

// Styles
const HeaderSection = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: transparent;
  font-size: 2rem;
  color: ${(props) => props.theme.white};
  padding: 10px;

  @media (min-width: 768px) {
    padding: 20px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
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
    height: 100px;
  }
`;

const CompanyName = styled.span`
  font-size: 1.8rem;
  margin-left: 20px;

  @media (min-width: 1024px) {
    font-size: 4rem;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

const StyledMenu = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;

export default Header;
