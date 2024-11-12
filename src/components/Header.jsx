import React from 'react';
import styled from '@emotion/styled';

const HeaderWrapper = styled.div`
    position: fixed;
    display: flex;
    justify-content: space-between;
    color: white;
    font-family: 'poppins', sans-serif;
    border: 1px solid #214eea;
    background: #214eea;
    padding: 1rem 2rem;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 2;
    width: 100%;
    
  }
`;

const StyledLogo = styled.div`
  font-weight: Bold;
  font-size: 30px;
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: auto 5rem;
`;

const StyledNav = styled.div`
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
  return (
    <HeaderWrapper>
      <StyledLogo>Transpiled</StyledLogo>
      <NavWrapper>
        <StyledNav>Services</StyledNav>
        <StyledNav>Testimonials</StyledNav>
        <StyledNav>Contact</StyledNav>
        <StyledNav>About</StyledNav>
      </NavWrapper>
    </HeaderWrapper>
  );
};

export default Header;
