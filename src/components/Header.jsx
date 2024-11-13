import React from 'react';
import styled from '@emotion/styled';
import NavBar from './NavBar';

const HeaderWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.white};
  font-family: 'poppins', sans-serif;
  border: 1px solid #214eea;
  background: #214eea;
  padding: 1rem 2rem;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100%;
`;

const StyledLogo = styled.div`
  font-weight: Bold;
  font-size: 3rem;
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: auto 5rem;
`;

<NavBar links={links} />;
const NavBar = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-size: 12px;
    margin: 0;
    padding: 2rem;
  }
`;

const StyledMenu = styled.div``;

const Header = () => {
  const links = [
    { url: '/', label: 'Home' },
    { url: '/services', label: 'Services' },
  ];
  return (
    <HeaderWrapper>
      <StyledLogo>Transpiled</StyledLogo>
      <NavWrapper>
        <NavBar>Services</NavBar>
        <NavBar>Testimonials</NavBar>
        <NavBar>Contact</NavBar>
        <NavBar>About</NavBar>
      </NavWrapper>
    </HeaderWrapper>
  );
};

export default Header;
