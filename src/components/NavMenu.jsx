import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Icon from './Icon';

const FullScreenMenu = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.95);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;

  @media (max-width: 768px) {
    transform: ${(props) =>
      props.show ? 'translateX(0)' : 'translateX(-100%)'};
  }
`;

const MenuLink = styled.a`
  color: white;
  font-family: 'Ubuntu', sans-serif;
  /* letter-spacing: 2px; */
  font-size: 4rem;
  padding: 20px;
  cursor: pointer;

  &:hover {
    text-decoration: none;
    color: ${(props) => props.theme.accentColor};
  }
`;

const CloseIcon = styled.div`
  color: #ffffff;
  font-size: 3rem;
  cursor: pointer;
  position: absolute;
  top: 25px;
  right: 20px;
  background-color: ${(props) => props.theme.secondaryColor};
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  &:hover {
    color: #658354;
  }
`;
const NavMenu = ({ isMenuOpen, closeMenu, sections }) => (
  <FullScreenMenu show={isMenuOpen}>
    <CloseIcon>
      <Icon onClick={closeMenu} iconName='times' iconType='solid' />
    </CloseIcon>
    {sections.map((section) => (
      <MenuLink key={section.id} onClick={closeMenu} href={section.link}>
        {section.label}
      </MenuLink>
    ))}
  </FullScreenMenu>
);

// Define PropTypes
NavMenu.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  closeMenu: PropTypes.func.isRequired,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      label: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default NavMenu;
