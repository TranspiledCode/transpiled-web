import React, { useContext, memo } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import GlobalContext from 'context/GlobalContext';

const StyledMobileNav = styled.nav`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndices.mobileNavOverlay};
  transition:
    opacity 0.3s ease,
    visibility 0.3s ease;
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-weight: 400;
  font-size: clamp(2rem, 2vw, 2.4rem);
  letter-spacing: -0.015em;
  position: relative;
`;

const BgOverlay = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  height: 100%;
  width: 100%;
  content: '';
  top: 0;
  left: 0;
  position: fixed;
  z-index: -1;
  transform: scaleY(${({ isOpen }) => (isOpen ? '1' : '0')});
  transform-origin: top;
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transition:
    transform 0.3s ease,
    visibility 0.3s ease;
`;

const MobileNavMenu = ({ links }) => {
  const { menuOpen, toggleMenu } = useContext(GlobalContext);

  return (
    <>
      <StyledMobileNav isOpen={menuOpen} aria-hidden={!menuOpen}>
        {links.map(({ url, label }) => (
          <StyledLink
            key={url}
            to={url}
            onClick={toggleMenu}
            aria-label={label}
          >
            {label}
          </StyledLink>
        ))}
      </StyledMobileNav>
      <BgOverlay
        isOpen={menuOpen}
        aria-hidden={true}
        aria-label="menu background overlay"
      ></BgOverlay>
    </>
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
