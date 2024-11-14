import React, { useContext, memo } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import GlobalContext from 'context/GlobalContext';

const MobileNavMenu = ({ links }) => {
  const { menuOpen, toggleMenu } = useContext(GlobalContext);

  if (!menuOpen) return null;

  return (
    <StyledMobileNav aria-hidden={!menuOpen}>
      {links.map(({ url, label }) => (
        <StyledLink key={url} to={url} onClick={toggleMenu}>
          {label}
        </StyledLink>
      ))}
    </StyledMobileNav>
  );
};

MobileNavMenu.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default memo(MobileNavMenu);

// Styled Components
const StyledMobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  background-color: ${({ theme }) => theme.colors.black};
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndices.mobileNavOverlay};
  transition:
    opacity 0.3s ease,
    visibility 0.3s ease;
  opacity: ${({ ariaHidden }) => (ariaHidden ? 0 : 1)};
  visibility: ${({ ariaHidden }) => (ariaHidden ? 'hidden' : 'visible')};
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  position: relative;
  font-size: 4rem;
`;
