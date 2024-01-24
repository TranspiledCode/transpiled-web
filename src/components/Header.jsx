import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import NavMenu from './NavMenu';
import Icon from './Icon';

import Logo from '../assets/images/logo-colored.png';
import Navbar from './Navbar';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 1, label: 'Home', link: '#home' },
    { id: 2, label: 'Services', link: '#services' },
    { id: 3, label: 'Tutorials', link: '#bytes' },
    { id: 4, label: 'About', link: '#about' },
    { id: 6, label: 'Contact', link: '#footer' },
  ];

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };

  return (
    <HeaderSection>
      <LeftContainer>
        <LogoImage src={Logo} alt='Company Logo' />
        <CompanyName>Transpiled</CompanyName>
      </LeftContainer>
      <RightContainer>
        <Navbar navLinks={navLinks} />
        <StyledMenu isScrolled={isScrolled}>
          <Icon onClick={handleOpenMenu} iconName='bars' iconType='solid' />
        </StyledMenu>
        <NavMenu
          isMenuOpen={isMenuOpen}
          closeMenu={handleCloseMenu}
          sections={navLinks}
        />
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
  justify-content: flex-start;
  padding: 20px 10px;

  @media (min-width: 769px) {
    padding: 30px 40px;
    /* margin-left: 30px; */
  }
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
  padding: 0px 10px;
  gap: 10px;
`;

const LogoImage = styled.img`
  height: 50px;

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
  font-size: 3.5rem;
  position: fixed;
  background-color: ${(props) =>
    props.isScrolled && props.theme.secondaryColor};
  padding: 8px 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  @media (min-width: 768px) {
    display: none;
  }
`;

export default Header;
