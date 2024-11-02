import React from 'react';
import styled from '@emotion/styled';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  font-family: 'poppins', sans-serif;
  border: 1px solid #214eea;
  background: #214eea;
  height: 84px;
  padding-bottom: 100px;
`;

const StyledLogo = styled.div`
  font-weight: Bold;
  font-size: 30px;
  padding-left: 20px;
`;

const StyledNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-size: 12px;
  padding-top: 35px;
  masrgin: 0;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <StyledLogo>Transpiled</StyledLogo>
      <StyledNav>Services</StyledNav>
      <StyledNav>Testimonials</StyledNav>
      <StyledNav>Contact</StyledNav>
      <StyledNav>About</StyledNav>
    </HeaderWrapper>
  );
};

export default Header;
