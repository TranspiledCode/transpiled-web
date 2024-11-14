import React from 'react';
import styled from '@emotion/styled';
import NavBar from './NavBar';

const HeaderWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.poppins};
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

const Header = () => {
  const links = [
    { url: '/', label: 'Home' },
    { url: '/', label: 'Services' },
    { url: '/', label: 'Testimonials' },
    { url: '/', label: 'Contact' },
    { url: '/', label: 'About' },
  ];
  return (
    <HeaderWrapper>
      <StyledLogo links={'Home'}>Transpiled</StyledLogo>
      <NavWrapper>
        <NavBar links={links} />
      </NavWrapper>
    </HeaderWrapper>
  );
};

export default Header;
