// NavMenu.jsx
import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { GlobalContext } from '../context/GlobalContext';
import Icon from './Icon';

import NavLinks from './NavLinks';

// Styled component for the navigation menu
const StyledNavMenu = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  font-size: 4rem;
  z-index: 1000;

  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;

  @media (min-width: 768px) {
    display: none;
  }
`;

// Styled component for the close button
const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  padding: 10px;
  outline: none;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #ccc;
  }

  &:focus {
    outline: 2px solid #fff;
  }
`;

const NavMenu = () => {
  const { menuOpen, setMenuOpen } = useContext(GlobalContext);

  return (
    <StyledNavMenu open={menuOpen} aria-hidden={!menuOpen}>
      <CloseButton
        onClick={() => setMenuOpen(false)}
        aria-label='Close Navigation Menu'
      >
        <Icon iconName='times' iconType='solid' size='2x' label='Close Menu' />
      </CloseButton>

      <NavLinks onLinkClick={() => setMenuOpen(false)} />
    </StyledNavMenu>
  );
};

export default NavMenu;
