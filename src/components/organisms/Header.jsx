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
`;

const StyledLogo = styled.div`
  font-weight: Bold;
  font-size: 30px;
`;

const StyledNav = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-size: 12px;
    margin: 0;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <StyledLogo>Transpiled</StyledLogo>
      <StyledNav>Services</StyledNav>
    </HeaderWrapper>
  );
};

export default Header;
